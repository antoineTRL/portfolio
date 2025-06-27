import React from 'react';
import { Database, Code, Globe, Users, Lightbulb, MessageSquare, SkillArticle, ProjectArticle } from '../types';

export const technicalSkills: SkillArticle[] = [
  {
    id: 'abap-development',
    title: 'Développement ABAP',
    description: 'Maîtrise du langage ABAP pour le développement d\'applications SAP robustes et performantes.',
    icon: <Database size={24} />,
    overview: <p>Le développement ABAP constitue le cœur de mon expertise technique chez SAP. Cette compétence me permet de créer des solutions sur mesure qui répondent aux besoins spécifiques des entreprises tout en respectant les standards SAP.</p>,
    implementationContext: <p>Développement dans l'environnement SAP NetWeaver, utilisation des outils de développement SAP (SE80, ADT), respect des conventions de nommage et des bonnes pratiques ABAP. Intégration avec les modules fonctionnels SAP existants.</p>,
    clientContext: <p>Clients du secteur industriel et de la distribution nécessitant des développements spécifiques pour leurs processus métier. Adaptation aux contraintes réglementaires et aux spécificités sectorielles de chaque client.</p>,
    objective: <p>Créer des programmes ABAP maintenables, performants et conformes aux standards SAP pour automatiser les processus métier et améliorer l'efficacité opérationnelle des utilisateurs finaux.</p>,
    challenges: <p>Optimisation des performances, gestion de la montée en charge, respect des standards de codage SAP, intégration harmonieuse avec l'écosystème SAP existant du client.</p>,
    risks: <p>Risques de régression sur les fonctionnalités existantes, impact sur les performances système, non-conformité aux standards SAP pouvant compliquer les futures mises à jour.</p>,
    presentation: <p>Le développement ABAP représente ma spécialité principale. J'ai acquis cette expertise à travers de nombreux projets clients, me permettant de maîtriser aussi bien les aspects techniques que les bonnes pratiques de développement dans l'écosystème SAP.</p>,
    explanation: <p>ABAP (Advanced Business Application Programming) est le langage de programmation propriétaire de SAP. Il permet de développer des applications métier directement intégrées dans l'environnement SAP, offrant une cohérence parfaite avec les processus existants et une maintenance simplifiée.</p>,
    results: <p>Développement de plus de 15 programmes ABAP en production, réduction significative des temps de traitement grâce à l'optimisation du code, amélioration de l'expérience utilisateur et automatisation de processus manuels chronophages.</p>
  },
  {
    id: 'fiori-ui5',
    title: 'Développement Fiori/UI5',
    description: 'Création d\'interfaces utilisateur modernes et responsives avec SAP Fiori et SAPUI5.',
    icon: <Code size={24} />,
    overview: <p>Le développement Fiori/UI5 me permet de créer des interfaces utilisateur modernes et intuitives pour les applications SAP. Cette technologie représente l'avenir de l'expérience utilisateur dans l'écosystème SAP.</p>,
    implementationContext: <p>Développement avec SAP Web IDE et SAP Business Application Studio, utilisation du framework SAPUI5, intégration avec les services OData, déploiement sur SAP Launchpad. Respect des guidelines UX Fiori.</p>,
    clientContext: <p>Entreprises souhaitant moderniser leur interface SAP pour améliorer l'adoption utilisateur et la productivité. Clients ayant des besoins spécifiques d'ergonomie et d'accessibilité.</p>,
    objective: <p>Développer des applications Fiori ergonomiques, responsives et performantes qui améliorent significativement l'expérience utilisateur par rapport aux transactions SAP classiques.</p>,
    challenges: <p>Adaptation aux différents devices (desktop, tablette, mobile), optimisation des performances, gestion de la connectivité réseau variable, respect des standards UX Fiori.</p>,
    risks: <p>Problèmes de compatibilité entre versions, complexité de maintenance, dépendance aux services backend, risques de performance sur les appareils mobiles.</p>,
    presentation: <p>Fiori représente ma passion pour l'interface utilisateur dans l'univers SAP. J'apprécie particulièrement la possibilité de combiner développement frontend moderne et intégration backend SAP pour créer des expériences utilisateur exceptionnelles.</p>,
    explanation: <p>SAP Fiori est la nouvelle génération d'interfaces utilisateur SAP, basée sur le framework SAPUI5. Elle offre une expérience moderne, intuitive et responsive, accessible depuis n'importe quel device, révolutionnant la façon dont les utilisateurs interagissent avec SAP.</p>,
    results: <p>Création de 8 applications Fiori en production, amélioration de 40% de la satisfaction utilisateur, réduction du temps de formation des nouveaux utilisateurs, augmentation de l'adoption des solutions SAP par les équipes métier.</p>
  },
  {
    id: 'integration-technologies',
    title: 'Technologies d\'intégration',
    description: 'Expertise en intégration de systèmes avec SAP PI/PO, CPI et autres middleware.',
    icon: <Globe size={24} />,
    overview: <p>Les technologies d'intégration sont essentielles dans l'écosystème SAP moderne. Ma maîtrise de ces outils me permet de connecter SAP avec des systèmes tiers et de créer des architectures IT cohérentes et performantes.</p>,
    implementationContext: <p>Utilisation de SAP Process Integration (PI), SAP Process Orchestration (PO), et SAP Cloud Platform Integration (CPI). Développement de mappings, configuration de canaux de communication, gestion des formats de données (XML, JSON, EDI).</p>,
    clientContext: <p>Entreprises avec des paysages IT hétérogènes nécessitant l'intégration de SAP avec des systèmes legacy, des solutions cloud, ou des applications tierces. Projets de transformation digitale et de modernisation IT.</p>,
    objective: <p>Assurer une intégration fluide et fiable entre SAP et les systèmes tiers, garantir la cohérence des données, automatiser les échanges d'informations et réduire les interventions manuelles.</p>,
    challenges: <p>Gestion de la complexité des mappings de données, assurance de la performance des flux d'intégration, gestion des erreurs et de la reprise sur incident, maintien de la sécurité des échanges.</p>,
    risks: <p>Risques de perte de données lors des échanges, problèmes de performance impactant les processus métier, complexité de maintenance des interfaces, dépendance aux systèmes tiers.</p>,
    presentation: <p>L'intégration représente un défi technique passionnant qui me permet de comprendre l'architecture globale des systèmes d'information. J'apprécie la dimension stratégique de ces projets qui impactent directement l'efficacité opérationnelle des entreprises.</p>,
    explanation: <p>Les technologies d'intégration SAP permettent de faire communiquer SAP avec le reste du système d'information de l'entreprise. Elles assurent la cohérence des données, automatisent les processus inter-systèmes et permettent une vision unifiée de l'information.</p>,
    results: <p>Mise en place de 12 interfaces d'intégration en production, réduction de 60% des erreurs de saisie grâce à l'automatisation, amélioration de la traçabilité des données, accélération des processus métier inter-systèmes.</p>
  },
  {
    id: 'full-stack-development',
    title: 'Vue d\'ensemble Full-Stack',
    description: 'Approche complète du développement, de la base de données à l\'interface utilisateur.',
    icon: <Code size={24} />,
    overview: <p>Mon approche full-stack me permet d'avoir une vision globale des projets, de la conception de la base de données jusqu'à l'interface utilisateur finale. Cette polyvalence est particulièrement précieuse dans l'écosystème SAP où les différentes couches technologiques sont étroitement liées.</p>,
    implementationContext: <p>Cette compétence n'est pas liée à un contexte de réalisation spécifique mais représente plutôt une approche transversale que j'applique dans tous mes projets SAP.</p>,
    clientContext: <p>Cette compétence n'est pas liée à un contexte client particulier mais bénéficie à tous les projets en apportant une vision d'ensemble et une cohérence technique.</p>,
    objective: <p>Cette section présente ma vision globale du développement et comment les 7 compétences de mon référentiel de filière s'articulent dans ma pratique professionnelle.</p>,
    challenges: <p>Le défi principal est de maintenir une expertise technique pointue sur chaque couche tout en gardant une vision d'ensemble cohérente.</p>,
    risks: <p>Le risque serait de devenir généraliste au détriment de l'expertise spécialisée, particulièrement importante dans l'écosystème SAP.</p>,
    presentation: <p>Cette section détaille comment les 7 compétences de mon référentiel de filière s'articulent dans ma pratique quotidienne de développeur SAP.</p>,
    explanation: <p>Plutôt qu'une explication technique, cette section présente une réflexion sur mon parcours de formation et l'acquisition de ces compétences fondamentales.</p>,
    results: <p>Cette approche globale me permet d'être plus efficace sur les projets, de mieux comprendre les enjeux métier et de proposer des solutions techniques cohérentes et durables.</p>
  }
];

export const transversalSkills: SkillArticle[] = [
  {
    id: 'independence-collaboration',
    title: 'Entre l\'indépendance et la collaboration',
    description: 'Capacité à travailler de manière autonome tout en maintenant une collaboration efficace avec les équipes.',
    icon: <Users size={24} />,
    overview: <p>Cette compétence reflète ma capacité à naviguer entre autonomie et travail d'équipe, une qualité essentielle dans l'environnement professionnel moderne où l'indépendance et la collaboration doivent coexister harmonieusement.</p>,
    implementationContext: <p>Dans mes projets SAP, je dois souvent travailler de manière autonome sur des développements techniques complexes tout en maintenant une communication régulière avec les équipes fonctionnelles, les chefs de projet et les autres développeurs.</p>,
    clientContext: <p>Les clients apprécient cette capacité car elle leur garantit une progression continue des projets même en cas d'indisponibilité ponctuelle des autres membres de l'équipe, tout en assurant la cohérence globale du travail réalisé.</p>,
    objective: <p>Optimiser ma productivité personnelle tout en contribuant efficacement aux objectifs collectifs, en sachant quand prendre des initiatives et quand solliciter l'aide ou l'avis de l'équipe.</p>,
    challenges: <p>Trouver le bon équilibre entre autonomie et collaboration, savoir identifier les moments où la consultation de l'équipe est nécessaire, maintenir la cohérence du travail individuel avec les objectifs collectifs.</p>,
    risks: <p>Risque d'isolement si l'autonomie devient excessive, ou au contraire, risque de dépendance si la collaboration devient systématique. Possibilité de divergences avec les attentes de l'équipe.</p>,
    presentation: <p>Autonome, mais jamais isolé</p>,
    explanation: <p>Autonomie guidée, autonomie gagnée !!</p>,
    results: <p>Cette approche me permet de maintenir un haut niveau de productivité tout en contribuant positivement à la dynamique d'équipe. Les retours de mes collègues et managers confirment l'efficacité de cette approche équilibrée.</p>
  },
  {
    id: 'adaptation-habit',
    title: 'L\'Adaptation comme Habitude',
    description: 'Flexibilité et capacité d\'adaptation face aux changements technologiques et organisationnels.',
    icon: <Lightbulb size={24} />,
    overview: <p>Dans un secteur en constante évolution comme l'informatique, l'adaptation n'est pas seulement une compétence, c'est une nécessité. J'ai développé cette capacité à travers mes diverses expériences professionnelles et académiques.</p>,
    implementationContext: <p>Que ce soit lors de migrations technologiques, de changements d'organisation client, ou d'évolutions des méthodologies de travail, j'ai appris à m'adapter rapidement tout en maintenant la qualité de mon travail.</p>,
    clientContext: <p>Les environnements clients sont souvent en mutation : nouvelles versions SAP, réorganisations, changements de priorités. Ma capacité d'adaptation permet d'accompagner ces évolutions sereinement.</p>,
    objective: <p>Développer une agilité mentale et technique qui me permet de rester efficace dans des contextes changeants, tout en aidant les équipes à naviguer dans ces transitions.</p>,
    challenges: <p>Maintenir la performance pendant les phases de transition, gérer le stress lié au changement, continuer à apprendre en permanence, aider les autres à s'adapter également.</p>,
    risks: <p>Risque de fatigue liée aux changements constants, possibilité de résistance inconsciente au changement, risque de superficialité dans l'apprentissage de nouvelles compétences.</p>,
    presentation: <p>S'adapter pour progresser</p>,
    explanation: <p>Une vision d'ensemble sur le monde informatique</p>,
    results: <p>Cette capacité d'adaptation m'a permis de réussir mes transitions professionnelles, d'acquérir rapidement de nouvelles compétences techniques, et d'être reconnu comme une ressource fiable dans les projets de transformation.</p>
  },
  {
    id: 'technical-english',
    title: 'L\'anglais technique : Un atout indispensable pour un consultant',
    description: 'Maîtrise de l\'anglais technique pour la documentation, les échanges internationaux et la veille technologique.',
    icon: <MessageSquare size={24} />,
    overview: <p>Dans l'écosystème SAP international, la maîtrise de l'anglais technique est indispensable. Cette compétence me permet d'accéder à une documentation plus riche, de participer à des projets internationaux et de rester à la pointe des évolutions technologiques.</p>,
    implementationContext: <p>Utilisation quotidienne de l'anglais pour la consultation de documentation SAP, participation à des formations internationales, échanges avec des équipes offshore, lecture de blogs techniques et participation à des forums spécialisés.</p>,
    clientContext: <p>Certains clients opèrent dans un contexte international nécessitant des échanges en anglais. Cette compétence me permet d'intervenir sur ces projets et d'apporter une valeur ajoutée supplémentaire.</p>,
    objective: <p>Maintenir et développer mon niveau d'anglais technique pour rester compétitif sur le marché international et accéder aux meilleures ressources de formation et d'information.</p>,
    challenges: <p>Maintenir un niveau technique précis en anglais, s'adapter aux différents accents et contextes culturels, rester à jour avec l'évolution du vocabulaire technique.</p>,
    risks: <p>Risque de malentendus techniques dus à la barrière linguistique, possibilité de passer à côté d'informations importantes, stress lié à la communication dans une langue non maternelle.</p>,
    presentation: <p>De la technique à la posture de consultant</p>,
    explanation: <p>Stress, langue et technique</p>,
    results: <p>Cette compétence m'a ouvert des opportunités de projets internationaux, m'a permis d'accéder à des formations de pointe, et a renforcé ma crédibilité technique auprès des clients et collègues internationaux.</p>
  }
];

export const achievements: ProjectArticle[] = [
  {
    id: 'e-commerce-platform',
    title: 'Plateforme E-commerce Intégrée',
    description: 'Développement d\'une solution e-commerce complète intégrée à SAP pour automatiser les processus de vente.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Intégration SAP',
    pitch: 'Transformer l\'expérience client grâce à une intégration SAP innovante',
    overview: <p>Ce projet ambitieux visait à créer une passerelle fluide entre une plateforme e-commerce moderne et l'ERP SAP du client, automatisant ainsi l'ensemble du processus de commande jusqu'à la livraison.</p>,
    implementationContext: <p>Développement réalisé avec SAP Cloud Platform Integration (CPI) pour l'orchestration des flux, ABAP pour les développements backend, et intégration avec une plateforme e-commerce basée sur Shopify. Utilisation des standards REST API et OData.</p>,
    clientContext: <p>Client du secteur de la distribution spécialisé dans les équipements sportifs, gérant un catalogue de plus de 10 000 références avec des besoins de synchronisation temps réel entre le site web et l'ERP pour la gestion des stocks et des prix.</p>,
    objective: <p>Automatiser complètement le processus de commande depuis le site e-commerce jusqu'à la facturation dans SAP, éliminer les ressaisies manuelles, et offrir une visibilité temps réel sur les stocks aux clients finaux.</p>,
    challenges: <p>Gestion de la synchronisation bidirectionnelle des données, maintien des performances avec un volume élevé de transactions, gestion des erreurs et de la reprise sur incident, respect des contraintes de sécurité pour les données sensibles.</p>,
    risks: <p>Risques de désynchronisation entre les systèmes pouvant impacter l'expérience client, problèmes de performance lors des pics de charge, complexité de maintenance de l'interface, dépendance critique à la disponibilité des systèmes.</p>,
    presentation: <p>Ce projet représente l'aboutissement de mes compétences en intégration SAP. Il combine développement ABAP, technologies cloud, et compréhension des enjeux métier pour créer une solution véritablement transformante pour le client.</p>,
    explanation: <p>L'intégration e-commerce SAP permet de créer un écosystème digital unifié où chaque commande passée sur le site web déclenche automatiquement les processus SAP appropriés : vérification de stock, création de commande client, planification de livraison, et facturation. Cette automatisation élimine les erreurs humaines et accélère considérablement les délais de traitement.</p>,
    results: <p>Réduction de 75% du temps de traitement des commandes, élimination complète des erreurs de ressaisie, amélioration de 40% de la satisfaction client grâce à la visibilité temps réel sur les stocks, et augmentation de 25% du chiffre d'affaires e-commerce grâce à une meilleure disponibilité des informations produits.</p>
  },
  {
    id: 'reporting-dashboard',
    title: 'Tableau de Bord Analytique',
    description: 'Création d\'un système de reporting avancé avec SAP Analytics Cloud pour le pilotage d\'activité.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Business Intelligence',
    pitch: 'Transformer les données en insights stratégiques pour la prise de décision',
    overview: <p>Développement d'une solution de Business Intelligence complète permettant aux dirigeants d'avoir une vision temps réel de leur activité à travers des tableaux de bord interactifs et des analyses prédictives.</p>,
    implementationContext: <p>Utilisation de SAP Analytics Cloud (SAC) connecté aux données SAP ERP via des connexions directes et des extractions optimisées. Développement de modèles de données, création de stories interactives, et mise en place d'alertes automatiques.</p>,
    clientContext: <p>Groupe industriel multi-sites nécessitant une consolidation des données financières et opérationnelles provenant de différentes filiales pour améliorer le pilotage stratégique et la prise de décision au niveau du comité de direction.</p>,
    objective: <p>Fournir aux décideurs une vision consolidée et temps réel de l'activité, automatiser la production des reportings mensuels, et développer des capacités d'analyse prédictive pour anticiper les tendances métier.</p>,
    challenges: <p>Harmonisation des données provenant de sources multiples, optimisation des performances pour des volumes importants de données, création d'interfaces intuitives pour des utilisateurs non techniques, gestion de la sécurité et des droits d'accès.</p>,
    risks: <p>Risques de qualité des données impactant la fiabilité des analyses, problèmes de performance avec l'augmentation du volume de données, résistance au changement des utilisateurs habitués aux reportings Excel, complexité de maintenance des modèles de données.</p>,
    presentation: <p>Ce projet m'a permis de développer mes compétences en Business Intelligence et de comprendre les enjeux stratégiques de la donnée en entreprise. J'ai particulièrement apprécié la dimension conseil qui accompagne ce type de projet.</p>,
    explanation: <p>Un tableau de bord analytique moderne transforme les données brutes de l'ERP en informations exploitables pour la prise de décision. Grâce à SAP Analytics Cloud, les dirigeants peuvent visualiser en temps réel les KPI critiques, identifier les tendances, et prendre des décisions éclairées basées sur des données fiables et actualisées.</p>,
    results: <p>Réduction de 80% du temps de production des reportings mensuels, amélioration de la réactivité décisionnelle grâce aux alertes automatiques, augmentation de 30% de l'utilisation des données dans les processus de décision, et développement d'une culture data-driven au sein de l'organisation.</p>
  },
  {
    id: 'workflow-automation',
    title: 'Automatisation des Processus Métier',
    description: 'Mise en place de workflows automatisés pour optimiser les processus d\'approbation et de validation.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Process Automation',
    pitch: 'Révolutionner l\'efficacité opérationnelle par l\'automatisation intelligente',
    overview: <p>Conception et implémentation d'un système de workflows automatisés pour digitaliser et optimiser les processus d'approbation, réduisant significativement les délais de traitement et améliorant la traçabilité.</p>,
    implementationContext: <p>Développement avec SAP Workflow et SAP Business Workflow, intégration avec SAP Fiori pour les interfaces utilisateur, utilisation des services web pour les notifications, et développement ABAP pour les règles métier complexes.</p>,
    clientContext: <p>Entreprise de services financiers avec des processus d'approbation complexes impliquant de multiples niveaux hiérarchiques et des règles métier sophistiquées, nécessitant une traçabilité complète pour la conformité réglementaire.</p>,
    objective: <p>Digitaliser les processus d'approbation papier, réduire les délais de traitement, améliorer la traçabilité et la conformité, et offrir une meilleure visibilité sur l'avancement des demandes aux utilisateurs finaux.</p>,
    challenges: <p>Modélisation de processus métier complexes avec de multiples variantes, gestion des exceptions et des cas particuliers, intégration harmonieuse avec les processus existants, formation des utilisateurs aux nouveaux outils.</p>,
    risks: <p>Risques de blocage des processus en cas de dysfonctionnement du workflow, résistance au changement des utilisateurs habitués aux processus manuels, complexité de maintenance des règles métier, dépendance critique au système informatique.</p>,
    presentation: <p>L'automatisation des processus représente un domaine passionnant où la technique rencontre directement les enjeux métier. Ce projet m'a permis de développer une compréhension approfondie des processus d'entreprise et de leur optimisation.</p>,
    explanation: <p>L'automatisation des workflows transforme les processus manuels en flux digitaux intelligents. Chaque demande suit automatiquement le circuit d'approbation approprié selon les règles définies, avec des notifications automatiques, des relances, et une traçabilité complète. Cette digitalisation élimine les pertes de documents, accélère les traitements, et améliore la satisfaction des utilisateurs.</p>,
    results: <p>Réduction de 60% des délais moyens d'approbation, élimination complète des pertes de documents, amélioration de 50% de la satisfaction utilisateur grâce à la visibilité sur l'avancement, et renforcement significatif de la conformité réglementaire grâce à la traçabilité automatique.</p>
  }
];