import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-5/12">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-blue-600 dark:border-blue-400">
                {/* Profile image - replace with your own image */}
                <img 
                  src="https://i.imgur.com/PU46mLM.jpg" 
                  alt="Portrait professionnel" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-teal-100 dark:bg-teal-900/30 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-100 dark:bg-blue-900/30 -z-10"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              Qui je suis
            </h2>
            
            <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Mon projet professionnel
            </h3>

            <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                À court et moyen terme
              </h4>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Mon objectif est de développer mes compétences techniques à travers les différentes technologies sur lesquelles j'ai eu l'opportunité de travailler, telles que :<br />
  <ul className="list-disc list-inside ml-4">
    <li>ABAP, Groovy et XSLT pour le développement back-end</li>
    <li>Fiori, combinant les aspects front-end et back-end</li>
  </ul><br />
  En parallèle, je souhaite également renforcer mes compétences fonctionnelles, un aspect essentiel dans l'univers de SAP. Cela me permettra non seulement d'améliorer mon expertise métier, mais aussi de mieux comprendre l'environnement dans lequel j'évolue.<br /><br />
  Enfin, je vise à travailler sur des projets variés afin d'identifier avec précision la spécialité qui correspond le mieux à mes aspirations professionnelles.
            </p>

            <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                À long terme
              </h4>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
             Je souhaite grandir sur des enjeux de décision et devenir de plus en plus autonome afin de maximiser mon efficacité. Mon objectif est d’évoluer vers un rôle où je pourrais prendre davantage d’initiatives et piloter des projets stratégiques. Cela implique également de développer ma capacité à analyser des situations complexes et à proposer des solutions pertinentes et innovantes.<br /><br />
En parallèle, je souhaite également gagner en responsabilités. Cette progression me permettra non seulement de renforcer mes compétences techniques et fonctionnelles, mais aussi de devenir un acteur clé dans mon domaine. 
            </p>

            <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
               Objectifs fixés
              </h4>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Devenir consultant expert en SAP<br /><br /> C'est au cours de ma formation professionnelle que j'ai eu le déclic : en observant des personnes ayant un haut niveau de compétence technique en SAP, j'ai réalisé que c'était le statut que je voulais atteindre. Un statut qui offre la possibilité de s'appuyer sur une vaste connaissance du domaine pour résoudre des problématiques variées.<br /><br />
              
Dans ce métier, bien que j'apprécie l'apprentissage de nouvelles technologies et l'acquisition de compétences, c'est lorsque je connais clairement l'objectif à atteindre et que je réfléchis à la manière de l'implémenter que je m'épanouis le plus.<br /><br />
              
Lorsque je m'entretiens avec des collègues experts, c'est souvent face à un problème rencontré. Ces derniers savent rapidement identifier le problème ou proposer une solution, notamment pour des situations déjà expérimentées. Pour ma part, quand je suis confronté à un sujet familier, je prends beaucoup de plaisir à consulter mes notes et à tester de nouvelles approches pour résoudre le problème de manière innovante.
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-400 mb-8">
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Ce qui me motive
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Ce qui me motive, c’est la résolution de problèmes concrets en combinant maîtrise technique et compréhension métier. En chemin vers un rôle de consultant SAP expert, j'apprécie particulièrement les environnements où je peux apprendre en profondeur, collaborer avec des experts, et transformer les défis techniques en leviers de performance."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">2+</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Années d'expérience</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">10+</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Projets réalisés</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">10+</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Clients satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;