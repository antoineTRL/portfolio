import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Building, Target, AlertTriangle, LineChart } from 'lucide-react';
import { ArticleContent } from '../types';

interface ArticlePageProps {
  article: ArticleContent;
  category: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, category }) => {
  const navigate = useNavigate();

  // Check if this is a transversal skill or the full-stack overview article
  const isTransversalSkill = category === 'Compétence Transversale';
  const isFullStackOverview = article.id === 'full-stack-development';
  const shouldHideContextSections = isTransversalSkill || isFullStackOverview;

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 dark:text-blue-400 mb-8 group hover:underline"
        >
          <ArrowLeft size={16} className="mr-2 transform transition-transform group-hover:-translate-x-1" />
          Retour
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-900 dark:to-teal-800 p-8 md:p-12 text-white">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                {category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Vue d'ensemble */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white pb-2 border-b border-gray-200 dark:border-gray-700">
                
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {article.overview}
              </p>
            </section>

            {/* Special layout for full-stack overview article */}
            {isFullStackOverview ? (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white pb-2 border-b border-gray-200 dark:border-gray-700">
                  7 Compétences dans mon Référentiel de filière
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      1. Analyser les besoins du client en réalisant un diagnostic de son écosystème interne et en procédant à une étude de faisabilité afin d’identifier les problèmes à l’origine du besoin et faire émerger des pistes de solutions.
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Pour moi, cette compétence correspond à une évidence en entreprise, le but étant toujours de satisfaire le client.
Lors de la réalisation d’un formulaire qu’un client souhaitait reproduire de façon automatisé avec SAP,  j’ai fait des compromis afin que les éléments de mise en page de SAP puissent correspondre au mieux au formulaire déjà existant du client.
Cette compétence est à mon sens obligatoire professionnellement, sans la compréhension du besoin client on ne peut atteindre un résultat qui satisfera le travailleur et le client.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      2. Assurer le suivi du projet en mesurant régulièrement l’avancée du projet avec les outils et méthodes appropriés afin d’appliquer des mesures adaptatives et garantir la satisfaction du client et des utilisateurs.
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Le suivi d’avancement de projet est quelque chose d’utile pour l’équipe qui travaille pour avoir une marge de progression, de voir le bout du tunnel; Mais aussi pour le client car ce dernier aura besoin d’avoir des dates sur lequel se fixer afin de mettre des deadlines.
Dans un de mes projets d’équipes nous utilisions excel afin de déterminer à combien de pourcent nous étions dans le projet.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      3. Assurer le suivi des demandes utilisateurs en exploitant des outils de suivi permettant de recenser les anomalies afin de procéder aux mesures correctives, évolutives et adaptatives de l’application.
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Tout comme le point précédent, le suivi de l’avancement est crucial pour la gestion du projet. Représenté sous forme de graphique, il permet d’identifier les périodes de hausse ou de baisse de productivité de l’équipe. Par exemple, lors de mon premier projet, une baisse visible sur mon graphique a permis à mon supérieur de m’assigner des tâches moins difficiles et mieux adaptées à mon niveau, ce qui m’a débloqué et m’a permis de progresser.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      4. Industrialiser le développement du logiciel à l’aide d’outils d’automatisation et le documenter en décrivant le processus de déploiement de manière à faire évoluer les logiciels développés et minimiser les erreurs de manipulation par les tiers.
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      J'ai mené une étude pour mon entreprise dans le but d'implémenter la technologie de complétion de code sur l'environnement SAP, qui n'est initialement ni éligible ni efficace pour cette technologie. Suite à cette étude, j'ai effectué des tests et rédigé une documentation pour l'installation de cette dernière. 
J'apprécie cet aspect du métier qui consiste à innover, à améliorer les méthodes de travail et à suivre l'évolution de la profession. À l'avenir, j'aimerais répéter ce type d'activité.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      5. Développer les fonctionnalités d’un logiciel existant, en s’appropriant l’historique de la solution à faire évoluer, et prenant en compte les évolutions futures dont elle pourra faire l’objet  à long terme dans le cadre d’une reprise par un tiers  afin de garantir la pérennité du logiciel et s’assurer de son évolutivité dans le temps.
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      L'innovation va de pair avec la maintenabilité d'un logiciel, un principe fondamental de la création informatique. Par maintenabilité, j'entends l'utilisation d'outils modernes. Par exemple, en entreprise, après une mise à jour de version SAP de l'environnement client, j'ai dû adapter les prises de données aux nouvelles tables disponibles, les anciennes tables d'extraction des données n'existant plus.

C’est selon moi une notion nécessaire dans mon milieu professionnel.
Par exemple, à l'avenir je souhaite travailler sur une nouvelle technologie de SAP intitulé SAP Cloud Platform Integration, qui est un moyen graphique de développer et de mapper des données.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      6. Implémenter un logiciel de qualité, en choisissant des structures de données adaptées et des algorithmes pertinents afin d’assurer la robustesse du logiciel.
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Évidemment, implémenter un logiciel sans structures de données ni algorithmes pertinents est impossible dans mon environnement professionnel. Ces notions sont indispensables pour garantir la maintenabilité d'un logiciel. Ayant dû reprendre le code de quelqu'un qui ne respectait pas ces principes, je peux confirmer que la tâche fut ardue. Si les données ne sont pas implémentées de manière dynamique, le code entraînera des répétitions, et plus le logiciel est volumineux, plus la répétition devient problématique.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                      7. Tester le logiciel et l’application à plusieurs niveaux en utilisant les méthodologies de test éprouvées afin de garantir la conformité du logiciel au regard des spécifications et la non-régression des fonctionnalités déjà développées.
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Tester notre travail est essentiel pour un logiciel informatique. Cela permet de voir le logiciel sous un autre angle. En tant que créateurs, nous avons un plan d'utilisation prévu pour l'utilisateur, mais parfois le logiciel peut emprunter un autre chemin. Ce scénario peut engendrer des erreurs ou inciter l'utilisateur à effectuer des actions différentes de celles que nous avions prévues. 

Les tests fonctionnels sont une étape normale de l'avancement d'un projet, garantissant que celui-ci continue de répondre aux règles métier et aux besoins fondamentaux du client. Lors de mes projets informatiques professionnels, quand j’estime avoir terminé il faut toujours que je vois avec un consultant fonctionnel qui connait le besoin afin de m’assurer que le travail effectuer de s’écarte pas de la tâche demandé de base ou si des besoins sont manquants.
                    </p>
                  </div>
                </div>
              </section>
            ) : (
              <>
                {/* Contexte - Only show for non-transversal skills and non-full-stack overview */}
                {!shouldHideContextSections && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <section>
                      <div className="flex items-center mb-4 gap-2">
                        <User size={20} className="text-blue-600 dark:text-blue-400" />
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                          Contexte de réalisation
                        </h2>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg h-full">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {article.implementationContext}
                        </p>
                      </div>
                    </section>

                    <section>
                      <div className="flex items-center mb-4 gap-2">
                        <Building size={20} className="text-teal-600 dark:text-teal-400" />
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                          Contexte client
                        </h2>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg h-full">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {article.clientContext}
                        </p>
                      </div>
                    </section>
                  </div>
                )}

                {/* Grandes étapes - Only show for non-transversal skills and non-full-stack overview */}
                {!shouldHideContextSections && (
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white pb-2 border-b border-gray-200 dark:border-gray-700">
                      Grandes étapes
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-t-4 border-blue-600 dark:border-blue-400">
                        <div className="flex items-center mb-4 gap-2">
                          <Target size={20} className="text-blue-600 dark:text-blue-400" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Objectif
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {article.objective}
                        </p>
                      </div>

                      <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-t-4 border-teal-600 dark:border-teal-400">
                        <div className="flex items-center mb-4 gap-2">
                          <Clock size={20} className="text-teal-600 dark:text-teal-400" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Enjeux
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {article.challenges}
                        </p>
                      </div>

                      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-t-4 border-orange-600 dark:border-orange-400">
                        <div className="flex items-center mb-4 gap-2">
                          <AlertTriangle size={20} className="text-orange-600 dark:text-orange-400" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Risques
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {article.risks}
                        </p>
                      </div>
                    </div>
                  </section>
                )}
              </>
            )}

            {/* Étapes détaillées - Show for all except full-stack overview */}
            {!isFullStackOverview && (
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white pb-2 border-b border-gray-200 dark:border-gray-700">
                  Étapes
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Présentation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {article.presentation}
                    </p>
                  </div>

                  {article.id === 'e-commerce-platform' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Diagramme de séquence
                    </h3>
                    <div className="my-8">
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                          <img 
                            src="../../dist/assets/diagrammesequence.png" 
                            alt="Diagramme" 
                            //className="w-full h-64 md:h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            
                          </div>
                        </div>
                      </div>
                  </div>
                )}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Vulgarisation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {article.explanation}
                    </p>
                    
                    {/* Image illustrative - Only for e-commerce-platform project */}
                    {article.id === 'e-commerce-platform' && (
                      <div className="my-8">
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                          <img 
                            src="../../dist/assets/schemaCPI.png" 
                            alt="flux SAP CPI" 
                            //className="w-full h-64 md:h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                              Schéma
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Résultat
                    </h3>
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                      <div className="flex items-center mb-4 gap-2">
                        <LineChart size={20} className="text-blue-600 dark:text-blue-400" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Impact & Résultats
                        </h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {article.results}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;