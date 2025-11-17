import { useState } from 'react';

export default function PrivacyNotice() {
  const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Título principal */}
      <div className="mb-8 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Aviso de Privacidad
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Última actualización: <time dateTime="2025-01-17">17 de enero de 2025</time>
        </p>
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary-500 rounded-r-lg">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Nota:</strong> Este Aviso de Privacidad cumple con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
          </p>
        </div>
      </div>

      {/* Tabla de contenidos */}
      <nav className="mb-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsTableOfContentsOpen(!isTableOfContentsOpen)}
          className="w-full flex items-center justify-between font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 focus-visible">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            Tabla de Contenidos
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${isTableOfContentsOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isTableOfContentsOpen && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <button onClick={() => scrollToSection('identidad')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">1. Identidad del Responsable</button>
            <button onClick={() => scrollToSection('datos-recopilados')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">2. Datos Recopilados</button>
            <button onClick={() => scrollToSection('finalidades')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">3. Finalidades del Tratamiento</button>
            <button onClick={() => scrollToSection('menores')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">4. Datos de Menores</button>
            <button onClick={() => scrollToSection('terceros')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">5. Transferencias a Terceros</button>
            <button onClick={() => scrollToSection('cookies')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">6. Cookies y Tecnologías</button>
            <button onClick={() => scrollToSection('derechos-arco')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">7. Derechos ARCO</button>
            <button onClick={() => scrollToSection('revocacion')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">8. Revocación</button>
            <button onClick={() => scrollToSection('seguridad')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">9. Medidas de Seguridad</button>
            <button onClick={() => scrollToSection('cambios')} className="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-visible px-2 py-1 rounded">10. Cambios al Aviso</button>
          </div>
        )}
      </nav>

      {/* Contenido del aviso */}
      <article className="prose prose-lg dark:prose-invert max-w-none space-y-12">

        {/* Sección 1: Identidad del Responsable */}
        <section id="identidad" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">1</span>
            Identidad y Domicilio del Responsable
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong className="text-gray-900 dark:text-white">LingoSec</strong> (en adelante, "LingoSec", "nosotros", "nuestro" o "la Plataforma"), con domicilio en México, es el responsable del tratamiento de sus datos personales de conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Datos de Contacto:</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>Sitio web:</strong> <a href="https://lingosec.io" className="text-primary-600 dark:text-primary-400 hover:underline focus-visible">https://lingosec.io</a></li>
                  <li><strong>Email de privacidad:</strong> <a href="mailto:privacidad@lingosec.io" className="text-primary-600 dark:text-primary-400 hover:underline focus-visible">privacidad@lingosec.io</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Partner Estratégico:</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li><strong>N3xSecurity</strong></li>
                  <li>Firma de seguridad ofensiva</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Datos Recopilados */}
        <section id="datos-recopilados" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">2</span>
            Datos Personales Recopilados
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            LingoSec recopila diferentes categorías de datos personales dependiendo del tipo de usuario y su interacción con nuestra plataforma web:
          </p>

          {/* Datos de identificación */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.1. Datos de Identificación y Contacto
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Dato</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Fuente</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Obligatorio</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Nombre completo</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Formulario web (lista de espera)</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">Sí</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Correo electrónico</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Formulario web</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">Sí</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Número telefónico</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Formulario web</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">No</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">País de residencia</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Formulario web (selector)</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">Sí</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Datos de navegación */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.2. Datos de Navegación y Uso de la Plataforma
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700/50 rounded-lg p-6 border border-blue-200 dark:border-gray-600">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span><strong>Progreso de lecciones:</strong> Seguimiento de módulos completados, ejercicios realizados y avances en el aprendizaje</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span><strong>Logros y estadísticas:</strong> Insignias obtenidas, puntuaciones, tiempo de estudio y métricas de rendimiento</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span><strong>Preferencias del usuario:</strong> Configuraciones de tema (claro/oscuro), idioma y preferencias de aprendizaje</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Datos técnicos */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.3. Datos Técnicos del Navegador
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Información Automática:</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Dirección IP</li>
                  <li>• Tipo y versión del navegador</li>
                  <li>• Sistema operativo</li>
                  <li>• Resolución de pantalla</li>
                  <li>• Zona horaria</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Tecnologías Utilizadas:</h4>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Cookies HTTP</li>
                  <li>• LocalStorage del navegador</li>
                  <li>• SessionStorage</li>
                  <li>• Web Analytics (Vercel)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Datos empresariales e institucionales */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2.4. Datos para Empresas e Instituciones Educativas
            </h3>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-700">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Para organizaciones que solicitan información sobre servicios institucionales, recopilamos adicionalmente:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Nombre de la institución/empresa</li>
                <li>• Cargo o puesto del contacto</li>
                <li>• Tamaño de la organización</li>
                <li>• Sector o industria</li>
                <li>• Tipo de servicio solicitado</li>
                <li>• Número de usuarios potenciales</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección 3: Finalidades del Tratamiento */}
        <section id="finalidades" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">3</span>
            Finalidades del Tratamiento de Datos Personales
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              3.1. Finalidades Primarias (Necesarias para el servicio)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Su consentimiento es necesario</strong> para estas finalidades. Sin el tratamiento de estos datos, no podemos prestar nuestros servicios:
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Registro en lista de espera</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Gestionar tu solicitud de acceso anticipado a la plataforma.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Prestación del servicio educativo</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Proporcionar acceso a lecciones de ciberseguridad, gestionar progreso y generar certificados.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Comunicación</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Enviar confirmaciones, actualizaciones y respuestas a consultas.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Seguimiento de progreso</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Rastrear tu avance educativo y otorgar logros.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Seguridad</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Protección contra spam y bots mediante Google reCAPTCHA y medidas de seguridad.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary-500">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cumplimiento legal</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Cumplir con obligaciones legales aplicables.</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              3.2. Finalidades Secundarias (Opcionales)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Puede oponerse</strong> a estas finalidades en cualquier momento. La negativa no impedirá el uso de la plataforma:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Envío de boletines informativos y promociones sobre nuevos cursos y ofertas.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Análisis estadístico</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Mejora de la plataforma mediante analytics y estudios de uso.</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contacto comercial</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Para empresas e instituciones interesadas en servicios B2B.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 4: Menores de Edad */}
        <section id="menores" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">4</span>
            Tratamiento de Datos de Menores de Edad
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border-2 border-purple-200 dark:border-purple-700">
            <div className="flex items-start mb-4">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Protección Especial para Menores</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  LingoSec está dirigido a estudiantes desde nivel primaria. Para menores de 18 años:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Consentimiento de Padres o Tutores
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Se requiere <strong>consentimiento expreso del padre, madre o tutor</strong> para el tratamiento de datos de menores.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Protección especial
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Datos tratados con protección especial según Ley Federal de Protección de Datos Personales. No se recopilan datos sensibles de menores sin autorización expresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 5: Transferencias a Terceros */}
        <section id="terceros" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">5</span>
            Transferencias de Datos a Terceros
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Los datos personales se comparten con los siguientes terceros ubicados en Estados Unidos:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <thead className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Proveedor</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Servicio</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Ubicación</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Finalidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Mailgun</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Envío de emails</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">🇺🇸 Estados Unidos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Envío de correos electrónicos transaccionales</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Vercel/Upstash</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Base de datos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">🇺🇸 Estados Unidos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Almacenamiento en base de datos (Vercel KV)</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Google (reCAPTCHA)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Validación anti-spam</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">🇺🇸 Estados Unidos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Validación anti-spam</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Vercel Analytics</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Análisis web</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">🇺🇸 Estados Unidos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Análisis de uso de la plataforma</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 rounded-r-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Nota:</strong> Todos estos proveedores cumplen con estándares de seguridad y se encuentran en países con legislación equivalente o adheridos a marcos de privacidad reconocidos.
            </p>
          </div>
        </section>

        {/* Sección 6: Cookies */}
        <section id="cookies" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">6</span>
            Cookies y Tecnologías de Rastreo
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Utilizamos cookies y tecnologías similares:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cookies esenciales</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Para funcionamiento básico de la plataforma.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cookies de analytics</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Vercel Analytics (anónimas) para análisis de uso.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">LocalStorage</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Para preferencias de tema (claro/oscuro) y progreso.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google reCAPTCHA</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Cookies de validación anti-spam.</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Puedes desactivar cookies desde tu navegador, pero esto puede afectar la funcionalidad de la plataforma.
            </p>
          </div>
        </section>

        {/* Sección 7: Derechos ARCO */}
        <section id="derechos-arco" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">7</span>
            Derechos ARCO y su Ejercicio
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Como titular de datos personales, tienes derecho a:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <thead className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Derecho</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Descripción</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Cómo Ejercerlo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Acceso</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Conocer qué datos tenemos sobre ti</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Enviar solicitud a privacidad@lingosec.io</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Rectificación</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Corregir datos inexactos o incompletos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Actualizar desde tu cuenta o solicitar corrección</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Cancelación</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Solicitar la eliminación de tus datos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Eliminar cuenta desde configuración o solicitar formalmente</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Oposición</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Oponerte al tratamiento de tus datos</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Configurar preferencias o usar enlaces de baja en emails</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Procedimiento para Ejercer sus Derechos ARCO
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm mr-3 flex-shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Envíe su solicitud</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Envíe un correo a <a href="mailto:privacidad@lingosec.io" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">privacidad@lingosec.io</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm mr-3 flex-shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Incluya la información requerida</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Nombre completo, email registrado, derecho a ejercer, identificación oficial</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm mr-3 flex-shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Tiempo de respuesta</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">20 días hábiles para respuesta. Si procede, 15 días adicionales para hacerla efectiva.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 8: Revocación */}
        <section id="revocacion" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">8</span>
            Revocación del Consentimiento
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Puedes revocar tu consentimiento en cualquier momento mediante:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Email a: <a href="mailto:privacidad@lingosec.io" className="text-primary-600 dark:text-primary-400 hover:underline">privacidad@lingosec.io</a></li>
              <li>• Panel de usuario en la plataforma (cuando esté disponible)</li>
              <li>• Link de "darse de baja" en emails de marketing</li>
            </ul>
          </div>
        </section>

        {/* Sección 9: Seguridad */}
        <section id="seguridad" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">9</span>
            Medidas de Seguridad Implementadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-5 border border-green-200 dark:border-green-700">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="ml-3 font-semibold text-gray-900 dark:text-white">Validación de Datos</h3>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Esquemas Zod</li>
                <li>• Protección XSS</li>
                <li>• Protección SQL Injection</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-5 border border-blue-200 dark:border-blue-700">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="ml-3 font-semibold text-gray-900 dark:text-white">Security Headers</h3>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Content Security Policy</li>
                <li>• HSTS</li>
                <li>• X-Frame-Options: DENY</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="ml-3 font-semibold text-gray-900 dark:text-white">Cifrado</h3>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• SSL/TLS en comunicaciones</li>
                <li>• Rate Limiting</li>
                <li>• Acceso restringido</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-5 border border-amber-200 dark:border-amber-700">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="ml-3 font-semibold text-gray-900 dark:text-white">Monitoreo</h3>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Logs de seguridad</li>
                <li>• Auditorías periódicas</li>
                <li>• Actualizaciones regulares</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sección 10: Cambios */}
        <section id="cambios" className="scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3 text-lg font-bold">10</span>
            Cambios al Aviso de Privacidad
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cualquier cambio será notificado mediante:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>Publicación en:</strong> <a href="https://lingosec.io/aviso-de-privacidad" className="text-primary-600 dark:text-primary-400 hover:underline">lingosec.io/aviso-de-privacidad</a></li>
              <li>• <strong>Email a usuarios registrados</strong></li>
              <li>• <strong>Banner visible</strong> en la plataforma</li>
            </ul>
          </div>

          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Autoridad de Control - INAI
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Tienes derecho a acudir al Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI):
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• <strong>Sitio web:</strong> <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">www.inai.org.mx</a></li>
              <li>• <strong>Teléfono:</strong> 01800 835 43 24</li>
            </ul>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            <strong>Fecha de última actualización:</strong> 17 de enero de 2025
          </p>
          <p>
            Este Aviso de Privacidad cumple con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>
          <p className="pt-4 border-t border-gray-200 dark:border-gray-600">
            © 2025 LingoSec. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
