import Link from 'next/link';

export default function Tarifs() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[90vh] bg-black bg-gradient-to-br from-black via-black to-gray-900 px-6 md:px-32 xl:px-64 py-24 overflow-hidden">
      {/* Décor lumineux */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-black/80 via-transparent to-black/60 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-blue-900/30 via-transparent to-black/80 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <h1 className="xl:text-5xl text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
          Nos Services
        </h1>
        <p className="text-white xl:px-36 mt-2 mb-8 text-2xl font-bold">
          Découvrez nos{" "}
          <span className="font-bold text-yellow-400">
            services de transport premium
          </span>
          , adaptés à tous vos besoins :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <Link href="/transfert-aeroport" className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <img
              src="/vtc_comfort_icon.svg"
              alt="Transfert Aéroport"
              className="rounded-full w-24 h-24 mb-4 border-4 border-blue-400 shadow-lg bg-white"
            />
            <h2 className="text-2xl font-bold text-blue-200 mb-2">Transfert Aéroport</h2>
            <p className="text-gray-300 text-base text-center">
              Trajet direct vers l'aéroport de votre choix avec un service personnalisé.
            </p>
          </Link>

          <Link href="/contact" className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <img
              src="/vtc_punctuality_icon.svg"
              alt="Mise à disposition"
              className="rounded-full w-24 h-24 mb-4 border-4 border-yellow-400 shadow-lg bg-white"
            />
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">Mise à disposition</h2>
            <p className="text-gray-300 text-base text-center">
              Chauffeur privé à l'heure pour tous vos déplacements professionnels et personnels.
            </p>
          </Link>

          <Link href="/contact" className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <img
              src="/vtc_security_icon.svg"
              alt="Longue distance"
              className="rounded-full w-24 h-24 mb-4 border-4 border-green-400 shadow-lg bg-white"
            />
            <h2 className="text-2xl font-bold text-green-200 mb-2">Longue distance</h2>
            <p className="text-gray-300 text-base text-center">
              Voyages longue distance dans toute la France avec confort et sérénité.
            </p>
          </Link>
        </div>

        {/* Section FAQ */}
        <div className="w-full max-w-2xl mt-16 space-y-4 text-left">
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Comment réserver un service ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Vous pouvez réserver directement via notre formulaire de contact, par téléphone ou par email. Nous vous répondrons dans les plus brefs délais pour confirmer votre réservation.
            </div>
          </details>
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Quels sont les moyens de paiement acceptés ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Nous acceptons les paiements en espèces, par carte bancaire, et par virement bancaire. Pour les entreprises, nous proposons également la facturation.
            </div>
          </details>
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Y a-t-il des frais supplémentaires ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Les tarifs incluent le trajet, le chauffeur et le carburant. Des suppléments peuvent s'appliquer pour les trajets de nuit, les jours fériés ou les bagages supplémentaires.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
} 