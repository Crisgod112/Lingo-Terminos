import { useState } from 'react';

interface PrivacyCheckboxesProps {
  onOpenPrivacyModal: () => void;
  isMinor?: boolean;
}

export default function PrivacyCheckboxes({ onOpenPrivacyModal, isMinor = false }: PrivacyCheckboxesProps) {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedSecondary, setAcceptedSecondary] = useState(false);
  const [parentalConsent, setParentalConsent] = useState(false);

  return (
    <div className="space-y-4">
      {/* Aviso de Privacidad Principal */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="privacy-consent"
            type="checkbox"
            checked={acceptedPrivacy}
            onChange={(e) => setAcceptedPrivacy(e.target.checked)}
            className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="privacy-consent" className="font-medium text-gray-900 dark:text-gray-300">
            He leído y acepto el{' '}
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
              Aviso de Privacidad
            </button>{' '}
            de LingoSec <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Acepto el tratamiento de mis datos personales para las finalidades primarias (necesarias para el servicio).
          </p>
        </div>
      </div>

      {/* Finalidades Secundarias */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="secondary-consent"
            type="checkbox"
            checked={acceptedSecondary}
            onChange={(e) => setAcceptedSecondary(e.target.checked)}
            className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="secondary-consent" className="font-medium text-gray-900 dark:text-gray-300">
            Consiento el uso de mis datos para finalidades secundarias
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Marketing, comunicaciones promocionales y análisis estadístico. <em>(Opcional)</em>
          </p>
        </div>
      </div>

      {/* Consentimiento Parental (solo para menores) */}
      {isMinor && (
        <div className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg">
          <div className="flex items-center h-5">
            <input
              id="parental-consent"
              type="checkbox"
              checked={parentalConsent}
              onChange={(e) => setParentalConsent(e.target.checked)}
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="parental-consent" className="font-medium text-gray-900 dark:text-gray-300 flex items-center">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              Soy padre/madre/tutor legal y autorizo el tratamiento de datos del menor{' '}
              <span className="text-red-500 ml-1">*</span>
            </label>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Para usuarios menores de 18 años es obligatorio el consentimiento de padre, madre o tutor legal según la LFPDPPP.
            </p>
          </div>
        </div>
      )}

      {/* Nota Legal */}
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          <strong className="text-gray-900 dark:text-white">Nota:</strong> Al registrarte en la lista de espera, aceptas recibir un email de confirmación mediante Mailgun y comunicaciones sobre el lanzamiento de la plataforma. Los datos se conservarán mientras sea necesario para las finalidades descritas o hasta que solicites su eliminación.
        </p>
      </div>

      {/* Estado de validación */}
      <div className="text-xs text-gray-500 dark:text-gray-400">
        <p>
          <span className="text-red-500">*</span> Campos obligatorios
        </p>
        {isMinor && !parentalConsent && (
          <p className="text-red-600 dark:text-red-400 mt-2">
            Se requiere consentimiento parental para continuar
          </p>
        )}
      </div>
    </div>
  );
}
