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
        subtitle: 'Decanato, Alumnado, Tesorería & Administración',
        badge: 'PB',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN          -->
            <!-- ========================================== -->
            <!-- Pasillo Longitudinal Oeste -->
            <rect x="98" y="55" width="38" height="635" fill="#1b0c30" />
            <!-- Pasillo Transversal Central -->
            <rect x="98" y="375" width="345" height="55" fill="#1b0c30" />
            <!-- Pasillos de Distribución Este / Ingreso -->
            <rect x="405" y="375" width="38" height="315" fill="#1b0c30" />

            <!-- Guías Verdes de Evacuación -->
            <g opacity="0.85">
              <line x1="117" y1="80" x2="117" y2="665" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="117,670 111,655 123,655" fill="#22c55e" />
              <polygon points="117,80 111,95 123,95" fill="#22c55e" />

              <!-- Conexión transversal central -->
              <line x1="117" y1="402" x2="45" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="42,402 55,396 55,408" fill="#22c55e" />

              <line x1="117" y1="402" x2="424" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <!-- Salida hacia escaleras centrales -->
              <line x1="260" y1="402" x2="260" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="260,450 254,435 266,435" fill="#22c55e" />
              <line x1="285" y1="402" x2="285" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="285,450 279,435 291,435" fill="#22c55e" />

              <!-- Salida hacia el Este (Calle Zeballos / Patio Principal) -->
              <line x1="424" y1="402" x2="520" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="525,402 510,396 510,408" fill="#22c55e" />

              <!-- Ramo de salida hacia la fachada sur -->
              <line x1="424" y1="402" x2="424" y2="685" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <line x1="424" y1="685" x2="505" y2="685" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="512,685 498,679 498,691" fill="#22c55e" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE (ADMINISTRACIÓN)   -->
            <!-- ========================================== -->
            <!-- Rendición de Cuentas / Oficina Norte -->
            <rect x="12" y="16" width="43" height="74" fill="#281140" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Rendición de Cuentas', 'Oficina contable de rendición de fondos y balances operativos.')" />
            <text x="33" y="52" class="room-label" style="font-size:9.5px;">
              <tspan x="33" dy="0">Rend.</tspan>
              <tspan x="33" dy="12">Cuentas</tspan>
            </text>

            <rect x="55" y="16" width="43" height="74" fill="#281140" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Administración', 'Oficina de trámites administrativos internos.')" />
            <text x="76" y="55" class="room-label" style="font-size:10px;">Oficina</text>

            <!-- Contable -->
            <rect x="12" y="90" width="86" height="85" fill="#2c1247" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Departamento Contable', 'Contabilidad general, registro de pagos y administración financiera.')" />
            <text x="55" y="137" class="room-label" style="font-size:12px; font-weight:700;">Contable</text>

            <!-- Tesorería -->
            <rect x="12" y="175" width="86" height="85" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Tesorería', 'Cobros, pagos a proveedores, cheques y trámites arancelarios.')" />
            <text x="55" y="222" class="room-label" style="font-size:12px; font-weight:700;">Tesorería</text>

            <!-- Dirección Administrativa -->
            <rect x="12" y="260" width="86" height="80" fill="#260f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dirección Administrativa', 'Dirección de administración general y despacho económico de la facultad.')" />
            <text x="55" y="298" class="room-label" style="font-size:10.5px; font-weight:700;">
              <tspan x="55" dy="0">Dir.</tspan>
              <tspan x="55" dy="14">Administrativo</tspan>
            </text>

            <!-- Escalera de Emergencia Oeste (Verde) -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia PB', 'Salida de emergencia hacia el patio exterior.')">
              <rect x="12" y="340" width="86" height="60" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="340" x2="42" y2="400" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="340" x2="58" y2="400" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="340" x2="74" y2="400" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="375" class="sub-label" style="fill:#ffffff; font-size:11px; font-weight:800;">ESCALERA</text>
            </g>

            <!-- Alumnado -->
            <rect x="12" y="400" width="86" height="110" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Departamento Alumnado', 'Atención para inscripción a materias, exámenes, certificados de alumno regular y analíticos.')" />
            <text x="55" y="460" class="room-label" style="font-size:12.5px; font-weight:700;">Alumnado</text>

            <!-- Dpto. Alumnado -->
            <rect x="12" y="510" width="86" height="95" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dpto. Alumnado (Oficinas)', 'Gestión de actas, resoluciones de cursado y trámites de estudiantes.')" />
            <text x="55" y="555" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">Dpto.</tspan>
              <tspan x="55" dy="15">Alumnado</tspan>
            </text>

            <!-- Títulos -->
            <rect x="12" y="605" width="86" height="55" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Oficina de Títulos', 'Tramitación de diplomas, diplomas de honor y legalizaciones ministeriales.')" />
            <text x="55" y="637" class="room-label" style="font-size:11px; font-weight:700;">Títulos</text>

            <!-- Títulos Dirección Académica (Sur) -->
            <rect x="12" y="660" width="86" height="64" fill="#220d36" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Títulos Dirección Académica', 'Despacho académico de emisión y registro de egresados.')" />
            <text x="55" y="688" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="55" dy="0">Títulos Dirección</tspan>
              <tspan x="55" dy="13">Académica</tspan>
            </text>

            <!-- Sanitarios Pasillo Oeste -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios PB Norte', 'Baños accesibles del sector administrativo.')">
              <rect x="98" y="16" width="38" height="39" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="117" y1="16" x2="117" y2="55" stroke="#fff" stroke-width="1" />
              <text x="117" y="38" class="sub-label" style="fill:#cbd5e1; font-size:9px; font-weight:700;">Baños</text>
            </g>
            <g class="blueprint-room" onclick="selectRoom('Sanitarios PB Sur', 'Baños de la planta baja sector Alumnado.')">
              <rect x="98" y="690" width="38" height="34" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="117" y1="690" x2="117" y2="724" stroke="#fff" stroke-width="1" />
              <text x="117" y="711" class="sub-label" style="fill:#cbd5e1; font-size:8px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: COLUMNA INTERMEDIA           -->
            <!-- ========================================== -->
            <!-- Archivo Norte -->
            <rect x="136" y="16" width="70" height="55" fill="#250f3d" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Archivo General', 'Depósito y resguardo documental de la institución.')" />
            <text x="171" y="48" class="room-label" style="font-size:10.5px;">Archivo</text>

            <!-- Departamento de Personal -->
            <rect x="136" y="71" width="70" height="95" fill="#2c1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Departamento de Personal', 'Gestión de legajos de docentes, no docentes y altas laborales.')" />
            <text x="171" y="112" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="171" dy="0">Departamento</tspan>
              <tspan x="171" dy="14">de Personal</tspan>
            </text>

            <!-- Departamento de Liquidación -->
            <rect x="136" y="166" width="70" height="74" fill="#281140" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Departamento de Liquidación', 'Liquidación de haberes y sueldos de personal universitario.')" />
            <text x="171" y="198" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="171" dy="0">Departamento</tspan>
              <tspan x="171" dy="13">Liquidación</tspan>
            </text>

            <!-- Mesa de Entrada -->
            <rect x="136" y="240" width="70" height="85" fill="#38155e" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Mesa de Entrada', 'Recepción de expedientes, notas oficiales, cartas y presentaciones formales.')" />
            <text x="171" y="278" class="room-label" style="font-size:11px; font-weight:800;">
              <tspan x="171" dy="0">Mesa de</tspan>
              <tspan x="171" dy="14">Entrada</tspan>
            </text>

            <!-- Cocina / Depósito junto a ascensores -->
            <rect x="136" y="325" width="35" height="50" fill="#200d33" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Cocina PB', 'Cocina y office de servicio.')" />
            <text x="153" y="354" class="room-label" style="font-size:9px;">Cocina</text>
            <rect x="171" y="325" width="35" height="50" fill="#1d0c2e" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito', 'Depósito de insumos.')" />
            <text x="188" y="354" class="room-label" style="font-size:9px;">Dep.</text>

            <!-- Crujía 2 Sur: Legajos y Actas -->
            <rect x="136" y="430" width="70" height="60" fill="#2b1245" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Legajos y Actas', 'Archivo seguro de actas de exámenes y legajos académicos.')" />
            <text x="171" y="458" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="171" dy="0">Legajos y</tspan>
              <tspan x="171" dy="13">Actas</tspan>
            </text>

            <!-- Depósito de Compras -->
            <rect x="136" y="490" width="70" height="50" fill="#240f3b" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Depósito de Compras', 'Almacén transitorio de mercaderías e insumos de compras.')" />
            <text x="171" y="514" class="room-label" style="font-size:9.5px;">
              <tspan x="171" dy="0">Depósito de</tspan>
              <tspan x="171" dy="12">Compras</tspan>
            </text>

            <!-- Oficina de Compras -->
            <rect x="136" y="540" width="70" height="55" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Oficina de Compras', 'Licitaciones, compras directas y adquisiciones de equipamiento.')" />
            <text x="171" y="566" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="171" dy="0">Oficina de</tspan>
              <tspan x="171" dy="13">Compras</tspan>
            </text>

            <!-- Centro de Fotocopiado -->
            <rect x="136" y="595" width="70" height="65" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Centro de Fotocopiado PB', 'Impresiones, copias y apuntes de cátedra.')" />
            <text x="171" y="626" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="171" dy="0">Centro de</tspan>
              <tspan x="171" dy="13">Fotocopiado</tspan>
            </text>

            <!-- Dpto. Patrimonio -->
            <rect x="136" y="660" width="70" height="64" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dpto. Patrimonio', 'Registro inventarial de bienes muebles y equipamiento de la facultad.')" />
            <text x="171" y="692" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="171" dy="0">Dpto.</tspan>
              <tspan x="171" dy="13">Patrimonio</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. NÚCLEO CENTRAL Y PATIOS                -->
            <!-- ========================================== -->
            <!-- Director RRHH y Oficinas Norte -->
            <rect x="206" y="16" width="46" height="42" fill="#250f3d" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Director RRHH', 'Despacho de la Dirección de Recursos Humanos.')" />
            <text x="229" y="34" class="room-label" style="font-size:8.5px; font-weight:700;">
              <tspan x="229" dy="0">Director</tspan>
              <tspan x="229" dy="11">RRHH</tspan>
            </text>

            <rect x="252" y="16" width="48" height="42" fill="#250f3d" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Oficina RRHH', 'Atención de trámites de personal.')" />
            <text x="276" y="39" class="room-label" style="font-size:9px;">Oficina</text>

            <rect x="206" y="58" width="94" height="42" fill="#281140" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Gestión', 'Gestión institucional.')" />
            <text x="253" y="82" class="room-label" style="font-size:10px;">Oficina</text>

            <!-- Patio de Luz Norte -->
            <g>
              <rect x="206" y="100" width="94" height="225" fill="#0d0519" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="206" y1="100" x2="300" y2="325" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="300" y1="100" x2="206" y2="325" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="253" y="215" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO LUZ</text>
            </g>

            <!-- Batería de Ascensores -->
            <g class="blueprint-room" onclick="selectRoom('Ascensores PB', 'Batería de ascensores principales que conectan con todos los pisos.')">
              <rect x="206" y="325" width="60" height="50" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="236" y1="325" x2="236" y2="375" stroke="#ffffff" stroke-width="1.5" />
              <rect x="210" y="368" width="22" height="7" fill="#facc15" />
              <rect x="240" y="368" width="22" height="7" fill="#facc15" />
              <text x="236" y="348" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:8.5px;">ASCENSORES</text>
            </g>

            <!-- Depósito / Tableros junto a ascensores -->
            <rect x="266" y="325" width="34" height="50" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Sala de Tableros', 'Tableros eléctricos generales de planta baja.')" />
            <text x="283" y="352" class="sub-label" style="fill:#cbd5e1; font-size:8px;">Tableros</text>

            <!-- Escalera Principal Central (Verde) -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Principal PB', 'Escalera de acceso a los pisos superiores.')">
              <rect x="206" y="430" width="94" height="85" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="253" y1="430" x2="253" y2="515" stroke="#22c55e" stroke-width="1.5" />
              <!-- Peldaños -->
              <line x1="206" y1="447" x2="300" y2="447" stroke="#86efac" stroke-width="1.2" />
              <line x1="206" y1="464" x2="300" y2="464" stroke="#86efac" stroke-width="1.2" />
              <line x1="206" y1="481" x2="300" y2="481" stroke="#86efac" stroke-width="1.2" />
              <line x1="206" y1="498" x2="300" y2="498" stroke="#86efac" stroke-width="1.2" />
              <text x="253" y="510" class="sub-label" style="fill:#ffffff; font-size:9.5px; font-weight:800;">ESCALERA CENTRAL</text>
            </g>

            <!-- Patio Central Sur / Hall de Distribución -->
            <g>
              <rect x="206" y="515" width="94" height="209" fill="#0d0519" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="206" y1="515" x2="300" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="300" y1="515" x2="206" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="253" y="625" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO LUZ SUR</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: DECANATO Y GESTIÓN INSTITUCIONAL -->
            <!-- ========================================== -->
            <!-- Oficina Decano -->
            <rect x="300" y="16" width="105" height="74" fill="#3b1763" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Oficina Decano', 'Despacho del Decano de la Universidad Tecnológica Nacional Facultad Regional Rosario.')" />
            <text x="352" y="55" class="room-label" style="font-size:12px; font-weight:800;">
              <tspan x="352" dy="0">Oficina</tspan>
              <tspan x="352" dy="15">Decano</tspan>
            </text>

            <!-- Recepción Decanato -->
            <rect x="300" y="90" width="75" height="110" fill="#2c1247" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Recepción Decanato', 'Recepción y antesala de audiencias con el Decano y autoridades.')" />
            <text x="337" y="148" class="room-label" style="font-size:11px; font-weight:700;">Recepción</text>

            <!-- Asesoría Legal -->
            <rect x="375" y="90" width="30" height="55" fill="#250f3d" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Asesoría Legal', 'Dictámenes jurídicos y asesoramiento normativo.')" />
            <text x="390" y="115" class="room-label" style="font-size:8px;">
              <tspan x="390" dy="0">Ases.</tspan>
              <tspan x="390" dy="10">Legal</tspan>
            </text>

            <!-- Oficina Vicedecano -->
            <rect x="375" y="145" width="30" height="55" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina Vicedecano', 'Despacho del Vicedecano de la Facultad.')" />
            <text x="390" y="170" class="room-label" style="font-size:8px; font-weight:700;">
              <tspan x="390" dy="0">Ofic.</tspan>
              <tspan x="390" dy="10">Vicedec.</tspan>
            </text>

            <!-- Secretaría Administrativa -->
            <rect x="300" y="200" width="75" height="125" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Secretaría Administrativa', 'Gestión administrativa del decanato y despacho.')" />
            <text x="337" y="258" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="337" dy="0">Secretaría</tspan>
              <tspan x="337" dy="14">Administrativa</tspan>
            </text>

            <!-- Asesoría Contable -->
            <rect x="375" y="200" width="30" height="125" fill="#240f3b" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Asesoría Contable', 'Auditoría contable y control presupuestario.')" />
            <text x="390" y="260" class="room-label" style="font-size:8px;">
              <tspan x="390" dy="0">Ases.</tspan>
              <tspan x="390" dy="10">Cont.</tspan>
            </text>

            <!-- Mayordomía -->
            <rect x="300" y="430" width="55" height="55" fill="#250f3d" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Mayordomía', 'Mantenimiento, llaves y logística interna de las instalaciones.')" />
            <text x="327" y="460" class="room-label" style="font-size:9.5px; font-weight:700;">Mayordomía</text>

            <!-- Mutual -->
            <rect x="355" y="430" width="50" height="55" fill="#291244" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Mutual UTN', 'Servicios mutuales para la comunidad tecnológica.')" />
            <text x="380" y="460" class="room-label" style="font-size:10px; font-weight:700;">Mutual</text>

            <!-- Patio / Hall Este -->
            <rect x="300" y="485" width="105" height="175" fill="#1b0c30" stroke="#4a1c72" stroke-width="1.6" />
            <text x="352" y="575" class="sub-label" style="fill:#a855f7; font-size:10.5px; font-weight:800;">PATIO ESTE</text>

            <!-- ========================================== -->
            <!-- 6. CRUJÍA 4: ALA ESTE (DOCENCIA / GREMIO)  -->
            <!-- ========================================== -->
            <!-- Baños Decanato Norte -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Decanato', 'Servicios higiénicos del sector Decanato.')">
              <rect x="405" y="16" width="38" height="74" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="405" y1="53" x2="443" y2="53" stroke="#fff" stroke-width="1" />
              <text x="424" y="55" class="sub-label" style="fill:#cbd5e1; font-size:9px; font-weight:700;">Baños</text>
            </g>

            <!-- Sala de Profesores PB -->
            <rect x="443" y="16" width="85" height="210" fill="#2f1350" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Sala de Profesores PB', 'Sala principal de descanso, casilleros y reuniones docentes.')" />
            <text x="485" y="118" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="485" dy="0">Sala de</tspan>
              <tspan x="485" dy="16">Profesores</tspan>
            </text>

            <!-- F.A.G.D.U.T. (Gremio Docente) -->
            <rect x="443" y="226" width="85" height="99" fill="#3b1763" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('F.A.G.D.U.T.', 'Asociación Gremial de Docentes de la Universidad Tecnológica Nacional.')" />
            <text x="485" y="278" class="room-label" style="font-size:13px; font-weight:800; letter-spacing:0.5px;">F.A.G.D.U.T.</text>

            <!-- Oficinas Este -->
            <rect x="443" y="430" width="85" height="55" fill="#260f3e" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Servicios', 'Atención y administración.')" />
            <text x="485" y="460" class="room-label" style="font-size:11px;">Oficina</text>

            <rect x="443" y="485" width="85" height="55" fill="#260f3e" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Apoyo', 'Oficina de apoyo operativo.')" />
            <text x="485" y="515" class="room-label" style="font-size:11px;">Oficina</text>

            <!-- Hall de Ingreso Principal (Frente Zeballos) -->
            <rect x="300" y="660" width="228" height="64" fill="#2d1348" stroke="#38bdf8" stroke-width="2" class="blueprint-room" onclick="selectRoom('Ingreso Principal Zeballos', 'Pórtico de ingreso peatonal institucional por Calle E. Zeballos 1341.')" />
            <text x="414" y="694" class="room-label" style="fill:#38bdf8; font-size:12px; font-weight:800; letter-spacing:1px;">
            </text>

            <!-- ========================================== -->
            <!-- 7. CONTORNO EXTERIOR Y LÍNEA MUNICIPAL    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="32" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:800;">L.M.</text>
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
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="98" y="375" width="354" height="55" fill="#1b0c30" />

            <!-- Guías Verdes de Evacuación -->
            <g opacity="0.85">
              <line x1="118" y1="80" x2="118" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="118,675 112,660 124,660" fill="#22c55e" />
              <polygon points="118,80 112,95 124,95" fill="#22c55e" />

              <line x1="432" y1="80" x2="432" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="432,675 426,660 438,660" fill="#22c55e" />
              <polygon points="432,80 426,95 438,95" fill="#22c55e" />

              <line x1="118" y1="402" x2="432" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <line x1="118" y1="402" x2="45" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="42,402 55,396 55,408" fill="#22c55e" />

              <!-- Descenso a escalera central -->
              <line x1="260" y1="402" x2="260" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="260,450 254,435 266,435" fill="#22c55e" />
              <line x1="285" y1="402" x2="285" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="285,450 279,435 291,435" fill="#22c55e" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE                    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="43" height="74" fill="#281140" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Investigación', 'Oficina de apoyo académico y proyectos.')" />
            <text x="33" y="55" class="room-label" style="font-size:10px;">Oficina</text>

            <rect x="55" y="16" width="43" height="74" fill="#281140" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Enlace', 'Oficina de enlace institucional.')" />
            <text x="76" y="55" class="room-label" style="font-size:10px;">Oficina</text>

            <rect x="12" y="90" width="86" height="85" fill="#2a1045" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Secretaría de Ciencia y Tecnología (SeCyT)', 'Promoción, financiamiento y seguimiento de proyectos de I+D+i, becas de investigación y publicaciones científicas.')" />
            <text x="55" y="125" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">Sec. Ciencia</tspan>
              <tspan x="55" dy="14">y Tecnología</tspan>
              <tspan x="55" dy="13" font-size="9.5px">(SeCyT)</tspan>
            </text>

            <rect x="12" y="175" width="86" height="120" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Secretaría de Asuntos Estudiantiles (SAU)', 'Atención estudiantil, becas Progresar/Manuel Belgrano/UTN, deportes, pasantías laborales y tutorías. Horario: Lunes a viernes 09:00 a 13:00 y 15:00 a 20:00 hs.')" />
            <text x="55" y="224" class="room-label" style="font-size:11.5px; font-weight:700;">
              <tspan x="55" dy="0">Secretaría de</tspan>
              <tspan x="55" dy="15">Asuntos</tspan>
              <tspan x="55" dy="15">Estudiantiles</tspan>
              <tspan x="55" dy="14" font-size="9px">(SAU / Becas)</tspan>
            </text>

            <rect x="12" y="295" width="86" height="75" fill="#260f3e" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Área de Tutoría', 'Acompañamiento pedagógico y tutorías universitarias para ingresantes y alumnos de grado.')" />
            <text x="55" y="332" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="55" dy="0">Área de</tspan>
              <tspan x="55" dy="16">Tutoría</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 1° Piso', 'Salida reglamentaria de escape por escalera protegida contra incendios.')">
              <rect x="12" y="370" width="86" height="60" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="370" x2="42" y2="430" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="370" x2="58" y2="430" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="370" x2="74" y2="430" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="405" class="sub-label" style="fill:#ffffff; font-size:11px; font-weight:800;">ESCALERA</text>
            </g>

            <rect x="12" y="430" width="86" height="150" fill="#250f3d" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Sala 1° Piso', 'Espacio de reuniones, eventos institucionales y comisiones de trabajo.')" />
            <text x="55" y="505" class="room-label" style="font-size:15px; font-weight:700;">Sala</text>

            <rect x="12" y="580" width="60" height="42" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dpto. de Concurso', 'Gestión de concursos docentes y jurados evaluadores.')" />
            <text x="42" y="601" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="42" dy="0">Dpto. de</tspan>
              <tspan x="42" dy="12">Concurso</tspan>
            </text>

            <rect x="12" y="622" width="60" height="50" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Secretaría Académica (Despacho)', 'Despacho de planes de estudio, equivalencias y resoluciones académicas.')" />
            <text x="42" y="647" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="42" dy="0">Secretaría</tspan>
              <tspan x="42" dy="12">Académica</tspan>
            </text>

            <rect x="12" y="672" width="60" height="52" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Secretaría Académica (Atención)', 'Atención docente, trámites de cursado y programas de asignaturas.')" />
            <text x="42" y="698" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="42" dy="0">Secretaría</tspan>
              <tspan x="42" dy="12">Académica</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Pasillo Oeste', 'Servicios higiénicos completos.')">
              <rect x="72" y="622" width="26" height="102" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="72" y1="673" x2="98" y2="673" stroke="#ffffff" stroke-width="1" />
              <text x="85" y="660" class="sub-label" style="fill:#cbd5e1; font-size:7.5px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte Pasillo Oeste', 'Servicios higiénicos cabecera norte.')">
              <rect x="98" y="16" width="40" height="55" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="98" y1="44" x2="138" y2="44" stroke="#ffffff" stroke-width="1" />
              <text x="118" y="35" class="sub-label" style="fill:#cbd5e1; font-size:9px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <rect x="138" y="16" width="92" height="130" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Informática 1° Piso', 'Equipamiento informático para cátedras universitarias y exámenes de programación.')" />
            <text x="184" y="75" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="184" dy="0">Laboratorio de</tspan>
              <tspan x="184" dy="16">Informática</tspan>
            </text>

            <rect x="138" y="146" width="92" height="90" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Secundario de Adultos', 'Cátedras y actividades formativas del programa secundario de adultos.')" />
            <text x="184" y="185" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="184" dy="0">Secundario de</tspan>
              <tspan x="184" dy="16">Adultos</tspan>
            </text>

            <rect x="138" y="236" width="92" height="95" fill="#220e3a" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Acreditaciones', 'Comisión de seguimiento y acreditaciones de carreras de grado (CONEAU).')" />
            <text x="184" y="288" class="room-label" style="font-size:12px; font-weight:700;">Acreditaciones</text>

            <rect x="138" y="331" width="92" height="44" fill="#321454" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Audiovisual', 'Equipos multimedia, proyectores, sonido y soporte audiovisual de aulas.')" />
            <text x="184" y="358" class="room-label" style="font-size:11.5px; font-weight:700;">Audiovisual</text>

            <rect x="138" y="430" width="92" height="175" fill="#2b1147" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Cedi', 'Centro de Investigación, Diseño e Innovación Tecnológica.')" />
            <text x="184" y="522" class="room-label" style="font-size:18px; font-weight:800; letter-spacing:1px;">Cedi</text>

            <rect x="138" y="605" width="92" height="119" fill="#271141" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Dpto. Consejo Académico', 'Despacho de reuniones y secretaría del Consejo Directivo de la UTN FRRo.')" />
            <text x="184" y="658" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="184" dy="0">Dpto. Consejo</tspan>
              <tspan x="184" dy="16">Académico</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="310" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="16" x2="320" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="16" x2="230" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="175" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores 1° Piso', 'Batería de dos ascensores principales accesibles.')">
              <rect x="245" y="326" width="60" height="49" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="326" x2="275" y2="375" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="368" width="20" height="7" fill="#facc15" />
              <rect x="280" y="368" width="20" height="7" fill="#facc15" />
              <text x="275" y="348" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:8.5px;">ASCENSORES</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 1° Piso', 'Escalera central que comunica con Planta Baja y pisos superiores.')">
              <rect x="235" y="430" width="80" height="110" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="540" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="452" x2="315" y2="452" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="474" x2="315" y2="474" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="496" x2="315" y2="496" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="518" x2="315" y2="518" stroke="#86efac" stroke-width="1.2" />
              <text x="275" y="534" class="sub-label" style="fill:#ffffff; font-size:10px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="540" width="90" height="184" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="540" x2="320" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="540" x2="230" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="635" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <rect x="320" y="16" width="92" height="144" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 102', 'Aula de cursado presencial en 1° Piso (Sector Central Norte).')" />
            <text x="366" y="94" class="room-label" style="font-size:15px; font-weight:700;">Aula 102</text>

            <rect x="320" y="160" width="92" height="165" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 104', 'Aula de gran capacidad en 1° Piso.')" />
            <text x="366" y="248" class="room-label" style="font-size:15px; font-weight:700;">Aula 104</text>

            <rect x="320" y="325" width="92" height="50" fill="#381458" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Fotocopiadora 1° Piso', 'Servicio de fotocopiado y digitalización de material didáctico.')" />
            <text x="366" y="355" class="room-label" style="font-size:11px; font-weight:700;">Fotocopiadora</text>

            <!-- Área de Ingreso: Ubicación exacta según plano real bajo el pasillo -->
            <rect x="320" y="430" width="92" height="60" fill="#3b1763" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Área de Ingreso', 'Mesa de recepción y acceso a dependencias del 1° Piso.')" />
            <text x="366" y="465" class="room-label" style="font-size:11.5px; font-weight:800;">
              <tspan x="366" dy="0">Área de</tspan>
              <tspan x="366" dy="14">Ingreso</tspan>
            </text>

            <!-- Archivo Documentación UTN-FRRo -->
            <rect x="320" y="490" width="92" height="95" fill="#240f3b" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Archivo Documentación UTN-FRRo', 'Resguardo y conservación del patrimonio documental institucional.')" />
            <text x="366" y="532" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="366" dy="0">Archivo</tspan>
              <tspan x="366" dy="14">Documentación</tspan>
            </text>

            <!-- Aula 110 -->
            <rect x="320" y="585" width="92" height="139" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 110', 'Aula de teoría en 1° Piso (Frente Calle Zeballos).')" />
            <text x="366" y="658" class="room-label" style="font-size:15px; font-weight:700;">Aula 110</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 1° Piso', 'Batería de baños completos (Sector Aulas 101/102).')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 1° Piso', 'Batería de baños completos (Sector Aulas 110/111).')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE (AULAS 101 A 111)   -->
            <!-- ========================================== -->
            <rect x="452" y="16" width="76" height="154" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 101', 'Aula de cursado regular en 1° Piso (Esquina Noreste).')" />
            <text x="490" y="98" class="room-label" style="font-size:15px; font-weight:700;">Aula 101</text>

            <rect x="452" y="170" width="76" height="120" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 103', 'Aula en 1° Piso (Ala Este). Cursado regular.')" />
            <text x="490" y="235" class="room-label" style="font-size:15px; font-weight:700;">Aula 103</text>

            <rect x="452" y="290" width="76" height="135" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 105', 'Aula en 1° Piso (Ala Este Central).')" />
            <text x="490" y="362" class="room-label" style="font-size:15px; font-weight:700;">Aula 105</text>

            <rect x="452" y="425" width="76" height="155" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 109', 'Aula en 1° Piso (Ala Este Sur).')" />
            <text x="490" y="508" class="room-label" style="font-size:15px; font-weight:700;">Aula 109</text>

            <rect x="452" y="580" width="76" height="144" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 111', 'Aula en 1° Piso (Frente Calle Zeballos / Esquina Este).')" />
            <text x="490" y="658" class="room-label" style="font-size:15px; font-weight:700;">Aula 111</text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="32" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (1° PISO)
            </text>
          </svg>
        `
      },
      '2': {
        title: '2° PISO',
        subtitle: 'Depto. Mecánica & Aulas 201-219',
        badge: '2°',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="98" y="375" width="354" height="55" fill="#1b0c30" />

            <!-- Guías Verdes de Evacuación -->
            <g opacity="0.85">
              <line x1="118" y1="80" x2="118" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="118,675 112,660 124,660" fill="#22c55e" />
              <polygon points="118,80 112,95 124,95" fill="#22c55e" />

              <line x1="432" y1="80" x2="432" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="432,675 426,660 438,660" fill="#22c55e" />
              <polygon points="432,80 426,95 438,95" fill="#22c55e" />

              <line x1="118" y1="402" x2="432" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <line x1="118" y1="402" x2="45" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="42,402 55,396 55,408" fill="#22c55e" />

              <line x1="260" y1="402" x2="260" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="260,450 254,435 266,435" fill="#22c55e" />
              <line x1="285" y1="402" x2="285" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="285,450 279,435 291,435" fill="#22c55e" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE (MECÁNICA)         -->
            <!-- ========================================== -->
            <!-- Aula 212 -->
            <rect x="12" y="16" width="86" height="130" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 212', 'Aula de teoría de Ingeniería Mecánica y materias de grado.')" />
            <text x="55" y="86" class="room-label" style="font-size:15px; font-weight:700;">Aula 212</text>

            <!-- Biblioteca Dpto Mecánica Aula 214 -->
            <rect x="12" y="146" width="86" height="120" fill="#281140" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Biblioteca Dpto Mecánica (Aula 214)', 'Biblioteca especializada del Departamento de Ingeniería Mecánica.')" />
            <text x="55" y="196" class="room-label" style="font-size:10.5px; font-weight:700;">
              <tspan x="55" dy="0">Biblioteca Dpto</tspan>
              <tspan x="55" dy="14">Mecánica</tspan>
              <tspan x="55" dy="14" font-size="9.5px">(Aula 214)</tspan>
            </text>

            <!-- Dpto. Ing. Mecánica -->
            <rect x="12" y="266" width="86" height="65" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Dpto. Ing. Mecánica', 'Dirección de carrera, secretaría técnica y cátedras de Ingeniería Mecánica.')" />
            <text x="55" y="298" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">Dpto. Ing.</tspan>
              <tspan x="55" dy="14">Mecánica</tspan>
            </text>

            <!-- Depósito junto a escalera -->
            <rect x="12" y="331" width="30" height="44" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Mecánica', 'Depósito de instrumental de laboratorio de mecánica.')" />
            <text x="27" y="356" class="room-label" style="font-size:8px;">Dep.</text>

            <!-- Escalera de Emergencia Oeste (Verde) -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 2° Piso', 'Salida reglamentaria de escape por escalera protegida contra incendios.')">
              <rect x="42" y="331" width="56" height="44" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="60" y1="331" x2="60" y2="375" stroke="#86efac" stroke-width="1.2" />
              <line x1="78" y1="331" x2="78" y2="375" stroke="#86efac" stroke-width="1.2" />
              <text x="70" y="358" class="sub-label" style="fill:#ffffff; font-size:9.5px; font-weight:800;">ESCALERA</text>
            </g>

            <!-- Aula 216 -->
            <rect x="12" y="375" width="86" height="195" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 216', 'Aula de cursado regular de comisiones numerosas.')" />
            <text x="55" y="476" class="room-label" style="font-size:15px; font-weight:700;">Aula 216</text>

            <!-- Laboratorio Metalografía -->
            <rect x="12" y="570" width="86" height="154" fill="#250f3d" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Metalografía', 'Ensayos de tracción, microscopía metalográfica y tratamientos térmicos.')" />
            <text x="55" y="645" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio</tspan>
              <tspan x="55" dy="16">Metalografía</tspan>
            </text>

            <!-- Sanitarios Pasillo Oeste -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 2° Piso', 'Baños del extremo norte.')">
              <rect x="98" y="16" width="40" height="55" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="98" y1="44" x2="138" y2="44" stroke="#ffffff" stroke-width="1" />
              <text x="118" y="35" class="sub-label" style="fill:#cbd5e1; font-size:9px; font-weight:700;">Baños</text>
            </g>
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 2° Piso', 'Baños del extremo sur.')">
              <rect x="98" y="665" width="40" height="59" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="98" y1="695" x2="138" y2="695" stroke="#ffffff" stroke-width="1" />
              <text x="118" y="685" class="sub-label" style="fill:#cbd5e1; font-size:9px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <!-- Aula 213 -->
            <rect x="138" y="16" width="92" height="130" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 213', 'Aula de cursado presencial en 2° Piso.')" />
            <text x="184" y="86" class="room-label" style="font-size:15px; font-weight:700;">Aula 213</text>

            <!-- Aula (Centro Norte) -->
            <rect x="138" y="146" width="92" height="85" fill="#2a1144" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Aula 2° Piso', 'Aula para clases teóricas y prácticas.')" />
            <text x="184" y="194" class="room-label" style="font-size:14px; font-weight:700;">Aula</text>

            <!-- Soporte Informático -->
            <rect x="138" y="231" width="92" height="55" fill="#240f3b" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Soporte Informático 2° Piso', 'Mantenimiento de equipos, soporte a cátedras y conectividad.')" />
            <text x="184" y="258" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="184" dy="0">Soporte</tspan>
              <tspan x="184" dy="13">Informático</tspan>
            </text>

            <!-- Bedelía -->
            <rect x="138" y="286" width="92" height="45" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Bedelía 2° Piso', 'Atención para llaves de aulas, asistencia docente y equipamiento didáctico.')" />
            <text x="184" y="314" class="room-label" style="font-size:11.5px; font-weight:700;">Bedelía</text>

            <!-- Crujía 2 Sur: Aula 217 -->
            <rect x="138" y="430" width="92" height="145" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 217', 'Aula de teoría de comisiones regulares.')" />
            <text x="184" y="508" class="room-label" style="font-size:15px; font-weight:700;">Aula 217</text>

            <!-- Aula 219 (Frente Zeballos) -->
            <rect x="138" y="575" width="92" height="149" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 219', 'Aula de gran tamaño orientada hacia el frente sur.')" />
            <text x="184" y="654" class="room-label" style="font-size:15px; font-weight:700;">Aula 219</text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="310" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="16" x2="320" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="16" x2="230" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="175" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores 2° Piso', 'Batería de dos ascensores principales accesibles.')">
              <rect x="245" y="326" width="60" height="49" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="326" x2="275" y2="375" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="368" width="20" height="7" fill="#facc15" />
              <rect x="280" y="368" width="20" height="7" fill="#facc15" />
              <text x="275" y="348" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:8.5px;">ASCENSORES</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 2° Piso', 'Escalera central que comunica con los pisos superior e inferior.')">
              <rect x="235" y="430" width="80" height="110" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="540" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="452" x2="315" y2="452" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="474" x2="315" y2="474" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="496" x2="315" y2="496" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="518" x2="315" y2="518" stroke="#86efac" stroke-width="1.2" />
              <text x="275" y="534" class="sub-label" style="fill:#ffffff; font-size:10px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="540" width="90" height="184" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="540" x2="320" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="540" x2="230" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="635" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <!-- Aula 202 -->
            <rect x="320" y="16" width="92" height="144" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 202', 'Aula de cursado presencial en 2° Piso (Sector Central Norte).')" />
            <text x="366" y="94" class="room-label" style="font-size:15px; font-weight:700;">Aula 202</text>

            <!-- Aula 204 -->
            <rect x="320" y="160" width="92" height="145" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 204', 'Aula en 2° Piso.')" />
            <text x="366" y="238" class="room-label" style="font-size:15px; font-weight:700;">Aula 204</text>

            <!-- Nodo -->
            <rect x="320" y="305" width="92" height="70" fill="#3a165f" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Nodo Informático', 'Nodo de comunicaciones y enlace de datos.')" />
            <text x="366" y="345" class="room-label" style="font-size:12.5px; font-weight:800;">Nodo</text>

            <!-- Área de Información y Comunicación -->
            <rect x="320" y="430" width="92" height="85" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Área de Información y Comunicación', 'Dirección de comunicación, prensa y portal institucional.')" />
            <text x="366" y="468" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="366" dy="0">Área de Información</tspan>
              <tspan x="366" dy="13">y Comunicación</tspan>
            </text>

            <!-- Sistematización de Datos -->
            <rect x="320" y="515" width="92" height="55" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sistematización de Datos', 'Procesamiento de datos estadísticos y encuestas académicas.')" />
            <text x="366" y="542" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="366" dy="0">Sistematización</tspan>
              <tspan x="366" dy="12">de Datos</tspan>
            </text>

            <!-- Aula 210 -->
            <rect x="320" y="570" width="92" height="154" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 210', 'Aula en 2° Piso (Frente Calle Zeballos).')" />
            <text x="366" y="652" class="room-label" style="font-size:15px; font-weight:700;">Aula 210</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 2° Piso', 'Batería de baños completos.')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 2° Piso', 'Batería de baños completos.')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE (AULAS Y CENTRO EST.) -->
            <!-- ========================================== -->
            <!-- Aula 201 -->
            <rect x="452" y="16" width="76" height="144" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 201', 'Aula en 2° Piso (Esquina Noreste).')" />
            <text x="490" y="94" class="room-label" style="font-size:15px; font-weight:700;">Aula 201</text>

            <!-- Laboratorio de Informática -->
            <rect x="452" y="160" width="76" height="120" fill="#2e124c" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Informática 2° Piso', 'Laboratorio con PCs para comisiones prácticas.')" />
            <text x="490" y="214" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="490" dy="0">Laboratorio de</tspan>
              <tspan x="490" dy="15">Informática</tspan>
            </text>

            <!-- Aula 203 -->
            <rect x="452" y="280" width="76" height="95" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 203', 'Aula de cursado regular.')" />
            <text x="490" y="332" class="room-label" style="font-size:15px; font-weight:700;">Aula 203</text>

            <!-- Centro de Estudiantes -->
            <rect x="452" y="375" width="76" height="95" fill="#38155e" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Centro de Estudiantes', 'Sede gremial estudiantil, atención de trámites, apuntes y actividades gremiales.')" />
            <text x="490" y="420" class="room-label" style="font-size:11.5px; font-weight:800;">
              <tspan x="490" dy="0">Centro de</tspan>
              <tspan x="490" dy="15">Estudiantes</tspan>
            </text>

            <!-- Aula 209 -->
            <rect x="452" y="470" width="76" height="120" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 209', 'Aula en 2° Piso (Ala Este Sur).')" />
            <text x="490" y="535" class="room-label" style="font-size:15px; font-weight:700;">Aula 209</text>

            <!-- Aula 211 -->
            <rect x="452" y="590" width="76" height="134" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 211', 'Aula en 2° Piso (Frente Calle Zeballos / Esquina Este).')" />
            <text x="490" y="662" class="room-label" style="font-size:15px; font-weight:700;">Aula 211</text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="32" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (2° PISO - DPTO. MECÁNICA)
            </text>
          </svg>
        `
      },
      '3': {
        title: '3° PISO',
        subtitle: 'Depto. Química & Aulas 301-309',
        badge: '3°',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="98" y="375" width="354" height="55" fill="#1b0c30" />

            <!-- Guías Verdes de Evacuación -->
            <g opacity="0.85">
              <line x1="118" y1="80" x2="118" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="118,675 112,660 124,660" fill="#22c55e" />
              <polygon points="118,80 112,95 124,95" fill="#22c55e" />

              <line x1="432" y1="80" x2="432" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="432,675 426,660 438,660" fill="#22c55e" />
              <polygon points="432,80 426,95 438,95" fill="#22c55e" />

              <line x1="118" y1="402" x2="432" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <line x1="118" y1="402" x2="45" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="42,402 55,396 55,408" fill="#22c55e" />

              <line x1="260" y1="402" x2="260" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="260,450 254,435 266,435" fill="#22c55e" />
              <line x1="285" y1="402" x2="285" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="285,450 279,435 291,435" fill="#22c55e" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE (QUÍMICA)          -->
            <!-- ========================================== -->
            <!-- Laboratorio de Química Norte -->
            <rect x="12" y="16" width="86" height="175" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Química', 'Campanas de extracción, mecheros, material volumétrico y mesadas de reactivos.')" />
            <text x="55" y="105" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio de</tspan>
              <tspan x="55" dy="16">Química</tspan>
            </text>

            <!-- Depósitos Químicos (Norte) -->
            <rect x="12" y="191" width="43" height="40" fill="#200d33" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Químico', 'Almacén de reactivos.')" />
            <text x="33" y="215" class="room-label" style="font-size:8.5px;">Depósito</text>
            <rect x="55" y="191" width="43" height="40" fill="#200d33" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Instrumental', 'Almacén de instrumental.')" />
            <text x="76" y="215" class="room-label" style="font-size:8.5px;">Depósito</text>

            <!-- Sala 3 -->
            <rect x="12" y="231" width="86" height="70" fill="#2c1247" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala 3 Química', 'Sala de cátedra y reuniones técnicas de profesores de Química.')" />
            <text x="55" y="271" class="room-label" style="font-size:12px; font-weight:700;">Sala 3</text>

            <!-- Depósito junto a escalera -->
            <rect x="12" y="301" width="30" height="74" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito de Seguridad', 'Armario seguro de reactivos de riesgo.')" />
            <text x="27" y="342" class="room-label" style="font-size:8px;">Dep.</text>

            <!-- Escalera de Emergencia Oeste (Verde) -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 3° Piso', 'Salida reglamentaria de escape por escalera protegida contra incendios.')">
              <rect x="42" y="301" width="56" height="74" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="60" y1="301" x2="60" y2="375" stroke="#86efac" stroke-width="1.2" />
              <line x1="78" y1="301" x2="78" y2="375" stroke="#86efac" stroke-width="1.2" />
              <text x="70" y="342" class="sub-label" style="fill:#ffffff; font-size:9.5px; font-weight:800;">ESCALERA</text>
            </g>

            <!-- Depósito -->
            <rect x="12" y="375" width="86" height="55" fill="#200d33" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Depósito Químico Central', 'Almacenamiento de frascos y solventes.')" />
            <text x="55" y="407" class="room-label" style="font-size:11px;">Depósito</text>

            <!-- Laboratorio Orgánica (Sur) -->
            <rect x="12" y="430" width="86" height="294" fill="#250f3d" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Orgánica', 'Laboratorio de Química Orgánica con sistemas de destilación y síntesis.')" />
            <text x="55" y="582" class="room-label" style="font-size:13px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio</tspan>
              <tspan x="55" dy="18">Orgánica</tspan>
            </text>

            <!-- Drogueros en zona de pasillo Oeste -->
            <g class="blueprint-room" onclick="selectRoom('Drogueros Norte', 'Drogueros con control de temperatura y ventilación.')">
              <rect x="98" y="16" width="40" height="90" fill="#200d33" stroke="#ffffff" stroke-width="1.4" />
              <line x1="98" y1="61" x2="138" y2="61" stroke="#ffffff" stroke-width="1" />
              <text x="118" y="42" class="room-label" style="font-size:8px;">Drogueros</text>
              <text x="118" y="86" class="room-label" style="font-size:8px;">Drogueros</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Drogueros Sur', 'Drogueros químicos del sector sur.')">
              <rect x="98" y="540" width="40" height="184" fill="#200d33" stroke="#ffffff" stroke-width="1.4" />
              <line x1="98" y1="632" x2="138" y2="632" stroke="#ffffff" stroke-width="1" />
              <text x="118" y="590" class="room-label" style="font-size:8px;">Drogueros</text>
              <text x="118" y="682" class="room-label" style="font-size:8px;">Drogueros</text>
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE (LABORATORIOS)  -->
            <!-- ========================================== -->
            <!-- Laboratorio de Química -->
            <rect x="138" y="16" width="92" height="215" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Química Analítica General', 'Prácticas de gravimetría, volumetría y pHmetría.')" />
            <text x="184" y="125" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">de Química</tspan>
            </text>

            <!-- Laboratorio de Investigación -->
            <rect x="138" y="231" width="92" height="95" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio de Investigación Química', 'Investigación de procesos biotecnológicos y ambientales.')" />
            <text x="184" y="283" class="room-label" style="font-size:11px; font-weight:700;">Laboratorio</text>

            <!-- Espacio Técnico / Sector Tableros -->
            <rect x="138" y="326" width="46" height="49" fill="#1c0b2f" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Espacio Técnico', 'Espacio técnico de servicios.')" />
            <text x="161" y="352" class="sub-label" style="fill:#cbd5e1; font-size:7.5px;">Esp. Téc.</text>
            <rect x="184" y="326" width="46" height="49" fill="#1c0b2f" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Sector Tableros', 'Tableros eléctricos.')" />
            <text x="207" y="352" class="sub-label" style="fill:#cbd5e1; font-size:7.5px;">Tableros</text>

            <!-- Crujía 2 Sur: Oficina, Bar y Depósitos -->
            <rect x="138" y="430" width="46" height="40" fill="#281140" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Oficina de Química', 'Oficina de jefatura de laboratorios.')" />
            <text x="161" y="454" class="room-label" style="font-size:8.5px;">Oficina</text>

            <rect x="138" y="470" width="46" height="35" fill="#240e38" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Bar Química', 'Sector de refrigerio docente.')" />
            <text x="161" y="492" class="room-label" style="font-size:8.5px;">Bar</text>

            <rect x="184" y="430" width="46" height="75" fill="#1e0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Laboratorio', 'Material de vidrio y repuestos de instrumental.')" />
            <text x="207" y="470" class="room-label" style="font-size:8px;">
              <tspan x="207" dy="0">Depósito</tspan>
              <tspan x="207" dy="11">Lab.</tspan>
            </text>

            <!-- Laboratorio Química Analítica (Sur) -->
            <rect x="138" y="505" width="92" height="219" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Química Analítica', 'Cromatografía líquida y gaseosa, espectrofotometría y análisis instrumental.')" />
            <text x="184" y="618" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">Química Analítica</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="310" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="16" x2="320" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="16" x2="230" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="175" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores 3° Piso', 'Batería de dos ascensores principales accesibles.')">
              <rect x="245" y="326" width="60" height="49" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="326" x2="275" y2="375" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="368" width="20" height="7" fill="#facc15" />
              <rect x="280" y="368" width="20" height="7" fill="#facc15" />
              <text x="275" y="348" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:8.5px;">ASCENSORES</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 3° Piso', 'Escalera central que comunica con los pisos superior e inferior.')">
              <rect x="235" y="430" width="80" height="110" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="540" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="452" x2="315" y2="452" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="474" x2="315" y2="474" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="496" x2="315" y2="496" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="518" x2="315" y2="518" stroke="#86efac" stroke-width="1.2" />
              <text x="275" y="534" class="sub-label" style="fill:#ffffff; font-size:10px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="540" width="90" height="184" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="540" x2="320" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="540" x2="230" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="635" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE                 -->
            <!-- ========================================== -->
            <!-- Aula 302 -->
            <rect x="320" y="16" width="92" height="120" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 302', 'Aula de cursado presencial en 3° Piso.')" />
            <text x="366" y="80" class="room-label" style="font-size:15px; font-weight:700;">Aula 302</text>

            <!-- Aula 304 -->
            <rect x="320" y="136" width="92" height="110" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 304', 'Aula en 3° Piso.')" />
            <text x="366" y="196" class="room-label" style="font-size:15px; font-weight:700;">Aula 304</text>

            <!-- Aula 306 -->
            <rect x="320" y="246" width="92" height="129" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 306', 'Aula en 3° Piso (Sector Central).')" />
            <text x="366" y="315" class="room-label" style="font-size:15px; font-weight:700;">Aula 306</text>

            <!-- Sala de Profesores -->
            <rect x="320" y="430" width="92" height="55" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala de Profesores Química', 'Espacio docente y reuniones de cátedra de Química.')" />
            <text x="366" y="462" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="366" dy="0">Sala de</tspan>
              <tspan x="366" dy="14">Profesores</tspan>
            </text>

            <!-- A.R.E.I.Q. -->
            <rect x="320" y="485" width="92" height="50" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('A.R.E.I.Q.', 'Asociación Rosarina de Estudiantes de Ingeniería Química.')" />
            <text x="366" y="515" class="room-label" style="font-size:12px; font-weight:800;">A.R.E.I.Q.</text>

            <!-- Aula 308 (Frente Zeballos) -->
            <rect x="320" y="535" width="92" height="189" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 308', 'Aula de gran tamaño orientada hacia el frente sur.')" />
            <text x="366" y="635" class="room-label" style="font-size:15px; font-weight:700;">Aula 308</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 3° Piso', 'Batería de baños completos.')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 3° Piso', 'Batería de baños completos.')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE                     -->
            <!-- ========================================== -->
            <!-- Aula 301 -->
            <rect x="452" y="16" width="76" height="130" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 301', 'Aula en 3° Piso (Esquina Noreste).')" />
            <text x="490" y="86" class="room-label" style="font-size:15px; font-weight:700;">Aula 301</text>

            <!-- Aula 303 -->
            <rect x="452" y="146" width="76" height="115" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 303', 'Aula en 3° Piso (Ala Este).')" />
            <text x="490" y="208" class="room-label" style="font-size:15px; font-weight:700;">Aula 303</text>

            <!-- Aula 305 -->
            <rect x="452" y="261" width="76" height="114" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 305', 'Aula en 3° Piso (Ala Este Central).')" />
            <text x="490" y="322" class="room-label" style="font-size:15px; font-weight:700;">Aula 305</text>

            <!-- Dpto. Ing. Química -->
            <rect x="452" y="375" width="76" height="130" fill="#3b1763" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Dpto. Ing. Química', 'Dirección de carrera, secretaría técnica y laboratorios de investigación.')" />
            <text x="490" y="440" class="room-label" style="font-size:12px; font-weight:800;">
              <tspan x="490" dy="0">Dpto. Ing.</tspan>
              <tspan x="490" dy="16">Química</tspan>
            </text>

            <!-- Aula 309 -->
            <rect x="452" y="505" width="76" height="219" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 309', 'Aula en 3° Piso (Frente Calle Zeballos / Esquina Este).')" />
            <text x="490" y="618" class="room-label" style="font-size:15px; font-weight:700;">Aula 309</text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="32" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (3° PISO - DPTO. QUÍMICA)
            </text>
          </svg>
        `
      },
      '4': {
        title: '4° PISO',
        subtitle: 'Depto. Civil, Ciencias Básicas & Aulas 401-411',
        badge: '4°',
        svg: `
          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS DE CIRCULACIÓN EN 'H'   -->
            <!-- ========================================== -->
            <rect x="98" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="412" y="16" width="40" height="708" fill="#1b0c30" />
            <rect x="98" y="375" width="354" height="55" fill="#1b0c30" />

            <!-- Guías Verdes de Evacuación -->
            <g opacity="0.85">
              <line x1="118" y1="80" x2="118" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="118,675 112,660 124,660" fill="#22c55e" />
              <polygon points="118,80 112,95 124,95" fill="#22c55e" />

              <line x1="432" y1="80" x2="432" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="432,675 426,660 438,660" fill="#22c55e" />
              <polygon points="432,80 426,95 438,95" fill="#22c55e" />

              <line x1="118" y1="402" x2="432" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <line x1="118" y1="402" x2="45" y2="402" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="42,402 55,396 55,408" fill="#22c55e" />

              <line x1="260" y1="402" x2="260" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="260,450 254,435 266,435" fill="#22c55e" />
              <line x1="285" y1="402" x2="285" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="285,450 279,435 291,435" fill="#22c55e" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE (FÍSICA / BÁSICAS) -->
            <!-- ========================================== -->
            <!-- Aula Física II -->
            <rect x="12" y="16" width="86" height="145" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula Física II', 'Aula especializada para el cursado de Física II.')" />
            <text x="55" y="94" class="room-label" style="font-size:13.5px; font-weight:700;">
              <tspan x="55" dy="0">Aula</tspan>
              <tspan x="55" dy="16">Física II</tspan>
            </text>

            <!-- Depósito -->
            <rect x="12" y="161" width="86" height="40" fill="#200d33" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito de Física', 'Depósito de instrumentos de óptica y electromagnetismo.')" />
            <text x="55" y="186" class="room-label" style="font-size:10px;">Depósito</text>

            <!-- Laboratorio Física I -->
            <rect x="12" y="201" width="86" height="135" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Física I', 'Ensayos de cinemática, dinámica, oscilaciones y ondas.')" />
            <text x="55" y="272" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio</tspan>
              <tspan x="55" dy="16">Física I</tspan>
            </text>

            <!-- Escalera de Emergencia Oeste (Verde) -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 4° Piso', 'Salida reglamentaria de escape por escalera protegida contra incendios.')">
              <rect x="12" y="336" width="86" height="50" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="336" x2="42" y2="386" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="336" x2="58" y2="386" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="336" x2="74" y2="386" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="367" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <!-- UDB Matemática -->
            <rect x="12" y="386" width="86" height="80" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('UDB Matemática', 'Unidad Docente Básica de Matemática, Álgebra y Análisis Matemático.')" />
            <text x="55" y="428" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">UDB</tspan>
              <tspan x="55" dy="15">Matemática</tspan>
            </text>

            <!-- UDB Idiomas -->
            <rect x="12" y="466" width="86" height="70" fill="#281140" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('UDB Idiomas', 'Unidad Docente de Inglés Técnico y acreditaciones de idiomas.')" />
            <text x="55" y="504" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">UDB</tspan>
              <tspan x="55" dy="15">Idiomas</tspan>
            </text>

            <!-- Dpto. Materias Básicas -->
            <rect x="12" y="536" width="86" height="90" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Dpto. Materias Básicas', 'Dirección del Departamento de Ciencias Básicas.')" />
            <text x="55" y="582" class="room-label" style="font-size:10.5px; font-weight:800;">
              <tspan x="55" dy="0">Dpto. Materias</tspan>
              <tspan x="55" dy="14">Básicas</tspan>
            </text>

            <!-- Director y Secretaría Básicas (Sur) -->
            <rect x="12" y="626" width="43" height="98" fill="#2c1247" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Director Materias Básicas', 'Despacho de la Dirección de Ciencias Básicas.')" />
            <text x="33" y="678" class="room-label" style="font-size:9.5px; font-weight:700;">Director</text>

            <rect x="55" y="626" width="43" height="98" fill="#2c1247" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Secretaría Materias Básicas', 'Atención docente de materias básicas.')" />
            <text x="76" y="678" class="room-label" style="font-size:9.5px; font-weight:700;">Secretaría</text>

            <!-- Laboratorio Informática en Pasillo Norte -->
            <g class="blueprint-room" onclick="selectRoom('Laboratorio Informática Pasillo', 'Laboratorio complementario de computación.')">
              <rect x="98" y="16" width="40" height="95" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" />
              <text x="118" y="60" class="room-label" style="font-size:9px; font-weight:700;">
                <tspan x="118" dy="0">Lab.</tspan>
                <tspan x="118" dy="13">Inform.</tspan>
              </text>
            </g>

            <!-- Bedelía y Depósito Pasillo Sur -->
            <g class="blueprint-room" onclick="selectRoom('Bedelía 4° Piso', 'Bedelía de Ciencias Básicas y Civil.')">
              <rect x="98" y="590" width="40" height="65" fill="#321454" stroke="#ffffff" stroke-width="1.4" />
              <text x="118" y="627" class="room-label" style="font-size:9px; font-weight:700;">Bedelía</text>
            </g>
            <rect x="98" y="655" width="40" height="69" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Pasillo', 'Depósito.')" />
            <text x="118" y="694" class="room-label" style="font-size:8.5px;">Depósito</text>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE (ANFITEATRO)    -->
            <!-- ========================================== -->
            <!-- Laboratorio Informática Norte -->
            <rect x="138" y="16" width="92" height="135" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Informática 4° Piso', 'Laboratorio informático para prácticas de simulación y cálculo.')" />
            <text x="184" y="86" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">Informática</tspan>
            </text>

            <!-- Anfiteatro con gradas -->
            <g class="blueprint-room" onclick="selectRoom('Anfiteatro 4° Piso', 'Anfiteatro con gradas para clases magistrales, defensas de tesis y conferencias.')">
              <rect x="138" y="151" width="92" height="175" fill="#3a165f" stroke="#ffffff" stroke-width="2" />
              <!-- Gradas / Peldaños del Anfiteatro -->
              <line x1="148" y1="175" x2="220" y2="175" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="195" x2="220" y2="195" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="215" x2="220" y2="215" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="235" x2="220" y2="235" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="255" x2="220" y2="255" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <text x="184" y="295" class="room-label" style="font-size:14px; font-weight:800; letter-spacing:0.8px;">Anfiteatro</text>
            </g>

            <!-- Crujía 2 Sur: UDBs de Ciencias Básicas -->
            <rect x="138" y="430" width="30" height="38" fill="#250f3d" stroke="#ffffff" stroke-width="1.2" class="blueprint-room" onclick="selectRoom('UDB Química', 'Unidad Docente Básica Química.')" />
            <text x="153" y="453" class="room-label" style="font-size:7.5px;">Química</text>

            <rect x="138" y="468" width="30" height="38" fill="#250f3d" stroke="#ffffff" stroke-width="1.2" class="blueprint-room" onclick="selectRoom('UDB Cultura', 'Cultura y Legislación.')" />
            <text x="153" y="491" class="room-label" style="font-size:7.5px;">Cultura</text>

            <rect x="138" y="506" width="30" height="42" fill="#250f3d" stroke="#ffffff" stroke-width="1.2" class="blueprint-room" onclick="selectRoom('UDB Legislación', 'Legislación y Economía.')" />
            <text x="153" y="530" class="room-label" style="font-size:7px;">Leg./Econ.</text>

            <rect x="168" y="430" width="62" height="60" fill="#281140" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('UDB Física', 'Unidad Docente Básica de Física.')" />
            <text x="199" y="464" class="room-label" style="font-size:9.5px; font-weight:700;">UDB Física</text>

            <rect x="138" y="548" width="92" height="42" fill="#2c1247" stroke="#ffffff" stroke-width="1.5" class="blueprint-room" onclick="selectRoom('Ciencias Básicas Coordinación', 'Coordinación académica.')" />
            <text x="184" y="572" class="room-label" style="font-size:9px; font-weight:700;">Coord. Básicas</text>

            <!-- Aula Física III (Sur) -->
            <rect x="138" y="590" width="92" height="134" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula Física III', 'Aula especializada para el cursado de Física III.')" />
            <text x="184" y="662" class="room-label" style="font-size:13.5px; font-weight:700;">
              <tspan x="184" dy="0">Aula</tspan>
              <tspan x="184" dy="16">Física III</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: NÚCLEO VERTICAL        -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="310" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="16" x2="320" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="16" x2="230" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="175" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Ascensores 4° Piso', 'Batería de dos ascensores principales accesibles.')">
              <rect x="245" y="326" width="60" height="49" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="326" x2="275" y2="375" stroke="#ffffff" stroke-width="1.5" />
              <rect x="250" y="368" width="20" height="7" fill="#facc15" />
              <rect x="280" y="368" width="20" height="7" fill="#facc15" />
              <text x="275" y="348" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:8.5px;">ASCENSORES</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 4° Piso', 'Escalera central que comunica con los pisos superior e inferior.')">
              <rect x="235" y="430" width="80" height="110" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="275" y1="430" x2="275" y2="540" stroke="#22c55e" stroke-width="1.6" />
              <line x1="235" y1="452" x2="315" y2="452" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="474" x2="315" y2="474" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="496" x2="315" y2="496" stroke="#86efac" stroke-width="1.2" />
              <line x1="235" y1="518" x2="315" y2="518" stroke="#86efac" stroke-width="1.2" />
              <text x="275" y="534" class="sub-label" style="fill:#ffffff; font-size:10px; font-weight:800;">ESCALERA</text>
            </g>

            <g>
              <rect x="230" y="540" width="90" height="184" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="540" x2="320" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="540" x2="230" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="635" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: CENTRO-ESTE (CIVIL)          -->
            <!-- ========================================== -->
            <!-- Aula 402 -->
            <rect x="320" y="16" width="92" height="135" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 402', 'Aula de cursado presencial en 4° Piso.')" />
            <text x="366" y="88" class="room-label" style="font-size:15px; font-weight:700;">Aula 402</text>

            <!-- Aula 404 -->
            <rect x="320" y="151" width="92" height="120" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 404', 'Aula en 4° Piso.')" />
            <text x="366" y="216" class="room-label" style="font-size:15px; font-weight:700;">Aula 404</text>

            <!-- Laboratorio de Informática -->
            <rect x="320" y="271" width="92" height="104" fill="#271141" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Informática Civil', 'Cálculo de estructuras y diseño CAD para Ingeniería Civil.')" />
            <text x="366" y="324" class="room-label" style="font-size:11.5px; font-weight:700;">
              <tspan x="366" dy="0">Laboratorio de</tspan>
              <tspan x="366" dy="15">Informática</tspan>
            </text>

            <!-- Secretaría Civil, Bedelía y Civil -->
            <rect x="320" y="430" width="46" height="38" fill="#250f3d" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Secretaría Civil', 'Secretaría del Dpto. Ingeniería Civil.')" />
            <text x="343" y="453" class="room-label" style="font-size:8px;">Sec. Civil</text>

            <rect x="366" y="430" width="46" height="38" fill="#321454" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Bedelía Civil', 'Bedelía de Civil.')" />
            <text x="389" y="453" class="room-label" style="font-size:8.5px; font-weight:700;">Bedelía</text>

            <rect x="320" y="468" width="92" height="42" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dpto. Ingeniería Civil', 'Dirección de carrera de Ingeniería Civil.')" />
            <text x="366" y="494" class="room-label" style="font-size:12px; font-weight:800;">Civil</text>

            <!-- Laboratorio Ing. Civil -->
            <rect x="320" y="510" width="92" height="110" fill="#281140" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Ing. Civil', 'Ensayos de hormigón, hidráulica y suelos.')" />
            <text x="366" y="566" class="room-label" style="font-size:11.5px; font-weight:700;">
              <tspan x="366" dy="0">Laboratorio</tspan>
              <tspan x="366" dy="15">Ing. Civil</tspan>
            </text>

            <!-- Aula 410 (Frente Zeballos) -->
            <rect x="320" y="620" width="92" height="104" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 410', 'Aula de cursado presencial en 4° Piso.')" />
            <text x="366" y="678" class="room-label" style="font-size:15px; font-weight:700;">Aula 410</text>

            <!-- ========================================== -->
            <!-- 6. SANITARIOS EN PASILLO ESTE              -->
            <!-- ========================================== -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 4° Piso', 'Batería de baños completos.')">
              <rect x="412" y="16" width="40" height="89" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="45" x2="452" y2="45" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="74" x2="452" y2="74" stroke="#fff" stroke-width="1" />
              <text x="432" y="62" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 4° Piso', 'Batería de baños completos.')">
              <rect x="412" y="610" width="40" height="114" fill="#180a24" stroke="#ffffff" stroke-width="1.6" />
              <line x1="412" y1="648" x2="452" y2="648" stroke="#fff" stroke-width="1" />
              <line x1="412" y1="686" x2="452" y2="686" stroke="#fff" stroke-width="1" />
              <text x="432" y="670" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 7. CRUJÍA 4: ALA ESTE                     -->
            <!-- ========================================== -->
            <!-- Aula 401 -->
            <rect x="452" y="16" width="76" height="125" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 401', 'Aula en 4° Piso (Esquina Noreste).')" />
            <text x="490" y="84" class="room-label" style="font-size:15px; font-weight:700;">Aula 401</text>

            <!-- Aula 403 -->
            <rect x="452" y="141" width="76" height="120" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 403', 'Aula en 4° Piso.')" />
            <text x="490" y="206" class="room-label" style="font-size:15px; font-weight:700;">Aula 403</text>

            <!-- Aula 405 -->
            <rect x="452" y="261" width="76" height="114" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 405', 'Aula en 4° Piso.')" />
            <text x="490" y="322" class="room-label" style="font-size:15px; font-weight:700;">Aula 405</text>

            <!-- Aula 407 -->
            <rect x="452" y="375" width="76" height="120" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 407', 'Aula en 4° Piso.')" />
            <text x="490" y="440" class="room-label" style="font-size:15px; font-weight:700;">Aula 407</text>

            <!-- ICMA & Oficinas -->
            <rect x="452" y="495" width="46" height="100" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('ICMA', 'Instituto de Mecánica Aplicada y Estructuras.')" />
            <text x="475" y="550" class="room-label" style="font-size:11px; font-weight:800;">ICMA</text>

            <rect x="498" y="495" width="30" height="50" fill="#250f3d" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Oficina ICMA 1', 'Oficina de investigación.')" />
            <text x="513" y="524" class="room-label" style="font-size:8px;">Ofic.</text>

            <rect x="498" y="545" width="30" height="50" fill="#250f3d" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Oficina ICMA 2', 'Oficina técnica.')" />
            <text x="513" y="574" class="room-label" style="font-size:8px;">Ofic.</text>

            <!-- Laboratorio SDR 411 -->
            <rect x="452" y="595" width="76" height="129" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio SDR 411', 'Laboratorio de Software Defined Radio y telecomunicaciones.')" />
            <text x="490" y="660" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="490" dy="0">Laboratorio</tspan>
              <tspan x="490" dy="15">SDR 411</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 8. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="32" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (4° PISO - DPTO. CIVIL & CS. BÁSICAS)
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
            <!-- 1. PATIOS DE AIRE - LUZ (SECTOR ESTE / TERRAZA) -->
            <!-- ========================================== -->
            <!-- Terraza / Vacío Estructural Norte (Aire - Luz) -->
            <g>
              <rect x="270" y="16" width="258" height="294" fill="#0d0519" stroke="#4a1c72" stroke-width="1.8" />
              <line x1="270" y1="16" x2="528" y2="310" stroke="rgba(255,255,255,0.18)" stroke-width="1.4" />
              <line x1="528" y1="16" x2="270" y2="310" stroke="rgba(255,255,255,0.18)" stroke-width="1.4" />
              <rect x="345" y="145" width="110" height="26" fill="#1b0c30" stroke="#a855f7" stroke-width="1" rx="4" />
              <text x="400" y="162" class="sub-label" style="fill:#d8b4fe; font-size:10.5px; font-weight:800; letter-spacing:1px;">AIRE - LUZ NORTE</text>
            </g>

            <!-- Terraza / Vacío Estructural Sur (Aire - Luz) -->
            <g>
              <rect x="270" y="540" width="258" height="184" fill="#0d0519" stroke="#4a1c72" stroke-width="1.8" />
              <line x1="270" y1="540" x2="528" y2="724" stroke="rgba(255,255,255,0.18)" stroke-width="1.4" />
              <line x1="528" y1="540" x2="270" y2="724" stroke="rgba(255,255,255,0.18)" stroke-width="1.4" />
              <rect x="345" y="620" width="110" height="26" fill="#1b0c30" stroke="#a855f7" stroke-width="1" rx="4" />
              <text x="400" y="637" class="sub-label" style="fill:#d8b4fe; font-size:10.5px; font-weight:800; letter-spacing:1px;">AIRE - LUZ SUR</text>
            </g>

            <!-- ========================================== -->
            <!-- 2. CIRCULACIÓN PEATONAL (PASILLO EN 'T')   -->
            <!-- ========================================== -->
            <!-- Pasillo Longitudinal Único (Oeste) -->
            <rect x="98" y="55" width="40" height="640" fill="#1b0c30" />
            <!-- Pasillo Transversal hacia Núcleo Central -->
            <rect x="138" y="375" width="287" height="60" fill="#1b0c30" />

            <!-- Guías Verdes de Evacuación (Fieles al plano original) -->
            <g opacity="0.85">
              <!-- Flecha troncal norte-sur -->
              <line x1="118" y1="80" x2="118" y2="670" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="118,675 112,660 124,660" fill="#22c55e" />
              <polygon points="118,80 112,95 124,95" fill="#22c55e" />

              <!-- Flecha transversal hacia la escalera de emergencia oeste -->
              <line x1="118" y1="405" x2="48" y2="405" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="45,405 58,399 58,411" fill="#22c55e" />

              <!-- Flecha transversal desde pasillo oeste hacia hall y escaleras -->
              <line x1="118" y1="405" x2="350" y2="405" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <!-- Bajada a escalera central -->
              <line x1="350" y1="405" x2="350" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="350,448 344,435 356,435" fill="#22c55e" />

              <!-- Salida este exterior -->
              <line x1="350" y1="405" x2="465" y2="405" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="472,405 458,399 458,411" fill="#22c55e" />
            </g>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 1: ALA OESTE (IZQUIERDA)        -->
            <!-- ========================================== -->
            <!-- Laboratorio 5 IBM (Norte) -->
            <rect x="12" y="16" width="86" height="119" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio 5 IBM', 'Bancos de trabajo, mainframes y arquitectura de servidores IBM.')" />
            <text x="55" y="72" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio 5</tspan>
              <tspan x="55" dy="16">IBM</tspan>
            </text>

            <!-- Laboratorio 8 Investigación -->
            <rect x="12" y="135" width="86" height="100" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio 8 Investigación', 'Investigación aplicada, proyectos de desarrollo y tesis de posgrado.')" />
            <text x="55" y="180" class="room-label" style="font-size:11.5px;">
              <tspan x="55" dy="0">Laboratorio 8</tspan>
              <tspan x="55" dy="16">Investigación</tspan>
            </text>

            <!-- Laboratorio 3 Interconectividad -->
            <rect x="12" y="235" width="86" height="95" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio 3 Interconectividad', 'Prácticas de routing, switching y topologías de red complejas.')" />
            <text x="55" y="278" class="room-label" style="font-size:11px;">
              <tspan x="55" dy="0">Laboratorio 3</tspan>
              <tspan x="55" dy="15">Interconectividad</tspan>
            </text>

            <!-- Sala Personal de Laboratorio -->
            <rect x="12" y="330" width="86" height="65" fill="#240f3b" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Sala Personal de Laboratorio', 'Despacho de soporte técnico, encargados y guardia de sistemas.')" />
            <text x="55" y="358" class="room-label" style="font-size:10.5px;">
              <tspan x="55" dy="0">Sala Personal</tspan>
              <tspan x="55" dy="14">de Laboratorio</tspan>
            </text>

            <!-- Escalera de Emergencia Oeste (Verde) -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 5° Piso', 'Salida de emergencia y evacuación reglamentaria.')">
              <rect x="12" y="395" width="86" height="60" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="395" x2="42" y2="455" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="395" x2="58" y2="455" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="395" x2="74" y2="455" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="428" class="sub-label" style="fill:#ffffff; font-size:10px; font-weight:800;">ESCALERA</text>
            </g>

            <!-- Aula 502 -->
            <rect x="12" y="455" width="86" height="125" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 502', 'Aula de teoría y cursado presencial de Ingeniería en Sistemas.')" />
            <text x="55" y="522" class="room-label" style="font-size:14px; font-weight:700;">Aula 502</text>

            <!-- Laboratorio 2 Lenguajes -->
            <rect x="12" y="580" width="86" height="70" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio 2 Lenguajes', 'Programación estructurada, orientada a objetos y algoritmos.')" />
            <text x="55" y="612" class="room-label" style="font-size:11.5px;">
              <tspan x="55" dy="0">Laboratorio 2</tspan>
              <tspan x="55" dy="15">Lenguajes</tspan>
            </text>

            <!-- Laboratorio 1 Lenguajes (Sur - Frente Zeballos) -->
            <rect x="12" y="650" width="86" height="74" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Laboratorio 1 Lenguajes', 'Programación web, bases de datos y talleres de código.')" />
            <text x="55" y="683" class="room-label" style="font-size:11.5px;">
              <tspan x="55" dy="0">Laboratorio 1</tspan>
              <tspan x="55" dy="15">lenguajes</tspan>
            </text>

            <!-- Sanitarios Norte (Cabecera Pasillo Oeste) -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Norte 5° Piso', 'Servicios higiénicos en el extremo norte del pasillo.')">
              <rect x="98" y="16" width="40" height="39" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="118" y1="16" x2="118" y2="55" stroke="#fff" stroke-width="1" />
              <text x="118" y="38" class="sub-label" style="fill:#cbd5e1; font-size:9px; font-weight:700;">Baños</text>
            </g>

            <!-- Sanitarios Sur (Pie Pasillo Oeste) -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Sur 5° Piso', 'Servicios higiénicos en el extremo sur del pasillo.')">
              <rect x="98" y="695" width="40" height="29" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="118" y1="695" x2="118" y2="724" stroke="#fff" stroke-width="1" />
              <text x="118" y="713" class="sub-label" style="fill:#cbd5e1; font-size:8px; font-weight:700;">Baños</text>
            </g>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA 2: CENTRO (COLUMNA INTERMEDIA)  -->
            <!-- ========================================== -->
            <!-- Laboratorio 7 de Redes -->
            <rect x="138" y="16" width="132" height="119" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio 7 de Redes', 'Cisco Networking Academy, switches, routers y cableado estructurado.')" />
            <text x="204" y="70" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="204" dy="0">Laboratorio 7</tspan>
              <tspan x="204" dy="16">de Redes</tspan>
            </text>

            <!-- Laboratorio 4 AS400 -->
            <rect x="138" y="135" width="132" height="110" fill="#201138" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio 4 AS400', 'Servidores empresariales, bases de datos y cálculo distribuido.')" />
            <text x="204" y="186" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="204" dy="0">Laboratorio 4</tspan>
              <tspan x="204" dy="16">AS400</tspan>
            </text>

            <!-- Laboratorio 6 Microsoft -->
            <rect x="138" y="245" width="132" height="130" fill="#3a165f" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio 6 Microsoft', 'Certificaciones oficiales Microsoft, desarrollo .NET y Azure.')" />
            <text x="204" y="306" class="room-label" style="font-size:13px; font-weight:800;">
              <tspan x="204" dy="0">Laboratorio 6</tspan>
              <tspan x="204" dy="18">Microsoft</tspan>
            </text>

            <!-- Aula 501 -->
            <rect x="138" y="435" width="132" height="125" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 501', 'Aula de cursado presencial de comisiones de 1° a 5° año.')" />
            <text x="204" y="502" class="room-label" style="font-size:14px; font-weight:700;">Aula 501</text>

            <!-- Sala de Reuniones ISI -->
            <rect x="138" y="560" width="66" height="75" fill="#291244" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Sala de Reuniones ISI', 'Reuniones de cátedra y proyectos académicos.')" />
            <text x="171" y="594" class="room-label" style="font-size:10px;">
              <tspan x="171" dy="0">Sala de</tspan>
              <tspan x="171" dy="13">Reuniones</tspan>
            </text>

            <!-- Bedelía Sistemas -->
            <rect x="204" y="560" width="66" height="75" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Bedelía Sistemas', 'Atención para cursado, horarios de laboratorios y comisiones de Sistemas.')" />
            <text x="237" y="602" class="room-label" style="font-size:11px; font-weight:700;">Bedelía</text>

            <!-- Sala de Profesores ISI -->
            <rect x="138" y="635" width="66" height="89" fill="#271141" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Sala de Profesores ISI', 'Espacio docente y consultas de cátedra.')" />
            <text x="171" y="675" class="room-label" style="font-size:10px;">
              <tspan x="171" dy="0">Sala de</tspan>
              <tspan x="171" dy="13">Profesores</tspan>
            </text>

            <!-- Oficina de Director ISI -->
            <rect x="204" y="635" width="66" height="89" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Oficina de Director ISI', 'Dirección de Carrera del Departamento de Ingeniería en Sistemas.')" />
            <text x="237" y="675" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="237" dy="0">Oficina de</tspan>
              <tspan x="237" dy="13">Director</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 5. NÚCLEO CENTRAL: ASCENSORES, ESCALERA    -->
            <!-- ========================================== -->
            <!-- Batería de Ascensores -->
            <g class="blueprint-room" onclick="selectRoom('Ascensores 5° Piso', 'Batería de dos ascensores accesibles con parada terminal.')">
              <rect x="300" y="325" width="80" height="50" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="340" y1="325" x2="340" y2="375" stroke="#ffffff" stroke-width="1.5" />
              <!-- Puertas amarillas de ascensor -->
              <rect x="308" y="368" width="24" height="7" fill="#facc15" />
              <rect x="348" y="368" width="24" height="7" fill="#facc15" />
              <text x="340" y="347" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:9.5px;">ASCENSORES</text>
            </g>

            <!-- Hall de Llegada Central -->
            <!-- Circulación Central -->

            <!-- Escalera Principal Central (Subida / Bajada) - Verde -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Principal 5° Piso', 'Escalera central que conecta con todos los pisos inferiores.')">
              <rect x="270" y="435" width="155" height="105" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="347" y1="435" x2="347" y2="540" stroke="#22c55e" stroke-width="1.6" />
              <!-- Peldaños tramo izquierdo -->
              <line x1="270" y1="455" x2="347" y2="455" stroke="#86efac" stroke-width="1.2" />
              <line x1="270" y1="475" x2="347" y2="475" stroke="#86efac" stroke-width="1.2" />
              <line x1="270" y1="495" x2="347" y2="495" stroke="#86efac" stroke-width="1.2" />
              <line x1="270" y1="515" x2="347" y2="515" stroke="#86efac" stroke-width="1.2" />
              <!-- Peldaños tramo derecho -->
              <line x1="347" y1="455" x2="425" y2="455" stroke="#86efac" stroke-width="1.2" />
              <line x1="347" y1="475" x2="425" y2="475" stroke="#86efac" stroke-width="1.2" />
              <line x1="347" y1="495" x2="425" y2="495" stroke="#86efac" stroke-width="1.2" />
              <line x1="347" y1="515" x2="425" y2="515" stroke="#86efac" stroke-width="1.2" />
              <text x="347" y="532" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA CENTRAL</text>
            </g>

            <!-- ========================================== -->
            <!-- 6. FACHADA ZEBALLOS Y CONTORNO EXTERIOR    -->
            <!-- ========================================== -->
            <!-- Muro perimetral exterior (L.M. en Norte y Frente Zeballos en Sur) -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="32" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (5° PISO - DEPTO. SISTEMAS)
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
