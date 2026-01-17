import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img className="justify-self-center h-16 p-0 w-32" src="/public/images/logo-EPRIM.webp" />
            <p className="text-gray-300 text-sm leading-relaxed">
              École Professionnelle d'Informatique et Management - Formation d'excellence à Meknès
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-[#00A86B]" />
                <div className="text-sm text-gray-300">
                  +212 602-809888
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#00A86B]" />
                <div className="text-sm text-gray-300">
                  embgi2015@gmail.com
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#00A86B]" />
                <div className="text-sm text-gray-300">
                  N13 lImm Alhanae Rue Ibn Khaldoune ville nouvelle Meknès 50060 Meknes, Maroc
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Lundi - Vendredi: 8h00 - 18h00</p>
              <p>Samedi: 9h00 - 13h00</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EPRIM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
