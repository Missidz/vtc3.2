'use client';

import Link from 'next/link';

export default function TransfertAeroport() {
  const aeroports = [
    {
      nom: "Paris Charles de Gaulle (CDG)",
      description: "Aéroport international principal de Paris",
      image: "/CDG.png"
    },
    {
      nom: "Paris Orly (ORY)",
      description: "Aéroport secondaire de Paris",
      image: "/ORY.jpeg"
    },
    {
      nom: "Lyon Saint-Exupéry (LYS)",
      description: "Principal aéroport de la région Rhône-Alpes",
      image: "/LYS.jpg"
    },
    {
      nom: "Nice Côte d'Azur (NCE)",
      description: "Aéroport principal de la Côte d'Azur",
      image: "/NCE.jpg"
    },
    {
      nom: "Marseille Provence (MRS)",
      description: "Principal aéroport de la région PACA",
      image: "/MRS.webp"
    },
    {
      nom: "Bordeaux-Mérignac (BOD)",
      description: "Principal aéroport de la région Nouvelle-Aquitaine",
      image: "/BOD.jpg"
    }
  ];

  return (
    <section className="relative flex flex-col justify-center items-center min-h-[90vh] bg-black bg-gradient-to-br from-black via-black to-gray-900 px-6 md:px-32 xl:px-64 py-24 overflow-hidden">
      {/* Décor lumineux */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-black/80 via-transparent to-black/60 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-blue-900/30 via-transparent to-black/80 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <h1 className="xl:text-5xl text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
          Transfert Aéroport
        </h1>
        <p className="text-white xl:px-36 mt-2 mb-8 text-2xl font-bold">
          Découvrez nos{" "}
          <span className="font-bold text-yellow-400">
            services de transfert aéroport
          </span>
          {" "}vers les principaux aéroports français
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {aeroports.map((aeroport, index) => (
            <Link 
              key={index}
              href="/contact-aeroport"
              className="group relative flex flex-col items-center bg-gradient-to-b from-black/80 to-gray-900/90 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-900/40 rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform" />
              <img
                src={aeroport.image}
                alt={aeroport.nom}
                className="rounded-full w-24 h-24 mb-4 border-4 border-blue-400 shadow-lg bg-white object-cover"
              />
              <h2 className="text-2xl font-bold text-blue-200 mb-2">{aeroport.nom}</h2>
              <p className="text-gray-300 text-base text-center">
                {aeroport.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Section FAQ */}
        <div className="w-full max-w-2xl mt-16 space-y-4 text-left">
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Comment réserver un transfert aéroport ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Vous pouvez réserver directement via notre formulaire de contact aéroport, par téléphone ou par email. Nous vous demanderons les détails de votre vol pour assurer un service parfaitement synchronisé.
            </div>
          </details>
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Le chauffeur attendra-t-il en cas de retard de vol ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Oui, nous surveillons votre vol en temps réel et adaptons notre service en conséquence. Le chauffeur vous attendra même en cas de retard.
            </div>
          </details>
          <details className="bg-black border border-gray-800 rounded-lg p-4 group">
            <summary className="font-semibold text-lg cursor-pointer text-white outline-none group-open:text-yellow-400 transition-colors">
              Quels sont les avantages de réserver un VTC pour l'aéroport ?
            </summary>
            <div className="mt-2 text-gray-300 text-base">
              Confort, ponctualité, pas de stress de stationnement, service porte à porte, et un chauffeur professionnel qui vous assiste avec vos bagages.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
} 