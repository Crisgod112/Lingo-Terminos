import { useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Aviso de Privacidad - Resumen
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus-visible"
              aria-label="Cerrar modal">
              <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <div className="space-y-6">
              {/* Responsable */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  Responsable
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>LingoSec</strong> - Plataforma educativa de ciberseguridad<br />
                  Contacto: <a href="mailto:privacidad@lingosec.io" className="text-primary-600 dark:text-primary-400 hover:underline">privacidad@lingosec.io</a>
                </p>
              </div>

              {/* Datos que recopilamos */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Datos que Recopilamos
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Nombre, email, teléfono (opcional), país</li>
                  <li>• Progreso de lecciones, logros y estadísticas</li>
                  <li>• Datos técnicos: IP, navegador, cookies</li>
                  <li>• Para empresas/instituciones: datos corporativos</li>
                </ul>
              </div>

              {/* Para qué usamos tus datos */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                  Para qué Usamos tus Datos
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-700">
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Finalidades Primarias (necesarias):</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-0.5">
                      <li>• Proporcionar el servicio educativo</li>
                      <li>• Gestionar lista de espera y registro</li>
                      <li>• Comunicaciones esenciales</li>
                      <li>• Seguridad y prevención de fraudes</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-700">
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">Finalidades Secundarias (opcionales):</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-0.5">
                      <li>• Marketing y promociones</li>
                      <li>• Análisis y mejora del servicio</li>
                      <li>• Personalización de contenidos</li>
                    </ul>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                      Puedes oponerte a estas finalidades en cualquier momento
                    </p>
                  </div>
                </div>
              </div>

              {/* Terceros */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                  Compartimos Datos con
                </h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• <strong>Mailgun:</strong> Envío de emails (EE.UU.)</li>
                  <li>• <strong>Vercel/Upstash:</strong> Almacenamiento de datos (EE.UU.)</li>
                  <li>• <strong>Google reCAPTCHA:</strong> Protección anti-spam (EE.UU.)</li>
                  <li>• <strong>Vercel Analytics:</strong> Análisis web (EE.UU.)</li>
                </ul>
              </div>

              {/* Derechos ARCO */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  Tus Derechos (ARCO)
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-2">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Acceso</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Conocer tus datos</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-2">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Rectificación</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Corregir datos</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-2">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Cancelación</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Eliminar datos</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-2">
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">Oposición</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Oponerte al uso</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                  Contacta a <a href="mailto:privacidad@lingosec.io" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">privacidad@lingosec.io</a>
                </p>
              </div>

              {/* Menores */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Datos de Menores
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Para menores de 18 años se requiere <strong>consentimiento de padre, madre o tutor</strong>. Datos tratados con protección especial según la LFPDPPP.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                  Cookies y Tecnologías
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Usamos cookies esenciales, de analytics y localStorage para mejorar tu experiencia. Puedes configurarlas en tu navegador.
                </p>
              </div>

              {/* INAI */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Instituto Nacional de Transparencia (INAI)
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Si consideras que tus derechos han sido vulnerados, puedes acudir al INAI:<br />
                  <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">www.inai.org.mx</a> | Tel: 01800 835 43 24
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Última actualización: 17 de enero de 2025
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors focus-visible">
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
