const navItems = [
  ['resumen', 'Resumen'],
  ['perfiles', 'Perfiles'],
  ['salud', 'Salud'],
  ['documentos', 'Documentos'],
] as const;

function StatusBadge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'confirmed' | 'pending' }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

function Detail({ title, eyebrow, children, open = false }: { title: string; eyebrow?: string; children: React.ReactNode; open?: boolean }) {
  return (
    <details className="detail-card" open={open}>
      <summary>
        <span>
          {eyebrow && <small>{eyebrow}</small>}
          {title}
        </span>
        <span className="detail-icon" aria-hidden="true">+</span>
      </summary>
      <div className="detail-content">{children}</div>
    </details>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark" aria-hidden="true">CA</span>
          <span>Contexto familiar</span>
        </a>
        <nav aria-label="Navegación principal">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Perfil familiar · Canadá</p>
            <h1>Contexto personal y migratorio de nuestra familia</h1>
            <p className="hero-lead">
              Una visión completa y organizada de nuestra historia, situación actual, prioridades y datos pendientes para una futura evaluación migratoria.
            </p>
            <div className="hero-meta">
              <StatusBadge tone="confirmed">Actualizado: 10 de septiembre de 2026</StatusBadge>
              <StatusBadge>Mississauga, Ontario</StatusBadge>
            </div>
          </div>
        </section>

        <section className="deadline-band" aria-label="Fecha prioritaria">
          <div className="deadline-date"><span>06</span><small>OCT · 2026</small></div>
          <div>
            <p className="eyebrow">Fecha crítica</p>
            <h2>Vencimiento de ambos permisos de trabajo</h2>
            <p>El PGWP de Deiby y el OWP de Liliana vencen el 6 de octubre de 2026. Según los permisos, ambos deben salir de Canadá a más tardar ese día.</p>
          </div>
        </section>

        <section id="resumen" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Panorama general</p>
            <h2>Lo esencial, en un vistazo</h2>
          </div>
          <div className="summary-grid">
            <article className="summary-card accent-red"><span>01</span><h3>Familia</h3><p>Deiby y Liliana son colombianos, viven en Mississauga y llegaron a Canadá el 9 de diciembre de 2021. Están casados desde marzo de 2021 y tienen un hijo ciudadano canadiense.</p></article>
            <article className="summary-card accent-blue"><span>02</span><h3>Estatus</h3><p>PGWP y OWP emitidos el 6 de octubre de 2023, vigentes hasta el 6 de octubre de 2026. No hay solicitudes migratorias pendientes ni historial de incumplimiento.</p></article>
            <article className="summary-card accent-gold"><span>03</span><h3>Trabajo</h3><p>Deiby trabaja como Senior Software Developer en TripArc desde abril de 2023, a tiempo completo, con ingresos aproximados de CAD 100,000 al año.</p></article>
            <article className="summary-card accent-green"><span>04</span><h3>Express Entry</h3><p>Perfil activo con 452 puntos CRS. El sistema muestra elegibilidad para Canadian Experience Class y Federal Skilled Worker Program.</p></article>
            <article className="summary-card accent-purple"><span>05</span><h3>Idiomas</h3><p>CELPIP informado como CLB 7 y mejor TCF con comprensión escrita C1 y las demás habilidades en B2.</p></article>
            <article className="summary-card accent-rose"><span>06</span><h3>Prioridad familiar</h3><p>Mantener la permanencia legal y la continuidad de los controles médicos del hijo. Si solo uno puede trabajar, la prioridad es conservar el empleo de Deiby.</p></article>
          </div>
        </section>

        <section className="section-block timeline-section">
          <div className="section-heading compact">
            <p className="eyebrow">Cronología</p>
            <h2>Fechas que orientan la situación</h2>
          </div>
          <div className="timeline">
            <div><time>Mar 2021</time><p>Matrimonio de Deiby y Liliana.</p></div>
            <div><time>09 dic 2021</time><p>Llegada de ambos a Canadá.</p></div>
            <div><time>22 abr 2023</time><p>Graduación de Deiby en Lambton College.</p></div>
            <div><time>06 oct 2023</time><p>Emisión del PGWP y OWP.</p></div>
            <div><time>Ene 2026</time><p>Diagnóstico de cáncer del hijo.</p></div>
            <div><time>19 ago 2026</time><p>Sesión TCF con mejor resultado registrada.</p></div>
            <div className="timeline-next"><time>09 sep 2026</time><p>Próximo examen de francés.</p></div>
            <div className="timeline-critical"><time>06 oct 2026</time><p>Vencimiento de ambos permisos.</p></div>
            <div><time>03 nov 2026</time><p>El hijo cumplirá un año.</p></div>
          </div>
        </section>

        <section id="perfiles" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Información detallada</p>
            <h2>Familia, estatus y perfiles</h2>
            <p>Abre cada sección para consultar el contenido completo.</p>
          </div>
          <div className="details-stack">
            <Detail title="Resumen familiar" eyebrow="01" open>
              <p>Somos una familia colombiana residente en <strong>Mississauga, Ontario</strong>. Deiby Montoya y Liliana Caina llegamos a Canadá el <strong>9 de diciembre de 2021</strong>.</p>
              <p>Estamos casados desde <strong>marzo de 2021</strong>. Tenemos certificado de matrimonio y pruebas de convivencia.</p>
              <p>Tenemos un solo hijo. Nació en Canadá, es ciudadano canadiense y cumplirá un año el <strong>3 de noviembre de 2026</strong>. Tenemos su certificado de nacimiento y pasaporte canadiense.</p>
              <p>No tenemos otros hijos ni dependientes. Tampoco tenemos familiares ciudadanos canadienses o residentes permanentes. Nuestra familia extendida vive en Colombia, nuestro país de nacionalidad y residencia anterior.</p>
            </Detail>

            <Detail title="Historia y estatus migratorio" eyebrow="02">
              <p>Deiby llegó como estudiante internacional. Después de terminar sus estudios obtuvo un <strong>Post-Graduation Work Permit (PGWP)</strong>. Liliana obtuvo un <strong>Open Work Permit (OWP)</strong> como cónyuge acompañante del titular del permiso de trabajo.</p>
              <div className="table-wrap"><table><thead><tr><th>Dato</th><th>Deiby Montoya</th><th>Liliana Caina</th></tr></thead><tbody>
                <tr><td>Fecha de emisión</td><td>6 de octubre de 2023</td><td>6 de octubre de 2023</td></tr>
                <tr><td>Fecha de vencimiento</td><td><strong>6 de octubre de 2026</strong></td><td><strong>6 de octubre de 2026</strong></td></tr>
                <tr><td>Case type</td><td>56</td><td>20</td></tr>
                <tr><td>Empleador</td><td>ANY</td><td>ANY</td></tr>
                <tr><td>Ocupación</td><td>OPEN</td><td>OPEN</td></tr>
                <tr><td>Observación principal</td><td>Post-graduate employment</td><td>Accompanying spouse on work permit; authorized to work under applicable labour laws</td></tr>
              </tbody></table></div>
              <p>Ambos permisos indican, entre otras condiciones, que sus titulares deben salir de Canadá a más tardar el 6 de octubre de 2026; que no están autorizados para trabajar en cuidado infantil, enseñanza primaria o secundaria ni ocupaciones de servicios de salud; y que no pueden estudiar sin autorización cuando esta sea requerida.</p>
              <p>Los permisos también señalan que hubo <strong>maintained temporary resident status under R183(5)</strong> antes de su emisión.</p>
              <p>Las solicitudes del PGWP y del OWP se presentaron juntas. Conservamos copias de las solicitudes, cartas de aprobación y mensajes relacionados de IRCC. No se registra por ahora la fecha exacta de presentación porque ambos permisos fueron aprobados y el expediente está disponible.</p>
              <p>No hemos solicitado posteriormente otra extensión o cambio de estatus y no tenemos otro documento de estatus vigente.</p>
              <p>Nunca hemos recibido una negativa de visa, permiso de estudio, permiso de trabajo, extensión o residencia permanente. Tampoco hemos tenido estatus vencido, trabajo o estudio sin autorización, infracciones migratorias, cartas de cumplimiento o remoción, solicitudes de refugio, H&amp;C, PRRA ni apelaciones.</p>
              <p>No tenemos antecedentes penales, cargos, problemas de seguridad, falsedad documental ni asuntos médicos de inadmisibilidad conocidos. Nunca hemos contratado a un representante o consultor migratorio.</p>
              <p>Ambos tenemos visas de Estados Unidos aprobadas por diez años.</p>
            </Detail>

            <Detail title="Pasaportes, visas y viajes" eyebrow="03">
              <div className="table-wrap"><table><thead><tr><th>Documento</th><th>Deiby Montoya</th><th>Liliana Caina</th></tr></thead><tbody>
                <tr><td>Vencimiento del pasaporte</td><td><strong>12 de marzo de 2029</strong></td><td><strong>26 de agosto de 2029</strong></td></tr>
                <tr><td>Categoría de visa canadiense</td><td>V-1 Visitor</td><td>V-1 Visitor</td></tr>
                <tr><td>Emisión de la visa canadiense</td><td>26 de octubre de 2023</td><td>26 de octubre de 2023</td></tr>
                <tr><td>Vencimiento de la visa canadiense</td><td>11 de marzo de 2029</td><td>11 de marzo de 2029</td></tr>
              </tbody></table></div>
              <p>Hemos viajado juntos fuera de Canadá en dos ocasiones desde nuestra llegada:</p>
              <ul><li>Salida a Colombia el <strong>2 de noviembre de 2023</strong> y regreso a Canadá el <strong>4 de diciembre de 2023</strong>.</li><li>Salida el <strong>12 de junio de 2024</strong> y regreso a Canadá el <strong>20 de julio de 2024</strong>.</li></ul>
            </Detail>

            <Detail title="Estudios y experiencia profesional de Deiby" eyebrow="04">
              <p>Deiby estudió presencialmente el programa de dos años <strong>Computer Software and Database Development</strong> en <strong>Lambton College, campus de Mississauga</strong>. Se graduó el <strong>22 de abril de 2023</strong>.</p>
              <p>En Colombia completó un tecnólogo de aproximadamente dos años. No ha obtenido una <strong>Educational Credential Assessment (ECA)</strong> de ese estudio porque actualmente no le aporta puntos adicionales.</p>
              <p>Acumuló cerca de <strong>seis años de experiencia profesional como desarrollador de software en Colombia</strong> y puede obtener cartas que documenten funciones, fechas y horas.</p>
              <p>Trabaja como <strong>Senior Software Developer</strong> para <strong>TripArc</strong> desde abril de 2023. Es empleado a tiempo completo, trabaja aproximadamente 40 horas semanales y gana alrededor de <strong>CAD 100,000 al año</strong>. Su trabajo es mayormente remoto, pero puede asistir presencialmente.</p>
              <p>La oficina está en Toronto y en el contrato figura la dirección <strong>2 Queen Street East, Toronto, Ontario</strong>. Deiby no ha tenido interrupciones laborales desde que comenzó.</p>
              <p>TripArc conoce la fecha de vencimiento del PGWP. La empresa no está dispuesta a ofrecer apoyo migratorio; Deiby ya consultó incluso la posibilidad de Mobilité Francophone.</p>
              <div className="callout"><StatusBadge tone="pending">Clasificación provisional</StatusBadge><h4>NOC 21232 — Software developers and programmers, TEER 1</h4><p>Es la clasificación que mejor encaja según el título y la descripción general suministrada. Debe compararse con las funciones reales de la carta laboral de TripArc, ya que el código se determina por la correspondencia sustancial de funciones y no solo por el título.</p><a href="https://noc.esdc.gc.ca/Structure/NOCProfile?Code=21232&GocTemplateCulture=en-CA&Version=2021.0" target="_blank" rel="noreferrer">Consultar clasificación oficial ↗</a></div>
            </Detail>

            <Detail title="Idiomas de Deiby" eyebrow="05">
              <h3>Inglés</h3>
              <p>Deiby presentó <strong>CELPIP en abril de 2025</strong> y tiene un resultado certificado equivalente, según lo informado, a <strong>CLB 7</strong>. Faltan el día exacto, los cuatro puntajes y la fecha de vencimiento del resultado.</p>
              <h3>Francés</h3>
              <p>Deiby ha presentado TCF y TEF varias veces durante 2026. Todos los certificados mencionados siguen vigentes. Su mejor resultado corresponde al TCF:</p>
              <div className="table-wrap"><table><tbody>
                <tr><th>Centro</th><td>North York, GB Language</td></tr><tr><th>Fecha de la sesión</th><td><strong>19 de agosto de 2026</strong></td></tr><tr><th>Emisión de resultados</th><td><strong>7 de septiembre de 2026</strong></td></tr><tr><th>Vencimiento</th><td><strong>6 de septiembre de 2028</strong></td></tr><tr><th>Número de attestation</th><td className="break-anywhere">41F462E4-D71A-493… <small>(la imagen compartida está recortada)</small></td></tr>
              </tbody></table></div>
              <div className="table-wrap"><table><thead><tr><th>Habilidad</th><th>Puntaje</th><th>Nivel CEFR</th></tr></thead><tbody>
                <tr><td>Comprensión oral</td><td>448/699</td><td>B2</td></tr><tr><td>Comprensión escrita</td><td>502/699</td><td>C1</td></tr><tr><td>Expresión oral</td><td>12/20</td><td>B2</td></tr><tr><td>Expresión escrita</td><td>10/20</td><td>B2</td></tr>
              </tbody></table></div>
              <p>Deiby presentará otro examen de francés el <strong>9 de septiembre de 2026</strong>.</p>
            </Detail>

            <Detail title="Perfil de Liliana" eyebrow="06">
              <p>Liliana no está trabajando actualmente y no conserva una relación laboral a la cual regresar.</p>
              <p>Está recibiendo beneficios de maternidad y parentales de EI. Los beneficios comenzaron en julio; falta confirmar el año y la fecha exacta. La familia escogió la opción estándar. Liliana tomó la mayor parte del período —aproximadamente <strong>40–44 semanas, pendiente de confirmación</strong>— y Deiby tomó cinco semanas como padre. Los períodos exactos pueden verificarse en las decisiones o estados de Service Canada si llegan a ser necesarios.</p>
              <p>Liliana terminó el bachillerato en Colombia en <strong>2009</strong>.</p>
              <p>Ha trabajado anteriormente en Canadá en ocupaciones que la familia describe como no calificadas. Tiene más de un año de experiencia en la panadería o tienda mencionada, con labores relacionadas con panadería, restaurante y cocina. También tiene experiencia como <em>warehouse associate</em>.</p>
              <p>No tiene certificaciones profesionales mayores. Cuenta únicamente con una certificación o habilitación de <em>forklift driver</em>.</p>
              <p>Su inglés se estima aproximadamente en <strong>CLB 5</strong>, pero no ha presentado un examen oficial. Actualmente no tiene conocimientos de francés ni ha presentado un examen de francés.</p>
              <p>Por el cuidado del bebé y el tiempo disponible, no considera realista estudiar francés intensivamente durante el mes previo al vencimiento de los permisos.</p>
            </Detail>

            <Detail title="Posibilidad laboral en la panadería" eyebrow="07">
              <p>Se consideró preliminarmente una panadería, restaurante o tienda perteneciente a un amigo como posible empleador de Liliana. Allí obtuvo parte de su experiencia canadiense.</p>
              <p>No existe una oferta formal, cargo, salario u horario definidos, y probablemente habría que crear el puesto. El empleador todavía no conoce las obligaciones y costos correspondientes.</p>
              <p>La familia no considera esta posibilidad suficientemente viable en este momento. Por ello se conserva solo como antecedente y se retiraron las preguntas empresariales detalladas.</p>
            </Detail>

            <Detail title="Perfil de Express Entry" eyebrow="08">
              <div className="metric-row"><div><strong>452</strong><span>Puntos CRS actuales</span></div><div><strong>2</strong><span>Programas elegibles</span></div><div><strong>0</strong><span>Solicitudes pendientes</span></div></div>
              <p>Deiby creó un perfil de <strong>Express Entry</strong> aproximadamente en mayo de 2026 y lo actualizó en junio de 2026. No recuerda la fecha exacta de la actualización.</p>
              <p>El sistema lo señala como elegible para <strong>Canadian Experience Class (CEC)</strong> y <strong>Federal Skilled Worker Program (FSWP)</strong>.</p>
              <ul><li>El estado civil está declarado como casado.</li><li>Liliana está incluida como cónyuge acompañante.</li><li>Se declararon los estudios, empleos y períodos sin empleo.</li><li>El empleo de Deiby está declarado bajo el NOC de desarrollador de software.</li></ul>
              <p>No tenemos nominación provincial, Notification of Interest, invitación a presentar solicitud, AOR, solicitud de residencia permanente ni ninguna otra solicitud migratoria pendiente.</p>
            </Detail>
          </div>
        </section>

        <section id="salud" className="section-block health-section">
          <div className="section-heading">
            <p className="eyebrow">Prioridad principal</p>
            <h2>Salud y bienestar de nuestro hijo</h2>
          </div>
          <div className="health-layout">
            <div className="health-main">
              <p>Nuestro hijo fue diagnosticado con cáncer en <strong>enero de 2026</strong>. Recibió tratamiento de <strong>quimioterapia y cirugía</strong>.</p>
              <p>Afortunadamente se encuentra bien actualmente. Continúa bajo seguimiento médico periódico para vigilar su evolución, aproximadamente cada tres o seis meses.</p>
              <p>Liliana lo cuida actualmente. Cuando ella vuelva a trabajar, probablemente necesitaremos inscribirlo en un daycare.</p>
              <p className="health-priority">La continuidad de sus controles médicos es la principal preocupación familiar. Nos preocupa que, si regresamos a Colombia, sus controles se interrumpan o no continúen en las mismas condiciones.</p>
              <p>No se ha informado otra circunstancia médica, familiar, de seguridad o vulnerabilidad adicional.</p>
            </div>
            <aside><span className="large-number">3–6</span><strong>meses</strong><p>Frecuencia aproximada de seguimiento, pendiente de confirmar con el calendario médico oficial.</p></aside>
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading"><p className="eyebrow">Estabilidad y arraigo</p><h2>Situación económica y vínculos con Canadá</h2></div>
          <div className="two-column-copy">
            <div><h3>Capacidad económica</h3><p>No tenemos deudas. Nuestras obligaciones económicas principales corresponden al hogar y a nuestro hijo.</p><p>Ambos tenemos ahorros líquidos. La familia podría mantenerse aproximadamente tres meses si ninguno trabaja, aunque esto consumiría sus recursos.</p><p>Tenemos T4, Notices of Assessment, pay stubs y declaraciones de impuestos de los años trabajados en Canadá.</p></div>
            <div><h3>Residencia y prioridades</h3><p>Tenemos contrato de arriendo, cuentas, seguros, historial tributario y otras pruebas continuas de residencia en Ontario. Participamos en una iglesia.</p><p>No participamos actualmente en asociaciones, voluntariados ni redes profesionales canadienses.</p><p>Nuestra preferencia es que ambos podamos seguir trabajando. Si no fuera posible, la prioridad laboral es que Deiby conserve su empleo, por ser el ingreso principal. También es esencial mantener la permanencia legal de toda la familia.</p><p>Estamos dispuestos a mudarnos de ciudad o provincia por una oportunidad laboral legítima. También estamos dispuestos a salir de Canadá si no existe una vía legal para permanecer.</p></div>
          </div>
        </section>

        <section id="documentos" className="section-block documents-section">
          <div className="section-heading"><p className="eyebrow">Inventario</p><h2>Documentos y evidencia</h2></div>
          <div className="document-columns">
            <article>
              <StatusBadge tone="confirmed">Confirmados o disponibles</StatusBadge>
              <ul className="check-list">
                <li>PGWP de Deiby y OWP de Liliana.</li><li>Copias de las solicitudes conjuntas, cartas de aprobación y mensajes relacionados de IRCC.</li><li>Visas de visitante V-1.</li><li>Pasaportes.</li><li>Certificado de matrimonio y pruebas de convivencia.</li><li>Certificado de nacimiento y pasaporte canadiense del hijo.</li><li>Diploma canadiense de Deiby.</li><li>Resultado CELPIP de Deiby.</li><li>Resultados vigentes de TCF y TEF de Deiby.</li><li>Perfil activo de Express Entry.</li><li>Cartas de experiencia colombiana disponibles o que pueden obtenerse.</li><li>Visa estadounidense de diez años para ambos.</li><li>T4, Notices of Assessment, pay stubs y declaraciones de impuestos.</li><li>Contrato de arriendo, cuentas, seguros y pruebas de residencia en Ontario.</li>
              </ul>
            </article>
            <article>
              <StatusBadge tone="pending">Disponibilidad por confirmar</StatusBadge>
              <ul className="pending-list">
                <li>Transcript y carta de finalización de Lambton College.</li><li>Carta laboral detallada y reciente de TripArc.</li><li>Desglose actual del CRS y copia completa de lo declarado en Express Entry.</li><li>Documentos oficiales de los beneficios maternity y parental de EI.</li><li>Cartas y comprobantes de los empleos canadienses de Liliana, si llegan a ser relevantes.</li><li>Expediente médico completo del hijo y carta actualizada del equipo de oncología.</li><li>Evidencia específica sobre continuidad del seguimiento oncológico en Colombia, si llega a ser necesaria.</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div><strong>Contexto familiar y migratorio</strong><p>Documento personal preparado para organizar información y facilitar una futura evaluación.</p></div>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
