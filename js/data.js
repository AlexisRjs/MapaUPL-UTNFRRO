/**
 * UTN FRRO - Campus Interactive Map Data
 * Universitarios por la Libertad (UPL)
 * Structured data for all campus floors, blueprints, departments, and services.
 */

export const floorData = {
      '-1': {
        title: 'SUBSUELO',
        subtitle: 'Depto. Eléctrica, Laboratorios y Salón de Actos',
        badge: 'SS',
        svg: `
          <svg viewBox="0 0 500 680" class="blueprint-svg w-full h-auto max-h-[70vh] rounded-xl shadow-2xl">
            <!-- Background base -->
            <rect width="500" height="680" fill="#321650" />
            
            <!-- External Walls (White boundary lines) -->
            <rect x="20" y="30" width="460" height="600" fill="none" class="blueprint-line" stroke-width="3" />
            <line x1="20" y1="120" x2="480" y2="120" class="blueprint-line" />
            
            <!-- Top Section: Laboratorios & Bedelia -->
            <rect x="20" y="30" width="230" height="90" fill="#2d1348" class="blueprint-room" onclick="selectRoom('Laboratorios de Eléctrica', 'Ensayos de máquinas, mediciones y alta tensión.')" />
            <text x="135" y="80" class="room-label">Laboratorios</text>

            <rect x="250" y="30" width="230" height="90" fill="#2d1348" class="blueprint-room" onclick="selectRoom('Bedelía Subsuelo', 'Atención para cursado de Eléctrica y Electrónica.')" />
            <text x="365" y="80" class="room-label">Bedelía</text>
            <line x1="250" y1="30" x2="250" y2="120" class="blueprint-line" />

            <!-- Left Wing: Lab Electronica -->
            <rect x="20" y="120" width="180" height="420" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Laboratorio Electrónica', 'Instrumental osciloscopios, plaquetas y bancos de trabajo.')" />
            <line x1="200" y1="120" x2="200" y2="540" class="blueprint-line" />
            <text x="110" y="380" class="room-label">Laboratorio</text>
            <text x="110" y="400" class="room-label">Electrónica</text>

            <!-- Escaleras Centrales (Grid) -->
            <g class="blueprint-room" onclick="selectRoom('Escaleras Centrales', 'Conexión vertical entre Subsuelo y pisos superiores.')">
              <rect x="145" y="240" width="55" height="120" fill="#1e0c31" stroke="#ffffff" stroke-width="1.8" />
              <line x1="145" y1="270" x2="200" y2="270" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="300" x2="200" y2="300" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="330" x2="200" y2="330" stroke="#fff" stroke-width="1.2" />
              <line x1="172" y1="240" x2="172" y2="360" stroke="#fff" stroke-width="1.2" />
              <text x="172" y="305" class="room-label" style="font-size:11.5px;">Escaleras</text>
            </g>

            <!-- Hallway (Pasillo central) -->
            <path d="M 200,120 L 290,120 L 290,260 L 315,260 L 315,360 L 290,360 L 290,540 L 380,540 L 380,580 L 200,580 Z" fill="#321650" class="blueprint-dashed" />
            
            <!-- Right Wing: Depto Electrica, Ascensores, Lab Usos Multiples -->
            <rect x="290" y="120" width="190" height="130" fill="#291243" class="blueprint-room" onclick="selectRoom('Departamento Eléctrica', 'Oficinas docentes y dirección de cátedra.')" />
            <text x="385" y="170" class="room-label">Departamento</text>
            <text x="385" y="190" class="room-label">Eléctrica</text>

            <!-- Ascensores -->
            <rect x="290" y="260" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 1', 'Acceso directo a plantas altas')" />
            <rect x="290" y="310" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 2', 'Acceso directo a plantas altas')" />
            <text x="345" y="295" class="room-label" style="font-size:11.5px;">Ascensores</text>

            <!-- Lab Usos Multiples -->
            <rect x="290" y="360" width="190" height="80" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Laboratorio Usos Múltiples', 'Espacio para talleres y proyectos de ingeniería.')" />
            <text x="385" y="395" class="room-label">Laboratorio</text>
            <text x="385" y="415" class="room-label">usos múltiples</text>
            <line x1="290" y1="440" x2="380" y2="440" class="blueprint-line" />

            <!-- Salón de Actos (Corner) -->
            <rect x="380" y="440" width="100" height="190" fill="#3b1761" class="blueprint-room" onclick="selectRoom('Salón de Actos', 'Actos académicos, conferencias magistrales y colaciones.')" />
            <text x="430" y="525" class="room-label">Salón de</text>
            <text x="430" y="545" class="room-label">Actos</text>

            <!-- Bottom: Lab Informatica & Sala Fotocopiado -->
            <rect x="200" y="540" width="90" height="90" fill="#2d1348" class="blueprint-room" onclick="selectRoom('Laboratorio Informática', 'Computadoras para diseño y simulación.')" />
            <text x="245" y="575" class="room-label" style="font-size:12.5px;">Lab.</text>
            <text x="245" y="595" class="room-label" style="font-size:12.5px;">Informática</text>
            <line x1="290" y1="540" x2="290" y2="630" class="blueprint-line" />

            <rect x="290" y="540" width="90" height="90" fill="#2d1348" class="blueprint-room" onclick="selectRoom('Sala de Fotocopiado Subsuelo', 'Servicio de fotocopias e impresiones técnicas.')" />
            <text x="335" y="575" class="room-label" style="font-size:12.5px;">Sala de</text>
            <text x="335" y="595" class="room-label" style="font-size:12.5px;">Fotocopiado</text>
            <line x1="20" y1="540" x2="200" y2="540" class="blueprint-line" />
            <line x1="20" y1="630" x2="480" y2="630" class="blueprint-line" stroke-width="2.5" />

            <!-- Street banner -->
            <text x="250" y="660" class="room-label" style="fill:#d8b4fe; font-size:13.5px; font-weight:700;">CALLE ZEBALLOS</text>
          </svg>
        `
      },
      '0': {
        title: 'PLANTA BAJA',
        subtitle: 'Ingreso Zeballos, Biblioteca/SUM, Patio, Fotocopiadora, Bar',
        badge: 'PB',
        svg: `
          <svg viewBox="0 0 500 700" class="blueprint-svg w-full h-auto max-h-[70vh] rounded-xl shadow-2xl">
            <!-- Background base -->
            <rect width="500" height="700" fill="#321650" />
            
            <!-- Round Biblioteca / SUM in Patio -->
            <circle cx="250" cy="100" r="65" fill="#3e1766" stroke="#ffffff" stroke-width="2.5" class="blueprint-room" onclick="selectRoom('Biblioteca/SUM', 'Espacio de estudio silencioso y préstamos bibliográficos.')" />
            <text x="250" y="105" class="room-label" style="font-size:14.5px;">Biblioteca/SUM</text>
            <text x="250" y="185" class="room-label" style="fill:#a855f7; font-weight:700; font-size:13.5px;">Patio</text>

            <!-- Outer Building Walls -->
            <line x1="25" y1="210" x2="205" y2="210" class="blueprint-line" stroke-width="3" />
            <line x1="295" y1="210" x2="475" y2="210" class="blueprint-line" stroke-width="3" />
            <line x1="25" y1="210" x2="25" y2="640" class="blueprint-line" stroke-width="3" />
            <line x1="475" y1="210" x2="475" y2="640" class="blueprint-line" stroke-width="3" />
            <line x1="25" y1="640" x2="475" y2="640" class="blueprint-line" stroke-width="3" />

            <!-- Top PB Left: Alumnado -->
            <rect x="25" y="210" width="180" height="65" fill="#291143" class="blueprint-room" onclick="selectRoom('Alumnado', 'Trámites de inscripciones, certificados y legajos.')" />
            <text x="115" y="248" class="room-label">Alumnado</text>
            <line x1="25" y1="275" x2="205" y2="275" class="blueprint-line" />

            <!-- Top PB Right: Sector Norte (sin texto de aulas, fiel al plano) -->
            <rect x="295" y="210" width="180" height="65" fill="#230e38" class="blueprint-room" />
            <line x1="295" y1="275" x2="475" y2="275" class="blueprint-line" />

            <!-- Pasillo Horizontal Transversal -->
            <rect x="25" y="275" width="450" height="45" fill="#1b0a2c" />
            <line x1="25" y1="297" x2="475" y2="297" class="blueprint-dashed" />
            <text x="115" y="302" class="sub-label" style="fill:#d8b4fe; font-size:12px; font-weight:700;">Pasillo</text>
            <text x="385" y="302" class="sub-label" style="fill:#d8b4fe; font-size:12px; font-weight:700;">Pasillo</text>

            <!-- Line under horizontal pasillo -->
            <line x1="25" y1="320" x2="205" y2="320" class="blueprint-line" />
            <line x1="295" y1="320" x2="475" y2="320" class="blueprint-line" />

            <!-- Fotocopiadora (debajo del pasillo horizontal) -->
            <rect x="25" y="320" width="180" height="65" fill="#38155d" class="blueprint-room" onclick="selectRoom('fotocopiadora', 'Servicio de fotocopias, apuntes y anillados.')" />
            <text x="115" y="358" class="room-label">fotocopiadora</text>
            <line x1="25" y1="385" x2="205" y2="385" class="blueprint-line" />

            <!-- Vertical dividing line between Bicicletero and Núcleo de Servicios -->
            <line x1="145" y1="385" x2="145" y2="640" class="blueprint-line" />

            <!-- Bicicletero & Ingreso Lateral -->
            <rect x="25" y="385" width="120" height="255" fill="#210c33" class="blueprint-room" onclick="selectRoom('Bicicletero', 'Estacionamiento de bicicletas para estudiantes.')" />
            <text x="85" y="495" class="room-label">Bicicletero</text>
            <text x="85" y="612" class="sub-label" style="font-size:12px; font-weight:600;">Ingreso lateral</text>
            <path d="M 85,630 L 85,618 M 81,624 L 85,618 L 89,624" stroke="#a855f7" stroke-width="2" fill="none" />

            <!-- Escaleras de subsuelo y 1er piso -->
            <g class="blueprint-room" onclick="selectRoom('Escaleras', 'Conexión vertical con subsuelo y primer piso.')">
              <rect x="145" y="385" width="60" height="90" fill="#1c0b2d" stroke="#ffffff" stroke-width="1.5" />
              <line x1="145" y1="407" x2="205" y2="407" stroke="#fff" stroke-width="1" />
              <line x1="145" y1="430" x2="205" y2="430" stroke="#fff" stroke-width="1" />
              <line x1="145" y1="453" x2="205" y2="453" stroke="#fff" stroke-width="1" />
              <line x1="175" y1="385" x2="175" y2="475" stroke="#fff" stroke-width="1" />
              <text x="175" y="420" class="room-label" style="font-size:11.5px;">← 1°</text>
              <text x="175" y="462" class="room-label" style="font-size:11.5px;">← subsuelo</text>
            </g>
            <line x1="145" y1="475" x2="205" y2="475" class="blueprint-line" />

            <!-- Portería -->
            <rect x="145" y="475" width="60" height="85" fill="#2a1144" class="blueprint-room" onclick="selectRoom('Portería', 'Informes generales y control de acceso.')" />
            <text x="175" y="523" class="room-label" style="font-size:12.5px;">Portería</text>
            <line x1="145" y1="560" x2="205" y2="560" class="blueprint-line" />

            <!-- Bar -->
            <rect x="145" y="560" width="60" height="80" fill="#3c1662" class="blueprint-room" onclick="selectRoom('Bar', 'Cafetería y espacio de encuentro.')" />
            <text x="175" y="605" class="room-label" style="font-size:12.5px;">Bar</text>

            <!-- Escalera Principal Ingreso -->
            <rect x="205" y="580" width="90" height="60" fill="#190a2a" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Escalera principal', 'Ingreso central desde Zeballos.')" />
            <line x1="205" y1="600" x2="295" y2="600" stroke="#fff" stroke-width="1" />
            <line x1="205" y1="620" x2="295" y2="620" stroke="#fff" stroke-width="1" />
            <text x="250" y="598" class="room-label" style="font-size:12px;">Escalera</text>
            <text x="250" y="615" class="room-label" style="font-size:12px;">principal</text>
            <path d="M 250,578 L 250,566 M 246,572 L 250,566 L 254,572" stroke="#38bdf8" stroke-width="2" fill="none" />

            <!-- Central vertical corridor line & text -->
            <line x1="205" y1="210" x2="205" y2="580" class="blueprint-line" />
            <line x1="250" y1="210" x2="250" y2="565" class="blueprint-dashed" />

            <!-- Right wing corridor wall with Ascensores -->
            <line x1="295" y1="320" x2="295" y2="515" class="blueprint-line" />
            <line x1="295" y1="515" x2="330" y2="545" class="blueprint-line" />
            <line x1="330" y1="545" x2="330" y2="640" class="blueprint-line" />

            <!-- Ascensores -->
            <rect x="295" y="375" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensores', 'Batería de ascensores accesible.')" />
            <rect x="295" y="425" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensores', 'Batería de ascensores accesible.')" />
            <text x="355" y="415" class="room-label" style="font-size:12px;">Ascensores</text>

            <!-- Right wing body (sin aulas) -->
            <path d="M 295,320 L 475,320 L 475,545 L 330,545 L 295,515 Z" fill="#200d33" class="blueprint-room" />

            <!-- Sala de profesores -->
            <rect x="330" y="545" width="145" height="95" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Sala de profesores', 'Espacio de descanso y consulta docente.')" />
            <line x1="330" y1="545" x2="475" y2="545" class="blueprint-line" />
            <text x="402" y="588" class="room-label">Sala de</text>
            <text x="402" y="610" class="room-label">profesores</text>

            <!-- Linea Zeballos -->
            <text x="250" y="675" class="room-label" style="fill:#d8b4fe; font-size:13.5px; font-weight:700;">CALLE ZEBALLOS</text>
          </svg>
        `
      },
      '1': {
        title: '1° PISO',
        subtitle: 'Secretaría Asuntos Universitarios (SAU) y Kiosco',
        badge: '1°',
        svg: `
          <svg viewBox="0 0 500 680" class="blueprint-svg w-full h-auto max-h-[70vh] rounded-xl shadow-2xl">
            <rect width="500" height="680" fill="#321650" />
            <rect x="20" y="30" width="460" height="600" fill="none" class="blueprint-line" stroke-width="3" />
            
            <!-- SAU (Secretaría Asuntos Universitarios) -->
            <rect x="20" y="30" width="460" height="100" fill="#2c1247" class="blueprint-room" onclick="selectRoom('Secretaría Asuntos Universitarios (SAU)', 'Becas, deportes, tutorías, pasantías y atención gremial.')" />
            <text x="360" y="65" class="room-label">Secretaría</text>
            <text x="360" y="85" class="room-label">Asuntos</text>
            <text x="360" y="105" class="room-label">Universitarios (SAU)</text>
            <line x1="20" y1="130" x2="480" y2="130" class="blueprint-line" />

            <!-- Left Wing: Aulas 1er piso -->
            <rect x="20" y="170" width="180" height="320" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Aulas Ala Oeste 1° Piso', 'Aulas teóricas de 1° a 5° año.')" />
            <line x1="20" y1="170" x2="200" y2="170" class="blueprint-line" />
            <line x1="200" y1="170" x2="200" y2="490" class="blueprint-line" />
            <text x="110" y="340" class="room-label">Aulas 1° Piso</text>

            <!-- Escaleras Centrales -->
            <g class="blueprint-room" onclick="selectRoom('Escaleras 1° Piso', 'Conexión a PB y pisos superiores.')">
              <rect x="145" y="270" width="55" height="130" fill="#1e0c31" stroke="#ffffff" stroke-width="1.8" />
              <line x1="145" y1="300" x2="200" y2="300" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="335" x2="200" y2="335" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="370" x2="200" y2="370" stroke="#fff" stroke-width="1.2" />
              <line x1="172" y1="270" x2="172" y2="400" stroke="#fff" stroke-width="1.2" />
              <text x="172" y="340" class="room-label" style="font-size:11.5px;">Escaleras</text>
            </g>

            <!-- Right Wing: Ascensores & Kiosco -->
            <rect x="290" y="170" width="190" height="320" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Sector Central 1° Piso', 'Pasillos de circulación y aulas.')" />
            <line x1="290" y1="170" x2="480" y2="170" class="blueprint-line" />
            <line x1="290" y1="170" x2="290" y2="490" class="blueprint-line" />

            <!-- Ascensores -->
            <rect x="290" y="280" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 1 - 1° Piso', 'Parada ascensor.')" />
            <rect x="290" y="330" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 2 - 1° Piso', 'Parada ascensor.')" />
            <text x="345" y="315" class="room-label" style="font-size:11.5px;">Ascensores</text>

            <!-- Kiosco 1er piso -->
            <rect x="310" y="430" width="110" height="50" fill="#45186f" class="blueprint-room rounded" onclick="selectRoom('Kiosco 1° Piso', 'Snacks, golosinas, bebidas y café.')" />
            <text x="365" y="460" class="room-label">Kiosco</text>

            <!-- Bottom Boundary & Street -->
            <line x1="20" y1="490" x2="480" y2="490" class="blueprint-line" />
            <line x1="20" y1="540" x2="480" y2="540" class="blueprint-line" />
            <text x="250" y="660" class="room-label" style="fill:#d8b4fe; font-size:13.5px; font-weight:700;">CALLE ZEBALLOS</text>
          </svg>
        `
      },
      '2': {
        title: '2° PISO',
        subtitle: 'Departamento Mecánica, Bedelía y Cantina',
        badge: '2°',
        svg: `
          <svg viewBox="0 0 500 680" class="blueprint-svg w-full h-auto max-h-[70vh] rounded-xl shadow-2xl">
            <rect width="500" height="680" fill="#321650" />
            <rect x="20" y="30" width="460" height="600" fill="none" class="blueprint-line" stroke-width="3" />

            <!-- Top: Depto Mecanica -->
            <rect x="20" y="30" width="460" height="90" fill="#2d1348" class="blueprint-room" onclick="selectRoom('Departamento Mecánica', 'Dirección de carrera Ingeniería Mecánica y consultas docentes.')" />
            <text x="360" y="65" class="room-label">Departamento</text>
            <text x="360" y="85" class="room-label">Mecánica</text>
            <line x1="20" y1="120" x2="480" y2="120" class="blueprint-line" />

            <!-- Left Wing -->
            <rect x="20" y="160" width="180" height="340" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Aulas Mecánica', 'Aulas técnicas de diseño mecánico y cálculo.')" />
            <line x1="20" y1="160" x2="200" y2="160" class="blueprint-line" />
            <line x1="200" y1="160" x2="200" y2="500" class="blueprint-line" />
            <text x="110" y="330" class="room-label">Aulas 2° Piso</text>

            <!-- Escaleras Centrales -->
            <g class="blueprint-room" onclick="selectRoom('Escaleras 2° Piso', 'Acceso vertical')">
              <rect x="145" y="250" width="55" height="130" fill="#1e0c31" stroke="#ffffff" stroke-width="1.8" />
              <line x1="145" y1="285" x2="200" y2="285" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="315" x2="200" y2="315" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="345" x2="200" y2="345" stroke="#fff" stroke-width="1.2" />
              <line x1="172" y1="250" x2="172" y2="380" stroke="#fff" stroke-width="1.2" />
              <text x="172" y="320" class="room-label" style="font-size:11.5px;">Escaleras</text>
            </g>

            <!-- Right Wing: Bedelía & Ascensores -->
            <rect x="290" y="160" width="190" height="340" fill="#260f3d" class="blueprint-room" onclick="selectRoom('Bedelía 2° Piso', 'Gestión de aulas y asistencia de docentes de Mecánica.')" />
            <line x1="290" y1="160" x2="480" y2="160" class="blueprint-line" />
            <line x1="290" y1="160" x2="290" y2="500" class="blueprint-line" />
            <text x="350" y="200" class="room-label">Bedelía</text>

            <!-- Ascensores -->
            <rect x="290" y="265" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 1 - 2° Piso', 'Acceso ascensor')" />
            <rect x="290" y="315" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 2 - 2° Piso', 'Acceso ascensor')" />
            <text x="345" y="300" class="room-label" style="font-size:11.5px;">Ascensores</text>

            <!-- Cantina (Frente calle Zeballos) -->
            <rect x="20" y="550" width="460" height="80" fill="#3c1563" class="blueprint-room" onclick="selectRoom('Cantina 2° Piso', 'Comedor universitario, menú del día y mesas de estudio.')" />
            <line x1="20" y1="550" x2="480" y2="550" class="blueprint-line" stroke-width="2.5" />
            <text x="140" y="595" class="room-label" style="font-size:15px;">Cantina</text>
            <text x="250" y="660" class="room-label" style="fill:#d8b4fe; font-size:13.5px; font-weight:700;">CALLE ZEBALLOS</text>
          </svg>
        `
      },
      '3': {
        title: '3° PISO',
        subtitle: 'Depto. Química, Lab Química General, Sala Informática',
        badge: '3°',
        svg: `
          <svg viewBox="0 0 500 680" class="blueprint-svg w-full h-auto max-h-[70vh] rounded-xl shadow-2xl">
            <rect width="500" height="680" fill="#321650" />
            <rect x="20" y="30" width="460" height="600" fill="none" class="blueprint-line" stroke-width="3" />

            <!-- Top: Laboratorios & Lab Quimica General -->
            <rect x="20" y="30" width="250" height="100" fill="#2d1348" class="blueprint-room" onclick="selectRoom('Laboratorios de Química', 'Mesadas con campanas de extracción y reactivos.')" />
            <text x="110" y="85" class="room-label">Laboratorios</text>

            <rect x="270" y="30" width="210" height="100" fill="#2b1145" class="blueprint-room" onclick="selectRoom('Laboratorio Química General', 'Prácticas para alumnos de ciclo básico.')" />
            <text x="375" y="70" class="room-label">Laboratorio</text>
            <text x="375" y="90" class="room-label">Química</text>
            <text x="375" y="110" class="room-label">General</text>
            <line x1="20" y1="130" x2="480" y2="130" class="blueprint-line" />

            <!-- Left Wing: Sala de Profesores Quimica -->
            <rect x="20" y="170" width="180" height="340" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Sala Profesores (Química)', 'Reuniones de cátedra de Química Orgánica e Inorgánica.')" />
            <line x1="20" y1="170" x2="200" y2="170" class="blueprint-line" />
            <line x1="200" y1="170" x2="200" y2="510" class="blueprint-line" />
            <text x="110" y="470" class="room-label">Sala profesores</text>
            <text x="110" y="490" class="room-label">(Química)</text>

            <!-- Escaleras Centrales -->
            <g class="blueprint-room" onclick="selectRoom('Escaleras 3° Piso', 'Acceso vertical')">
              <rect x="145" y="270" width="55" height="130" fill="#1e0c31" stroke="#ffffff" stroke-width="1.8" />
              <line x1="145" y1="305" x2="200" y2="305" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="335" x2="200" y2="335" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="365" x2="200" y2="365" stroke="#fff" stroke-width="1.2" />
              <line x1="172" y1="270" x2="172" y2="400" stroke="#fff" stroke-width="1.2" />
              <text x="172" y="340" class="room-label" style="font-size:11.5px;">Escaleras</text>
            </g>

            <!-- Right Wing: Ascensores & Sala Informatica -->
            <rect x="290" y="170" width="190" height="340" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Sala Informática (Química)', 'Simulación de reactores y procesos fisicoquímicos.')" />
            <line x1="290" y1="170" x2="480" y2="170" class="blueprint-line" />
            <line x1="290" y1="170" x2="290" y2="510" class="blueprint-line" />

            <!-- Ascensores -->
            <rect x="290" y="280" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 1 - 3° Piso', 'Parada ascensor')" />
            <rect x="290" y="330" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 2 - 3° Piso', 'Parada ascensor')" />
            <text x="345" y="315" class="room-label" style="font-size:11.5px;">Ascensores</text>

            <text x="385" y="465" class="room-label">Sala</text>
            <text x="385" y="485" class="room-label">informática</text>
            <text x="385" y="505" class="room-label">(Química)</text>

            <!-- Bottom: Depto Quimica -->
            <rect x="20" y="540" width="460" height="90" fill="#351457" class="blueprint-room" onclick="selectRoom('Departamento Química', 'Dirección de la carrera de Ingeniería Química.')" />
            <line x1="20" y1="540" x2="480" y2="540" class="blueprint-line" stroke-width="2.5" />
            <text x="250" y="580" class="room-label">Departamento</text>
            <text x="250" y="600" class="room-label">Química</text>
            <text x="250" y="660" class="room-label" style="fill:#d8b4fe; font-size:13.5px; font-weight:700;">CALLE ZEBALLOS</text>
          </svg>
        `
      },
      '4': {
        title: '4° PISO',
        subtitle: 'Depto. Civil, Ciencias Básicas, Lab Física, PAE',
        badge: '4°',
        svg: `
          <svg viewBox="0 0 500 680" class="blueprint-svg w-full h-auto max-h-[70vh] rounded-xl shadow-2xl">
            <rect width="500" height="680" fill="#321650" />
            <rect x="20" y="30" width="460" height="600" fill="none" class="blueprint-line" stroke-width="3" />

            <!-- Top: Ciencias Basicas & Lab Fisica -->
            <rect x="20" y="30" width="200" height="90" fill="#2d1348" class="blueprint-room" onclick="selectRoom('Ciencias Básicas', 'Álgebra, Análisis Matemático y Física General.')" />
            <text x="110" y="80" class="room-label">Ciencias Básicas</text>

            <rect x="220" y="30" width="260" height="90" fill="#2c1247" class="blueprint-room" onclick="selectRoom('Laboratorio de Física', 'Experimentos de óptica, mecánica y electromagnetismo.')" />
            <text x="350" y="80" class="room-label">Laboratorio Física</text>
            <line x1="20" y1="120" x2="480" y2="120" class="blueprint-line" />

            <!-- Left Wing: Depto Civil -->
            <rect x="20" y="160" width="180" height="340" fill="#240f3b" class="blueprint-room" onclick="selectRoom('Departamento Civil', 'Dirección del Departamento de Ingeniería Civil.')" />
            <line x1="20" y1="160" x2="200" y2="160" class="blueprint-line" />
            <line x1="200" y1="160" x2="200" y2="500" class="blueprint-line" />
            <text x="110" y="470" class="room-label">Departamento</text>
            <text x="110" y="490" class="room-label">Civil</text>

            <!-- Escaleras Centrales -->
            <g class="blueprint-room" onclick="selectRoom('Escaleras 4° Piso', 'Acceso vertical')">
              <rect x="145" y="260" width="55" height="130" fill="#1e0c31" stroke="#ffffff" stroke-width="1.8" />
              <line x1="145" y1="290" x2="200" y2="290" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="325" x2="200" y2="325" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="355" x2="200" y2="355" stroke="#fff" stroke-width="1.2" />
              <line x1="172" y1="260" x2="172" y2="390" stroke="#fff" stroke-width="1.2" />
              <text x="172" y="330" class="room-label" style="font-size:11.5px;">Escaleras</text>
            </g>

            <!-- Right Wing: Auditorio 4° Piso -->
            <rect x="290" y="160" width="190" height="340" fill="#3b1660" class="blueprint-room" onclick="selectRoom('Auditorio 4° Piso', 'Charlas técnicas, disertaciones y defensas de tesis.')" />
            <line x1="290" y1="160" x2="480" y2="160" class="blueprint-line" />
            <line x1="290" y1="160" x2="290" y2="500" class="blueprint-line" />
            <text x="375" y="210" class="room-label">Auditorio</text>
            <text x="375" y="230" class="room-label">(4° piso)</text>

            <!-- Ascensores -->
            <rect x="290" y="275" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 1 - 4° Piso', 'Parada ascensor')" />
            <rect x="290" y="325" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 2 - 4° Piso', 'Parada ascensor')" />
            <text x="345" y="310" class="room-label" style="font-size:11.5px;">Ascensores</text>

            <!-- Bottom: PAE -->
            <rect x="20" y="530" width="460" height="100" fill="#2d114a" class="blueprint-room" onclick="selectRoom('Programa Apoyo Estudiantil (PAE)', 'Tutorías personalizadas, orientación vocacional y acompañamiento.')" />
            <line x1="20" y1="530" x2="480" y2="530" class="blueprint-line" stroke-width="2.5" />
            <text x="120" y="565" class="room-label">Programa</text>
            <text x="120" y="585" class="room-label">Apoyo</text>
            <text x="120" y="605" class="room-label">Estudiantil (PAE)</text>
            <text x="250" y="660" class="room-label" style="fill:#d8b4fe; font-size:13.5px; font-weight:700;">CALLE ZEBALLOS</text>
          </svg>
        `
      },
      '5': {
        title: '5° PISO',
        subtitle: 'Depto. Sistemas de Información & Laboratorio Microsoft',
        badge: '5°',
        svg: `
          <svg viewBox="0 0 500 680" class="blueprint-svg w-full h-auto max-h-[70vh] rounded-xl shadow-2xl">
            <rect width="500" height="680" fill="#321650" />
            <rect x="20" y="50" width="460" height="570" fill="none" class="blueprint-line" stroke-width="3" />

            <!-- Top Corridor -->
            <line x1="20" y1="180" x2="480" y2="180" class="blueprint-line" />

            <!-- Left: Depto Sistemas -->
            <rect x="20" y="180" width="180" height="440" fill="#27103e" class="blueprint-room" onclick="selectRoom('Departamento de Sistemas', 'Cátedras de Ingeniería en Sistemas, laboratorios de desarrollo y dirección.')" />
            <line x1="200" y1="240" x2="200" y2="620" class="blueprint-line" />
            <text x="90" y="210" class="room-label">Departamento</text>
            <text x="90" y="230" class="room-label">Sistemas</text>

            <!-- Escaleras Centrales -->
            <g class="blueprint-room" onclick="selectRoom('Escaleras 5° Piso', 'Acceso vertical último piso')">
              <rect x="145" y="370" width="55" height="150" fill="#1e0c31" stroke="#ffffff" stroke-width="1.8" />
              <line x1="145" y1="405" x2="200" y2="405" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="440" x2="200" y2="440" stroke="#fff" stroke-width="1.2" />
              <line x1="145" y1="475" x2="200" y2="475" stroke="#fff" stroke-width="1.2" />
              <line x1="172" y1="370" x2="172" y2="520" stroke="#fff" stroke-width="1.2" />
              <text x="172" y="445" class="room-label" style="font-size:11.5px;">Escaleras</text>
            </g>

            <!-- Right: Laboratorio Microsoft -->
            <rect x="290" y="240" width="190" height="380" fill="#3a165f" class="blueprint-room" onclick="selectRoom('Laboratorio Microsoft', 'Desarrollo de software, servidores de prueba y certicaciones técnicas.')" />
            <line x1="290" y1="240" x2="480" y2="240" class="blueprint-line" />
            <line x1="290" y1="240" x2="290" y2="620" class="blueprint-line" />
            <text x="380" y="290" class="room-label">Laboratorio</text>
            <text x="380" y="315" class="room-label">Microsoft</text>

            <!-- Ascensores -->
            <rect x="290" y="390" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 1 - 5° Piso', 'Parada terminal ascensor')" />
            <rect x="290" y="450" width="24" height="26" fill="#4d237b" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ascensor 2 - 5° Piso', 'Parada terminal ascensor')" />
            <text x="345" y="435" class="room-label" style="font-size:11.5px;">Ascensores</text>

            <text x="250" y="650" class="room-label" style="fill:#d8b4fe; font-size:13.5px; font-weight:700;">CALLE ZEBALLOS</text>
          </svg>
        `
      }
    };

export const departmentDirectory = [
      {
        id: 'alumnado',
        aliases: ['alumnado', 'departamento alumnos', 'oficina de alumnado', 'legajos', 'actas', 'titulos'],
        title: 'Departamento Alumnos',
        subtitle: 'Trámites de inscripciones, certificados, legajos y títulos',
        category: 'Gestión Estudiantil',
        categoryColor: 'bg-blue-900/80 text-blue-200 border-blue-500/40',
        icon: 'fa-solid fa-id-card text-blue-400',
        floor: 0,
        floorBadge: 'PB',
        floorName: 'Planta Baja',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - Planta Baja',
        sections: [
          {
            title: 'Departamento Alumnos (Información general / trámites)',
            email: 'depto.alumnos@frro.utn.edu.ar',
            schedules: [
              { days: 'Lunes a Jueves', hours: '09:00 a 12:00 hs y 17:00 a 20:00 hs' }
            ],
            notes: 'Inscripciones a materias y exámenes, constancias de examen, certificados de alumno regular y trámites de legajo.'
          },
          {
            title: 'Área Legajos y Actas',
            email: 'legajosyactas@frro.utn.edu.ar',
            schedules: [
              { days: 'Lunes a Viernes', hours: '09:00 a 12:00 hs y 14:00 a 19:00 hs' }
            ],
            notes: 'Gestión de actas de exámenes finales, convalidaciones de asignaturas y actualización de legajos.'
          },
          {
            title: 'Departamento Títulos y Egresados (Dirección Académica)',
            schedules: [
              { days: 'Jueves', hours: '16:00 a 19:30 hs (Sin turno previo)' }
            ],
            notes: 'Trámite de retiro y presentación de títulos y certificados analíticos legalizados.'
          }
        ]
      },
      {
        id: 'sau',
        aliases: ['secretaria asuntos universitarios (sau)', 'sau', 'secretaria asuntos universitarios', 'asuntos universitarios'],
        title: 'Secretaría de Asuntos Universitarios (SAU)',
        subtitle: 'Becas, pasantías, deportes, tutorías y atención gremial estudiantil',
        category: 'Secretaría Central',
        categoryColor: 'bg-purple-900/80 text-purple-200 border-purple-500/40',
        icon: 'fa-solid fa-graduation-cap text-purple-400',
        floor: 1,
        floorBadge: '1° Piso',
        floorName: '1° Piso (Ala Sur-Oeste)',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 1° Piso, Ala Sur-Oeste',
        sections: [
          {
            title: 'Atención General SAU',
            schedules: [
              { days: 'Lunes a Viernes', hours: '09:00 a 13:00 hs y 15:00 a 20:00 hs' }
            ],
            notes: 'Asistencia al estudiante, actividades deportivas, bienestar universitario y atención gremial.'
          },
          {
            title: 'Bolsa de Trabajo y Gestión de Becas',
            schedules: [
              { days: 'Lunes a Viernes', hours: '09:00 a 13:00 hs y 17:00 a 21:00 hs' }
            ],
            notes: 'Consultas sobre becas universitarias (Manuel Belgrano, Progresar, UTN), pasantías y búsquedas laborales.'
          }
        ]
      },
      {
        id: 'sistemas',
        aliases: ['departamento de sistemas', 'departamento sistemas', 'ingenieria en sistemas', 'sistemas de informacion', 'isi'],
        title: 'Departamento de Ingeniería en Sistemas de Información',
        subtitle: 'Dirección de carrera, cátedras y laboratorios de software (ISI Investiga)',
        category: 'Departamento Académico',
        categoryColor: 'bg-indigo-900/80 text-indigo-200 border-indigo-500/40',
        icon: 'fa-solid fa-laptop-code text-indigo-400',
        floor: 5,
        floorBadge: '5° Piso',
        floorName: '5° Piso',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 5° Piso',
        sections: [
          {
            title: 'Área Laboratorios / ISI Investiga',
            email: 'encargadossistemas@frro.utn.edu.ar',
            schedules: [
              { days: 'Lunes a Viernes', hours: '07:00 a 23:50 hs' }
            ],
            notes: 'Horario ininterrumpido de funcionamiento de laboratorios para cursado y prácticas. Reserva de laboratorios vía correo institucional.'
          },
          {
            title: 'Dirección de Carrera y Cátedras',
            notes: 'Coordinación académica de Ingeniería en Sistemas, correlatividades, equivalencias y consultas docentes.'
          }
        ]
      },
      {
        id: 'civil',
        aliases: ['departamento civil', 'departamento de civil', 'ingenieria civil', 'departamento ingenieria civil'],
        title: 'Departamento de Ingeniería Civil',
        subtitle: 'Dirección del Departamento de Ingeniería Civil y cátedras técnicas',
        category: 'Departamento Académico',
        categoryColor: 'bg-amber-900/80 text-amber-200 border-amber-500/40',
        icon: 'fa-solid fa-trowel-bricks text-amber-400',
        floor: 4,
        floorBadge: '4° Piso',
        floorName: '4° Piso (Ala Oeste)',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 4° Piso',
        sections: [
          {
            title: 'Atención y Dirección de Carrera',
            email: 'civil@frro.utn.edu.ar',
            notes: 'Consultas sobre cursado y coordinación de la carrera de Ingeniería Civil. Las consultas específicas de cátedra se canalizan por email institucional o conmutador general.'
          }
        ]
      },
      {
        id: 'mecanica',
        aliases: ['departamento mecanica', 'departamento de mecanica', 'ingenieria mecanica'],
        title: 'Departamento de Ingeniería Mecánica',
        subtitle: 'Dirección de carrera, proyectos de diseño mecánico y consultas docentes',
        category: 'Departamento Académico',
        categoryColor: 'bg-orange-900/80 text-orange-200 border-orange-500/40',
        icon: 'fa-solid fa-gears text-orange-400',
        floor: 2,
        floorBadge: '2° Piso',
        floorName: '2° Piso',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 2° Piso',
        pendingNotice: 'Horarios específicos de atención docente/alumno en proceso de actualización institucional.',
        sections: [
          {
            title: 'Dirección de Carrera de Ingeniería Mecánica',
            notes: 'Dirección de cátedras y proyectos mecánicos. Podés coordinar consultas a través del conmutador central o acercarte a la bedelía del 2° piso.'
          }
        ]
      },
      {
        id: 'quimica',
        aliases: ['departamento quimica', 'departamento de quimica', 'ingenieria quimica'],
        title: 'Departamento de Ingeniería Química',
        subtitle: 'Dirección de la carrera de Ingeniería Química y coordinación de laboratorios',
        category: 'Departamento Académico',
        categoryColor: 'bg-rose-900/80 text-rose-200 border-rose-500/40',
        icon: 'fa-solid fa-flask-vial text-rose-400',
        floor: 3,
        floorBadge: '3° Piso',
        floorName: '3° Piso',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 3° Piso',
        pendingNotice: 'Horarios específicos de ventanilla en proceso de actualización institucional.',
        sections: [
          {
            title: 'Dirección de Carrera y Cátedras',
            notes: 'Cátedras de operaciones unitarias, reactores y laboratorios químicos. Consultas a través del conmutador general de la facultad.'
          }
        ]
      },
      {
        id: 'electrica',
        aliases: ['departamento electrica', 'departamento de electrica', 'ingenieria electrica', 'energia electrica'],
        title: 'Departamento de Ingeniería en Energía Eléctrica',
        subtitle: 'Oficinas docentes, dirección de cátedra, ensayos de máquinas y alta tensión',
        category: 'Departamento Académico',
        categoryColor: 'bg-yellow-900/80 text-yellow-200 border-yellow-500/40',
        icon: 'fa-solid fa-bolt text-yellow-400',
        floor: -1,
        floorBadge: 'SS',
        floorName: 'Subsuelo (Ala Este)',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - Subsuelo',
        pendingNotice: 'Horarios específicos de atención presencial en proceso de actualización institucional.',
        sections: [
          {
            title: 'Oficinas Docentes y Dirección de Cátedra',
            notes: 'Coordinación de laboratorios de ensayos eléctricos y máquinas. Podés consultar a través de la bedelía del subsuelo o el conmutador central.'
          }
        ]
      },
      {
        id: 'basicas',
        aliases: ['ciencias basicas', 'materias basicas', 'departamento de materias basicas'],
        title: 'Departamento de Materias Básicas',
        subtitle: 'Cátedras de Álgebra, Análisis Matemático, Física General y Química',
        category: 'Departamento Académico',
        categoryColor: 'bg-teal-900/80 text-teal-200 border-teal-500/40',
        icon: 'fa-solid fa-atom text-teal-400',
        floor: 4,
        floorBadge: '4° Piso',
        floorName: '4° Piso',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 4° Piso',
        pendingNotice: 'Horarios de consulta de cátedras en actualización institucional para el ciclo lectivo.',
        sections: [
          {
            title: 'Coordinación de Ciclo Básico',
            notes: 'Cátedras del ciclo común a todas las carreras de ingeniería. Consultas canalizadas por cada equipo docente o vía conmutador.'
          }
        ]
      },
      {
        id: 'secyt',
        aliases: ['secyt', 'secretaria de ciencia y tecnologia', 'secretaria ciencia y tecnologia', 'investigacion'],
        title: 'Secretaría de Ciencia y Tecnología (SeCyT)',
        subtitle: 'Gestión de proyectos de investigación, becas científicas y convocatorias I+D',
        category: 'Secretaría Central',
        categoryColor: 'bg-violet-900/80 text-violet-200 border-violet-500/40',
        icon: 'fa-solid fa-microscope text-violet-400',
        floor: 1,
        floorBadge: '1° Piso',
        floorName: '1° Piso / Edificio Central',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341',
        sections: [
          {
            title: 'Gestión de Proyectos / Investigación',
            email: 'secyt.frro@gmail.com',
            notes: 'Recepción de proyectos de investigación homologados, asesoramiento en becas doctorales e incentivos a docentes investigadores.'
          }
        ]
      },
      {
        id: 'pae',
        aliases: ['programa apoyo estudiantil (pae)', 'pae', 'apoyo estudiantil'],
        title: 'Programa de Apoyo Estudiantil (PAE)',
        subtitle: 'Tutorías personalizadas, orientación vocacional y acompañamiento',
        category: 'Acompañamiento Académico',
        categoryColor: 'bg-emerald-900/80 text-emerald-200 border-emerald-500/40',
        icon: 'fa-solid fa-hands-holding-child text-emerald-400',
        floor: 4,
        floorBadge: '4° Piso',
        floorName: '4° Piso',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 4° Piso',
        sections: [
          {
            title: 'Orientación y Tutorías Pedagógicas',
            notes: 'Acompañamiento en el proceso de inserción y permanencia universitaria, tutorías académicas y contención estudiantil.'
          }
        ]
      },
      {
        id: 'bedelia-ss',
        aliases: ['bedelia subsuelo', 'bedelia ss'],
        title: 'Bedelía de Subsuelo',
        subtitle: 'Atención de cursado para Eléctrica y Electrónica',
        category: 'Bedelía',
        categoryColor: 'bg-sky-900/80 text-sky-200 border-sky-500/40',
        icon: 'fa-solid fa-clipboard-user text-sky-400',
        floor: -1,
        floorBadge: 'SS',
        floorName: 'Subsuelo',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - Subsuelo',
        sections: [
          {
            title: 'Gestión de Cursado y Aulas',
            notes: 'Asistencia y control de aulas, llaves de laboratorios y registro de docentes de las carreras del subsuelo.'
          }
        ]
      },
      {
        id: 'bedelia-2p',
        aliases: ['bedelia 2° piso', 'bedelia 2 piso', 'bedelia 2p'],
        title: 'Bedelía de 2° Piso',
        subtitle: 'Gestión de aulas y asistencia de docentes de Mecánica',
        category: 'Bedelía',
        categoryColor: 'bg-sky-900/80 text-sky-200 border-sky-500/40',
        icon: 'fa-solid fa-clipboard-user text-sky-400',
        floor: 2,
        floorBadge: '2° Piso',
        floorName: '2° Piso',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 2° Piso',
        sections: [
          {
            title: 'Gestión de Aulas de Mecánica',
            notes: 'Control y asignación de aulas, asistencia docente y equipamiento para las cátedras del 2° piso.'
          }
        ]
      }
    ];

// Also attach to window for backwards/script-tag compatibility
if (typeof window !== 'undefined') {
  window.CAMPUS_FLOOR_DATA = floorData;
  window.CAMPUS_DEPTS_DATA = departmentDirectory;
}
