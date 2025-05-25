"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        "service_dlyt2ws",
        "template_acx7m0m",
        {
          to_email: "yanisse.monvtc37@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "papgmzAJAEHYQ2tnG"
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="relative flex flex-col justify-center items-center min-h-[90vh] bg-black bg-gradient-to-br from-black via-black to-gray-900 px-6 md:px-32 xl:px-64 py-24 overflow-hidden">
      {/* Décor lumineux */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-black/80 via-transparent to-black/60 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-blue-900/30 via-transparent to-black/80 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <h1 className="xl:text-5xl text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
          Contactez-nous
        </h1>
        <p className="text-white xl:px-36 mt-2 mb-8 text-2xl font-bold">
          Nous sommes à votre disposition pour{" "}
          <span className="font-bold text-yellow-400">
            répondre à toutes vos questions
          </span>
          {" "}et organiser votre transport
        </p>

        <div className="w-full max-w-2xl">
          {status.success && (
            <div className="mb-4 p-4 bg-green-500 text-white rounded-lg">
              Votre message a été envoyé avec succès !
            </div>
          )}
          {status.error && (
            <div className="mb-4 p-4 bg-red-500 text-white rounded-lg">
              Une erreur est survenue lors de l'envoi de votre message. Veuillez
              réessayer.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6 bg-black/50 p-8 rounded-3xl border border-gray-800">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-white mb-2">
                Service souhaité
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Sélectionnez un service</option>
                <option value="Transfert Aéroport">Transfert Aéroport</option>
                <option value="Mise à disposition">Mise à disposition</option>
                <option value="Longue distance">Longue distance</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0A] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300 disabled:bg-gray-400"
            >
              {status.loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
