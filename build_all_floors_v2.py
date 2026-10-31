# -*- coding: utf-8 -*-
"""
Floor SVG Generator with all user fixes:
- 1° Piso: Eliminate 'Fotocopiadora' (Aula 104 occupies full space to corridor).
- 2° Piso: Replace 'Centro de Estudiantes' with 'Cantina/Kiosco'.
- 3° Piso:
  * Leave 'Bar' empty.
  * Tablero on each side of the elevator (Tablero Oeste and Tablero Este).
  * 'Laboratorio' occupies the space where esp tec and tablero were (extends down to corridor).
- 4° Piso:
  * 'Anfiteatro' extends all the way to corridor limit without obstructing it (same length/bottom limit as elevator, y=151..375).
- Planta Baja:
  * Rebuild the entire right wing (Ala Derecha) cleanly based on the blueprint.
  * Big green arrow and prominent label for 'ENTRADA PRINCIPAL' right below F.A.G.D.U.T. on Calle Zeballos.
"""

def get_pb_svg():
    return """          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
            <!-- Fondo Base Arquitectónico -->
            <rect width="540" height="760" fill="#140924" />

            <!-- ========================================== -->
            <!-- 1. RED DE PASILLOS Y CIRCULACIÓN          -->
            <!-- ========================================== -->
            <!-- Pasillo Longitudinal Oeste -->
            <rect x="98" y="55" width="38" height="635" fill="#1b0c30" />
            <!-- Pasillo Transversal Central -->
            <rect x="98" y="375" width="347" height="50" fill="#1b0c30" />
            <!-- Galería de Circulación Sur-Este -->
            <rect x="405" y="425" width="40" height="235" fill="#1b0c30" />

            <!-- Guías Verdes de Evacuación / Acceso -->
            <g opacity="0.85">
              <line x1="117" y1="80" x2="117" y2="665" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="117,670 111,655 123,655" fill="#22c55e" />
              <polygon points="117,80 111,95 123,95" fill="#22c55e" />

              <!-- Conexión transversal central -->
              <line x1="117" y1="400" x2="45" y2="400" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="42,400 55,394 55,406" fill="#22c55e" />

              <line x1="117" y1="400" x2="375" y2="400" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />

              <!-- Descenso a escaleras centrales -->
              <line x1="260" y1="400" x2="260" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="260,450 254,435 266,435" fill="#22c55e" />
              <line x1="285" y1="400" x2="285" y2="445" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="285,450 279,435 291,435" fill="#22c55e" />

              <!-- RUTA HACIA ENTRADA PRINCIPAL (FLECHA VERDE DEBAJO DE FAGDUT) -->
              <line x1="375" y1="400" x2="520" y2="400" stroke="#22c55e" stroke-width="3.5" stroke-dasharray="6,4" />
              <polygon points="528,400 512,393 512,407" fill="#22c55e" />

              <!-- Salida hacia la fachada sur desde el patio este -->
              <line x1="425" y1="425" x2="425" y2="675" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <line x1="425" y1="675" x2="505" y2="675" stroke="#22c55e" stroke-width="3" stroke-dasharray="6,4" />
              <polygon points="512,675 498,669 498,681" fill="#22c55e" />
            </g>

            <!-- ========================================== -->
            <!-- 2. CRUJÍA 1: ALA OESTE (ADMINISTRACIÓN)   -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="43" height="74" fill="#281140" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Rendición de Cuentas', 'Oficina contable de rendición de fondos y balances operativos.')" />
            <text x="33" y="52" class="room-label" style="font-size:9.5px;">
              <tspan x="33" dy="0">Rend.</tspan>
              <tspan x="33" dy="12">Cuentas</tspan>
            </text>

            <rect x="55" y="16" width="43" height="74" fill="#281140" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Administración', 'Oficina de trámites administrativos internos.')" />
            <text x="76" y="55" class="room-label" style="font-size:10px;">Oficina</text>

            <rect x="12" y="90" width="86" height="85" fill="#2c1247" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Departamento Contable', 'Contabilidad general, registro de pagos y administración financiera.')" />
            <text x="55" y="137" class="room-label" style="font-size:12px; font-weight:700;">Contable</text>

            <rect x="12" y="175" width="86" height="85" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Tesorería', 'Cobros, pagos a proveedores, cheques y trámites arancelarios.')" />
            <text x="55" y="222" class="room-label" style="font-size:12px; font-weight:700;">Tesorería</text>

            <rect x="12" y="260" width="86" height="80" fill="#260f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dirección Administrativa', 'Dirección de administración general y despacho económico de la facultad.')" />
            <text x="55" y="298" class="room-label" style="font-size:10.5px; font-weight:700;">
              <tspan x="55" dy="0">Dir.</tspan>
              <tspan x="55" dy="14">Administrativo</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia PB', 'Salida de emergencia hacia el patio exterior.')">
              <rect x="12" y="340" width="86" height="60" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="340" x2="42" y2="400" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="340" x2="58" y2="400" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="340" x2="74" y2="400" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="375" class="sub-label" style="fill:#ffffff; font-size:11px; font-weight:800;">ESCALERA</text>
            </g>

            <rect x="12" y="400" width="86" height="110" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Departamento Alumnado', 'Atención para inscripción a materias, exámenes, certificados de alumno regular y analíticos.')" />
            <text x="55" y="460" class="room-label" style="font-size:12.5px; font-weight:700;">Alumnado</text>

            <rect x="12" y="510" width="86" height="95" fill="#291244" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dpto. Alumnado (Oficinas)', 'Gestión de actas, resoluciones de cursado y trámites de estudiantes.')" />
            <text x="55" y="555" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">Dpto.</tspan>
              <tspan x="55" dy="15">Alumnado</tspan>
            </text>

            <rect x="12" y="605" width="86" height="55" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Oficina de Títulos', 'Tramitación de diplomas, diplomas de honor y legalizaciones ministeriales.')" />
            <text x="55" y="637" class="room-label" style="font-size:11px; font-weight:700;">Títulos</text>

            <rect x="12" y="660" width="86" height="64" fill="#220d36" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Títulos Dirección Académica', 'Despacho académico de emisión y registro de egresados.')" />
            <text x="55" y="688" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="55" dy="0">Títulos Dirección</tspan>
              <tspan x="55" dy="13">Académica</tspan>
            </text>

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
            <rect x="136" y="16" width="70" height="55" fill="#250f3d" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Archivo General', 'Depósito y resguardo documental de la institución.')" />
            <text x="171" y="48" class="room-label" style="font-size:10.5px;">Archivo</text>

            <rect x="136" y="71" width="70" height="95" fill="#2c1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Departamento de Personal', 'Gestión de legajos de docentes, no docentes y altas laborales.')" />
            <text x="171" y="112" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="171" dy="0">Departamento</tspan>
              <tspan x="171" dy="14">de Personal</tspan>
            </text>

            <rect x="136" y="166" width="70" height="74" fill="#281140" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Departamento de Liquidación', 'Liquidación de haberes y sueldos de personal universitario.')" />
            <text x="171" y="198" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="171" dy="0">Departamento</tspan>
              <tspan x="171" dy="13">Liquidación</tspan>
            </text>

            <rect x="136" y="240" width="70" height="85" fill="#38155e" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Mesa de Entrada', 'Recepción de expedientes, notas oficiales, cartas y presentaciones formales.')" />
            <text x="171" y="278" class="room-label" style="font-size:11px; font-weight:800;">
              <tspan x="171" dy="0">Mesa de</tspan>
              <tspan x="171" dy="14">Entrada</tspan>
            </text>

            <rect x="136" y="325" width="35" height="50" fill="#200d33" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Cocina PB', 'Cocina y office de servicio.')" />
            <text x="153" y="354" class="room-label" style="font-size:9px;">Cocina</text>
            <rect x="171" y="325" width="35" height="50" fill="#1d0c2e" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito', 'Depósito de insumos.')" />
            <text x="188" y="354" class="room-label" style="font-size:9px;">Dep.</text>

            <rect x="136" y="425" width="70" height="65" fill="#2b1245" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Legajos y Actas', 'Archivo seguro de actas de exámenes y legajos académicos.')" />
            <text x="171" y="458" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="171" dy="0">Legajos y</tspan>
              <tspan x="171" dy="13">Actas</tspan>
            </text>

            <rect x="136" y="490" width="70" height="50" fill="#240f3b" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Depósito de Compras', 'Almacén transitorio de mercaderías e insumos de compras.')" />
            <text x="171" y="514" class="room-label" style="font-size:9.5px;">
              <tspan x="171" dy="0">Depósito de</tspan>
              <tspan x="171" dy="12">Compras</tspan>
            </text>

            <rect x="136" y="540" width="70" height="55" fill="#2d1348" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Oficina de Compras', 'Licitaciones, compras directas y adquisiciones de equipamiento.')" />
            <text x="171" y="566" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="171" dy="0">Oficina de</tspan>
              <tspan x="171" dy="13">Compras</tspan>
            </text>

            <rect x="136" y="595" width="70" height="65" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Centro de Fotocopiado PB', 'Impresiones, copias y apuntes de cátedra.')" />
            <text x="171" y="626" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="171" dy="0">Centro de</tspan>
              <tspan x="171" dy="13">Fotocopiado</tspan>
            </text>

            <rect x="136" y="660" width="70" height="64" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dpto. Patrimonio', 'Registro inventarial de bienes muebles y equipamiento de la facultad.')" />
            <text x="171" y="692" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="171" dy="0">Dpto.</tspan>
              <tspan x="171" dy="13">Patrimonio</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. NÚCLEO CENTRAL                         -->
            <!-- ========================================== -->
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
            <g class="blueprint-room" onclick="selectRoom('Ascensores PB', 'Batería de dos ascensores principales accesibles.')">
              <rect x="206" y="325" width="60" height="50" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="236" y1="325" x2="236" y2="375" stroke="#ffffff" stroke-width="1.5" />
              <rect x="210" y="368" width="22" height="7" fill="#facc15" />
              <rect x="240" y="368" width="22" height="7" fill="#facc15" />
              <text x="236" y="348" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:8.5px;">ASCENSORES</text>
            </g>

            <rect x="266" y="325" width="34" height="50" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Sala de Tableros', 'Tableros eléctricos generales de planta baja.')" />
            <text x="283" y="352" class="sub-label" style="fill:#cbd5e1; font-size:8px;">Tableros</text>

            <!-- Escalera Principal Central (Verde) -->
            <g class="blueprint-room" onclick="selectRoom('Escalera Principal PB', 'Escalera de acceso a los pisos superiores.')">
              <rect x="206" y="425" width="94" height="90" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="253" y1="425" x2="253" y2="515" stroke="#22c55e" stroke-width="1.5" />
              <line x1="206" y1="443" x2="300" y2="443" stroke="#86efac" stroke-width="1.2" />
              <line x1="206" y1="461" x2="300" y2="461" stroke="#86efac" stroke-width="1.2" />
              <line x1="206" y1="479" x2="300" y2="479" stroke="#86efac" stroke-width="1.2" />
              <line x1="206" y1="497" x2="300" y2="497" stroke="#86efac" stroke-width="1.2" />
              <text x="253" y="510" class="sub-label" style="fill:#ffffff; font-size:9.5px; font-weight:800;">ESCALERA CENTRAL</text>
            </g>

            <!-- Patio Central Sur -->
            <g>
              <rect x="206" y="515" width="94" height="209" fill="#0d0519" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="206" y1="515" x2="300" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="300" y1="515" x2="206" y2="724" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="253" y="625" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO LUZ SUR</text>
            </g>

            <!-- ========================================== -->
            <!-- 5. CRUJÍA 3: DECANATO Y SERVICIOS (REHECHO) -->
            <!-- ========================================== -->
            <!-- Oficina Decano (Norte) -->
            <rect x="300" y="16" width="115" height="74" fill="#3b1763" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Oficina Decano', 'Despacho del Decano de la UTN Facultad Regional Rosario.')" />
            <text x="357" y="55" class="room-label" style="font-size:12px; font-weight:800;">
              <tspan x="357" dy="0">Oficina</tspan>
              <tspan x="357" dy="15">Decano</tspan>
            </text>

            <!-- Recepción Decanato -->
            <rect x="300" y="90" width="75" height="125" fill="#2c1247" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Recepción Decanato', 'Recepción y antesala de audiencias con el Decano y autoridades.')" />
            <text x="337" y="156" class="room-label" style="font-size:11px; font-weight:700;">Recepción</text>

            <!-- Asesoría Legal -->
            <rect x="375" y="90" width="40" height="60" fill="#250f3d" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Asesoría Legal', 'Dictámenes jurídicos y asesoramiento normativo.')" />
            <text x="395" y="122" class="room-label" style="font-size:8px;">
              <tspan x="395" dy="0">Asesoría</tspan>
              <tspan x="395" dy="11">Legal</tspan>
            </text>

            <!-- Oficina Vicedecano -->
            <rect x="375" y="150" width="40" height="65" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina Vicedecano', 'Despacho del Vicedecano de la Facultad.')" />
            <text x="395" y="184" class="room-label" style="font-size:8px; font-weight:700;">
              <tspan x="395" dy="0">Ofic.</tspan>
              <tspan x="395" dy="11">Vicedecano</tspan>
            </text>

            <!-- Secretaría Administrativa -->
            <rect x="300" y="215" width="75" height="110" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Secretaría Administrativa', 'Gestión administrativa del decanato y despacho.')" />
            <text x="337" y="266" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="337" dy="0">Secretaría</tspan>
              <tspan x="337" dy="14">Administrativa</tspan>
            </text>

            <!-- Asesoría Contable -->
            <rect x="375" y="215" width="40" height="110" fill="#240f3b" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Asesoría Contable', 'Auditoría contable y control presupuestario.')" />
            <text x="395" y="268" class="room-label" style="font-size:8px;">
              <tspan x="395" dy="0">Asesoría</tspan>
              <tspan x="395" dy="11">Contable</tspan>
            </text>

            <!-- Mayordomía (debajo del pasillo) -->
            <rect x="300" y="425" width="55" height="60" fill="#250f3d" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Mayordomía', 'Mantenimiento, llaves y logística interna de las instalaciones.')" />
            <text x="327" y="458" class="room-label" style="font-size:9.5px; font-weight:700;">Mayordomía</text>

            <!-- Mutual -->
            <rect x="355" y="425" width="50" height="60" fill="#291244" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Mutual UTN', 'Servicios mutuales para la comunidad tecnológica.')" />
            <text x="380" y="458" class="room-label" style="font-size:10px; font-weight:700;">Mutual</text>

            <!-- Patio Este (Gran patio abierto con 'X') -->
            <g>
              <rect x="300" y="485" width="105" height="175" fill="#0d0519" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="300" y1="485" x2="405" y2="660" stroke="rgba(255,255,255,0.18)" stroke-width="1.3" />
              <line x1="405" y1="485" x2="300" y2="660" stroke="rgba(255,255,255,0.18)" stroke-width="1.3" />
              <text x="352" y="575" class="sub-label" style="fill:#a855f7; font-size:10.5px; font-weight:800; letter-spacing:1px;">PATIO ESTE</text>
            </g>

            <!-- ========================================== -->
            <!-- 6. CRUJÍA 4: ALA ESTE Y ENTRADA PRINCIPAL -->
            <!-- ========================================== -->
            <!-- Baños Decanato Norte -->
            <g class="blueprint-room" onclick="selectRoom('Sanitarios Decanato', 'Servicios higiénicos del sector Decanato.')">
              <rect x="415" y="16" width="30" height="74" fill="#180a24" stroke="#ffffff" stroke-width="1.4" />
              <line x1="415" y1="53" x2="445" y2="53" stroke="#fff" stroke-width="1" />
              <text x="430" y="55" class="sub-label" style="fill:#cbd5e1; font-size:8px; font-weight:700;">Baños</text>
            </g>

            <!-- Sala de Profesores PB -->
            <rect x="445" y="16" width="83" height="204" fill="#2f1350" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Sala de Profesores PB', 'Sala principal de descanso, casilleros y reuniones docentes.')" />
            <text x="486" y="118" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="486" dy="0">Sala de</tspan>
              <tspan x="486" dy="16">Profesores</tspan>
            </text>

            <!-- F.A.G.D.U.T. (Gremio Docente) -->
            <rect x="445" y="220" width="83" height="90" fill="#3b1763" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('F.A.G.D.U.T.', 'Asociación Gremial de Docentes de la Universidad Tecnológica Nacional.')" />
            <text x="486" y="268" class="room-label" style="font-size:13px; font-weight:800; letter-spacing:0.5px;">F.A.G.D.U.T.</text>

            <!-- ======================================================== -->
            <!-- ENTRADA PRINCIPAL DE LA UNIVERSIDAD (DEBAJO DE FAGDUT)  -->
            <!-- ======================================================== -->
            <g class="blueprint-room" onclick="selectRoom('Entrada Principal UTN', 'Acceso peatonal principal a la Facultad Regional Rosario por Calle E. Zeballos 1341.')">
              <!-- Escalinata y Vestíbulo de Ingreso Principal -->
              <rect x="375" y="310" width="153" height="115" fill="#1d0a2f" stroke="#38bdf8" stroke-width="2.5" />
              <!-- Peldaños de la escalinata de ingreso -->
              <line x1="445" y1="330" x2="445" y2="425" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="465" y1="330" x2="465" y2="425" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="485" y1="330" x2="485" y2="425" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="505" y1="330" x2="505" y2="425" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="3,2" />

              <!-- Cartel destacado de Entrada Principal -->
              <rect x="382" y="335" width="140" height="42" fill="#0f172a" stroke="#22c55e" stroke-width="2" rx="6" />
              <text x="452" y="352" text-anchor="middle" style="fill:#4ade80; font-size:10.5px; font-weight:900; letter-spacing:0.8px;">
                ENTRADA PRINCIPAL
              </text>
              <text x="452" y="368" text-anchor="middle" style="fill:#38bdf8; font-size:9.5px; font-weight:800; letter-spacing:0.5px;">
                CALLE E. ZEBALLOS
              </text>
            </g>

            <!-- Oficinas debajo de la Entrada Principal -->
            <rect x="445" y="425" width="83" height="65" fill="#260f3e" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Servicios', 'Atención y administración.')" />
            <text x="486" y="460" class="room-label" style="font-size:11px;">Oficina</text>

            <rect x="445" y="490" width="83" height="70" fill="#260f3e" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Oficina de Apoyo', 'Oficina de apoyo operativo.')" />
            <text x="486" y="528" class="room-label" style="font-size:11px;">Oficina</text>

            <!-- Galería de salida hacia el sur -->
            <rect x="445" y="560" width="83" height="100" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Galería Sur', 'Paso semicubierto hacia el patio y salida sur.')" />
            <text x="486" y="612" class="room-label" style="font-size:10.5px;">Galería</text>

            <!-- ========================================== -->
            <!-- 7. CONTORNO EXTERIOR Y LÍNEA MUNICIPAL    -->
            <!-- ========================================== -->
            <rect x="12" y="16" width="516" height="708" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <text x="24" y="32" class="sub-label" style="fill:#cbd5e1; font-size:10px; font-weight:800;">L.M.</text>
            <text x="270" y="746" class="room-label" style="fill:#d8b4fe; font-size:12.5px; font-weight:800; letter-spacing:1px;">
              FRENTE: CALLE E. ZEBALLOS 1341 (PLANTA BAJA)
            </text>
          </svg>"""

def get_piso1_svg():
    return """          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
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
            <!-- 5. CRUJÍA 3: CENTRO-ESTE (SIN FOTOCOPIADORA) -->
            <!-- ========================================== -->
            <rect x="320" y="16" width="92" height="144" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 102', 'Aula de cursado presencial en 1° Piso (Sector Central Norte).')" />
            <text x="366" y="94" class="room-label" style="font-size:15px; font-weight:700;">Aula 102</text>

            <!-- Aula 104 extendida hasta el pasillo (ya no existe fotocopiadora) -->
            <rect x="320" y="160" width="92" height="215" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 104', 'Aula de gran capacidad en 1° Piso para clases presenciales.')" />
            <text x="366" y="272" class="room-label" style="font-size:16px; font-weight:700;">Aula 104</text>

            <!-- Área de Ingreso: Ubicación exacta bajo el pasillo transversal -->
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
          </svg>"""

def get_piso2_svg():
    return """          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
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
            <rect x="12" y="16" width="86" height="130" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 212', 'Aula de teoría de Ingeniería Mecánica y materias de grado.')" />
            <text x="55" y="86" class="room-label" style="font-size:15px; font-weight:700;">Aula 212</text>

            <rect x="12" y="146" width="86" height="120" fill="#281140" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Biblioteca Dpto Mecánica (Aula 214)', 'Biblioteca especializada del Departamento de Ingeniería Mecánica.')" />
            <text x="55" y="196" class="room-label" style="font-size:10.5px; font-weight:700;">
              <tspan x="55" dy="0">Biblioteca Dpto</tspan>
              <tspan x="55" dy="14">Mecánica</tspan>
              <tspan x="55" dy="14" font-size="9.5px">(Aula 214)</tspan>
            </text>

            <rect x="12" y="266" width="86" height="65" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Dpto. Ing. Mecánica', 'Dirección de carrera, secretaría técnica y cátedras de Ingeniería Mecánica.')" />
            <text x="55" y="298" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">Dpto. Ing.</tspan>
              <tspan x="55" dy="14">Mecánica</tspan>
            </text>

            <rect x="12" y="331" width="30" height="44" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Mecánica', 'Depósito de instrumental de laboratorio de mecánica.')" />
            <text x="27" y="356" class="room-label" style="font-size:8px;">Dep.</text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 2° Piso', 'Salida reglamentaria de escape por escalera protegida contra incendios.')">
              <rect x="42" y="331" width="56" height="44" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="60" y1="331" x2="60" y2="375" stroke="#86efac" stroke-width="1.2" />
              <line x1="78" y1="331" x2="78" y2="375" stroke="#86efac" stroke-width="1.2" />
              <text x="70" y="358" class="sub-label" style="fill:#ffffff; font-size:9.5px; font-weight:800;">ESCALERA</text>
            </g>

            <rect x="12" y="375" width="86" height="195" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 216', 'Aula de cursado regular de comisiones numerosas.')" />
            <text x="55" y="476" class="room-label" style="font-size:15px; font-weight:700;">Aula 216</text>

            <rect x="12" y="570" width="86" height="154" fill="#250f3d" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Metalografía', 'Ensayos de tracción, microscopía metalográfica y tratamientos térmicos.')" />
            <text x="55" y="645" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio</tspan>
              <tspan x="55" dy="16">Metalografía</tspan>
            </text>

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
            <rect x="138" y="16" width="92" height="130" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 213', 'Aula de cursado presencial en 2° Piso.')" />
            <text x="184" y="86" class="room-label" style="font-size:15px; font-weight:700;">Aula 213</text>

            <rect x="138" y="146" width="92" height="85" fill="#2a1144" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Aula 2° Piso', 'Aula para clases teóricas y prácticas.')" />
            <text x="184" y="194" class="room-label" style="font-size:14px; font-weight:700;">Aula</text>

            <rect x="138" y="231" width="92" height="55" fill="#240f3b" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Soporte Informático 2° Piso', 'Mantenimiento de equipos, soporte a cátedras y conectividad.')" />
            <text x="184" y="258" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="184" dy="0">Soporte</tspan>
              <tspan x="184" dy="13">Informático</tspan>
            </text>

            <rect x="138" y="286" width="92" height="45" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Bedelía 2° Piso', 'Atención para llaves de aulas, asistencia docente y equipamiento didáctico.')" />
            <text x="184" y="314" class="room-label" style="font-size:11.5px; font-weight:700;">Bedelía</text>

            <rect x="138" y="430" width="92" height="145" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 217', 'Aula de teoría de comisiones regulares.')" />
            <text x="184" y="508" class="room-label" style="font-size:15px; font-weight:700;">Aula 217</text>

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
            <rect x="320" y="16" width="92" height="144" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 202', 'Aula de cursado presencial en 2° Piso (Sector Central Norte).')" />
            <text x="366" y="94" class="room-label" style="font-size:15px; font-weight:700;">Aula 202</text>

            <rect x="320" y="160" width="92" height="145" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 204', 'Aula en 2° Piso.')" />
            <text x="366" y="238" class="room-label" style="font-size:15px; font-weight:700;">Aula 204</text>

            <rect x="320" y="305" width="92" height="70" fill="#3a165f" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Nodo Informático', 'Nodo de comunicaciones y enlace de datos.')" />
            <text x="366" y="345" class="room-label" style="font-size:12.5px; font-weight:800;">Nodo</text>

            <rect x="320" y="430" width="92" height="85" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Área de Información y Comunicación', 'Dirección de comunicación, prensa y portal institucional.')" />
            <text x="366" y="468" class="room-label" style="font-size:10px; font-weight:700;">
              <tspan x="366" dy="0">Área de Información</tspan>
              <tspan x="366" dy="13">y Comunicación</tspan>
            </text>

            <rect x="320" y="515" width="92" height="55" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sistematización de Datos', 'Procesamiento de datos estadísticos y encuestas académicas.')" />
            <text x="366" y="542" class="room-label" style="font-size:9.5px; font-weight:700;">
              <tspan x="366" dy="0">Sistematización</tspan>
              <tspan x="366" dy="12">de Datos</tspan>
            </text>

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
            <!-- 7. CRUJÍA 4: ALA ESTE (CANTINA/KIOSCO)     -->
            <!-- ========================================== -->
            <rect x="452" y="16" width="76" height="144" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 201', 'Aula en 2° Piso (Esquina Noreste).')" />
            <text x="490" y="94" class="room-label" style="font-size:15px; font-weight:700;">Aula 201</text>

            <rect x="452" y="160" width="76" height="120" fill="#2e124c" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Informática 2° Piso', 'Laboratorio con PCs para comisiones prácticas.')" />
            <text x="490" y="214" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="490" dy="0">Laboratorio de</tspan>
              <tspan x="490" dy="15">Informática</tspan>
            </text>

            <rect x="452" y="280" width="76" height="95" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 203', 'Aula de cursado regular.')" />
            <text x="490" y="332" class="room-label" style="font-size:15px; font-weight:700;">Aula 203</text>

            <!-- Cantina / Kiosco (reemplaza a Centro de Estudiantes) -->
            <rect x="452" y="375" width="76" height="95" fill="#38155e" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Cantina / Kiosco', 'Servicio de cantina, kiosco, café y refrigerios para estudiantes y docentes.')" />
            <text x="490" y="420" class="room-label" style="font-size:11.5px; font-weight:800;">
              <tspan x="490" dy="0">Cantina /</tspan>
              <tspan x="490" dy="15">Kiosco</tspan>
            </text>

            <rect x="452" y="470" width="76" height="120" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 209', 'Aula en 2° Piso (Ala Este Sur).')" />
            <text x="490" y="535" class="room-label" style="font-size:15px; font-weight:700;">Aula 209</text>

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
          </svg>"""

def get_piso3_svg():
    return """          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
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
            <rect x="12" y="16" width="86" height="175" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Química', 'Campanas de extracción, mecheros, material volumétrico y mesadas de reactivos.')" />
            <text x="55" y="105" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio de</tspan>
              <tspan x="55" dy="16">Química</tspan>
            </text>

            <rect x="12" y="191" width="43" height="40" fill="#200d33" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Químico', 'Almacén de reactivos.')" />
            <text x="33" y="215" class="room-label" style="font-size:8.5px;">Depósito</text>
            <rect x="55" y="191" width="43" height="40" fill="#200d33" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Instrumental', 'Almacén de instrumental.')" />
            <text x="76" y="215" class="room-label" style="font-size:8.5px;">Depósito</text>

            <rect x="12" y="231" width="86" height="70" fill="#2c1247" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala 3 Química', 'Sala de cátedra y reuniones técnicas de profesores de Química.')" />
            <text x="55" y="271" class="room-label" style="font-size:12px; font-weight:700;">Sala 3</text>

            <rect x="12" y="301" width="30" height="74" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito de Seguridad', 'Armario seguro de reactivos de riesgo.')" />
            <text x="27" y="342" class="room-label" style="font-size:8px;">Dep.</text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 3° Piso', 'Salida reglamentaria de escape por escalera protegida contra incendios.')">
              <rect x="42" y="301" width="56" height="74" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="60" y1="301" x2="60" y2="375" stroke="#86efac" stroke-width="1.2" />
              <line x1="78" y1="301" x2="78" y2="375" stroke="#86efac" stroke-width="1.2" />
              <text x="70" y="342" class="sub-label" style="fill:#ffffff; font-size:9.5px; font-weight:800;">ESCALERA</text>
            </g>

            <rect x="12" y="375" width="86" height="55" fill="#200d33" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Depósito Químico Central', 'Almacenamiento de frascos y solventes.')" />
            <text x="55" y="407" class="room-label" style="font-size:11px;">Depósito</text>

            <rect x="12" y="430" width="86" height="294" fill="#250f3d" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Orgánica', 'Laboratorio de Química Orgánica con sistemas de destilación y síntesis.')" />
            <text x="55" y="582" class="room-label" style="font-size:13px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio</tspan>
              <tspan x="55" dy="18">Orgánica</tspan>
            </text>

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
            <!-- 3. CRUJÍA 2: CENTRO-OESTE                 -->
            <!-- ========================================== -->
            <rect x="138" y="16" width="92" height="215" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Química Analítica General', 'Prácticas de gravimetría, volumetría y pHmetría.')" />
            <text x="184" y="125" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">de Química</tspan>
            </text>

            <!-- Laboratorio: ahora ocupa hasta el pasillo (incluyendo el viejo espacio de esp tec y tablero) -->
            <rect x="138" y="231" width="92" height="144" fill="#250f3d" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio de Investigación Química', 'Investigación de procesos biotecnológicos y ambientales.')" />
            <text x="184" y="306" class="room-label" style="font-size:13px; font-weight:700;">Laboratorio</text>

            <!-- Crujía 2 Sur: Oficina y Depósito (BAR ELIMINADO/VACÍO) -->
            <rect x="138" y="430" width="46" height="75" fill="#281140" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Oficina de Química', 'Oficina de jefatura de laboratorios.')" />
            <text x="161" y="470" class="room-label" style="font-size:9px;">Oficina</text>

            <rect x="184" y="430" width="46" height="75" fill="#1e0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Laboratorio', 'Material de vidrio y repuestos de instrumental.')" />
            <text x="207" y="470" class="room-label" style="font-size:8px;">
              <tspan x="207" dy="0">Depósito</tspan>
              <tspan x="207" dy="11">Lab.</tspan>
            </text>

            <rect x="138" y="505" width="92" height="219" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Química Analítica', 'Cromatografía líquida y gaseosa, espectrofotometría y análisis instrumental.')" />
            <text x="184" y="618" class="room-label" style="font-size:12px; font-weight:700;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">Química Analítica</tspan>
            </text>

            <!-- ========================================== -->
            <!-- 4. CRUJÍA CENTRAL: ASCENSORES Y TABLEROS  -->
            <!-- ========================================== -->
            <g>
              <rect x="230" y="16" width="90" height="310" fill="#10061c" stroke="#4a1c72" stroke-width="1.6" />
              <line x1="230" y1="16" x2="320" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <line x1="320" y1="16" x2="230" y2="326" stroke="rgba(255,255,255,0.2)" stroke-width="1.3" />
              <text x="275" y="175" class="sub-label" style="fill:#a855f7; font-size:10px; font-weight:800; letter-spacing:1px;">PATIO DE LUZ</text>
            </g>

            <!-- Tablero a la izquierda del ascensor -->
            <rect x="230" y="326" width="20" height="49" fill="#1c0b2f" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Tablero Oeste 3° Piso', 'Tablero eléctrico y control de servicios.')" />
            <text x="240" y="352" class="sub-label" style="fill:#cbd5e1; font-size:7px;">Tablero</text>

            <!-- Batería de Ascensores Central -->
            <g class="blueprint-room" onclick="selectRoom('Ascensores 3° Piso', 'Batería de dos ascensores principales accesibles.')">
              <rect x="250" y="326" width="50" height="49" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" />
              <line x1="275" y1="326" x2="275" y2="375" stroke="#ffffff" stroke-width="1.5" />
              <rect x="253" y="368" width="18" height="7" fill="#facc15" />
              <rect x="279" y="368" width="18" height="7" fill="#facc15" />
              <text x="275" y="348" class="sub-label" style="fill:#fef08a; font-weight:800; font-size:7.5px;">ASCENS.</text>
            </g>

            <!-- Tablero a la derecha del ascensor -->
            <rect x="300" y="326" width="20" height="49" fill="#1c0b2f" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Sector Tableros Este', 'Tableros eléctricos sector Este.')" />
            <text x="310" y="352" class="sub-label" style="fill:#cbd5e1; font-size:7px;">Tablero</text>

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
            <rect x="320" y="16" width="92" height="120" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 302', 'Aula de cursado presencial en 3° Piso.')" />
            <text x="366" y="80" class="room-label" style="font-size:15px; font-weight:700;">Aula 302</text>

            <rect x="320" y="136" width="92" height="110" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 304', 'Aula en 3° Piso.')" />
            <text x="366" y="196" class="room-label" style="font-size:15px; font-weight:700;">Aula 304</text>

            <rect x="320" y="246" width="92" height="129" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 306', 'Aula en 3° Piso (Sector Central).')" />
            <text x="366" y="315" class="room-label" style="font-size:15px; font-weight:700;">Aula 306</text>

            <rect x="320" y="430" width="92" height="55" fill="#271141" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Sala de Profesores Química', 'Espacio docente y reuniones de cátedra de Química.')" />
            <text x="366" y="462" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="366" dy="0">Sala de</tspan>
              <tspan x="366" dy="14">Profesores</tspan>
            </text>

            <rect x="320" y="485" width="92" height="50" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('A.R.E.I.Q.', 'Asociación Rosarina de Estudiantes de Ingeniería Química.')" />
            <text x="366" y="515" class="room-label" style="font-size:12px; font-weight:800;">A.R.E.I.Q.</text>

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
            <rect x="452" y="16" width="76" height="130" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 301', 'Aula en 3° Piso (Esquina Noreste).')" />
            <text x="490" y="86" class="room-label" style="font-size:15px; font-weight:700;">Aula 301</text>

            <rect x="452" y="146" width="76" height="115" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 303', 'Aula en 3° Piso (Ala Este).')" />
            <text x="490" y="208" class="room-label" style="font-size:15px; font-weight:700;">Aula 303</text>

            <rect x="452" y="261" width="76" height="114" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 305', 'Aula en 3° Piso (Ala Este Central).')" />
            <text x="490" y="322" class="room-label" style="font-size:15px; font-weight:700;">Aula 305</text>

            <rect x="452" y="375" width="76" height="130" fill="#3b1763" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Dpto. Ing. Química', 'Dirección de carrera, secretaría técnica y laboratorios de investigación.')" />
            <text x="490" y="440" class="room-label" style="font-size:12px; font-weight:800;">
              <tspan x="490" dy="0">Dpto. Ing.</tspan>
              <tspan x="490" dy="16">Química</tspan>
            </text>

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
          </svg>"""

def get_piso4_svg():
    return """          <svg viewBox="0 0 540 760" class="blueprint-svg w-full h-auto max-h-[78vh] rounded-xl shadow-2xl">
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
            <rect x="12" y="16" width="86" height="145" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula Física II', 'Aula especializada para el cursado de Física II.')" />
            <text x="55" y="94" class="room-label" style="font-size:13.5px; font-weight:700;">
              <tspan x="55" dy="0">Aula</tspan>
              <tspan x="55" dy="16">Física II</tspan>
            </text>

            <rect x="12" y="161" width="86" height="40" fill="#200d33" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito de Física', 'Depósito de instrumentos de óptica y electromagnetismo.')" />
            <text x="55" y="186" class="room-label" style="font-size:10px;">Depósito</text>

            <rect x="12" y="201" width="86" height="135" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Física I', 'Ensayos de cinemática, dinámica, oscilaciones y ondas.')" />
            <text x="55" y="272" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="55" dy="0">Laboratorio</tspan>
              <tspan x="55" dy="16">Física I</tspan>
            </text>

            <g class="blueprint-room" onclick="selectRoom('Escalera Emergencia 4° Piso', 'Salida reglamentaria de escape por escalera protegida contra incendios.')">
              <rect x="12" y="336" width="86" height="50" fill="#14532d" stroke="#22c55e" stroke-width="2" />
              <line x1="42" y1="336" x2="42" y2="386" stroke="#86efac" stroke-width="1.2" />
              <line x1="58" y1="336" x2="58" y2="386" stroke="#86efac" stroke-width="1.2" />
              <line x1="74" y1="336" x2="74" y2="386" stroke="#86efac" stroke-width="1.2" />
              <text x="55" y="367" class="sub-label" style="fill:#ffffff; font-size:10.5px; font-weight:800;">ESCALERA</text>
            </g>

            <rect x="12" y="386" width="86" height="80" fill="#250f3d" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('UDB Matemática', 'Unidad Docente Básica de Matemática, Álgebra y Análisis Matemático.')" />
            <text x="55" y="428" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">UDB</tspan>
              <tspan x="55" dy="15">Matemática</tspan>
            </text>

            <rect x="12" y="466" width="86" height="70" fill="#281140" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('UDB Idiomas', 'Unidad Docente de Inglés Técnico y acreditaciones de idiomas.')" />
            <text x="55" y="504" class="room-label" style="font-size:11px; font-weight:700;">
              <tspan x="55" dy="0">UDB</tspan>
              <tspan x="55" dy="15">Idiomas</tspan>
            </text>

            <rect x="12" y="536" width="86" height="90" fill="#321454" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Dpto. Materias Básicas', 'Dirección del Departamento de Ciencias Básicas.')" />
            <text x="55" y="582" class="room-label" style="font-size:10.5px; font-weight:800;">
              <tspan x="55" dy="0">Dpto. Materias</tspan>
              <tspan x="55" dy="14">Básicas</tspan>
            </text>

            <rect x="12" y="626" width="43" height="98" fill="#2c1247" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Director Materias Básicas', 'Despacho de la Dirección de Ciencias Básicas.')" />
            <text x="33" y="678" class="room-label" style="font-size:9.5px; font-weight:700;">Director</text>

            <rect x="55" y="626" width="43" height="98" fill="#2c1247" stroke="#ffffff" stroke-width="1.6" class="blueprint-room" onclick="selectRoom('Secretaría Materias Básicas', 'Atención docente de materias básicas.')" />
            <text x="76" y="678" class="room-label" style="font-size:9.5px; font-weight:700;">Secretaría</text>

            <g class="blueprint-room" onclick="selectRoom('Laboratorio Informática Pasillo', 'Laboratorio complementario de computación.')">
              <rect x="98" y="16" width="40" height="95" fill="#2d1348" stroke="#ffffff" stroke-width="1.6" />
              <text x="118" y="60" class="room-label" style="font-size:9px; font-weight:700;">
                <tspan x="118" dy="0">Lab.</tspan>
                <tspan x="118" dy="13">Inform.</tspan>
              </text>
            </g>

            <g class="blueprint-room" onclick="selectRoom('Bedelía 4° Piso', 'Bedelía de Ciencias Básicas y Civil.')">
              <rect x="98" y="590" width="40" height="65" fill="#321454" stroke="#ffffff" stroke-width="1.4" />
              <text x="118" y="627" class="room-label" style="font-size:9px; font-weight:700;">Bedelía</text>
            </g>
            <rect x="98" y="655" width="40" height="69" fill="#1b0c30" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Depósito Pasillo', 'Depósito.')" />
            <text x="118" y="694" class="room-label" style="font-size:8.5px;">Depósito</text>

            <!-- ========================================== -->
            <!-- 3. CRUJÍA 2: CENTRO-OESTE (ANFITEATRO)    -->
            <!-- ========================================== -->
            <rect x="138" y="16" width="92" height="135" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Informática 4° Piso', 'Laboratorio informático para prácticas de simulación y cálculo.')" />
            <text x="184" y="86" class="room-label" style="font-size:12.5px; font-weight:700;">
              <tspan x="184" dy="0">Laboratorio</tspan>
              <tspan x="184" dy="16">Informática</tspan>
            </text>

            <!-- Anfiteatro: Llega hasta el límite del pasillo sin obstruirlo (alineado con los ascensores y=375) -->
            <g class="blueprint-room" onclick="selectRoom('Anfiteatro 4° Piso', 'Anfiteatro con gradas para clases magistrales, defensas de tesis y conferencias.')">
              <rect x="138" y="151" width="92" height="224" fill="#3a165f" stroke="#ffffff" stroke-width="2" />
              <!-- Gradas / Peldaños del Anfiteatro uniformemente distribuidas -->
              <line x1="148" y1="180" x2="220" y2="180" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="205" x2="220" y2="205" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="230" x2="220" y2="230" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="255" x2="220" y2="255" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="280" x2="220" y2="280" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <line x1="148" y1="305" x2="220" y2="305" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="3,2" />
              <text x="184" y="342" class="room-label" style="font-size:14px; font-weight:800; letter-spacing:0.8px;">Anfiteatro</text>
            </g>

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
            <rect x="320" y="16" width="92" height="135" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 402', 'Aula de cursado presencial en 4° Piso.')" />
            <text x="366" y="88" class="room-label" style="font-size:15px; font-weight:700;">Aula 402</text>

            <rect x="320" y="151" width="92" height="120" fill="#2d1348" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 404', 'Aula en 4° Piso.')" />
            <text x="366" y="216" class="room-label" style="font-size:15px; font-weight:700;">Aula 404</text>

            <rect x="320" y="271" width="92" height="104" fill="#271141" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Informática Civil', 'Cálculo de estructuras y diseño CAD para Ingeniería Civil.')" />
            <text x="366" y="324" class="room-label" style="font-size:11.5px; font-weight:700;">
              <tspan x="366" dy="0">Laboratorio de</tspan>
              <tspan x="366" dy="15">Informática</tspan>
            </text>

            <rect x="320" y="430" width="46" height="38" fill="#250f3d" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Secretaría Civil', 'Secretaría del Dpto. Ingeniería Civil.')" />
            <text x="343" y="453" class="room-label" style="font-size:8px;">Sec. Civil</text>

            <rect x="366" y="430" width="46" height="38" fill="#321454" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Bedelía Civil', 'Bedelía de Civil.')" />
            <text x="389" y="453" class="room-label" style="font-size:8.5px; font-weight:700;">Bedelía</text>

            <rect x="320" y="468" width="92" height="42" fill="#3b1763" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('Dpto. Ingeniería Civil', 'Dirección de carrera de Ingeniería Civil.')" />
            <text x="366" y="494" class="room-label" style="font-size:12px; font-weight:800;">Civil</text>

            <rect x="320" y="510" width="92" height="110" fill="#281140" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Laboratorio Ing. Civil', 'Ensayos de hormigón, hidráulica y suelos.')" />
            <text x="366" y="566" class="room-label" style="font-size:11.5px; font-weight:700;">
              <tspan x="366" dy="0">Laboratorio</tspan>
              <tspan x="366" dy="15">Ing. Civil</tspan>
            </text>

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
            <rect x="452" y="16" width="76" height="125" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 401', 'Aula en 4° Piso (Esquina Noreste).')" />
            <text x="490" y="84" class="room-label" style="font-size:15px; font-weight:700;">Aula 401</text>

            <rect x="452" y="141" width="76" height="120" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 403', 'Aula en 4° Piso.')" />
            <text x="490" y="206" class="room-label" style="font-size:15px; font-weight:700;">Aula 403</text>

            <rect x="452" y="261" width="76" height="114" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 405', 'Aula en 4° Piso.')" />
            <text x="490" y="322" class="room-label" style="font-size:15px; font-weight:700;">Aula 405</text>

            <rect x="452" y="375" width="76" height="120" fill="#2a1144" stroke="#ffffff" stroke-width="2" class="blueprint-room" onclick="selectRoom('Aula 407', 'Aula en 4° Piso.')" />
            <text x="490" y="440" class="room-label" style="font-size:15px; font-weight:700;">Aula 407</text>

            <rect x="452" y="495" width="46" height="100" fill="#321454" stroke="#ffffff" stroke-width="1.8" class="blueprint-room" onclick="selectRoom('ICMA', 'Instituto de Mecánica Aplicada y Estructuras.')" />
            <text x="475" y="550" class="room-label" style="font-size:11px; font-weight:800;">ICMA</text>

            <rect x="498" y="495" width="30" height="50" fill="#250f3d" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Oficina ICMA 1', 'Oficina de investigación.')" />
            <text x="513" y="524" class="room-label" style="font-size:8px;">Ofic.</text>

            <rect x="498" y="545" width="30" height="50" fill="#250f3d" stroke="#ffffff" stroke-width="1.4" class="blueprint-room" onclick="selectRoom('Oficina ICMA 2', 'Oficina técnica.')" />
            <text x="513" y="574" class="room-label" style="font-size:8px;">Ofic.</text>

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
          </svg>"""

