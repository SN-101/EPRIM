import { Code, Globe, Briefcase, Clock, CheckCircle } from 'lucide-react';

export default function Programs({ onNavigate }) {
  const programs = [
    {
      id: 1,
      title: 'Technicien en Informatique',
      icon: Code,
      duration: '2 ans',
      level: 'Niveau Technicien Spécialisé',
      description: 'Formation complète aux fondamentaux de l\'informatique, maintenance et administration système.',
      objectives: [
        'Maîtriser les systèmes d\'exploitation',
        'Installation et configuration de matériel',
        'Maintenance et dépannage informatique',
        'Administration de réseaux locaux',
        'Support technique utilisateur'
      ],
      careers: ['Technicien informatique', 'Support technique', 'Administrateur système junior']
    },
    {
      id: 2,
      title: 'Développement Web et Applications',
      icon: Globe,
      duration: '2 ans',
      level: 'Niveau Technicien',
      description: 'Formation aux technologies web modernes et développement d\'applications web et mobiles.',
      objectives: [
        'HTML5, CSS3 et JavaScript moderne',
        'Frameworks front-end (React, Vue.js)',
        'Développement back-end (Node.js, PHP)',
        'Bases de données relationnelles et NoSQL',
        'Conception et déploiement d\'applications'
      ],
      careers: ['Développeur web', 'Développeur full-stack', 'Développeur d\'applications']
    },
    {
      id: 3,
      title: 'Gestion et Management',
      icon: Briefcase,
      duration: '2 ans',
      level: 'Niveau Technicien Spécialisé',
      description: 'Formation en gestion d\'entreprise, management et administration commerciale.',
      objectives: [
        'Principes de gestion d\'entreprise',
        'Management et leadership',
        'Comptabilité et finance',
        'Marketing et communication',
        'Gestion des ressources humaines'
      ],
      careers: ['Assistant de gestion', 'Chargé de clientèle', 'Responsable administratif']
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#0047AB] to-[#003380] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Formations
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Des programmes de formation adaptés aux exigences du marché du travail
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choisissez Votre Parcours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              EPRIM propose des formations professionnelles diplômantes dans les domaines de l'informatique et du management
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div key={program.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-[#0047AB] to-[#003380] p-8 text-white flex flex-col justify-center items-center">
                      <div className="bg-white bg-opacity-20 rounded-full p-6 mb-4">
                        <Icon className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-center">{program.title}</h3>
                      <div className="flex items-center mt-4 text-blue-100">
                        <Clock className="w-5 h-5 mr-2" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="mt-2 text-sm text-blue-100">{program.level}</div>
                    </div>

                    <div className="md:w-2/3 p-8">
                      <p className="text-gray-700 mb-6 text-lg">
                        {program.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Objectifs de la formation :
                        </h4>
                        <ul className="space-y-2">
                          {program.objectives.map((objective, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-[#00A86B] mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          Débouchés professionnels :
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.careers.map((career, index) => (
                            <span key={index} className="bg-blue-50 text-[#0047AB] px-3 py-1 rounded-full text-sm">
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigate('admission')}
                        className="bg-[#00A86B] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#008f5b] transition-colors"
                      >
                        S'inscrire à cette formation
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Modalités de Formation
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold text-[#0047AB] mb-2">Cours Théoriques</h3>
                  <p className="text-gray-600">Enseignement des concepts fondamentaux par des formateurs qualifiés</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold text-[#00A86B] mb-2">Travaux Pratiques</h3>
                  <p className="text-gray-600">Ateliers et projets pour la mise en pratique des compétences</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold text-[#0047AB] mb-2">Stages en Entreprise</h3>
                  <p className="text-gray-600">Immersion professionnelle pour acquérir l'expérience du terrain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
