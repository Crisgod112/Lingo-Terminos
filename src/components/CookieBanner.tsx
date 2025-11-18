import { useState, useEffect } from 'react';

interface CookieBannerProps {
  onOpenPrivacyModal: () => void;
}

export default function CookieBanner({ onOpenPrivacyModal }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Siempre true, no se puede desactivar
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Mostrar el banner después de un pequeño delay
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      // Cargar preferencias guardadas
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyEssential));
    setPreferences(onlyEssential);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="p-3 sm:p-4 md:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  Configuración de Cookies
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Usamos cookies para mejorar tu experiencia
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Cerrar banner">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Content */}
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
            Utilizamos cookies esenciales para el funcionamiento de la plataforma, cookies de analytics para mejorar nuestro servicio, y cookies de marketing para personalizar contenidos. Puedes gestionar tus preferencias o consultar nuestro{' '}
            <button
              onClick={onOpenPrivacyModal}
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
              Aviso de Privacidad completo
            </button>.
          </p>

          {/* Preferences Toggle */}
          {showPreferences && (
            <div className="mb-4 space-y-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <label className="font-medium text-sm text-gray-900 dark:text-white">
                      Cookies Esenciales
                    </label>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 ml-7">
                    Necesarias para el funcionamiento básico (siempre activas)
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <label className="font-medium text-sm text-gray-900 dark:text-white">
                      Cookies de Analytics
                    </label>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 ml-7">
                    Nos ayudan a mejorar la plataforma mediante análisis de uso
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-primary-500 justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'
                    } px-1`}
                    aria-label="Toggle analytics cookies">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                    </svg>
                    <label className="font-medium text-sm text-gray-900 dark:text-white">
                      Cookies de Marketing
                    </label>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 ml-7">
                    Para personalizar contenidos y promociones
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-primary-500 justify-end' : 'bg-gray-300 dark:bg-gray-600 justify-start'
                    } px-1`}
                    aria-label="Toggle marketing cookies">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-xs sm:text-sm">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {showPreferences ? 'Ocultar' : 'Configurar'}
            </button>

            {showPreferences ? (
              <>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-xs sm:text-sm">
                  Solo Esenciales
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 px-3 sm:px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium text-xs sm:text-sm">
                  Guardar
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-xs sm:text-sm">
                  Rechazar
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-3 sm:px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium text-xs sm:text-sm">
                  Aceptar Todo
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
