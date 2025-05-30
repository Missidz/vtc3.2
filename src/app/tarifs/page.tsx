"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TarifsPage() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[90vh] bg-black bg-gradient-to-br from-black via-black to-gray-900 px-6 md:px-32 xl:px-64 py-24 overflow-hidden">
      {/* Décor lumineux */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-black/80 via-transparent to-black/60 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-yellow-900/30 via-transparent to-black/80 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="xl:text-5xl text-4xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg"
        >
          Nos Tarifs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white xl:px-36 mt-2 mb-8 text-2xl font-bold"
        >
          Des <span className="text-yellow-400">tarifs clairs</span> et un service professionnel pour tous vos trajets à Tours et en France.
        </motion.p>

        {/* Tarifs standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8"
          >
            <div className="w-16 h-16 mb-4 bg-yellow-900/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-yellow-200 mb-2">Tours</h2>
            <p className="text-gray-300 text-lg">15€</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8"
          >
            <div className="w-16 h-16 mb-4 bg-yellow-900/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-yellow-200 mb-2">En dehors de Tours</h2>
            <p className="text-gray-300 text-lg">20€</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8"
          >
            <div className="w-16 h-16 mb-4 bg-yellow-900/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-yellow-200 mb-2">Autre service</h2>
            <p className="text-gray-300 text-lg">Sur devis</p>
          </motion.div>
        </div>


        
      </div>
    </section>
  );
} 