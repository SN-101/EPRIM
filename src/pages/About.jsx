import { Target, Eye, Users, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0047AB] to-[#003380] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              À Propos d'EPRIM
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Une institution d'excellence au service de votre formation professionnelle
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Qui Sommes-Nous?
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  EPRIM (École Professionnelle d'Informatique et Management) est un établissement privé de formation professionnelle basé à Meknès, Maroc. Fondée avec la vision de former les talents de demain, notre école s'est imposée comme une référence dans le domaine de la formation en informatique et management.
                </p>
                <p className="mb-4">
                  Nous offrons des programmes de formation de haute qualité, conçus pour répondre aux besoins spécifiques du marché de l'emploi marocain et international. Notre approche pédagogique combine théorie et pratique, permettant à nos étudiants d'acquérir des compétences immédiatement applicables.
                </p>
                <p>
                  Avec des formateurs expérimentés, des équipements modernes et un environnement d'apprentissage stimulant, EPRIM est le choix idéal pour ceux qui aspirent à une carrière réussie dans les secteurs de l'informatique et du management.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                En Chiffres
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-[#0047AB] mb-2">500+</div>
                  <div className="text-gray-600">Étudiants diplômés</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00A86B] mb-2">95%</div>
                  <div className="text-gray-600">Taux de réussite</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0047AB] mb-2">20+</div>
                  <div className="text-gray-600">Formateurs qualifiés</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00A86B] mb-2">26+</div>
                  <div className="text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Target className="w-6 h-6 text-[#0047AB]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Notre Mission
              </h3>
              <p className="text-gray-600">
                Former des professionnels compétents et qualifiés, capables de s'adapter aux évolutions du marché du travail.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Eye className="w-6 h-6 text-[#00A86B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Notre Vision
              </h3>
              <p className="text-gray-600">
                Devenir la référence en matière de formation professionnelle en informatique et management au Maroc.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Users className="w-6 h-6 text-[#0047AB]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Notre Équipe
              </h3>
              <p className="text-gray-600">
                Des formateurs qualifiés et expérimentés, passionnés par la transmission du savoir et l'accompagnement des étudiants.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Lightbulb className="w-6 h-6 text-[#00A86B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Notre Approche
              </h3>
              <p className="text-gray-600">
                Une pédagogie innovante alliant théorie, pratique et projets concrets pour une formation complète et efficace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Notre Approche Pédagogique
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0047AB]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Théorie Solide</h3>
              <p className="text-gray-600">
                Acquisition des concepts fondamentaux et des connaissances théoriques essentielles
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#00A86B]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Pratique Intensive</h3>
              <p className="text-gray-600">
                Mise en pratique immédiate à travers des exercices, ateliers et projets concrets
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0047AB]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Accompagnement</h3>
              <p className="text-gray-600">
                Suivi personnalisé et coaching pour garantir la réussite de chaque étudiant
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
