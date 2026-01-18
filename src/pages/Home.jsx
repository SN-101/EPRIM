import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import logoEPRIM from '../assets/images/logo-EPRIM.webp';

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#0047AB] to-[#003380] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img className="justify-self-center md:text-6xl mb-6" src={logoEPRIM} />
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              École Professionnelle d'Informatique et Management
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
              Formez-vous aux métiers d'avenir dans un environnement d'excellence académique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('programs')}
                className="bg-white text-[#0047AB] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Nos Formations
              </button>
              <button
                onClick={() => onNavigate('admission')}
                className="bg-[#00A86B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#008f5b] transition-colors"
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir EPRIM?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une formation professionnelle de qualité pour votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-[#0047AB]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Formation Qualifiante
              </h3>
              <p className="text-gray-600">
                Diplômes reconnus et certifications professionnelles
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-[#00A86B]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Équipe Expérimentée
              </h3>
              <p className="text-gray-600">
                Formateurs experts et professionnels du secteur
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-[#0047AB]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Programmes Modernes
              </h3>
              <p className="text-gray-600">
                Cursus adaptés aux besoins du marché
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-[#00A86B]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Taux de Réussite Élevé
              </h3>
              <p className="text-gray-600">
                Accompagnement personnalisé de nos étudiants
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                EPRIM est un établissement d'enseignement privé situé à Meknès, dédié à la formation professionnelle en informatique et management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notre mission est de former des professionnels compétents et qualifiés, capables de répondre aux exigences du marché du travail marocain et international.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="text-[#0047AB] font-semibold hover:text-[#003380] transition-colors"
              >
                En savoir plus →
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos Valeurs
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00A86B] rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Excellence académique et professionnelle</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00A86B] rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Innovation pédagogique</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00A86B] rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Éthique et intégrité</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#00A86B] rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">Accompagnement personnalisé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
