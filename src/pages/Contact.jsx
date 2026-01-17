import { Phone, Mail, MapPin, Clock, Send, } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Contact() {

  const markerRef = useRef(null);
  useEffect(()=>{
    if(markerRef.current){
      markerRef.current.openPopup();
    }
  },[]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const DefaultIcon = L.icon({
  //   iconUrl:icon,
  //   shadowUrl:iconShadow,
  //   iconSize: [25, 41],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  // });
  // L.Marker.prototype.options.icon = DefaultIcon

  const invisibleIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    shadowSize: [0, 0],
  });



  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0047AB] to-[#003380] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contactez-Nous
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envoyez-nous un Message
              </h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition"
                    placeholder="+212 6XX-XXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="inscription">Demande d'inscription</option>
                    <option value="information">Demande d'information</option>
                    <option value="rendez-vous">Prise de rendez-vous</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                    Merci! Votre message a été envoyé avec succès.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#0047AB] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#003380] transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <MapPin className="w-6 h-6 text-[#0047AB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      N13 lImm Alhanae Rue Ibn Khaldoune ville nouvelle Meknès 50060<br />
                      Meknès, Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <Mail className="w-6 h-6 text-[#0047AB]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">embgi2015@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
                    <Phone className="w-6 h-6 text-[#00A86B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">+212 5355-57416</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
                    <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+212 6028-09888</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
                    <Clock className="w-6 h-6 text-[#00A86B]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 8h00 - 18h00</p>
                    <p className="text-gray-600">Samedi: 9h00 - 13h00</p>
                    <p className="text-gray-600">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0047AB] to-[#003380] rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Visitez Notre Campus</h3>
                <p className="text-blue-100 mb-6">
                  Nous vous invitons à visiter nos locaux et découvrir notre environnement d'apprentissage moderne et équipé.
                </p>
                <p className="text-sm text-blue-200">
                  Prenez rendez-vous pour une visite guidée et rencontrez notre équipe pédagogique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Localisation
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div style={{ height: "450px", width: "100%" }}>
              <MapContainer
                center={[34,97556677, -5.884600000000001]}
                zoom={15}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[34,97556677, -5.884600000000001]}>
                  <Popup>
                    <strong>EPRIM</strong> <br /> Notre emplacement à Meknès.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Localisation
        </h2>

        <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
          <MapContainer
            center={[34,97556677, -5.884600000000001]}
            zoom={16}
            style={{ height: "450px", width: "100%" }}
            scrollWheelZoom={false}
            attributionControl={false}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            <Marker
              position={[34,97556677, -5.884600000000001]}
              ref={markerRef}
              icon={invisibleIcon}
              eventHandlers={{
                add: (e) => { e.target.openPopup();
                },
              }}
            >
              <Popup autoClose={false} closeOnClick={false} closeButton={false}>
                <div className="text-center p-2">
                  <h3 className="font-bold text-[#0047AB] text-lg">EPRIM</h3>
                  <p className="text-gray-600 text-sm">N13 lImm Alhanae Rue Ibn Khaldoune ville nouvelle Meknès Maroc</p>
                  <a
                    href="https://www.google.com/maps/place/EPRIM+(%C3%89cole+Professionnelle+d'Informatique+et+de+Management)/@33.8959958,-5.5403177,202m/data=!3m1!1e3!4m10!1m2!2m1!1seprim!3m6!1s0xda0450016eb1001:0xefaaf7f810454d9c!8m2!3d33.8961852!4d-5.5406291!15sCgVlcHJpbZIBGGNvbXB1dGVyX3RyYWluaW5nX3NjaG9vbOABAA!16s%2Fg%2F11w3l2vg0w!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-xs mt-2 block"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>

    </div>
  );
}
