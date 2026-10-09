/**
 * UTN FRRO - Guía de Campus Interactivo
 * Universitarios por la Libertad (UPL)
 * Mobile-First Interactive Wayfinding Application Logic
 */

// Import data from data.js
import { floorData, departmentDirectory } from './data.js';

// Application State
const state = {
  activeFloor: 0, // 0 = PB, -1 = SS, 1..5
  currentView: 'floor', // 'floor', 'building', 'directory', 'info', 'aulas'
  zoomScale: 1.0,
  activeRoomName: null,
  activeCategoryFilter: 'todos',
  searchQuery: '',
  drawerData: null,
  isDrawerOpen: false
};

// --- DOM References ---
const dom = {
  // Views
  views: {
    floor: document.getElementById('view-floor'),
    building: document.getElementById('view-building'),
    directory: document.getElementById('view-directory'),
    info: document.getElementById('view-info'),
    aulas: document.getElementById('view-aulas')
  },
  // Navigation
  navButtons: document.querySelectorAll('.nav-item'),
  floorScrubberTrack: document.getElementById('floor-scrubber-track'),
  // Floor Map elements
  currentFloorBadge: document.getElementById('current-floor-badge'),
  currentFloorTitle: document.getElementById('current-floor-title'),
  currentFloorSubtitle: document.getElementById('current-floor-subtitle'),
  svgMapWrapper: document.getElementById('svg-map-wrapper'),
  // Map Tools
  zoomInBtn: document.getElementById('btn-zoom-in'),
  zoomOutBtn: document.getElementById('btn-zoom-out'),
  zoomResetBtn: document.getElementById('btn-zoom-reset'),
  // Search
  searchInput: document.getElementById('search-input'),
  searchClearBtn: document.getElementById('search-clear-btn'),
  searchResultsPopover: document.getElementById('search-results-popover'),
  quickChips: document.querySelectorAll('.chip-btn'),
  // Bottom Sheet Drawer
  drawerBackdrop: document.getElementById('drawer-backdrop'),
  detailDrawer: document.getElementById('detail-drawer'),
  drawerCategory: document.getElementById('drawer-category'),
  drawerFloorBadge: document.getElementById('drawer-floor-badge'),
  drawerTitle: document.getElementById('drawer-title'),
  drawerSubtitle: document.getElementById('drawer-subtitle'),
  drawerIcon: document.getElementById('drawer-icon'),
  drawerBody: document.getElementById('drawer-body'),
  drawerCloseBtn: document.getElementById('drawer-close-btn'),
  // Directory
  directoryList: document.getElementById('directory-list'),
  categoryTabs: document.querySelectorAll('.category-tab'),
  // Building Stack
  buildingStack: document.getElementById('building-stack'),
  // Toast
  toastNotice: document.getElementById('toast-notice'),
  toastText: document.getElementById('toast-text')
};

// --- Helpers & Text Normalization ---
function normalizeStr(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// --- Live Schedule Status Calculator (Rosario Local Time) ---
function getOfficeStatus(dept) {
  if (!dept || !dept.sections) return null;

  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
  const hour = now.getHours() + (now.getMinutes() / 60);

  // Check sections for active schedules
  for (const section of dept.sections) {
    if (!section.schedules) continue;
    for (const sched of section.schedules) {
      const daysText = normalizeStr(sched.days);

      // Check if day matches
      let isToday = false;
      if (daysText.includes('lunes a viernes') && day >= 1 && day <= 5) isToday = true;
      else if (daysText.includes('lunes a jueves') && day >= 1 && day <= 4) isToday = true;
      else if (daysText.includes('jueves') && day === 4) isToday = true;
      else if (daysText.includes('lunes') && day === 1) isToday = true;

      if (!isToday) continue;

      // Special 24/7 or full-day labs
      if (sched.hours.includes('07:00 a 23:50')) {
        if (hour >= 7 && hour <= 23.83) return { open: true, text: 'Abierto hasta 23:50 hs' };
      }

      // Check 9:00 a 12:00 y 17:00 a 20:00 (Alumnado)
      if (sched.hours.includes('09:00 a 12:00') && hour >= 9 && hour < 12) {
        return { open: true, text: 'Abierto (Mañana)' };
      }
      if (sched.hours.includes('17:00 a 20:00') && hour >= 17 && hour < 20) {
        return { open: true, text: 'Abierto (Tarde)' };
      }

      // Check 09:00 a 13:00 y 15:00 a 20:00 (SAU)
      if (sched.hours.includes('09:00 a 13:00') && hour >= 9 && hour < 13) {
        return { open: true, text: 'Abierto (Turno Mañana)' };
      }
      if (sched.hours.includes('15:00 a 20:00') && hour >= 15 && hour < 20) {
        return { open: true, text: 'Abierto (Turno Tarde)' };
      }

      // Títulos Jueves 16:00 a 19:30
      if (sched.hours.includes('16:00 a 19:30') && hour >= 16 && hour < 19.5) {
        return { open: true, text: 'Ventanilla abierta' };
      }

      // Legajos 14:00 a 19:00
      if (sched.hours.includes('14:00 a 19:00') && hour >= 14 && hour < 19) {
        return { open: true, text: 'Abierto' };
      }
    }
  }

  // If outside business hours or weekend
  if (day === 0 || day === 6) {
    return { open: false, text: 'Cerrado (Fin de semana)' };
  }
  return { open: false, text: 'Cerrado ahora' };
}

// --- Map View Management ---
function renderFloorMap(floorNum, highlightRoom = null) {
  state.activeFloor = floorNum;
  const floor = floorData[floorNum.toString()];
  if (!floor) return;

  // Header meta updates
  dom.currentFloorBadge.textContent = floor.badge;
  dom.currentFloorTitle.textContent = floor.title;
  dom.currentFloorSubtitle.textContent = floor.subtitle;

  // Scrubber pill highlights
  document.querySelectorAll('.floor-scrub-pill').forEach(pill => {
    const f = parseInt(pill.getAttribute('data-floor'), 10);
    if (f === floorNum) {
      pill.classList.add('active');
      pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      pill.classList.remove('active');
    }
  });

  // Vector SVG Mode
  dom.svgMapWrapper.innerHTML = floor.svg;
  state.zoomScale = 1.0;
  applyZoom();

  // Attach interactive click listeners to all room elements in the SVG
  const rooms = dom.svgMapWrapper.querySelectorAll('.blueprint-room');
  rooms.forEach(room => {
    // Read room metadata from inline onclick attribute or data attributes
    const onclickStr = room.getAttribute('onclick') || '';
    let name = '';
    let desc = '';
    
    // Parse selectRoom('Name', 'Desc') from legacy attributes
    const match = onclickStr.match(/selectRoom\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\)/);
    if (match) {
      name = match[1];
      desc = match[2];
    } else {
      // Fallback from text label inside
      const label = room.querySelector('text');
      if (label) name = label.textContent.trim();
    }

    // Set accessible role and clean event handler
    room.removeAttribute('onclick');
    room.setAttribute('role', 'button');
    room.setAttribute('tabindex', '0');
    room.setAttribute('data-room-name', name);
    room.setAttribute('data-room-desc', desc);

    room.addEventListener('click', (e) => {
      e.stopPropagation();
      handleRoomSelect(name, desc, floorNum, room);
    });

    room.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleRoomSelect(name, desc, floorNum, room);
      }
    });

    // Check if this room should be highlighted
    if (highlightRoom && normalizeStr(name).includes(normalizeStr(highlightRoom))) {
      room.classList.add('room-active-highlight');
      setTimeout(() => {
        room.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  });
}

function handleRoomSelect(name, desc, floorNum, roomElement = null) {
  // Clear previous highlights
  dom.svgMapWrapper.querySelectorAll('.room-active-highlight').forEach(el => {
    el.classList.remove('room-active-highlight');
  });

  if (roomElement) {
    roomElement.classList.add('room-active-highlight');
  }

  // Check if this room maps to a structured department
  const matchingDept = findMatchingDepartment(name);
  if (matchingDept) {
    openDrawer(matchingDept);
  } else {
    // Create room info object
    const roomInfo = {
      title: name,
      subtitle: `Nivel ${getFloorBadge(floorNum)} · UTN FRRO`,
      category: categorizeRoom(name),
      floor: floorNum,
      floorBadge: getFloorBadge(floorNum),
      notes: desc || 'Espacio físico dentro de la Facultad Regional Rosario.',
      icon: getRoomIcon(name)
    };
    openDrawer(roomInfo);
  }
}

function getFloorBadge(floorNum) {
  if (floorNum === 0) return 'PB';
  if (floorNum === -1) return 'SS';
  return `${floorNum}°`;
}

function categorizeRoom(name) {
  const n = normalizeStr(name);
  if (n.includes('aula')) return 'Aulas y Cursado';
  if (n.includes('lab') || n.includes('laboratorio')) return 'Laboratorios';
  if (n.includes('depto') || n.includes('departamento')) return 'Dirección de Carrera';
  if (n.includes('bedelia')) return 'Gestión y Bedelía';
  if (n.includes('bar') || n.includes('cantina') || n.includes('kiosco')) return 'Servicios y Comedor';
  if (n.includes('ascensor') || n.includes('escalera')) return 'Circulación Vertical';
  if (n.includes('bano') || n.includes('sanitario')) return 'Sanitarios';
  if (n.includes('biblioteca') || n.includes('sum')) return 'Biblioteca y Estudio';
  if (n.includes('alumn') || n.includes('sau') || n.includes('secyt')) return 'Trámites Estudiantiles';
  return 'Instalación de Campus';
}

function getRoomIcon(name) {
  const n = normalizeStr(name);
  if (n.includes('aula')) return 'fa-solid fa-chalkboard-user';
  if (n.includes('lab') || n.includes('laboratorio')) return 'fa-solid fa-flask-vial';
  if (n.includes('bar') || n.includes('cantina')) return 'fa-solid fa-mug-hot';
  if (n.includes('kiosco')) return 'fa-solid fa-store';
  if (n.includes('fotocop')) return 'fa-solid fa-print';
  if (n.includes('biblioteca')) return 'fa-solid fa-book-open';
  if (n.includes('ascensor')) return 'fa-solid fa-elevator';
  if (n.includes('escalera')) return 'fa-solid fa-stairs';
  if (n.includes('bano')) return 'fa-solid fa-restroom';
  if (n.includes('bedelia')) return 'fa-solid fa-clipboard-user';
  if (n.includes('alumn')) return 'fa-solid fa-id-card';
  if (n.includes('sau')) return 'fa-solid fa-graduation-cap';
  return 'fa-solid fa-location-dot';
}

function findMatchingDepartment(name) {
  const norm = normalizeStr(name);
  return departmentDirectory.find(d => {
    if (normalizeStr(d.title).includes(norm) || norm.includes(normalizeStr(d.title))) return true;
    if (d.aliases && d.aliases.some(a => norm.includes(normalizeStr(a)) || normalizeStr(a).includes(norm))) return true;
    return false;
  });
}

// --- Zoom & Pan Engine ---
function applyZoom() {
  const svg = dom.svgMapWrapper.querySelector('.blueprint-svg');
  if (svg) {
    svg.style.transform = `scale(${state.zoomScale})`;
  }
}

function zoomIn() {
  state.zoomScale = Math.min(state.zoomScale + 0.25, 2.8);
  applyZoom();
}

function zoomOut() {
  state.zoomScale = Math.max(state.zoomScale - 0.25, 0.75);
  applyZoom();
}

function zoomReset() {
  state.zoomScale = 1.0;
  applyZoom();
}

// --- Bottom Sheet / Detail Drawer Engine ---
function openDrawer(data) {
  state.drawerData = data;
  state.isDrawerOpen = true;

  dom.drawerCategory.textContent = data.category || 'Espacio';
  dom.drawerFloorBadge.textContent = data.floorBadge ? `${data.floorBadge} Piso` : (data.floor !== undefined ? `${getFloorBadge(data.floor)} Piso` : '');
  dom.drawerTitle.textContent = data.title;
  dom.drawerSubtitle.textContent = data.subtitle || data.floorName || '';
  
  // Icon styling
  dom.drawerIcon.className = `fa-solid ${data.icon || 'fa-location-dot'}`;

  // Build drawer body
  let bodyHtml = '';

  // 1. Live status indicator if schedules exist
  const status = getOfficeStatus(data);
  if (status) {
    bodyHtml += `
      <div class="drawer-info-block" style="flex-direction:row; justify-content:space-between; align-items:center;">
        <span class="drawer-info-label"><i class="fa-solid fa-clock"></i> Horario de Atención</span>
        <span class="status-pill ${status.open ? 'open' : 'closed'}">
          <span class="status-dot"></span>
          ${escapeHtml(status.text)}
        </span>
      </div>
    `;
  }

  // 2. Sections (sub-offices, hours, detailed notes)
  if (data.sections && data.sections.length > 0) {
    data.sections.forEach(sec => {
      bodyHtml += `
        <div class="drawer-info-block">
          <div style="font-size:13.5px; font-weight:700; color:#ffffff; margin-bottom:4px;">
            ${escapeHtml(sec.title)}
          </div>
          ${sec.schedules ? `
            <div style="font-size:12px; color:#cbd5e1; margin-bottom:4px;">
              ${sec.schedules.map(s => `
                <div style="display:flex; justify-content:space-between; gap:8px; padding:2px 0;">
                  <strong style="color:#93c5fd;">${escapeHtml(s.days)}:</strong>
                  <span class="tabular-nums">${escapeHtml(s.hours)}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
          ${sec.email ? `
            <div style="margin-top:6px;">
              <button class="btn-action primary" style="height:36px; min-height:36px; width:100%; font-size:12px;" onclick="window.copyEmailText('${sec.email}')">
                <i class="fa-solid fa-envelope"></i>
                <span class="tabular-nums">${escapeHtml(sec.email)}</span>
                <i class="fa-regular fa-copy" style="margin-left:auto; font-size:11px; opacity:0.8;"></i>
              </button>
            </div>
          ` : ''}
          ${sec.notes ? `
            <p style="font-size:11.5px; color:#94a3b8; margin-top:6px; line-height:1.4;">
              ${escapeHtml(sec.notes)}
            </p>
          ` : ''}
        </div>
      `;
    });
  } else {
    // Simple notes for standalone room
    if (data.notes) {
      bodyHtml += `
        <div class="drawer-info-block">
          <span class="drawer-info-label"><i class="fa-solid fa-circle-info"></i> Información del Espacio</span>
          <p class="drawer-info-value">${escapeHtml(data.notes)}</p>
        </div>
      `;
    }
  }

  // 3. Location / Address
  if (data.address || data.floorName) {
    bodyHtml += `
      <div class="drawer-info-block">
        <span class="drawer-info-label"><i class="fa-solid fa-map-pin"></i> Ubicación en Sede Central</span>
        <p class="drawer-info-value">${escapeHtml(data.address || data.floorName)}</p>
      </div>
    `;
  }

  // 4. Quick Action Buttons: Call, Email, View on Map
  bodyHtml += `<div class="drawer-actions-row">`;
  
  if (data.floor !== undefined) {
    bodyHtml += `
      <button class="btn-action accent" onclick="window.jumpToFloorAndHighlight(${data.floor}, '${escapeHtml(data.title)}')">
        <i class="fa-solid fa-map-location-dot"></i>
        <span>Ver en Plano</span>
      </button>
    `;
  }

  if (data.phone) {
    bodyHtml += `
      <a class="btn-action primary" href="tel:${data.phone.replace(/[^0-9]/g, '')}">
        <i class="fa-solid fa-phone"></i>
        <span>Llamar</span>
      </a>
    `;
  }

  bodyHtml += `</div>`;

  dom.drawerBody.innerHTML = bodyHtml;

  // Animate drawer open
  dom.drawerBackdrop.classList.add('open');
  dom.detailDrawer.classList.add('open');
}

function closeDrawer() {
  state.isDrawerOpen = false;
  state.drawerData = null;
  dom.drawerBackdrop.classList.remove('open');
  dom.detailDrawer.classList.remove('open');
}

// Global window methods for inline actions
window.copyEmailText = function(email) {
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Copiado: ${email}`);
  }).catch(() => {
    showToast(`Correo: ${email}`);
  });
};

window.jumpToFloorAndHighlight = function(floorNum, roomTitle) {
  closeDrawer();
  switchView('floor');
  renderFloorMap(floorNum, roomTitle);
};

// --- Toast Feedback ---
let toastTimer = null;
function showToast(message) {
  dom.toastText.textContent = message;
  dom.toastNotice.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    dom.toastNotice.classList.remove('show');
  }, 2200);
}

// --- Smart Search Engine ---
function buildSearchIndex() {
  const index = [];

  // Index department entries
  departmentDirectory.forEach(dept => {
    index.push({
      type: 'dept',
      title: dept.title,
      subtitle: dept.subtitle || dept.category,
      category: dept.category,
      floor: dept.floor,
      data: dept,
      keywords: [dept.title, ...(dept.aliases || []), dept.category, dept.floorName || ''].join(' ')
    });

    if (dept.sections) {
      dept.sections.forEach(sec => {
        index.push({
          type: 'dept',
          title: sec.title,
          subtitle: dept.title,
          category: dept.category,
          floor: dept.floor,
          data: dept,
          keywords: [sec.title, dept.title, sec.email || '', sec.notes || ''].join(' ')
        });
      });
    }
  });

  // Index all rooms in blueprints
  for (const [fKey, fData] of Object.entries(floorData)) {
    const fNum = parseInt(fKey, 10);
    // Parse rooms from SVG string
    const matches = fData.svg.matchAll(/selectRoom\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\)/g);
    for (const m of matches) {
      const roomName = m[1];
      const roomDesc = m[2];
      index.push({
        type: 'room',
        title: roomName,
        subtitle: `${fData.title} · ${roomDesc}`,
        category: categorizeRoom(roomName),
        floor: fNum,
        data: {
          title: roomName,
          subtitle: `${fData.title} · UTN FRRO`,
          category: categorizeRoom(roomName),
          floor: fNum,
          floorBadge: fData.badge,
          notes: roomDesc,
          icon: getRoomIcon(roomName)
        },
        keywords: `${roomName} ${roomDesc} ${fData.title} piso ${fNum}`
      });
    }
  }

  return index;
}

const campusSearchIndex = buildSearchIndex();

function handleSearch(query) {
  const q = normalizeStr(query);
  state.searchQuery = q;

  if (!q) {
    dom.searchResultsPopover.classList.remove('open');
    dom.searchResultsPopover.innerHTML = '';
    dom.searchClearBtn.style.display = 'none';
    return;
  }

  dom.searchClearBtn.style.display = 'flex';

  // Filter & score matches
  const results = campusSearchIndex.filter(item => {
    const normKw = normalizeStr(item.keywords);
    return normKw.includes(q);
  }).slice(0, 8); // Top 8 results

  if (results.length === 0) {
    dom.searchResultsPopover.innerHTML = `
      <div style="padding:18px 14px; text-align:center; color:#94a3b8; font-size:13px;">
        <i class="fa-solid fa-magnifying-glass" style="margin-bottom:6px; font-size:18px; opacity:0.6;"></i>
        <div>No se encontraron coincidencias para "<strong>${escapeHtml(query)}</strong>"</div>
        <div style="font-size:11.5px; margin-top:4px; color:#64748b;">Probá buscando: Alumnado, Cantina, Lab Sistemas, Bedelía...</div>
      </div>
    `;
    dom.searchResultsPopover.classList.add('open');
    return;
  }

  let html = `<div class="search-section-header">Resultados en Campus</div>`;
  results.forEach(res => {
    html += `
      <div class="search-item" data-type="${res.type}" data-floor="${res.floor}">
        <div class="search-item-badge">
          ${res.floor !== undefined ? getFloorBadge(res.floor) : 'UTN'}
        </div>
        <div class="search-item-info">
          <div class="search-item-title">${escapeHtml(res.title)}</div>
          <div class="search-item-subtitle">${escapeHtml(res.subtitle)}</div>
        </div>
        <i class="fa-solid fa-chevron-right" style="font-size:10px; color:#64748b;"></i>
      </div>
    `;
  });

  dom.searchResultsPopover.innerHTML = html;
  dom.searchResultsPopover.classList.add('open');

  // Attach click listener to search items
  dom.searchResultsPopover.querySelectorAll('.search-item').forEach((itemEl, idx) => {
    itemEl.addEventListener('click', () => {
      const match = results[idx];
      dom.searchResultsPopover.classList.remove('open');
      dom.searchInput.value = '';
      dom.searchClearBtn.style.display = 'none';

      if (match.floor !== undefined) {
        switchView('floor');
        renderFloorMap(match.floor, match.title);
      }
      openDrawer(match.data);
    });
  });
}

// --- Building 3D Facade View Engine ---
function renderBuildingView() {
  const slabs = [
    { floor: 5, badge: '5°', title: 'Depto. Ing. Sistemas de Información', tag: 'ISI', landmarks: 'Lab Sistemas (7:00 a 23:50 hs) · ISI Investiga', icon: 'fa-solid fa-laptop-code' },
    { floor: 4, badge: '4°', title: 'Depto. Ingeniería Civil & Básicas', tag: 'PAE', landmarks: 'Auditorio 4° Piso · Lab Física · Tutorías PAE', icon: 'fa-solid fa-compass-drafting' },
    { floor: 3, badge: '3°', title: 'Depto. Ingeniería Química', tag: 'IQ', landmarks: 'Lab Química General · Sala Informática 3P', icon: 'fa-solid fa-flask-vial' },
    { floor: 2, badge: '2°', title: 'Depto. Ingeniería Mecánica & Cantina', tag: 'MEC', landmarks: 'Cantina 2° Piso · Bedelía Mecánica · Aulas 2P', icon: 'fa-solid fa-gears' },
    { floor: 1, badge: '1°', title: 'Secretaría Asuntos Universitarios (SAU)', tag: 'SAU', landmarks: 'Becas · Pasantías · Kiosco 1P · Aulas 1P', icon: 'fa-solid fa-graduation-cap' },
    { floor: 0, badge: 'PB', title: 'Planta Baja / Hall Central', tag: 'CENTRAL', landmarks: 'Alumnado · Fotocopiadora · Biblioteca/SUM · Bar', icon: 'fa-solid fa-landmark' },
    { floor: -1, badge: 'SS', title: 'Depto. Ing. en Energía Eléctrica', tag: 'EE', landmarks: 'Salón de Actos · Lab Eléctrica & Electrónica · Bedelía', icon: 'fa-solid fa-bolt' }
  ];

  let html = '';
  slabs.forEach(s => {
    html += `
      <div class="building-slab" data-floor="${s.floor}">
        <div class="slab-left">
          <div class="slab-badge">${s.badge}</div>
          <div class="slab-details">
            <div class="slab-title">
              <span>${escapeHtml(s.title)}</span>
              <span class="slab-tag">${s.tag}</span>
            </div>
            <div class="slab-landmarks">
              <i class="${s.icon}" style="color:#a855f7; margin-right:4px;"></i>
              ${escapeHtml(s.landmarks)}
            </div>
          </div>
        </div>
        <div class="slab-arrow">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    `;
  });

  dom.buildingStack.innerHTML = html;

  dom.buildingStack.querySelectorAll('.building-slab').forEach(slabEl => {
    slabEl.addEventListener('click', () => {
      const fNum = parseInt(slabEl.getAttribute('data-floor'), 10);
      switchView('floor');
      renderFloorMap(fNum);
    });
  });
}

// --- Directory View Engine ---
function renderDirectoryView(categoryFilter = 'todos') {
  let list = departmentDirectory;

  if (categoryFilter !== 'todos') {
    list = list.filter(d => {
      const cat = normalizeStr(d.category);
      if (categoryFilter === 'estudiantil') return cat.includes('estudiantil') || cat.includes('alumn');
      if (categoryFilter === 'academicos') return cat.includes('departamento') || cat.includes('carrera');
      if (categoryFilter === 'secretarias') return cat.includes('secretaria');
      if (categoryFilter === 'servicios') return cat.includes('servicios') || cat.includes('bedelia');
      return true;
    });
  }

  let html = '';
  list.forEach(dept => {
    const status = getOfficeStatus(dept);

    html += `
      <div class="dept-card" data-id="${dept.id}">
        <div class="dept-card-header">
          <div class="dept-card-brand">
            <div class="dept-card-icon">
              <i class="${dept.icon || 'fa-solid fa-building'}"></i>
            </div>
            <div>
              <div class="dept-card-title">${escapeHtml(dept.title)}</div>
              <div class="dept-card-subtitle">${escapeHtml(dept.subtitle || dept.category)}</div>
            </div>
          </div>
          <div class="dept-card-floor-pill">
            ${dept.floorBadge ? `${dept.floorBadge} Piso` : (dept.floor !== undefined ? `${getFloorBadge(dept.floor)} Piso` : '')}
          </div>
        </div>

        <div class="dept-card-meta">
          ${status ? `
            <span class="status-pill ${status.open ? 'open' : 'closed'}">
              <span class="status-dot"></span>
              ${escapeHtml(status.text)}
            </span>
          ` : ''}
          ${dept.phone ? `
            <span class="dept-card-meta-item">
              <i class="fa-solid fa-phone" style="font-size:10px;"></i>
              ${escapeHtml(dept.phone)}
            </span>
          ` : ''}
          ${dept.address ? `
            <span class="dept-card-meta-item">
              <i class="fa-solid fa-location-dot" style="font-size:10px;"></i>
              ${escapeHtml(dept.address)}
            </span>
          ` : ''}
        </div>
      </div>
    `;
  });

  dom.directoryList.innerHTML = html;

  dom.directoryList.querySelectorAll('.dept-card').forEach((cardEl, idx) => {
    cardEl.addEventListener('click', () => {
      openDrawer(list[idx]);
    });
  });
}

// --- Distribución de Aulas View ---
const aulasDistData = {
  manana: [
    {
      carrera: 'ISI',
      rows: [
        { comision: '1°01', aula: '303' },
        { comision: '1°02', aula: 'SUM' },
        { comision: '1°03', aula: '211' },
        { comision: '1°04', aula: '210' },
        { comision: '1°05', aula: '217' },
        { comision: '1°06', aula: '405' },
        { comision: '1°07', aula: '308' },
        { comision: '1°08', aula: '309' },
        { comision: '1°09', aula: '410' },
        { comision: '2°01', aula: '219' },
        { comision: '2°02', aula: '202' },
        { comision: '2°03', aula: '109' },
        { comision: '2°04', aula: '204' },
        { comision: '2°05', aula: '201' },
        { comision: '3°01', aula: '212' },
        { comision: '3°02', aula: '111' },
        { comision: '3°03', aula: '401' },
        { comision: '4°01', aula: '213' },
        { comision: '4°02', aula: '501' },
        { comision: '5°01', aula: '402' },
      ]
    },
    {
      carrera: 'IQ',
      rows: [
        { comision: '1°01', aula: 'ANFI' },
        { comision: '2°01', aula: '301' },
      ]
    }
  ],
  tarde: [
    {
      carrera: 'ISI',
      rows: [
        { comision: '1°10', aula: '308' },
        { comision: '1°11', aula: '211' },
        { comision: '1°12', aula: '309' },
        { comision: '2°06', aula: '210' },
        { comision: '2°07', aula: '410' },
        { comision: '3°04', aula: '202' },
        { comision: '4°03', aula: '501' },
        { comision: '5°02', aula: '213' },
      ]
    },
    {
      carrera: 'IQ',
      rows: [
        { comision: '1°02', aula: '302' },
        { comision: '1°03', aula: '301' },
        { comision: '2°02', aula: '110' },
        { comision: '3°01', aula: '204' },
        { comision: '4°01', aula: '105' },
      ]
    },
    {
      carrera: 'IM',
      rows: [
        { comision: '1°01', aula: '201' },
        { comision: '1°02', aula: 'SUM' },
        { comision: '2°02', aula: '219' },
      ]
    },
    {
      carrera: 'IEE',
      rows: [
        { comision: '1°02', aula: '17' },
        { comision: '2°02', aula: '16' },
      ]
    },
    {
      carrera: 'IC',
      rows: [
        { comision: '1°02', aula: '405' },
        { comision: '1°03', aula: '109' },
        { comision: '2°02', aula: '401' },
        { comision: '3°02', aula: '403' },
      ]
    }
  ],
  noche: [
    {
      carrera: 'ISI',
      rows: [
        { comision: '1°13', aula: 'SUM' },
        { comision: '2°08', aula: '211' },
        { comision: '3°05', aula: '110' },
        { comision: '4°04', aula: '501' },
        { comision: '5°03', aula: '202' },
      ]
    },
    {
      carrera: 'IQ',
      rows: [
        { comision: '1°04', aula: '301' },
        { comision: '2°03', aula: '302' },
        { comision: '3°02', aula: '204' },
        { comision: '4°02', aula: '111' },
        { comision: '5°01', aula: '105' },
      ]
    },
    {
      carrera: 'IM',
      rows: [
        { comision: '1°03', aula: '308' },
        { comision: '2°01', aula: '216' },
        { comision: '3°01', aula: '212' },
        { comision: '4°01', aula: '213' },
        { comision: '5°01', aula: '215' },
        { comision: '5°01T', aula: '215' },
      ]
    },
    {
      carrera: 'IEE',
      rows: [
        { comision: '1°01', aula: '17' },
        { comision: '2°01', aula: '14' },
        { comision: '3°01', aula: '13' },
        { comision: '4°01', aula: '16' },
        { comision: '5°01', aula: '12' },
        { comision: '5°02', aula: '15' },
      ]
    },
    {
      carrera: 'IC',
      rows: [
        { comision: '1°01', aula: '405' },
        { comision: '2°01', aula: '402' },
        { comision: '3°01', aula: '403' },
        { comision: '4°01', aula: '401' },
        { comision: '5°01', aula: '410' },
        { comision: '6°01', aula: 'LAB' },
      ]
    }
  ]
};

const aulasCarreraColors = {
  ISI: { bg: 'rgba(139,68,212,0.18)', border: 'rgba(168,85,247,0.45)', text: '#c084fc' },
  IQ:  { bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.4)', text: '#38bdf8' },
  IM:  { bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.4)', text: '#34d399' },
  IEE: { bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.4)', text: '#fbbf24' },
  IC:  { bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.4)', text: '#f87171' },
};

function renderAulasView() {
  const turnos = ['manana', 'tarde', 'noche'];
  turnos.forEach(turno => {
    const panel = document.getElementById(`aulas-panel-${turno}`);
    if (!panel) return;
    const grupos = aulasDistData[turno];
    let html = '';
    grupos.forEach(grupo => {
      const color = aulasCarreraColors[grupo.carrera] || { bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.2)', text: '#fff' };
      html += `
        <div class="aulas-carrera-block" style="--aulas-bg:${color.bg}; --aulas-border:${color.border}; --aulas-text:${color.text};">
          <div class="aulas-carrera-header">
            <span class="aulas-carrera-badge" style="color:${color.text}; border-color:${color.border};">${escapeHtml(grupo.carrera)}</span>
          </div>
          <div class="aulas-rows-grid">
            ${grupo.rows.map(r => `
              <div class="aulas-row">
                <span class="aulas-comision">${escapeHtml(r.comision)}</span>
                <span class="aulas-arrow"><i class="fa-solid fa-arrow-right"></i></span>
                <span class="aulas-aula">${escapeHtml(r.aula)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
    panel.innerHTML = html;
  });

  // Tab switching inside the view
  const tabs = document.querySelectorAll('.aulas-turno-tab');
  tabs.forEach(tab => {
    // Remove old listener by replacing node clone trick or use flag
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const turno = tab.getAttribute('data-turno');
      document.querySelectorAll('.aulas-turno-panel').forEach(p => p.classList.remove('active-panel'));
      document.getElementById(`aulas-panel-${turno}`).classList.add('active-panel');
    };
  });
}

// --- Navigation / View Switching ---
function switchView(viewName) {
  state.currentView = viewName;

  // Update view containers visibility
  Object.keys(dom.views).forEach(key => {
    if (key === viewName) {
      dom.views[key].classList.add('active-view');
    } else {
      dom.views[key].classList.remove('active-view');
    }
  });

  // Update bottom nav active state
  dom.navButtons.forEach(btn => {
    if (btn.getAttribute('data-view') === viewName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render specific view if needed
  if (viewName === 'floor') {
    renderFloorMap(state.activeFloor);
  } else if (viewName === 'building') {
    renderBuildingView();
  } else if (viewName === 'directory') {
    renderDirectoryView(state.activeCategoryFilter);
  } else if (viewName === 'aulas') {
    renderAulasView();
  }
}

// --- Initialize Event Listeners ---
function initEvents() {
  // Navigation tabs
  dom.navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      switchView(view);
    });
  });

  // Floor Scrubber Pills
  dom.floorScrubberTrack.querySelectorAll('.floor-scrub-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const fNum = parseInt(pill.getAttribute('data-floor'), 10);
      renderFloorMap(fNum);
    });
  });

  // Zoom controls
  dom.zoomInBtn.addEventListener('click', zoomIn);
  dom.zoomOutBtn.addEventListener('click', zoomOut);
  dom.zoomResetBtn.addEventListener('click', zoomReset);

  // Search input events
  dom.searchInput.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  dom.searchClearBtn.addEventListener('click', () => {
    dom.searchInput.value = '';
    handleSearch('');
    dom.searchInput.focus();
  });

  // Close search popover on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      dom.searchResultsPopover.classList.remove('open');
    }
  });

  // Quick Chips
  dom.quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const kw = chip.getAttribute('data-keyword');
      dom.searchInput.value = kw;
      handleSearch(kw);
    });
  });

  // Drawer Close
  dom.drawerCloseBtn.addEventListener('click', closeDrawer);
  dom.drawerBackdrop.addEventListener('click', closeDrawer);

  // Keyboard Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.isDrawerOpen) closeDrawer();
      dom.searchResultsPopover.classList.remove('open');
    }
  });

  // Directory Category Tabs
  dom.categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dom.categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      state.activeCategoryFilter = cat;
      renderDirectoryView(cat);
    });
  });

  // Drawer Swipe Down Gesture
  let touchStartY = 0;
  let touchMoveY = 0;
  dom.detailDrawer.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  dom.detailDrawer.addEventListener('touchmove', (e) => {
    touchMoveY = e.touches[0].clientY;
    const diff = touchMoveY - touchStartY;
    if (diff > 0) {
      dom.detailDrawer.style.transform = `translateY(${diff}px)`;
    }
  }, { passive: true });

  dom.detailDrawer.addEventListener('touchend', () => {
    const diff = touchMoveY - touchStartY;
    dom.detailDrawer.style.transform = '';
    if (diff > 90) {
      closeDrawer();
    }
  });
}

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initEvents();
  renderFloorMap(0); // Default to PB
  renderBuildingView();
  renderDirectoryView('todos');
});
