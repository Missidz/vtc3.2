'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[90vh] bg-black bg-gradient-to-br from-black via-black to-gray-900 px-6 md:px-32 xl:px-64 py-24 overflow-hidden">
      {/* Décor lumineux */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-black/80 via-transparent to-black/60 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-blue-900/30 via-transparent to-black/80 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="xl:text-5xl text-4xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          Bienvenue à bord&nbsp;!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white xl:px-36 mt-2 mb-8 text-2xl font-bold"
        >
          Chauffeur VTC expérimenté, je mets un point d&apos;honneur à vous
          offrir un{" "}
          <span className="font-bold text-yellow-400">
            service de transport haut de gamme
          </span>
          , alliant :
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <div className="w-24 h-24 mx-auto mb-6 bg-blue-900/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-200 mb-2">Confort</h2>
            <p className="text-gray-300 text-base text-center">
              Véhicule spacieux, intérieur raffiné et équipements premium.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <div className="w-24 h-24 mx-auto mb-6 bg-yellow-900/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-yellow-200 mb-2">Ponctualité</h2>
            <p className="text-gray-300 text-base text-center">
              Respect strict des horaires, anticipation des trajets et réactivité.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
            <div className="w-24 h-24 mx-auto mb-6 bg-green-900/20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-200 mb-2">Sécurité</h2>
            <p className="text-gray-300 text-base text-center">
              Conduite prudente, discrétion et respect de la confidentialité.
            </p>
          </motion.div>
        </div>

        {/* Bloc FAQ / Collapse natif sans DaisyUI */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full max-w-2xl mt-16 space-y-4 text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <details className="bg-black border border-gray-800 rounded-lg p-4 group">
              <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
                Quels types de trajets proposez-vous ?
              </summary>
              <div className="mt-2 text-gray-300 text-base">
                Déplacements professionnels, personnels, transferts aéroport ou
                événements spéciaux : je m'adapte à tous vos besoins pour un
                service sur mesure.
              </div>
            </details>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <details className="bg-black border border-gray-800 rounded-lg p-4 group">
              <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
                Comment réserver votre VTC ?
              </summary>
              <div className="mt-2 text-gray-300 text-base">
                Contactez-moi directement pour réserver et profitez d'un service
                fiable, élégant et personnalisé, adapté à vos attentes.
              </div>
            </details>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
