'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: '/slide1.jpg',
      title: 'Service VTC Premium',
      description: 'Voyagez avec style et confort',
      link: '/contact'
    },
    {
      image: '/slide2.jpg',
      title: 'Transfert Aéroport',
      description: 'Arrivez à l\'heure, partez sereinement',
      link: '/transfert-aeroport'
    },
    {
      image: '/slide3.jpg',
      title: 'Mise à disposition',
      description: 'Location de véhicule avec chauffeur pour vos événements professionnels et personnels',
      link: '/contact'
    }
  ];

  return (
    <main>
      {/* Carrousel */}
      <div className="w-full h-[80vh] relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[80vh]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-center">
                  {slide.description}
                </p>
                <Link
                  href={slide.link}
                  className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Section Nos Services */}
      <section className="relative py-24 bg-black bg-gradient-to-br from-black via-black to-gray-900 overflow-hidden">
        {/* Décor lumineux */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-black/80 via-transparent to-black/60 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-yellow-900/30 via-transparent to-black/80 blur-2xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services de transport premium, conçus pour répondre à tous vos besoins de mobilité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-yellow-900/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Transfert Aéroport</h3>
                <p className="text-gray-300">
                  Service de transfert professionnel vers et depuis les principaux aéroports français. Confort et ponctualité garantis.
                </p>
                <Link href="/transfert-aeroport" className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                  En savoir plus
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-yellow-900/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mise à disposition</h3>
                <p className="text-gray-300">
                  Service de chauffeur privé pour vos déplacements professionnels ou personnels. Flexibilité et discrétion assurées.
                </p>
                <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                  Réserver
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group relative bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-yellow-900/20 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Longue distance</h3>
                <p className="text-gray-300">
                  Transport confortable pour vos trajets longue distance. Idéal pour les voyages d'affaires ou les déplacements personnels.
                </p>
                <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                  Réserver
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour toute demande particulière ou pour obtenir un devis personnalisé
          </p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors inline-block"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  );
}
