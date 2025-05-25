export default function About() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[90vh] bg-black bg-gradient-to-br from-black via-black to-gray-900 px-6 md:px-32 xl:px-64 py-24 overflow-hidden">
      {/* Décor lumineux */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-black/80 via-transparent to-black/60 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-blue-900/30 via-transparent to-black/80 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <h1 className="xl:text-5xl text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
          Bienvenue à bord&nbsp;!
        </h1>
        <p className="text-white xl:px-36 mt-2 mb-8 text-2xl font-bold">
          Chauffeur VTC expérimenté, je mets un point d&apos;honneur à vous
          offrir un{" "}
          <span className="font-bold text-yellow-400">
            service de transport haut de gamme
          </span>
          , alliant :
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-4 mb-10">
          <div className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <img
              src="/vtc_comfort_icon.svg"
              alt="Confort"
              className="rounded-full w-24 h-24 mb-4 border-4 border-blue-400 shadow-lg bg-white"
            />
            <h2 className="text-2xl font-bold text-blue-200 mb-2">Confort</h2>
            <p className="text-gray-300 text-base text-center">
              Véhicule spacieux, intérieur raffiné et équipements premium.
            </p>
          </div>
          <div className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <img
              src="/vtc_punctuality_icon.svg"
              alt="Ponctualité"
              className="rounded-full w-24 h-24 mb-4 border-4 border-yellow-400 shadow-lg bg-white"
            />
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">
              Ponctualité
            </h2>
            <p className="text-gray-300 text-base text-center">
              Respect strict des horaires, anticipation des trajets et
              réactivité.
            </p>
          </div>
          <div className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <img
              src="/vtc_security_icon.svg"
              alt="Sécurité"
              className="rounded-full w-24 h-24 mb-4 border-4 border-green-400 shadow-lg bg-white"
            />
            <h2 className="text-2xl font-bold text-green-200 mb-2">Sécurité</h2>
            <p className="text-gray-300 text-base text-center">
              Conduite prudente, discrétion et respect de la confidentialité.
            </p>
          </div>
        </div>

        {/* Bloc FAQ / Collapse natif sans DaisyUI */}
        <div className="w-full max-w-2xl mt-16 space-y-4 text-left">
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Quels types de trajets proposez-vous ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Déplacements professionnels, personnels, transferts aéroport ou
              événements spéciaux : je m’adapte à tous vos besoins pour un
              service sur mesure.
            </div>
          </details>
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Quelle est la qualité de votre service ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Véhicule récent, propre et parfaitement entretenu, conduite souple
              et attentionnée. Je mets tout en œuvre pour garantir votre confort
              et votre sécurité.
            </div>
          </details>
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Comment réserver votre VTC ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Contactez-moi directement pour réserver et profitez d’un service
              fiable, élégant et personnalisé, adapté à vos attentes.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
