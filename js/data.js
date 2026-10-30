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
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="105" width="40" height="505" fill="#1b0c30" />
            <rect x="98" y="355" width="354" height="75" fill="#1b0c30" />

            <!-- Guías de evacuación (verde) -->
            <g opacity="0.6">
              <line x1="118" y1="100" x2="118" y2="600" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="432" y1="110" x2="432" y2="605" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="432" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="45" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="275" y1="392" x2="275" y2="435" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE                    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="86" height="124" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio de Máquinas Eléctricas', 'Ensayos de motores, transformadores y generadores de potencia.')" />
            <text x="55" y="70" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Lab. Máquinas</tspan>
              <tspan x="55" dy="16">Eléctricas</tspan>
            </text>

            <rect x="12" y="140" width="86" height="145" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio de Alta Tensión', 'Ensayos dieléctricos, descargadores y mediciones de aislación.')" />
            <text x="55" y="205" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Lab. Alta</tspan>
              <tspan x="55" dy="16">Tensión</tspan>
            </text>

            <rect x="12" y="285" width="86" height="80" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Bedelía Subsuelo', 'Atención para cursado de Eléctrica y Electrónica.')" />
            <text x="55" y="322" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Bedelía</tspan>
              <tspan x="55" dy="16">Subsuelo</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia Subsuelo', 'Salida reglamentaria de escape hacia el exterior.')">
              <rect x="12" y="365" width="86" height="55" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="365" x2="42" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="365" x2="58" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="365" x2="74" y2="420" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="396" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
              <text x="25" y="397" font-size="12" fill="#ffffff">🚪</text>
            </g>

            <rect x="12" y="420" width="86" height="135" fill="#240f3b" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Lab. Mediciones Eléctricas', 'Bancos de calibración, osciloscopios e instrumental de precisión.')" />
            <text x="55" y="480" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Lab. Mediciones</tspan>
              <tspan x="55" dy="16">Eléctricas</tspan>
            </text>

            <rect x="12" y="555" width="64" height="57" fill="#271140" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Depósito Instrumental Subsuelo', 'Guarda de equipos de ensayo y componentes eléctricos.')" />
            <text x="44" y="585" class="room-label" style="font-size:10px;">
              <tspan x="44" dy="0">Depósito</tspan>
              <tspan x="44" dy="13">Equipos</tspan>
            </text>

            <rect x="12" y="612" width="64" height="112" fill="#250e3d" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Taller Eléctrico y Mantenimiento', 'Taller de bobinado, reparaciones y soporte técnico.')" />
            <text x="44" y="665" class="room-label" style="font-size:11px;">
              <tspan x="44" dy="0">Taller</tspan>
              <tspan x="44" dy="14">Mantenim.</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Subsuelo Oeste', 'Baños para alumnos y personal técnico.')">
              <rect x="76" y="595" width="22" height="129" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="76" y1="638" x2="98" y2="638" stroke="#ffffff" stroke-width="1" />
              <line x1="76" y1="681" x2="98" y2="681" stroke="#ffffff" stroke-width="1" />
              <text x="87" y="663" class="sub-label" style="fill:#cbd5e1; font-size:8.5px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <rect x="138" y="16" width="92" height="134" fill="#201138" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Electrónica', 'Bancos de trabajo, fuentes de poder y generadores de señales.')" />
            <text x="184" y="80" class="room-label" style="font-size:13px;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">Electrónica</tspan>
            </text>

            <rect x="138" y="150" width="92" height="75" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala Ensayos Especiales', 'Pruebas de compatibilidad electromagnética y prototipado.')" />
            <text x="184" y="188" class="room-label" style="font-size:11.5px;">
              <tspan x="184" dy="0">Ensayos</tspan>
              <tspan x="184" dy="15">Especiales</tspan>
            </text>

            <rect x="138" y="225" width="92" height="80" fill="#26103e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Investigadores Eléctrica', 'Área de proyectos I+D en redes y energías renovables.')" />
            <text x="184" y="265" class="room-label" style="font-size:11.5px;">
              <tspan x="184" dy="0">Investigadores</tspan>
              <tspan x="184" dy="15">Eléctrica</tspan>
            </text>

            <rect x="138" y="305" width="92" height="50" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Rack / Servidores Subsuelo', 'Nodo de telecomunicaciones y fibra óptica.')" />
            <text x="184" y="335" class="room-label" style="font-size:11px;">Racks / Servidor</text>

            <rect x="138" y="430" width="92" height="155" fill="#230f3b" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Informática Subsuelo', 'Puestos equipados con software de cálculo eléctrico (Matlab, AutoCAD, DigSILENT).')" />
            <text x="184" y="500" class="room-label" style="font-size:12.5px;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">Informática</tspan>
              <tspan x="184" dy="16">Subsuelo</tspan>
            </text>

            <rect x="138" y="585" width="92" height="139" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Sala de Fotocopiado Subsuelo', 'Servicio de fotocopias, impresiones y apuntes técnicos.')" />
            <text x="184" y="650" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Sala de</tspan>
              <tspan x="184" dy="16">Fotocopiado</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="289" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="16" x2="320" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="16" x2="230" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="165" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores Centrales Subsuelo', 'Batería de dos ascensores accesibles con parada en Subsuelo.')">
              <rect x="245" y="310" width="60" height="45" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="310" x2="275" y2="355" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="348" width="20" height="6" fill="#facc15" />
              <rect x="280" y="348" width="20" height="6" fill="#facc15" />
              <text x="275" y="332" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:9.5px;">ASCENSORES</text>
            </g>

            <g>
              <text x="275" y="397" class="sub-label" style="fill:#e9d5ff; font-size:11px; font-weight:700; letter-spacing:1px;">PASILLO CENTRAL</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal Subsuelo', 'Escalera central que conecta con Planta Baja y plantas altas.')">
              <rect x="235" y="430" width="80" height="105" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="535" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="450" x2="275" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="470" x2="275" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="490" x2="275" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="510" x2="275" y2="510" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="450" x2="315" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="470" x2="315" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="490" x2="315" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="510" x2="315" y2="510" stroke="#86efac" stroke-width="1" />
              <text x="275" y="528" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="535" width="90" height="189" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="535" x2="320" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="535" x2="230" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="635" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <rect x="320" y="16" width="92" height="134" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Usos Múltiples', 'Espacio para proyectos estudiantiles y ensayos interdisciplinarios.')" />
            <text x="366" y="78" class="room-label" style="font-size:12px;">
              <tspan x="366" dy="0">Lab. Usos</tspan>
              <tspan x="366" dy="16">Múltiples</tspan>
            </text>

            <rect x="320" y="150" width="92" height="155" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Departamento Eléctrica', 'Dirección de carrera, oficinas docentes y consultas.')" />
            <text x="366" y="220" class="room-label" style="font-size:12.5px;">
              <tspan x="366" dy="0">Departamento</tspan>
              <tspan x="366" dy="16">Eléctrica</tspan>
            </text>

            <rect x="320" y="305" width="92" height="50" fill="#2a1144" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Sala Profesores Eléctrica', 'Reuniones de cátedra y atención docente.')" />
            <text x="366" y="336" class="room-label" style="font-size:10.5px;">Sala Profesores</text>

            <!-- Salón de Actos (Frente y Crujía Este Sur) -->
            <rect x="320" y="430" width="208" height="294" fill="#3b1761" stroke="#ffffff" stroke-width="2.5" class="blueprint-room" onclick="selectRoom('Salón de Actos', 'Actos académicos solemnes, conferencias magistrales, exposiciones y colaciones de grado.')" />
            <text x="424" y="560" class="room-label" style="font-size:18px; font-weight:800; letter-spacing:1px;">
              <tspan x="424" dy="0">SALÓN DE</tspan>
              <tspan x="424" dy="24">ACTOS</tspan>
            </text>
            <text x="424" y="610" class="sub-label" style="fill:#d8b4fe; font-size:11.5px;">(Capacidad 250 personas)</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN ALA ESTE                  -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte Subsuelo', 'Batería de baños del sector laboratorios.')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE NORTE               -->
            <!-- ========================================== -->
            <rect x="452" y="16" width="76" height="150" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Lab. Control y Automatización', 'Bancos de prueba PLC, sensores industriales y actuadores.')" />
            <text x="490" y="85" class="room-label" style="font-size:11.5px;">
              <tspan x="490" dy="0">Control y</tspan>
              <tspan x="490" dy="15">Automatiz.</tspan>
            </text>

            <rect x="452" y="166" width="76" height="189" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Taller Electrotécnico', 'Armado de tableros, cableados de potencia y protecciones.')" />
            <text x="490" y="255" class="room-label" style="font-size:12px;">
              <tspan x="490" dy="0">Taller</tspan>
              <tspan x="490" dy="16">Electro-</tspan>
              <tspan x="490" dy="16">técnico</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="720" class="sub-label" style="fill:#cbd5e1; font-size:9.5px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (SUBSUELO)
            </text>
          </svg>
        `
      },
      '0': {
        title: 'PLANTA BAJA',
        subtitle: 'Ingreso Zeballos, Biblioteca/SUM, Patio, Fotocopiadora, Bar',
        badge: 'PB',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. PATIO CENTRAL Y BIBLIOTECA (NORTE)      -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="354" height="140" fill="#190b2b" stroke="#4a1c72" stroke-width="1.5" />
            <text x="270" y="45" class="sub-label" style="fill:#c084fc; font-weight:700; font-size:12px; letter-spacing:1px;">PATIO CENTRAL / JARDÍN INTERIOR</text>

            <g class="blueprint-room" onclick="selectRoom('Biblioteca Central / SUM', 'Préstamo de libros técnicos, sala silenciosa de estudio e investigación.')">
              <circle cx="270" cy="95" r="48" fill="#3e1766" stroke="#ffffff" stroke-width="2.2" />
              <text x="270" y="92" class="room-label" style="font-size:13px; font-weight:800;">
                <tspan x="270" dy="0">Biblioteca</tspan>
                <tspan x="270" dy="16">Central / SUM</tspan>
              </text>
            </g>

            <!-- ========================================== -->
            <!-- 2. RED DE PASILLOS EN 'H'                  -->
            <!-- ========================================== -->
            <rect x="98" y="156" width="40" height="568" fill="#1b0c30" />
            <rect x="412" y="156" width="40" height="454" fill="#1b0c30" />
            <rect x="98" y="355" width="354" height="75" fill="#1b0c30" />

            <g opacity="0.6">
              <line x1="118" y1="165" x2="118" y2="600" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="432" y1="165" x2="432" y2="605" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="432" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="45" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="270" y1="392" x2="270" y2="435" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 1: ALA OESTE                    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="86" height="140" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Bar Universitario PB', 'Servicio de cafetería, minutas, mesas y punto de encuentro estudiantil.')" />
            <text x="55" y="80" class="room-label" style="font-size:13px; font-weight:800;">
              <tspan x="55" dy="0">Bar / Buffet</tspan>
              <tspan x="55" dy="16">Universitario</tspan>
            </text>

            <rect x="12" y="156" width="86" height="129" fill="#2a1144" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Centro de Estudiantes', 'Atención gremial, reclamos académicos y representación universitaria.')" />
            <text x="55" y="215" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Centro de</tspan>
              <tspan x="55" dy="16">Estudiantes</tspan>
            </text>

            <rect x="12" y="285" width="86" height="80" fill="#3a155e" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Fotocopiadora Planta Baja', 'Centro de copiado y venta de material de estudio.')" />
            <text x="55" y="322" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="55" dy="0">Fotocopiadora</tspan>
              <tspan x="55" dy="16">PB</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Patio PB', 'Salida de emergencia hacia el patio exterior.')">
              <rect x="12" y="365" width="86" height="55" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="365" x2="42" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="365" x2="58" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="365" x2="74" y2="420" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="396" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
              <text x="25" y="397" font-size="12" fill="#ffffff">🚪</text>
            </g>

            <rect x="12" y="420" width="86" height="135" fill="#351457" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Departamento Alumnos', 'Inscripciones, legajos, certificados de alumno regular y títulos.')" />
            <text x="55" y="480" class="room-label" style="font-size:12.5px; font-weight:800;">
              <tspan x="55" dy="0">Dpto.</tspan>
              <tspan x="55" dy="16">Alumnos</tspan>
            </text>

            <rect x="12" y="555" width="64" height="169" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Informes y Guardia Zeballos', 'Mesa de entradas, control de acceso y orientación a ingresantes.')" />
            <text x="44" y="635" class="room-label" style="font-size:11px;">
              <tspan x="44" dy="0">Informes y</tspan>
              <tspan x="44" dy="15">Guardia</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios PB Oeste', 'Batería de baños públicos de Planta Baja.')">
              <rect x="76" y="555" width="22" height="169" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="76" y1="610" x2="98" y2="610" stroke="#ffffff" stroke-width="1" />
              <line x1="76" y1="665" x2="98" y2="665" stroke="#ffffff" stroke-width="1" />
              <text x="87" y="640" class="sub-label" style="fill:#cbd5e1; font-size:8.5px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Ascensores PB', 'Batería de ascensores principales hacia pisos 1 al 5 y subsuelo.')">
              <rect x="245" y="310" width="60" height="45" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="310" x2="275" y2="355" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="348" width="20" height="6" fill="#facc15" />
              <rect x="280" y="348" width="20" height="6" fill="#facc15" />
              <text x="275" y="332" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:9.5px;">ASCENSORES</text>
            </g>

            <g>
              <text x="270" y="397" class="sub-label" style="fill:#e9d5ff; font-size:11px; font-weight:700; letter-spacing:1px;">HALL CENTRAL</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal PB', 'Escalera monumental hacia el primer piso y niveles superiores.')">
              <rect x="235" y="430" width="80" height="105" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="535" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="450" x2="275" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="470" x2="275" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="490" x2="275" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="510" x2="275" y2="510" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="450" x2="315" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="470" x2="315" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="490" x2="315" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="510" x2="315" y2="510" stroke="#86efac" stroke-width="1" />
              <text x="275" y="528" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <rect x="200" y="535" width="140" height="189" fill="#1b0c30" stroke="#a855f7" stroke-dasharray="6,4" stroke-width="1.5" />
            <text x="270" y="620" class="room-label" style="fill:#facc15; font-size:14px; font-weight:800; letter-spacing:1px;">
              <tspan x="270" dy="0">INGRESO</tspan>
              <tspan x="270" dy="18">PRINCIPAL</tspan>
            </text>
            <text x="270" y="665" class="sub-label" style="fill:#e9d5ff; font-size:11px;">Molinete de Acceso</text>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3 & 4: ALA ESTE                 -->
            <!-- ========================================== -->
            <rect x="452" y="16" width="76" height="140" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Administración Noreste PB', 'Oficinas contables y gestión administrativa.')" />
            <text x="490" y="80" class="room-label" style="font-size:11.5px;">
              <tspan x="490" dy="0">Administr.</tspan>
              <tspan x="490" dy="15">Noreste</tspan>
            </text>

            <rect x="320" y="156" width="92" height="199" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Bedelía Central PB', 'Asignación de aulas y control de presentismo docente.')" />
            <text x="366" y="250" class="room-label" style="font-size:13px; font-weight:700;">
              <tspan x="366" dy="0">Bedelía</tspan>
              <tspan x="366" dy="16">Central PB</tspan>
            </text>

            <rect x="340" y="535" width="188" height="189" fill="#291143" stroke="#ffffff" stroke-width="2.2" class="blueprint-room" onclick="selectRoom('Sala de Profesores PB', 'Sala de descanso docente, computadoras y consultas.')" />
            <text x="434" y="625" class="room-label" style="font-size:14px; font-weight:700;">
              <tspan x="434" dy="0">Sala de</tspan>
              <tspan x="434" dy="18">Profesores</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios PB Este', 'Batería de baños del sector este.')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 6. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="720" class="sub-label" style="fill:#cbd5e1; font-size:9.5px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (PLANTA BAJA)
            </text>
          </svg>
        `
      },
      '1': {
        title: '1° PISO',
        subtitle: 'Aulas 101-111, SAU / Becas, SeCyT, Sec. Académica, Lab. Informática y CEDI',
        badge: '1°',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN (BASE)   -->
            <!-- ========================================== -->
            <!-- Pasillo Longitudinal Oeste -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <!-- Pasillo Longitudinal Este -->
            <rect x="412" y="105" width="40" height="505" fill="#1b0c30" />
            <!-- Pasillo Central Transversal Totalmente Libre (Formando la 'H') -->
            <rect x="98" y="355" width="354" height="75" fill="#1b0c30" />

            <!-- Guías de circulación peatonal (sendero de pasillos) -->
            <g opacity="0.6">
              <!-- Pasillo Oeste -->
              <line x1="118" y1="100" x2="118" y2="600" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <!-- Pasillo Este -->
              <line x1="432" y1="110" x2="432" y2="605" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <!-- Conexión Transversal Central en 'H' -->
              <line x1="118" y1="392" x2="432" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <!-- Acceso a Escalera de Emergencia -->
              <line x1="118" y1="392" x2="45" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <!-- Acceso a Escalera Central -->
              <line x1="275" y1="392" x2="275" y2="435" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE                    -->
            <!-- ========================================== -->
            <!-- Oficinas Norte (Contrafrente) -->
            <rect x="12" y="16" width="42" height="46" fill="#281142" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina 1 (Norte)', 'Despacho administrativo en el contrafrente del 1° Piso.')" />
            <text x="33" y="43" class="room-label" style="font-size:10px;">Oficina</text>

            <rect x="54" y="16" width="44" height="46" fill="#281142" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina 2 (Norte)', 'Despacho de gestión institucional.')" />
            <text x="76" y="43" class="room-label" style="font-size:10px;">Oficina</text>

            <!-- Secretaría de Ciencia y Tecnología (SeCyT) -->
            <rect x="12" y="62" width="86" height="78" fill="#2c1248" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Secretaría de Ciencia y Tecnología (SeCyT)', 'Gestión de proyectos de investigación homologados, becas científicas y convocatorias I+D. Email: secyt.frro@gmail.com.')" />
            <text x="55" y="96" class="room-label" style="font-size:11.5px;">
              <tspan x="55" dy="0">Sec. Ciencia</tspan>
              <tspan x="55" dy="15">y Tecnología</tspan>
            </text>
            <text x="55" y="128" class="sub-label" style="fill:#c084fc; font-size:10px;">(SeCyT)</text>

            <!-- Secretaría de Asuntos Estudiantiles (SAU) -->
            <rect x="12" y="140" width="86" height="145" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Secretaría de Asuntos Universitarios (SAU)', 'Atención estudiantil, becas Progresar/Manuel Belgrano/UTN, deportes, pasantías laborales y tutorías. Horario: Lunes a viernes 09:00 a 13:00 y 15:00 a 20:00 hs.')" />
            <text x="55" y="195" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Secretaría de</tspan>
              <tspan x="55" dy="16">Asuntos</tspan>
              <tspan x="55" dy="16">Estudiantiles</tspan>
            </text>
            <text x="55" y="250" class="sub-label" style="fill:#d8b4fe; font-weight:800; font-size:11px;">(SAU / Becas)</text>

            <!-- Área de Tutoría -->
            <rect x="12" y="285" width="86" height="80" fill="#291144" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Área de Tutoría', 'Orientación y acompañamiento pedagógico para estudiantes de carreras de ingeniería.')" />
            <text x="55" y="322" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Área de</tspan>
              <tspan x="55" dy="15">Tutoría</tspan>
            </text>

            <!-- Escalera de Evacuación / Salida hacia Patio (Verde) -->
            <g class="blueprint-room" onclick="selectRoom('Escalera de Emergencia', 'Salida de emergencia reglamentaria hacia el patio exterior.')">
              <rect x="12" y="365" width="86" height="55" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="365" x2="42" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="365" x2="58" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="365" x2="74" y2="420" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="396" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
              <text x="25" y="397" font-size="12" fill="#ffffff">🚪</text>
            </g>

            <!-- Sala de Usos Múltiples -->
            <rect x="12" y="420" width="86" height="135" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala de Usos Múltiples 1° Piso', 'Espacio para conferencias, talleres y reuniones institucionales.')" />
            <text x="55" y="492" class="room-label" style="font-size:14px;">Sala</text>

            <!-- Dpto. de Concurso -->
            <rect x="12" y="555" width="64" height="57" fill="#271140" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Dpto. de Concurso', 'Gestión administrativa de llamados a concurso y designación docente.')" />
            <text x="44" y="582" class="room-label" style="font-size:10.5px;">
              <tspan x="44" dy="0">Dpto. de</tspan>
              <tspan x="44" dy="13">Concurso</tspan>
            </text>

            <!-- Secretaría Académica (Norte) -->
            <rect x="12" y="612" width="64" height="56" fill="#2d1348" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Secretaría Académica (Despacho 1)', 'Gestión curricular y articulación de planes de estudio.')" />
            <text x="44" y="638" class="sub-label" style="fill:#ffffff; font-size:10px; font-weight:700;">
              <tspan x="44" dy="0">Secretaría</tspan>
              <tspan x="44" dy="12">Académica</tspan>
            </text>

            <!-- Secretaría Académica (Sur - Frente Zeballos) -->
            <rect x="12" y="668" width="64" height="56" fill="#2d1348" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Secretaría Académica (Despacho 2)', 'Atención directiva y resoluciones académicas oficiales.')" />
            <text x="44" y="694" class="sub-label" style="fill:#ffffff; font-size:10px; font-weight:700;">
              <tspan x="44" dy="0">Secretaría</tspan>
              <tspan x="44" dy="12">Académica</tspan>
            </text>

            <!-- Sanitarios Oeste (Cubículos) -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Ala Oeste', 'Batería de baños y servicios higiénicos del sector administrativo.')">
              <rect x="76" y="595" width="22" height="129" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="76" y1="638" x2="98" y2="638" stroke="#ffffff" stroke-width="1" />
              <line x1="76" y1="681" x2="98" y2="681" stroke="#ffffff" stroke-width="1" />
              <text x="87" y="663" class="sub-label" style="fill:#cbd5e1; font-size:8.5px; font-weight:700;">Baños</text>
            </g>

            <!-- Sanitarios Norte (Pasillo Oeste) -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte Pasillo Oeste', 'Servicios higiénicos en el sector norte del pasillo oeste.')">
              <rect x="98" y="16" width="40" height="79" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="98" y1="42" x2="138" y2="42" stroke="#fff" stroke-width="1" />
              <line x1="98" y1="68" x2="138" y2="68" stroke="#fff" stroke-width="1" />
              <text x="118" y="58" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <!-- Laboratorio de Informática -->
            <rect x="138" y="16" width="92" height="134" fill="#201138" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Informática 1° Piso', 'Computadoras para cursado de programación, diseño asistido y prácticas de software.')" />
            <text x="184" y="85" class="room-label" style="font-size:13px;">
              <tspan x="184" dy="0">Laboratorio de</tspan>
              <tspan x="184" dy="18">Informática</tspan>
            </text>

            <!-- Secundario de Adultos -->
            <rect x="138" y="150" width="92" height="75" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Secundario de Adultos', 'Aulas y coordinación del programa de educación secundaria para adultos de UTN.')" />
            <text x="184" y="185" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Secundario de</tspan>
              <tspan x="184" dy="16">Adultos</tspan>
            </text>

            <!-- Acreditaciones -->
            <rect x="138" y="225" width="92" height="80" fill="#26103e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Acreditaciones', 'Oficina de acreditaciones de carreras de ingeniería de grado y posgrado ante CONEAU.')" />
            <text x="184" y="270" class="room-label" style="font-size:12px;">Acreditaciones</text>

            <!-- Audiovisual -->
            <rect x="138" y="305" width="92" height="50" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Audiovisual', 'Sala y depósito de equipamiento multimedia, proyectores y micrófonos para clases magistrales.')" />
            <text x="184" y="335" class="room-label" style="font-size:12px;">Audiovisual</text>

            <!-- CEDI -->
            <rect x="138" y="430" width="92" height="155" fill="#230f3b" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('CEDI (Centro de Diseño e Innovación)', 'Espacio de desarrollo tecnológico, proyectos de vinculación y maquetado de ingeniería.')" />
            <text x="184" y="512" class="room-label" style="font-size:16px; letter-spacing:1px;">Cedi</text>

            <!-- Dpto. Consejo Académico (Sur - Zeballos) -->
            <rect x="138" y="585" width="92" height="139" fill="#291143" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Dpto. Consejo Académico', 'Sala de sesiones del Consejo Directivo de la UTN FRRO y oficinas de gestión de actas.')" />
            <text x="184" y="650" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Dpto. Consejo</tspan>
              <tspan x="184" dy="16">Académico</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: TRAGALUCES Y CIRCULACIÓN -->
            <!-- ========================================== -->
            <!-- Patio de Luz Norte (Vacío estructural con 'X') -->
            <g>
              <rect x="230" y="16" width="90" height="289" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="16" x2="320" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="16" x2="230" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="165" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- Batería de Ascensores (2 cabinas frente a pasillo central) -->
            <g class="blueprint-room" onclick="selectRoom('Ascensores Centrales 1° Piso', 'Batería de dos ascensores accesibles con parada en 1° Piso.')">
              <rect x="245" y="310" width="60" height="45" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="310" x2="275" y2="355" stroke="#ffffff" stroke-width="1.5" />
              <!-- Puertas ascensor 1 -->
              <rect x="250" y="348" width="20" height="6" fill="#facc15" />
              <!-- Puertas ascensor 2 -->
              <rect x="280" y="348" width="20" height="6" fill="#facc15" />
              <text x="275" y="332" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:9.5px;">ASCENSORES</text>
            </g>

            <!-- Pasillo Central Transversal Texto -->
            <g>
              <text x="275" y="397" class="sub-label" style="fill:#e9d5ff; font-size:11px; font-weight:700; letter-spacing:1px;">PASILLO CENTRAL</text>
            </g>

            <!-- Escalera Central Principal (Subida / Bajada) - Verde -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Principal Central', 'Escalera central de gran capacidad que conecta Planta Baja, 1° Piso y pisos superiores.')">
              <rect x="235" y="430" width="80" height="105" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="535" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="450" x2="275" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="470" x2="275" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="490" x2="275" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="510" x2="275" y2="510" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="450" x2="315" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="470" x2="315" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="490" x2="315" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="510" x2="315" y2="510" stroke="#86efac" stroke-width="1" />
              <text x="275" y="528" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <!-- Patio de Luz Sur (Vacío estructural con 'X' hacia Zeballos) -->
            <g>
              <rect x="230" y="535" width="90" height="189" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="535" x2="320" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="535" x2="230" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="635" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <!-- Aula 102 -->
            <rect x="320" y="16" width="92" height="134" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 102', 'Aula en 1° Piso (Sector Central Norte). Capacidad aproximada 60 alumnos.')" />
            <text x="366" y="88" class="room-label" style="font-size:15px;">Aula 102</text>

            <!-- Aula 104 -->
            <rect x="320" y="150" width="92" height="155" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 104', 'Aula en 1° Piso (Sector Central). Pizarrón y bancos universitarios.')" />
            <text x="366" y="232" class="room-label" style="font-size:15px;">Aula 104</text>

            <!-- Fotocopiadora -->
            <rect x="320" y="305" width="92" height="50" fill="#3a155e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Fotocopiadora 1° Piso', 'Servicio de fotocopiado, impresión de apuntes de cátedra, guías y anillados.')" />
            <text x="366" y="336" class="room-label" style="font-size:11.5px;">Fotocopiadora</text>

            <!-- Área de Ingreso (UBICACIÓN CORRECTA: debajo del pasillo central transversal, frente a escaleras) -->
            <rect x="320" y="430" width="92" height="65" fill="#2c1148" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Área de Ingreso 1° Piso', 'Área de ingreso y distribución del 1° Piso.')" />
            <text x="366" y="460" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="366" dy="0">Área de</tspan>
              <tspan x="366" dy="15">Ingreso</tspan>
            </text>

            <!-- Archivo Documentación (debajo del Área de Ingreso) -->
            <rect x="320" y="495" width="92" height="90" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Archivo Documentación UTN-FRRo', 'Depósito y resguardo oficial de legajos, actas de examen y documentación histórica institucional.')" />
            <text x="366" y="535" class="room-label" style="font-size:11.5px;">
              <tspan x="366" dy="0">Archivo</tspan>
              <tspan x="366" dy="15">Documentación</tspan>
            </text>

            <!-- Aula 110 (Frente Zeballos) -->
            <rect x="320" y="585" width="92" height="139" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 110', 'Aula de gran capacidad en 1° Piso (Frente Calle Zeballos). Utilizada para cursado de materias de 1° a 5° año.')" />
            <text x="366" y="658" class="room-label" style="font-size:15px;">Aula 110</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <!-- Sanitarios Norte -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 1° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 101/102).')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- Sanitarios Sur -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 1° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 110/111).')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE (AULAS 101 A 111)   -->
            <!-- ========================================== -->
            <!-- Aula 101 -->
            <rect x="452" y="16" width="76" height="124" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 101', 'Aula en 1° Piso (Esquina Noreste). Luminosa y equipada con pupitres.')" />
            <text x="490" y="82" class="room-label" style="font-size:14.5px;">Aula 101</text>

            <!-- Aula 103 -->
            <rect x="452" y="140" width="76" height="130" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 103', 'Aula en 1° Piso (Ala Este). Cursado regular de asignaturas básicas y técnicas.')" />
            <text x="490" y="208" class="room-label" style="font-size:14.5px;">Aula 103</text>

            <!-- Aula 105 -->
            <rect x="452" y="270" width="76" height="140" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 105', 'Aula en 1° Piso (Ala Este Central). Cursado de Ingeniería y comisiones.')" />
            <text x="490" y="345" class="room-label" style="font-size:14.5px;">Aula 105</text>

            <!-- Aula 109 -->
            <rect x="452" y="410" width="76" height="155" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 109', 'Aula en 1° Piso (Ala Este). Cursado asignado para Ingeniería Civil y Sistemas.')" />
            <text x="490" y="492" class="room-label" style="font-size:14.5px;">Aula 109</text>

            <!-- Aula 111 (Esquina Zeballos / Este) -->
            <rect x="452" y="565" width="76" height="159" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 111', 'Aula en 1° Piso (Frente Calle Zeballos / Esquina Este). Gran capacidad.')" />
            <text x="490" y="648" class="room-label" style="font-size:14.5px;">Aula 111</text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="720" class="sub-label" style="fill:#cbd5e1; font-size:9.5px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (SUR)
            </text>
          </svg>
        `
      },
      '2': {
        title: '2° PISO',
        subtitle: 'Departamento Mecánica, Bedelía y Cantina',
        badge: '2°',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="105" width="40" height="505" fill="#1b0c30" />
            <rect x="98" y="355" width="354" height="75" fill="#1b0c30" />

            <g opacity="0.6">
              <line x1="118" y1="100" x2="118" y2="600" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="432" y1="110" x2="432" y2="605" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="432" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="45" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="275" y1="392" x2="275" y2="435" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE                    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="86" height="124" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Lab. Ensayos Mecánicos', 'Máquinas de tracción, compresión, dureza y fatiga de materiales.')" />
            <text x="55" y="70" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Lab. Ensayos</tspan>
              <tspan x="55" dy="16">Mecánicos</tspan>
            </text>

            <rect x="12" y="140" width="86" height="145" fill="#2a1144" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Aula 206 (CAD Mecánica)', 'Tableros de dibujo técnico y estaciones de diseño computarizado.')" />
            <text x="55" y="205" class="room-label" style="font-size:13px; font-weight:700;">
              <tspan x="55" dy="0">Aula 206</tspan>
              <tspan x="55" dy="16">(CAD)</tspan>
            </text>

            <rect x="12" y="285" width="86" height="80" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Aula 208', 'Aula teórica de materias troncales de Ingeniería Mecánica.')" />
            <text x="55" y="325" class="room-label" style="font-size:13px;">Aula 208</text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 2° Piso', 'Salida reglamentaria de escape hacia el patio exterior.')">
              <rect x="12" y="365" width="86" height="55" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="365" x2="42" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="365" x2="58" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="365" x2="74" y2="420" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="396" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
              <text x="25" y="397" font-size="12" fill="#ffffff">🚪</text>
            </g>

            <rect x="12" y="420" width="86" height="192" fill="#3c1563" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Cantina 2° Piso', 'Comedor estudiantil, menú diario y espacio para almorzar.')" />
            <text x="55" y="510" class="room-label" style="font-size:14px; font-weight:800;">
              <tspan x="55" dy="0">Cantina /</tspan>
              <tspan x="55" dy="18">Comedor</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios 2° Piso Oeste', 'Servicios higiénicos del sector comedor.')">
              <rect x="12" y="612" width="86" height="112" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="12" y1="668" x2="98" y2="668" stroke="#ffffff" stroke-width="1" />
              <text x="55" y="660" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <rect x="138" y="16" width="92" height="134" fill="#201138" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Termodinámica', 'Bancos de ensayo de fluidos, ciclos térmicos y motores de combustión.')" />
            <text x="184" y="80" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Lab. Termo-</tspan>
              <tspan x="184" dy="16">dinámica</tspan>
            </text>

            <rect x="138" y="150" width="92" height="75" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala Proyectos Mecánica', 'Diseño de elementos de máquinas y proyectos finales.')" />
            <text x="184" y="185" class="room-label" style="font-size:11.5px;">
              <tspan x="184" dy="0">Proyectos</tspan>
              <tspan x="184" dy="15">Mecánicos</tspan>
            </text>

            <rect x="138" y="225" width="92" height="80" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Departamento Mecánica', 'Dirección de carrera Ingeniería Mecánica y consultas docentes.')" />
            <text x="184" y="260" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="184" dy="0">Departamento</tspan>
              <tspan x="184" dy="15">Mecánica</tspan>
            </text>

            <rect x="138" y="305" width="92" height="50" fill="#260f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Bedelía 2° Piso', 'Gestión de aulas, asistencia de docentes de Mecánica y llaves.')" />
            <text x="184" y="336" class="room-label" style="font-size:11.5px; font-weight:700;">Bedelía 2°</text>

            <rect x="138" y="430" width="92" height="155" fill="#240f3b" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Sala Conferencias Mecánica', 'Exposiciones y presentaciones de cátedra.')" />
            <text x="184" y="505" class="room-label" style="font-size:12.5px;">
              <tspan x="184" dy="0">Sala</tspan>
              <tspan x="184" dy="16">Conferencias</tspan>
            </text>

            <rect x="138" y="585" width="92" height="139" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala de Estudio 2° Piso', 'Mesas con tomas de corriente para estudio individual o grupal.')" />
            <text x="184" y="650" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Sala de</tspan>
              <tspan x="184" dy="16">Estudio</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="289" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="16" x2="320" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="16" x2="230" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="165" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores 2° Piso', 'Batería de dos ascensores accesibles con parada en 2° Piso.')">
              <rect x="245" y="310" width="60" height="45" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="310" x2="275" y2="355" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="348" width="20" height="6" fill="#facc15" />
              <rect x="280" y="348" width="20" height="6" fill="#facc15" />
              <text x="275" y="332" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:9.5px;">ASCENSORES</text>
            </g>

            <g>
              <text x="275" y="397" class="sub-label" style="fill:#e9d5ff; font-size:11px; font-weight:700; letter-spacing:1px;">PASILLO CENTRAL</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 2° Piso', 'Escalera central que conecta con niveles superiores e inferiores.')">
              <rect x="235" y="430" width="80" height="105" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="535" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="450" x2="275" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="470" x2="275" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="490" x2="275" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="510" x2="275" y2="510" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="450" x2="315" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="470" x2="315" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="490" x2="315" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="510" x2="315" y2="510" stroke="#86efac" stroke-width="1" />
              <text x="275" y="528" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="535" width="90" height="189" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="535" x2="320" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="535" x2="230" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="635" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <rect x="320" y="16" width="92" height="134" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 202', 'Aula en 2° Piso (Sector Central Norte). Capacidad aproximada 60 alumnos.')" />
            <text x="366" y="88" class="room-label" style="font-size:15px;">Aula 202</text>

            <rect x="320" y="150" width="92" height="155" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 204', 'Aula en 2° Piso (Sector Central). Pizarrón y bancos universitarios.')" />
            <text x="366" y="232" class="room-label" style="font-size:15px;">Aula 204</text>

            <rect x="320" y="305" width="92" height="50" fill="#3a155e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Cómputos Mecánica', 'Sala de simulación numérica por elementos finitos (FEA/CFD).')" />
            <text x="366" y="336" class="room-label" style="font-size:11px;">Cómputos</text>

            <rect x="320" y="430" width="92" height="155" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Gabinete Docente Mecánica', 'Consultas de cátedra de Mecánica.')" />
            <text x="366" y="504" class="room-label" style="font-size:12px;">
              <tspan x="366" dy="0">Gabinete</tspan>
              <tspan x="366" dy="16">Docente</tspan>
            </text>

            <rect x="320" y="585" width="92" height="139" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 210', 'Aula de gran capacidad en 2° Piso (Frente Calle Zeballos).')" />
            <text x="366" y="658" class="room-label" style="font-size:15px;">Aula 210</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 2° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 201/202).')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 2° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 210/211).')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE (AULAS 201 A 211)   -->
            <!-- ========================================== -->
            <rect x="452" y="16" width="76" height="124" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 201', 'Aula en 2° Piso (Esquina Noreste). Luminosa y equipada con pupitres.')" />
            <text x="490" y="82" class="room-label" style="font-size:14.5px;">Aula 201</text>

            <rect x="452" y="140" width="76" height="130" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 203', 'Aula en 2° Piso (Ala Este). Cursado regular.')" />
            <text x="490" y="208" class="room-label" style="font-size:14.5px;">Aula 203</text>

            <rect x="452" y="270" width="76" height="140" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 205', 'Aula en 2° Piso (Ala Este Central). Cursado de materias técnicas.')" />
            <text x="490" y="345" class="room-label" style="font-size:14.5px;">Aula 205</text>

            <rect x="452" y="410" width="76" height="155" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 209', 'Aula en 2° Piso (Ala Este). Cursado regular.')" />
            <text x="490" y="492" class="room-label" style="font-size:14.5px;">Aula 209</text>

            <rect x="452" y="565" width="76" height="159" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 211', 'Aula en 2° Piso (Frente Calle Zeballos / Esquina Este). Gran capacidad.')" />
            <text x="490" y="648" class="room-label" style="font-size:14.5px;">Aula 211</text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="720" class="sub-label" style="fill:#cbd5e1; font-size:9.5px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (2° PISO)
            </text>
          </svg>
        `
      },
      '3': {
        title: '3° PISO',
        subtitle: 'Depto. Química, Lab Química General, Sala Informática',
        badge: '3°',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="105" width="40" height="505" fill="#1b0c30" />
            <rect x="98" y="355" width="354" height="75" fill="#1b0c30" />

            <g opacity="0.6">
              <line x1="118" y1="100" x2="118" y2="600" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="432" y1="110" x2="432" y2="605" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="432" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="45" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="275" y1="392" x2="275" y2="435" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE                    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="86" height="124" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Lab. Química Orgánica', 'Campanas de extracción, síntesis orgánica y reactivos.')" />
            <text x="55" y="70" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Lab. Química</tspan>
              <tspan x="55" dy="16">Orgánica</tspan>
            </text>

            <rect x="12" y="140" width="86" height="145" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Lab. Química Analítica', 'Titulaciones, cromatografía y espectrofotometría.')" />
            <text x="55" y="205" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Lab. Química</tspan>
              <tspan x="55" dy="16">Analítica</tspan>
            </text>

            <rect x="12" y="285" width="86" height="80" fill="#26103e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Depósito de Reactivos', 'Almacenamiento seguro bajo norma de solventes y reactivos.')" />
            <text x="55" y="322" class="room-label" style="font-size:11.5px;">
              <tspan x="55" dy="0">Depósito</tspan>
              <tspan x="55" dy="15">Reactivos</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 3° Piso', 'Salida reglamentaria de escape.')">
              <rect x="12" y="365" width="86" height="55" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="365" x2="42" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="365" x2="58" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="365" x2="74" y2="420" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="396" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
              <text x="25" y="397" font-size="12" fill="#ffffff">🚪</text>
            </g>

            <rect x="12" y="420" width="86" height="135" fill="#240f3b" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala Profesores Química', 'Reuniones de cátedra y consultas de Química.')" />
            <text x="55" y="480" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Sala Profesores</tspan>
              <tspan x="55" dy="16">(Química)</tspan>
            </text>

            <rect x="12" y="555" width="64" height="169" fill="#271140" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Investigación Química', 'Proyectos de ingeniería de procesos y catálisis.')" />
            <text x="44" y="635" class="room-label" style="font-size:10.5px;">
              <tspan x="44" dy="0">Investig.</tspan>
              <tspan x="44" dy="14">Química</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios 3° Piso Oeste', 'Servicios higiénicos del sector laboratorios.')">
              <rect x="76" y="555" width="22" height="169" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="76" y1="610" x2="98" y2="610" stroke="#ffffff" stroke-width="1" />
              <line x1="76" y1="665" x2="98" y2="665" stroke="#ffffff" stroke-width="1" />
              <text x="87" y="640" class="sub-label" style="fill:#cbd5e1; font-size:8.5px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <rect x="138" y="16" width="92" height="134" fill="#201138" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Química General', 'Prácticas para comisiones de 1er año de todas las ingenierías.')" />
            <text x="184" y="75" class="room-label" style="font-size:12.5px;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">Química</tspan>
              <tspan x="184" dy="16">General</tspan>
            </text>

            <rect x="138" y="150" width="92" height="75" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala de Balanzas', 'Balanzas analíticas sobre mesadas de granito antivibratorias.')" />
            <text x="184" y="185" class="room-label" style="font-size:11.5px;">
              <tspan x="184" dy="0">Sala de</tspan>
              <tspan x="184" dy="15">Balanzas</tspan>
            </text>

            <rect x="138" y="225" width="92" height="80" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Departamento Química', 'Dirección de la carrera de Ingeniería Química.')" />
            <text x="184" y="260" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="184" dy="0">Departamento</tspan>
              <tspan x="184" dy="15">Química</tspan>
            </text>

            <rect x="138" y="305" width="92" height="50" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Bedelía 3° Piso', 'Control de laboratorios y aulas del 3° piso.')" />
            <text x="184" y="336" class="room-label" style="font-size:11.5px;">Bedelía 3°</text>

            <rect x="138" y="430" width="92" height="155" fill="#230f3b" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Sala Informática Química', 'Simulación de reactores, Aspen Plus y cálculo termodinámico.')" />
            <text x="184" y="500" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Sala</tspan>
              <tspan x="184" dy="16">Informática</tspan>
              <tspan x="184" dy="16">(Química)</tspan>
            </text>

            <rect x="138" y="585" width="92" height="139" fill="#291143" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Seminarios Química', 'Defensas de proyectos finales de Ingeniería Química.')" />
            <text x="184" y="650" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Aula de</tspan>
              <tspan x="184" dy="16">Seminarios</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="289" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="16" x2="320" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="16" x2="230" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="165" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores 3° Piso', 'Batería de dos ascensores accesibles con parada en 3° Piso.')">
              <rect x="245" y="310" width="60" height="45" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="310" x2="275" y2="355" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="348" width="20" height="6" fill="#facc15" />
              <rect x="280" y="348" width="20" height="6" fill="#facc15" />
              <text x="275" y="332" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:9.5px;">ASCENSORES</text>
            </g>

            <g>
              <text x="275" y="397" class="sub-label" style="fill:#e9d5ff; font-size:11px; font-weight:700; letter-spacing:1px;">PASILLO CENTRAL</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 3° Piso', 'Escalera central que conecta con niveles superiores e inferiores.')">
              <rect x="235" y="430" width="80" height="105" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="535" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="450" x2="275" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="470" x2="275" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="490" x2="275" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="510" x2="275" y2="510" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="450" x2="315" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="470" x2="315" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="490" x2="315" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="510" x2="315" y2="510" stroke="#86efac" stroke-width="1" />
              <text x="275" y="528" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="535" width="90" height="189" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="535" x2="320" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="535" x2="230" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="635" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <rect x="320" y="16" width="92" height="134" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 302', 'Aula en 3° Piso (Sector Central Norte). Capacidad aproximada 60 alumnos.')" />
            <text x="366" y="88" class="room-label" style="font-size:15px;">Aula 302</text>

            <rect x="320" y="150" width="92" height="155" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 304', 'Aula en 3° Piso (Sector Central).')" />
            <text x="366" y="232" class="room-label" style="font-size:15px;">Aula 304</text>

            <rect x="320" y="305" width="92" height="50" fill="#3a155e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Depósito Instrumental 3°', 'Guarda de vidriería, pipetas y peachímetros.')" />
            <text x="366" y="336" class="room-label" style="font-size:11px;">Instrumental</text>

            <rect x="320" y="430" width="92" height="155" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Operaciones Unitarias', 'Cálculo de columnas de destilación e intercambiadores.')" />
            <text x="366" y="504" class="room-label" style="font-size:12px;">
              <tspan x="366" dy="0">Operaciones</tspan>
              <tspan x="366" dy="16">Unitarias</tspan>
            </text>

            <rect x="320" y="585" width="92" height="139" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 310', 'Aula de gran capacidad en 3° Piso (Frente Calle Zeballos).')" />
            <text x="366" y="658" class="room-label" style="font-size:15px;">Aula 310</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 3° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 301/302).')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 3° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 310/311).')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE (AULAS 301 A 311)   -->
            <!-- ========================================== -->
            <rect x="452" y="16" width="76" height="124" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 301', 'Aula en 3° Piso (Esquina Noreste). Luminosa y equipada con pupitres.')" />
            <text x="490" y="82" class="room-label" style="font-size:14.5px;">Aula 301</text>

            <rect x="452" y="140" width="76" height="130" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 303', 'Aula en 3° Piso (Ala Este). Cursado regular.')" />
            <text x="490" y="208" class="room-label" style="font-size:14.5px;">Aula 303</text>

            <rect x="452" y="270" width="76" height="140" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 305', 'Aula en 3° Piso (Ala Este Central).')" />
            <text x="490" y="345" class="room-label" style="font-size:14.5px;">Aula 305</text>

            <rect x="452" y="410" width="76" height="155" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 309', 'Aula en 3° Piso (Ala Este).')" />
            <text x="490" y="492" class="room-label" style="font-size:14.5px;">Aula 309</text>

            <rect x="452" y="565" width="76" height="159" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 311', 'Aula en 3° Piso (Frente Calle Zeballos / Esquina Este).')" />
            <text x="490" y="648" class="room-label" style="font-size:14.5px;">Aula 311</text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="720" class="sub-label" style="fill:#cbd5e1; font-size:9.5px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (3° PISO)
            </text>
          </svg>
        `
      },
      '4': {
        title: '4° PISO',
        subtitle: 'Depto. Civil, Ciencias Básicas, Lab Física, PAE',
        badge: '4°',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="105" width="40" height="505" fill="#1b0c30" />
            <rect x="98" y="355" width="354" height="75" fill="#1b0c30" />

            <g opacity="0.6">
              <line x1="118" y1="100" x2="118" y2="600" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="432" y1="110" x2="432" y2="605" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="432" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="45" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="275" y1="392" x2="275" y2="435" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE                    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="86" height="124" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Lab. Estructuras y Hormigón', 'Ensayos de probetas de hormigón, vigas y rotura de materiales.')" />
            <text x="55" y="70" class="room-label" style="font-size:11.5px;">
              <tspan x="55" dy="0">Lab. Estructuras</tspan>
              <tspan x="55" dy="15">y Hormigón</tspan>
            </text>

            <rect x="12" y="140" width="86" height="145" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Lab. Mecánica de Suelos', 'Límites de Atterberg, compactación Proctor y permeabilidad.')" />
            <text x="55" y="205" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Mecánica de</tspan>
              <tspan x="55" dy="16">Suelos (Civil)</tspan>
            </text>

            <rect x="12" y="285" width="86" height="80" fill="#26103e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Gabinete Topográfico', 'Teodolitos, niveles ópticos, GPS diferencial y estaciones totales.')" />
            <text x="55" y="322" class="room-label" style="font-size:11.5px;">
              <tspan x="55" dy="0">Gabinete</tspan>
              <tspan x="55" dy="15">Topográfico</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 4° Piso', 'Salida reglamentaria de escape.')">
              <rect x="12" y="365" width="86" height="55" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="365" x2="42" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="365" x2="58" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="365" x2="74" y2="420" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="396" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
              <text x="25" y="397" font-size="12" fill="#ffffff">🚪</text>
            </g>

            <rect x="12" y="420" width="86" height="135" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Departamento Civil', 'Dirección del Departamento de Ingeniería Civil y cátedras.')" />
            <text x="55" y="480" class="room-label" style="font-size:12.5px; font-weight:800;">
              <tspan x="55" dy="0">Departamento</tspan>
              <tspan x="55" dy="16">Civil</tspan>
            </text>

            <rect x="12" y="555" width="64" height="169" fill="#2d114a" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Programa Apoyo Estudiantil (PAE)', 'Tutorías personalizadas, orientación vocacional y apoyo académico.')" />
            <text x="44" y="635" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="44" dy="0">Programa</tspan>
              <tspan x="44" dy="15">PAE</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios 4° Piso Oeste', 'Servicios higiénicos del ala oeste.')">
              <rect x="76" y="555" width="22" height="169" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="76" y1="610" x2="98" y2="610" stroke="#ffffff" stroke-width="1" />
              <line x1="76" y1="665" x2="98" y2="665" stroke="#ffffff" stroke-width="1" />
              <text x="87" y="640" class="sub-label" style="fill:#cbd5e1; font-size:8.5px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <rect x="138" y="16" width="92" height="134" fill="#201138" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Ciencias Básicas', 'Cátedras de Álgebra, Análisis Matemático I y II.')" />
            <text x="184" y="75" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="184" dy="0">Ciencias</tspan>
              <tspan x="184" dy="16">Básicas</tspan>
            </text>

            <rect x="138" y="150" width="92" height="155" fill="#2c1247" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Física', 'Experimentos de óptica, electromagnetismo, cinemática y ondas.')" />
            <text x="184" y="225" class="room-label" style="font-size:12.5px;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">de Física</tspan>
            </text>

            <rect x="138" y="305" width="92" height="50" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Bedelía 4° Piso', 'Control de aulas de Civil y Básicas.')" />
            <text x="184" y="336" class="room-label" style="font-size:11.5px;">Bedelía 4°</text>

            <rect x="138" y="430" width="92" height="155" fill="#3b1660" stroke="#ffffff" stroke-width="2.2" class="blueprint-room" onclick="selectRoom('Auditorio 4° Piso', 'Charlas técnicas, disertaciones, defensas de tesis de grado.')" />
            <text x="184" y="500" class="room-label" style="font-size:13.5px; font-weight:800;">
              <tspan x="184" dy="0">Auditorio</tspan>
              <tspan x="184" dy="18">4° Piso</tspan>
            </text>

            <rect x="138" y="585" width="92" height="139" fill="#291143" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala Profesores Civil', 'Reuniones de cátedra docente.')" />
            <text x="184" y="650" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Sala</tspan>
              <tspan x="184" dy="16">Profesores</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="289" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="16" x2="320" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="16" x2="230" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="165" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores 4° Piso', 'Batería de dos ascensores accesibles con parada en 4° Piso.')">
              <rect x="245" y="310" width="60" height="45" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="310" x2="275" y2="355" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="348" width="20" height="6" fill="#facc15" />
              <rect x="280" y="348" width="20" height="6" fill="#facc15" />
              <text x="275" y="332" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:9.5px;">ASCENSORES</text>
            </g>

            <g>
              <text x="275" y="397" class="sub-label" style="fill:#e9d5ff; font-size:11px; font-weight:700; letter-spacing:1px;">PASILLO CENTRAL</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 4° Piso', 'Escalera central que conecta con niveles superiores e inferiores.')">
              <rect x="235" y="430" width="80" height="105" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="535" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="450" x2="275" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="470" x2="275" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="490" x2="275" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="510" x2="275" y2="510" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="450" x2="315" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="470" x2="315" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="490" x2="315" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="510" x2="315" y2="510" stroke="#86efac" stroke-width="1" />
              <text x="275" y="528" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="535" width="90" height="189" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="535" x2="320" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="535" x2="230" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="635" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <rect x="320" y="16" width="92" height="134" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 402', 'Aula en 4° Piso (Sector Central Norte). Capacidad aproximada 60 alumnos.')" />
            <text x="366" y="88" class="room-label" style="font-size:15px;">Aula 402</text>

            <rect x="320" y="150" width="92" height="155" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 404', 'Aula en 4° Piso (Sector Central).')" />
            <text x="366" y="232" class="room-label" style="font-size:15px;">Aula 404</text>

            <rect x="320" y="305" width="92" height="50" fill="#3a155e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Cómputos Civil', 'Modelado estructural (SAP2000, AutoCAD Civil 3D).')" />
            <text x="366" y="336" class="room-label" style="font-size:11px;">Cómputos Civil</text>

            <rect x="320" y="430" width="92" height="155" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Hidráulica y Vías de Comunicación', 'Cátedras de diseño vial e hidrología.')" />
            <text x="366" y="504" class="room-label" style="font-size:12px;">
              <tspan x="366" dy="0">Hidráulica</tspan>
              <tspan x="366" dy="16">y Vías</tspan>
            </text>

            <rect x="320" y="585" width="92" height="139" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 410', 'Aula de gran capacidad en 4° Piso (Frente Calle Zeballos).')" />
            <text x="366" y="658" class="room-label" style="font-size:15px;">Aula 410</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 4° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 401/402).')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 4° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 410/411).')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE (AULAS 401 A 411)   -->
            <!-- ========================================== -->
            <rect x="452" y="16" width="76" height="124" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 401', 'Aula en 4° Piso (Esquina Noreste). Luminosa y equipada con pupitres.')" />
            <text x="490" y="82" class="room-label" style="font-size:14.5px;">Aula 401</text>

            <rect x="452" y="140" width="76" height="130" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 403', 'Aula en 4° Piso (Ala Este). Cursado regular.')" />
            <text x="490" y="208" class="room-label" style="font-size:14.5px;">Aula 403</text>

            <rect x="452" y="270" width="76" height="140" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 405', 'Aula en 4° Piso (Ala Este Central).')" />
            <text x="490" y="345" class="room-label" style="font-size:14.5px;">Aula 405</text>

            <rect x="452" y="410" width="76" height="155" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 409', 'Aula en 4° Piso (Ala Este).')" />
            <text x="490" y="492" class="room-label" style="font-size:14.5px;">Aula 409</text>

            <rect x="452" y="565" width="76" height="159" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 411', 'Aula en 4° Piso (Frente Calle Zeballos / Esquina Este).')" />
            <text x="490" y="648" class="room-label" style="font-size:14.5px;">Aula 411</text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="720" class="sub-label" style="fill:#cbd5e1; font-size:9.5px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (4° PISO)
            </text>
          </svg>
        `
      },
      '5': {
        title: '5° PISO',
        subtitle: 'Depto. Sistemas de Información & Laboratorio Microsoft',
        badge: '5°',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="105" width="40" height="505" fill="#1b0c30" />
            <rect x="98" y="355" width="354" height="75" fill="#1b0c30" />

            <g opacity="0.6">
              <line x1="118" y1="100" x2="118" y2="600" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="432" y1="110" x2="432" y2="605" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="432" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="118" y1="392" x2="45" y2="392" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
              <line x1="275" y1="392" x2="275" y2="435" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE                    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="86" height="124" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio 1 ISI', 'Computadoras para desarrollo web, programación y bases de datos.')" />
            <text x="55" y="70" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Laboratorio 1</tspan>
              <tspan x="55" dy="16">(Software)</tspan>
            </text>

            <rect x="12" y="140" width="86" height="145" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio 2 ISI (Redes)', 'Routers Cisco, switches, racks de parcheo y simulación de redes.')" />
            <text x="55" y="205" class="room-label" style="font-size:12px;">
              <tspan x="55" dy="0">Laboratorio 2</tspan>
              <tspan x="55" dy="16">(Redes)</tspan>
            </text>

            <rect x="12" y="285" width="86" height="80" fill="#26103e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio 3 ISI (IA)', 'Servidores GPU para aprendizaje profundo y ciencia de datos.')" />
            <text x="55" y="322" class="room-label" style="font-size:11.5px;">
              <tspan x="55" dy="0">Laboratorio 3</tspan>
              <tspan x="55" dy="15">(Data & IA)</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 5° Piso', 'Salida reglamentaria de escape.')">
              <rect x="12" y="365" width="86" height="55" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="365" x2="42" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="365" x2="58" y2="420" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="365" x2="74" y2="420" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="396" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
              <text x="25" y="397" font-size="12" fill="#ffffff">🚪</text>
            </g>

            <rect x="12" y="420" width="86" height="135" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Departamento de Sistemas', 'Dirección de carrera, cátedras técnicas y gestión de laboratorios ISI.')" />
            <text x="55" y="475" class="room-label" style="font-size:12.5px; font-weight:800;">
              <tspan x="55" dy="0">Dpto. Ing.</tspan>
              <tspan x="55" dy="16">Sistemas (ISI)</tspan>
            </text>

            <rect x="12" y="555" width="64" height="169" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Bedelía Sistemas', 'Atención para cursado y comisiones de Sistemas.')" />
            <text x="44" y="635" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="44" dy="0">Bedelía</tspan>
              <tspan x="44" dy="15">Sistemas</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios 5° Piso Oeste', 'Servicios higiénicos del 5° piso.')">
              <rect x="76" y="555" width="22" height="169" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="76" y1="610" x2="98" y2="610" stroke="#ffffff" stroke-width="1" />
              <line x1="76" y1="665" x2="98" y2="665" stroke="#ffffff" stroke-width="1" />
              <text x="87" y="640" class="sub-label" style="fill:#cbd5e1; font-size:8.5px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <rect x="138" y="16" width="92" height="134" fill="#3a165f" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Microsoft', 'Certificaciones oficiales, desarrollo .NET, Azure y software empresarial.')" />
            <text x="184" y="75" class="room-label" style="font-size:12.5px; font-weight:800;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">Microsoft</tspan>
            </text>

            <rect x="138" y="150" width="92" height="155" fill="#201138" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio 4 AS400', 'Bases de datos relacionales, cómputo centralizado y mainframes.')" />
            <text x="184" y="225" class="room-label" style="font-size:12.5px;">
              <tspan x="184" dy="0">Laboratorio 4</tspan>
              <tspan x="184" dy="16">(AS400 / BD)</tspan>
            </text>

            <rect x="138" y="305" width="92" height="50" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Encargados Laboratorios ISI', 'Soporte técnico, mantenimiento de PCs y reserva de salas.')" />
            <text x="184" y="336" class="room-label" style="font-size:11px;">Encargados ISI</text>

            <rect x="138" y="430" width="92" height="155" fill="#240f3b" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio 5 Ciberseguridad', 'Auditoría de seguridad, pentesting y redes seguras.')" />
            <text x="184" y="500" class="room-label" style="font-size:12px;">
              <tspan x="184" dy="0">Laboratorio 5</tspan>
              <tspan x="184" dy="16">(Ciberseguridad)</tspan>
            </text>

            <rect x="138" y="585" width="92" height="139" fill="#291143" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('ISI Investiga', 'Grupo de investigación y desarrollo de software de la UTN FRRO.')" />
            <text x="184" y="650" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="184" dy="0">ISI</tspan>
              <tspan x="184" dy="16">Investiga</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="289" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="16" x2="320" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="16" x2="230" y2="305" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="165" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores 5° Piso', 'Batería de dos ascensores accesibles con parada terminal en 5° Piso.')">
              <rect x="245" y="310" width="60" height="45" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="310" x2="275" y2="355" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="348" width="20" height="6" fill="#facc15" />
              <rect x="280" y="348" width="20" height="6" fill="#facc15" />
              <text x="275" y="332" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:9.5px;">ASCENSORES</text>
            </g>

            <g>
              <text x="275" y="397" class="sub-label" style="fill:#e9d5ff; font-size:11px; font-weight:700; letter-spacing:1px;">PASILLO CENTRAL</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 5° Piso', 'Escalera central que conecta con todos los niveles inferiores.')">
              <rect x="235" y="430" width="80" height="105" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="535" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="450" x2="275" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="470" x2="275" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="490" x2="275" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="235" y1="510" x2="275" y2="510" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="450" x2="315" y2="450" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="470" x2="315" y2="470" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="490" x2="315" y2="490" stroke="#86efac" stroke-width="1" />
              <line x1="275" y1="510" x2="315" y2="510" stroke="#86efac" stroke-width="1" />
              <text x="275" y="528" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="535" width="90" height="189" fill="#10061c" stroke="#4a1c72" stroke-width="1.5" />
              <line x1="230" y1="535" x2="320" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <line x1="320" y1="535" x2="230" y2="724" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" />
              <text x="275" y="635" class="sub-label" style="fill:#7e22ce; font-size:10px; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <rect x="320" y="16" width="92" height="134" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 502', 'Aula y laboratorio en 5° Piso (Sector Central Norte).')" />
            <text x="366" y="88" class="room-label" style="font-size:15px;">Aula 502</text>

            <rect x="320" y="150" width="92" height="155" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 504', 'Aula en 5° Piso (Sector Central).')" />
            <text x="366" y="232" class="room-label" style="font-size:15px;">Aula 504</text>

            <rect x="320" y="305" width="92" height="50" fill="#3a155e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Depósito Sistemas', 'Almacén de discos, memorias y equipamiento de TI.')" />
            <text x="366" y="336" class="room-label" style="font-size:11px;">Depósito TI</text>

            <rect x="320" y="430" width="92" height="155" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala Profesores Sistemas', 'Espacio docente y reuniones de cátedra de Sistemas.')" />
            <text x="366" y="504" class="room-label" style="font-size:12px;">
              <tspan x="366" dy="0">Sala</tspan>
              <tspan x="366" dy="16">Profesores ISI</tspan>
            </text>

            <rect x="320" y="585" width="92" height="139" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 510', 'Aula de gran capacidad en 5° Piso (Frente Calle Zeballos).')" />
            <text x="366" y="658" class="room-label" style="font-size:15px;">Aula 510</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 5° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 501/502).')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 5° Piso', 'Batería de baños completos para alumnos y docentes (Sector Aulas 510/511).')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE (AULAS 501 A 511)   -->
            <!-- ========================================== -->
            <rect x="452" y="16" width="76" height="124" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 501', 'Aula en 5° Piso (Esquina Noreste). Luminosa y equipada con pupitres.')" />
            <text x="490" y="82" class="room-label" style="font-size:14.5px;">Aula 501</text>

            <rect x="452" y="140" width="76" height="130" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 503', 'Aula en 5° Piso (Ala Este). Cursado regular.')" />
            <text x="490" y="208" class="room-label" style="font-size:14.5px;">Aula 503</text>

            <rect x="452" y="270" width="76" height="140" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 505', 'Aula en 5° Piso (Ala Este Central).')" />
            <text x="490" y="345" class="room-label" style="font-size:14.5px;">Aula 505</text>

            <rect x="452" y="410" width="76" height="155" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 509', 'Aula en 5° Piso (Ala Este).')" />
            <text x="490" y="492" class="room-label" style="font-size:14.5px;">Aula 509</text>

            <rect x="452" y="565" width="76" height="159" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 511', 'Aula en 5° Piso (Frente Calle Zeballos / Esquina Este).')" />
            <text x="490" y="648" class="room-label" style="font-size:14.5px;">Aula 511</text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="720" class="sub-label" style="fill:#cbd5e1; font-size:9.5px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (5° PISO)
            </text>
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
      },
      {
        id: 'sec-academica',
        aliases: ['secretaria academica', 'academica', 'secretaria academica (despacho 1)', 'secretaria academica (despacho 2)', 'concursos', 'dpto de concurso'],
        title: 'Secretaría Académica',
        subtitle: 'Gestión curricular, planes de estudio, resoluciones y concursos docentes',
        category: 'Secretaría Central',
        categoryColor: 'bg-indigo-900/80 text-indigo-200 border-indigo-500/40',
        icon: 'fa-solid fa-book-bookmark text-indigo-400',
        floor: 1,
        floorBadge: '1° Piso',
        floorName: '1° Piso (Frente Calle Zeballos)',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 1° Piso',
        sections: [
          {
            title: 'Despacho y Coordinación Curricular',
            notes: 'Elaboración de planes de estudio, convalidaciones, equivalencias y seguimiento pedagógico de las carreras de ingeniería.'
          },
          {
            title: 'Departamento de Concurso',
            notes: 'Tramitación y gestión administrativa de concursos docentes y designaciones de cátedras.'
          }
        ]
      },
      {
        id: 'cedi',
        aliases: ['cedi', 'centro de diseno e innovacion', 'centro de diseno', 'cedi (centro de diseno e innovacion)'],
        title: 'CEDI (Centro de Diseño e Innovación)',
        subtitle: 'Espacio de desarrollo tecnológico, proyectos de vinculación y maquetado de ingeniería',
        category: 'Laboratorio',
        categoryColor: 'bg-violet-900/80 text-violet-200 border-violet-500/40',
        icon: 'fa-solid fa-cube text-violet-400',
        floor: 1,
        floorBadge: '1° Piso',
        floorName: '1° Piso (Sector Central)',
        address: 'Zeballos 1341 - 1° Piso',
        sections: [
          {
            title: 'Desarrollo e Innovación Tecnológica',
            notes: 'Área dedicada al trabajo interdisciplinario de proyectos de ingeniería, diseño asistido, modelado 3D y prototipado rápido.'
          }
        ]
      },
      {
        id: 'consejo-academico',
        aliases: ['consejo academico', 'dpto consejo academico', 'consejo directivo'],
        title: 'Dpto. Consejo Académico',
        subtitle: 'Sala de sesiones y secretaría del Consejo Directivo de la UTN FRRO',
        category: 'Secretaría Central',
        categoryColor: 'bg-purple-900/80 text-purple-200 border-purple-500/40',
        icon: 'fa-solid fa-scale-balanced text-purple-400',
        floor: 1,
        floorBadge: '1° Piso',
        floorName: '1° Piso (Frente Calle Zeballos)',
        phone: '(0341) 448-0102',
        address: 'Zeballos 1341 - 1° Piso',
        sections: [
          {
            title: 'Órgano de Gobierno de la Facultad',
            notes: 'Espacio donde sesiona el Consejo Directivo, integrado por representantes de docentes, graduados, estudiantes y no docentes.'
          }
        ]
      },
      {
        id: 'fotocopiadora-1p',
        aliases: ['fotocopiadora 1° piso', 'fotocopiadora 1 piso', 'fotocopiadora primer piso'],
        title: 'Fotocopiadora 1° Piso',
        subtitle: 'Servicio de fotocopiado, guías de cátedra, apuntes de cursado y anillados',
        category: 'Servicio',
        categoryColor: 'bg-fuchsia-900/80 text-fuchsia-200 border-fuchsia-500/40',
        icon: 'fa-solid fa-print text-fuchsia-400',
        floor: 1,
        floorBadge: '1° Piso',
        floorName: '1° Piso (Pasillo Central)',
        address: 'Zeballos 1341 - 1° Piso',
        sections: [
          {
            title: 'Punto de Impresión y Material de Estudio',
            notes: 'Punto de atención para retiro rápido de material de estudio, parciales resueltos y copias técnicas en el 1° piso.'
          }
        ]
      }
    ];

// Also attach to window for backwards/script-tag compatibility
if (typeof window !== 'undefined') {
  window.CAMPUS_FLOOR_DATA = floorData;
  window.CAMPUS_DEPTS_DATA = departmentDirectory;
}
