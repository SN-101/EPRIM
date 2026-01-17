import { FileText, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export default function Admission({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0047AB] to-[#003380] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Admission et Inscription
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Rejoignez EPRIM et commencez votre parcours vers l'excellence
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Processus d'Inscription
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez ces étapes simples pour finaliser votre inscription
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0047AB]">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Pré-inscription</h3>
              <p className="text-gray-600">Remplir le formulaire de pré-inscription en ligne ou sur place</p>
            </div>

            <div className="text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#00A86B]">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Dossier</h3>
              <p className="text-gray-600">Constituer et déposer votre dossier d'inscription complet</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0047AB]">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Test & Entretien</h3>
              <p className="text-gray-600">Passer un test de niveau et un entretien de motivation</p>
            </div>

            <div className="text-center">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#00A86B]">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Validation</h3>
              <p className="text-gray-600">Recevoir votre confirmation d'inscription et commencer votre formation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-lg p-3 mr-4">
                  <FileText className="w-6 h-6 text-[#0047AB]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Documents Requis
                </h2>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Copie certifiée conforme du diplôme (Bac ou équivalent)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Copie de la Carte d'Identité Nationale (CIN)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">4 photos d'identité récentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Relevé de notes du baccalauréat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Certificat de scolarité (si applicable)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00A86B] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Acte de naissance</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-[#0047AB] mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Tous les documents doivent être présentés en original et en copie certifiée conforme.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 rounded-lg p-3 mr-4">
                  <Calendar className="w-6 h-6 text-[#00A86B]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Dates Importantes
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-[#0047AB] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Rentrée Septembre 2026</h3>
                  <p className="text-gray-600 text-sm mb-2">Inscriptions ouvertes</p>
                  <p className="text-sm text-gray-500">Juin - Septembre 2026</p>
                </div>

                <div className="border-l-4 border-[#00A86B] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Tests d'admission</h3>
                  <p className="text-gray-600 text-sm mb-2">Sessions organisées chaque semaine</p>
                  <p className="text-sm text-gray-500">Sur rendez-vous</p>
                </div>

                <div className="border-l-4 border-[#0047AB] pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Début des cours</h3>
                  <p className="text-gray-600 text-sm mb-2">Première semaine de septembre</p>
                  <p className="text-sm text-gray-500">Septembre 2026</p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-[#0047AB] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#003380] transition-colors"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0047AB] to-[#003380] rounded-lg shadow-xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Conditions d'Admission
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white bg-opacity-10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Niveau Technicien</h3>
                    <p className="text-blue-100">Baccalauréat toutes séries ou diplôme équivalent</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Niveau Technicien Spécialisé</h3>
                    <p className="text-blue-100">Baccalauréat + 1 an d'études supérieures ou diplôme de technicien</p>
                  </div>
                </div>
                <p className="mt-8 text-lg text-blue-100">
                  L'admission définitive est subordonnée à la réussite du test de niveau et de l'entretien de motivation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à Commencer Votre Formation?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre inscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#0047AB] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#003380] transition-colors"
            >
              Nous Contacter
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="bg-white text-[#0047AB] px-8 py-3 rounded-md font-semibold border-2 border-[#0047AB] hover:bg-gray-50 transition-colors"
            >
              Voir les Formations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
