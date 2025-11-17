import { useState, useEffect } from 'react';
import Header from './components/Header';
import PrivacyNotice from './components/PrivacyNotice';
import PrivacyModal from './components/PrivacyModal';
import CookieBanner from './components/CookieBanner';
import ExampleForm from './components/ExampleForm';

type View = 'home' | 'privacy' | 'form';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Navigation */}
      <nav className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-3">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentView === 'home'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}>
              🏠 Inicio
            </button>
            <button
              onClick={() => setCurrentView('privacy')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentView === 'privacy'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}>
              📋 Aviso de Privacidad
            </button>
            <button
              onClick={() => setCurrentView('form')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentView === 'form'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}>
              📝 Formulario de Ejemplo
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              🔍 Ver Modal Resumido
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {currentView === 'home' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                LingoSec - Aviso de Privacidad
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Plataforma educativa de ciberseguridad
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setCurrentView('privacy')}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors shadow-lg">
                  Ver Aviso de Privacidad Completo
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors">
                  Ver Resumen (Modal)
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Cumplimiento LFPDPPP
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Aviso de Privacidad conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-700">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Seguridad Reforzada
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Validación Zod, protección XSS/SQL Injection, Security Headers, cifrado SSL/TLS y rate limiting.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Protección de Menores
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Consentimiento parental obligatorio para menores de 18 años con medidas especiales de protección.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-700">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Derechos ARCO
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Acceso, Rectificación, Cancelación y Oposición. Ejerce tus derechos fácilmente.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-red-200 dark:border-red-700">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Gestión de Cookies
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Control total sobre cookies: esenciales, analytics y marketing. Configura tus preferencias.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg p-6 border border-cyan-200 dark:border-cyan-700">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Transferencias Internacionales
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Transparencia total sobre proveedores en EE.UU.: Mailgun, Vercel, Google reCAPTCHA.
                </p>
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700/50 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Componentes Disponibles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📄 Aviso de Privacidad Completo</h3>
                  <p className="text-gray-700 dark:text-gray-300">Página completa con todas las secciones, tabla de contenidos navegable, y diseño responsive.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🔍 Modal Resumido</h3>
                  <p className="text-gray-700 dark:text-gray-300">Versión condensada en modal para quick-reference con scroll interno.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🍪 Banner de Cookies</h3>
                  <p className="text-gray-700 dark:text-gray-300">Banner configurable con preferencias granulares y localStorage.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Checkboxes de Formulario</h3>
                  <p className="text-gray-700 dark:text-gray-300">Componente reutilizable con consentimiento parental para menores.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📊 Tabla ARCO Responsive</h3>
                  <p className="text-gray-700 dark:text-gray-300">Tabla interactiva con información sobre derechos ARCO.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🌓 Modo Oscuro</h3>
                  <p className="text-gray-700 dark:text-gray-300">Toggle de tema claro/oscuro con persistencia en localStorage.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>✨ Stack Tecnológico:</strong> React 19, TypeScript, Tailwind CSS, Vite
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                ¿Preguntas sobre privacidad?{' '}
                <a href="mailto:privacidad@lingosec.io" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                  privacidad@lingosec.io
                </a>
              </p>
            </div>
          </div>
        )}

        {currentView === 'privacy' && <PrivacyNotice />}
        {currentView === 'form' && <ExampleForm onOpenPrivacyModal={() => setIsModalOpen(true)} />}
      </main>

      {/* Modal */}
      <PrivacyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Cookie Banner */}
      <CookieBanner onOpenPrivacyModal={() => setIsModalOpen(true)} />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Volver arriba">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              <strong>LingoSec</strong> - Plataforma educativa de ciberseguridad
            </p>
            <p className="mb-2">
              Última actualización: 17 de enero de 2025
            </p>
            <p>
              © 2025 LingoSec. Todos los derechos reservados. |{' '}
              <a href="https://lingosec.io" className="text-primary-600 dark:text-primary-400 hover:underline">
                lingosec.io
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
