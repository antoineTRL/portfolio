import React from 'react';

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  status: number; // 1 to 4, representing different progress stages
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "BTS - SNIR (Systèmes Numériques, Informatique et Réseaux)",
    date: "2020 - 2022",
    description: "Formation intensive en développement web full-stack, avec spécialisation en JavaScript et frameworks modernes.",
    status: 4 // Completed
  },
  {
    id: 2,
    title: "Licence professionnelle : Métiers de l'informatique (Conception, Développement, Test de Logiciels)",
    date: "2022 - 2023",
    description: "Une formation que j'ai particulièrement appréciée grâce à ses sujets passionnants, notamment un module sur les bases de données.",
    status: 4 // Completed
  },
  {
    id: 3,
    title: "Stage chez Augusta Reeves",
    date: "2023",
    description: "Bien que j'aurais envisagé une carrière orientée vers ce domaine, ma rencontre avec SAP lors de mon stage m'a permis de combiner ma passion pour les bases de données (SQL) et la programmation en ABAP.",
    status: 4 // In progress 
  },
  {
    id: 4,
    title: "Mastère en Ingénierie du Développement d'Applications (en alternance chez Augusta Reeves)",
    date: "2023 - Présent",
    description: "Cette alternance chez Augusta Reeves, un intégrateur SAP, m'a permis de devenir consultant technique SAP et a confirmé mon orientation professionnelle.",
    status: 2 // Starting
  }
];

const Timeline: React.FC = () => {
  const getStatusColor = (status: number) => {
    switch(status) {
      case 1: return "bg-gray-200 dark:bg-gray-700"; // Not started
      case 2: return "bg-blue-200 dark:bg-blue-900"; // Starting
      case 3: return "bg-teal-200 dark:bg-teal-900"; // In progress
      case 4: return "bg-green-200 dark:bg-green-900"; // Completed
      default: return "bg-gray-200 dark:bg-gray-700";
    }
  };

  const getStatusText = (status: number) => {
    switch(status) {
      case 1: return "À venir";
      case 2: return "En cours";
      case 3: return "";
      case 4: return "Complété";
      default: return "Non défini";
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
            Mon Parcours
          </h2>
          <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Évolution Professionnelle
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Un aperçu de mon parcours professionnel et de mon évolution dans le domaine du développement et de l'informatique en general.
          </p>
        </div>

        <div className="relative flex flex-col md:grid grid-cols-9 mx-auto">
          <div className="absolute inset-0 h-full w-2 bg-gray-200 dark:bg-gray-700 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`flex ${
                index % 2 === 0 
                  ? 'md:flex-row-reverse md:col-start-1 md:col-end-5' 
                  : 'md:flex-row md:col-start-5 md:col-end-10'
              } relative mb-12 md:mb-8`}
            >
              {/* Mobile timeline line */}
              <div className="absolute left-8 md:hidden h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
              
              {/* Mobile timeline dot */}
              <div className="absolute left-8 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 z-10 md:hidden"></div>

              {/* Timeline content */}
              <div 
                className={`w-full md:w-5/6 flex flex-col ${
                  index % 2 === 0 ? 'md:items-end md:text-right md:pr-8' : 'md:items-start md:pl-8'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-400 w-full ml-12 md:ml-0">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h4>
                    <span 
                      className={`text-sm px-3 py-1 rounded-full ${getStatusColor(event.status)} text-gray-800 dark:text-gray-200`}
                    >
                      {getStatusText(event.status)}
                    </span>
                  </div>
                  
                  <span className="text-sm text-gray-500 dark:text-gray-400 block mb-3">{event.date}</span>
                  <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
                </div>
              </div>

              {/* Desktop timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className={`w-6 h-6 rounded-full shadow-md z-10 border-4 ${
                  event.status === 4 
                    ? 'bg-green-400 border-green-600 dark:bg-green-600 dark:border-green-400' 
                    : event.status === 3 
                      ? 'bg-teal-400 border-teal-600 dark:bg-teal-600 dark:border-teal-400'
                      : event.status === 2 
                        ? 'bg-blue-400 border-blue-600 dark:bg-blue-600 dark:border-blue-400'
                        : 'bg-gray-300 border-gray-600 dark:bg-gray-600 dark:border-gray-300'
                }`}>
                </div>
              </div>

              {/* Mobile timeline simple dot */}
              <div className="flex md:hidden w-6 h-6 rounded-full shadow-md z-10 border-4 border-blue-400 dark:border-blue-600 mr-4 bg-blue-400 dark:bg-blue-600">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;