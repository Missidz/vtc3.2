'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Services() {
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
          Nos Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white xl:px-36 mt-2 mb-8 text-2xl font-bold"
        >
          Découvrez nos{" "}
          <span className="font-bold text-yellow-400">
            services de transport premium
          </span>
          , adaptés à tous vos besoins :
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/transfert-aeroport" className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
              <div className="w-24 h-24 mx-auto mb-6 bg-blue-900/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-200 mb-2">Transfert Aéroport</h2>
              <p className="text-gray-300 text-base text-center">
                Trajet direct vers l'aéroport de votre choix avec un service personnalisé.
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact" className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
              <div className="w-24 h-24 mx-auto mb-6 bg-yellow-900/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-yellow-200 mb-2">Mise à disposition</h2>
              <p className="text-gray-300 text-base text-center">
                Chauffeur privé à l'heure pour tous vos déplacements professionnels et personnels.
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/contact" className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-green-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
              <div className="w-24 h-24 mx-auto mb-6 bg-green-900/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-200 mb-2">Longue distance</h2>
              <p className="text-gray-300 text-base text-center">
                Voyages longue distance dans toute la France avec confort et sérénité.
              </p>
            </Link>
          </motion.div>
        </div>

        {/* Section FAQ */}
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
                Comment réserver un service ?
              </summary>
              <div className="mt-2 text-gray-300 text-base">
                Vous pouvez réserver directement via notre formulaire de contact, par téléphone ou par email. Nous vous répondrons dans les plus brefs délais pour confirmer votre réservation.
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
                Quels sont les moyens de paiement acceptés ?
              </summary>
              <div className="mt-2 text-gray-300 text-base">
                Nous acceptons les paiements en espèces, par carte bancaire, et par virement bancaire. Pour les entreprises, nous proposons également la facturation.
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
                Y a-t-il des frais supplémentaires ?
              </summary>
              <div className="mt-2 text-gray-300 text-base">
                Les tarifs incluent le trajet, le chauffeur et le carburant. Des suppléments peuvent s'appliquer pour les trajets de nuit, les jours fériés ou les bagages supplémentaires.
              </div>
            </details>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 