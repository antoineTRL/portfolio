import React from 'react';
import { 
  Code, 
  Database, 
  Layout, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Clock, 
  Award, 
  LineChart 
} from 'lucide-react';
import { SkillArticle, ProjectArticle } from '../types';

// Technical Skills
export const technicalSkills: SkillArticle[] = [
  {
    id: 'frontend-development',
    title: 'Développement Front End',
    description: 'Concevoir une maquette client sur SAP Fiori dans un contexte d\'avant-vente',
    icon: <Layout size={24} />,
    overview: (
      <p>Concevoir une interface utilisateur ergonomique, esthétique et fonctionnelle dans un environnement SAP, notamment avec SAP Fiori, est une compétence stratégique. Elle mobilise à la fois des connaissances techniques (framework UI5, principes MVC, composants dynamiques) et une capacité à répondre à des enjeux commerciaux, en particulier dans les phases d'avant-vente.</p>
    ),
    implementationContext: (
      <p>Dans le cadre d'une démonstration à livrer en urgence pour un client, il m'a été demandé de concevoir une maquette Fiori simulant un site existant afin d'illustrer le fonctionnement de SAP dans un contexte métier réaliste. <br></br>Ce projet, à fort enjeu stratégique, devait être livré en seulement deux jours, en parallèle d'une autre mission.</p>
    ),
    clientContext: (
      <p>Le client devait se projeter dans l'usage de SAP Fiori à travers une simulation d'interface adaptée à son activité, centrée sur le calcul de devis pour différents types de chantiers. <br></br>La qualité visuelle et la fluidité de l'expérience utilisateur étaient donc déterminantes pour orienter sa décision dans la phase d'avant-vente.</p>
    ),
    objective: (
      <p>La mission consistait à recréer l'interface de la page d'accueil du site ciblé tout en implémentant au moins deux fonctionnalités représentatives du parcours utilisateur. <br></br>Il s'agissait d'assurer une démonstration fluide, visuellement convaincante et suffisamment représentative des cas d'usage réels. Le tout devait être livré dans un délai extrêmement restreint, avec une exigence élevée sur la qualité visuelle.</p>
    ),
    challenges: (
      <p>L'enjeu principal était d'ordre stratégique. <br></br>Il fallait présenter SAP Fiori sous son meilleur jour, malgré une maîtrise encore incomplète de la technologie. Le livrable devait susciter l'adhésion du client et incarner la promesse d'une transformation digitale réussie via SAP, sans laisser entrevoir les limitations techniques du prototype.</p>
    ),
    risks: (
      <p>Le principal risque tenait à mon manque d'expérience sur SAP UI5 au moment de la mission. <br></br>Un autre point de vigilance concernait la gestion du stress et la capacité à livrer un résultat professionnel dans un contexte de forte pression. <br></br>Enfin, une tentative de démonstration trop ambitieuse aurait pu fragiliser l'ensemble du projet si certaines parties de l'interface s'étaient révélées instables ou incomplètes.</p>
    ),
    presentation: (
      <p>SAP Fiori repose sur le framework UI5, fortement inspiré de JavaScript et structuré selon le modèle MVC. L'interface est composée de "controls", des widgets que l'on assemble pour créer des vues dynamiques. <br></br>L'apprentissage de l'outil est facilité par la documentation SAP, qui propose de nombreux exemples visuels et des fragments de code exploitables directement. <br></br>Dans ce projet, j'ai structuré mon travail autour d'une modélisation rigoureuse du site d'origine, d'un travail sur l'esthétique de l'interface, puis de l'implémentation des règles de calcul métier nécessaires à la simulation.</p>
    ),
    explanation: (
      <p>Un développeur web ayant déjà pratiqué JavaScript peut rapidement s'orienter dans l'écosystème Fiori/UI5, bien que des efforts d'adaptation soient nécessaires pour comprendre les spécificités de la structure MVC imposée et le fonctionnement précis des composants SAP. <br></br>La documentation officielle joue ici un rôle clé pour guider la progression et aider à comprendre les bonnes pratiques d'assemblage, de binding et de logique applicative.</p>
    ),
    results: (
      <>
        <p>La maquette a été livrée dans les délais, sans retour négatif lors de la démonstration client. J'ai pu implémenter les fonctionnalités critiques et même améliorer certains aspects graphiques du site original, ce qui a contribué à renforcer l'impact de la démonstration. <br></br>Cette expérience m'a permis de découvrir en conditions réelles les bases de SAP UI5, tout en mettant en avant mes capacités à travailler sous pression et à livrer un résultat valorisant pour l'entreprise.</p><br></br>
        <p><strong>Maîtrise, progression et recul:</strong> Je dispose aujourd'hui d'une maîtrise opérationnelle de la conception de maquettes SAP Fiori à des fins de démonstration. Néanmoins, la logique complète du framework UI5, notamment pour ce qui touche aux intégrations avec des services back-end ou aux composants avancés, reste à approfondir. Cette compétence s'inscrit de manière stratégique dans mon profil, notamment pour des rôles de consultant ou d'ingénieur avant-vente SAP.</p><br></br>
        <p>Mon apprentissage s'est fait rapidement sous contrainte, mais sans me permettre d'explorer en profondeur toutes les possibilités offertes par la technologie. Avec le recul, je retiens qu'en contexte d'avant-vente, il est préférable de cibler quelques fonctionnalités clés et de les exécuter parfaitement plutôt que de viser une couverture large mais instable.</p><br></br>
        <p><strong>Perspectives et formation :</strong> À moyen terme, mon objectif est de pouvoir construire des applications SAP Fiori complètes, fonctionnelles et intégrées à un back-end SAP réel, en environnement de production. Pour cela, je prévois de poursuivre ma formation sur SAP UI5 avancé, notamment sur la gestion des services OData, l'architecture Gateway et les bonnes pratiques de développement Fiori côté entreprise.</p>
      </>
    )
  },
  {
    id: 'backend-development',
    title: 'Développement ABAP',
    description: 'Conception et implémentation d\'APIs robustes et de systèmes backend performants pour soutenir les applications web.',
    icon: <Database size={24} />,
    overview: (
      <p>Dans le cadre d'un projet d'intégration entre la plateforme Boomi et SAP S/4HANA, j'ai développé une BAPI spécifique nommée ZBAPI_CREATE_EMPLOYEE. Cette BAPI a pour but d'automatiser la création complète de profils employés dans le module SAP HCM, en intégration avec SAP CPI (SAP Integration Suite).</p>
    ),
    implementationContext: (
      <p>Cette mission m'a été confiée lors d'un projet d'intégration où les données RH des nouveaux collaborateurs étaient initialement saisies manuellement dans SAP. Le but était de fluidifier et fiabiliser ce processus en le rendant entièrement automatisé via un échange de données entre Boomi (source) et SAP (destination), en passant par CPI.</p>
    ),
    clientContext: (
      <p>Le client souhaitait centraliser et sécuriser la création de nouveaux employés dans SAP HCM. Les données sources étaient collectées et préparées dans Boomi, puis transmises via des iFlows CPI. Il était donc nécessaire de développer une BAPI SAP capable de consommer ces données, d'orchestrer la création des infotypes nécessaires, de générer un compte utilisateur SAP et de synchroniser les informations RH avec le Business Partner SAP.</p>
    ),
    objective: (
      <>
        <p>Permettre la création automatique de profils employés dans SAP à partir de données externes (Boomi).</p>
        <p>Alimenter tous les infotypes RH clés dans le bon ordre.</p>
        <p>Générer un compte utilisateur SAP avec mot de passe, alias et statut verrouillé par défaut.</p>
        <p>Assurer la synchronisation du Business Partner (BP) avec les données RH.</p>
        <p>Fournir un log détaillé des traitements (succès ou échecs) pour chaque employé traité.</p>
      </>
    ),
    challenges: (
      <>
        <p>Automatiser un processus métier critique pour fiabiliser la création de ressources humaines dans SAP.</p>
        <p>Assurer l'exactitude des données écrites dans les infotypes, et respecter les dépendances techniques.</p>
        <p>Créer une solution robuste, facilement intégrable dans le flux CPI, tout en étant traçable et maintenable.</p>
      </>
    ),
    risks: (
      <>
        <p>Documentation lacunaire sur certains modules fonctionnels liés aux infotypes.</p>
        <p>Risque de corruption de données RH en cas d'appel incorrect aux modules internes SAP.</p>
        <p>Complexité d'intégration avec CPI, notamment en gestion des erreurs et formatage des retours.</p>
      </>
    ),
    presentation: (
      <>
        <p><strong>Entrée et sortie de la BAPI</strong></p>
        <p>Entrée : table personnalisée ZZT_MDM_EMPLOYEE contenant les données de chaque employé.</p>
        <p>Sortie : table ZZT_MDM_EMP_RETURN listant pour chaque enregistrement le résultat du traitement, avec logs d'erreur le cas échéant.</p>
        <p><strong>2. Étapes de traitement pour chaque employé</strong></p>
        <p>Vérification d'existence dans l'infotype 0000 : déterminer si l'employé est nouveau ou déjà existant.</p>
        <p>Création des infotypes via le module HR_MAINTAIN_MASTERDATA :</p>
        <p>0000 : Action RH</p>
        <p>0001 : Affectation organisationnelle</p>
        <p>0002 : Données personnelles</p>
        <p>0006 : Adresse</p>
        <p>0007 : Temps de travail</p>
        <p>0009 : Données bancaires (si renseignées)</p>
        <p>0105 : Identifiants utilisateurs (via HR_INFOTYPE_OPERATION)</p>
        <p>Création du compte utilisateur SAP via BAPI_USER_CREATE1 : mot de passe généré, alias, verrouillage temporaire.</p>
        <p>Synchronisation avec le Business Partner via le programme /SHCM/RH_SYNC_BUPA_FROM_EMPL.</p>
        <p>Centralisation des logs pour un suivi optimal via CPI.</p>
      </>
    ),
    explanation: (
      <p>Un infotype est un conteneur structuré de données propre à SAP HCM, qui regroupe les informations RH par thématique (adresse, affectation, banque…). Pour créer un employé dans SAP, il faut les renseigner dans un ordre précis. Une BAPI (Business API) est une interface standard ou personnalisée qui permet à des systèmes externes de dialoguer avec SAP. Enfin, le Business Partner est l'entité unifiée représentant une personne dans plusieurs modules SAP (HCM, Finance, etc.). La synchronisation garantit la cohérence des données à travers tout le système.</p>
    ),
    results: (
      <>
        <p>La création de cette BAPI a nécessité une compréhension fine du fonctionnement des infotypes et du processus RH dans SAP. En raison d'une documentation limitée et de peu d'exemples pertinents, j'ai dû effectuer des tests poussés et analyser le comportement interne de modules comme HR_MAINTAIN_MASTERDATA pour adapter leur usage à la logique métier du client.</p>
        <p>Ce projet m'a permis de :</p>
        <p>Maîtriser l'enchaînement technique de création d'un employé dans SAP.</p>
        <p>Gagner en autonomie sur le développement de BAPI complexes.</p>
        <p>Mieux comprendre l'intégration CPI/SAP dans un contexte de données RH sensibles.</p>
      </>
    )
  },
  {
    id: 'full-stack-development',
    title: 'Mon référentiel de filière',
    description: '7 compétences dans mon Référentiel de filière',
    icon: <Code size={24} />,
    overview: (
      <p>Pour chaque compétence, qu'est-ce que j'applique déjà dans ma pratique actuelle ? Quels sont les points qui me satisfont ?</p>
    ),
    implementationContext: (
      <p>Au fil des années, j'ai travaillé sur des projets full-stack de diverses envergures, en prenant en charge l'ensemble du cycle de développement, depuis la conception initiale jusqu'au déploiement et à la maintenance.</p>
    ),
    clientContext: (
      <p>Collaboration avec des startups et PME ayant besoin d'une expertise technique complète pour développer rapidement leurs produits numériques avec des ressources limitées.</p>
    ),
    objective: (
      <p>Fournir des solutions web complètes et cohérentes en assurant une intégration harmonieuse entre frontend et backend, tout en optimisant l'expérience utilisateur et les performances globales.</p>
    ),
    challenges: (
      <p>Maintenir une expertise à jour dans un large éventail de technologies, gérer efficacement la complexité des interactions entre les différentes couches de l'application, et assurer la cohérence de l'architecture.</p>
    ),
    risks: (
      <p>Dispersion des compétences, difficultés à rester à la pointe dans tous les domaines, et complexité accrue dans la gestion des projets de grande envergure.</p>
    ),
    presentation: (
      <p>En tant que développeur full-stack, je maîtrise à la fois les technologies frontend (React, Vue.js) et backend (Node.js, Express, MongoDB, PostgreSQL). Je suis capable de concevoir des architectures complètes, d'implémenter des fonctionnalités de bout en bout et d'optimiser les performances à tous les niveaux.</p>
    ),
    explanation: (
      <p>Le développement full-stack combine les aspects frontend et backend de la création d'applications web. Cela permet d'avoir une vision globale du projet et de créer des solutions plus cohérentes où chaque composant s'intègre parfaitement avec les autres.</p>
    ),
    results: (
      <p>Mes projets full-stack ont permis de réduire les délais de développement de 30% grâce à une meilleure cohérence et communication entre les différentes parties du système, tout en améliorant la qualité globale et en réduisant les coûts de maintenance.</p>
    )
  }
];

// Transversal Skills
export const transversalSkills: SkillArticle[] = [
  {
    id: 'project-management',
    title: 'Entre l\'autonomie et la collaboration',
    description: 'Organisation et coordination efficace des ressources et des équipes pour atteindre les objectifs du projet.',
    icon: <Users size={24} />,
    overview: (
      <p>À travers cette section de mon portfolio, j'ai souhaité mettre en lumière une compétence transversale essentielle à mes yeux, que j'ai développée au fil de mes expériences professionnelles : celle de savoir équilibrer autonomie et recours à l'aide. Cette capacité, souvent sous-estimée, s'avère pourtant déterminante dans un environnement exigeant comme celui du développement informatique. Mon intention ici est double : d'abord, définir cette compétence avec mes propres mots, à partir de mes expériences concrètes ; ensuite, illustrer comment elle s'est progressivement affirmée au fil de projets variés, dans des contextes allant de la découverte du monde professionnel jusqu'à des environnements plus techniques et exigeants.</p>
    ),
    implementationContext: (
      <p>Cette compétence s'est développée progressivement à travers mes différentes expériences professionnelles, depuis mon premier stage jusqu'aux projets les plus complexes en entreprise.</p>
    ),
    clientContext: (
      <p>Dans un environnement professionnel où les délais sont serrés et les enjeux importants, savoir équilibrer autonomie et collaboration devient crucial pour la réussite des projets.</p>
    ),
    objective: (
      <p>Développer une capacité à juger efficacement quand travailler en autonomie et quand solliciter de l'aide, afin d'optimiser la productivité tout en maintenant la qualité du travail.</p>
    ),
    challenges: (
      <p>Apprendre à surmonter la peur de demander de l'aide tout en développant une réelle autonomie technique et décisionnelle.</p>
    ),
    risks: (
      <p>Rester bloqué trop longtemps sur un problème par excès d'autonomie, ou à l'inverse, déranger constamment les collègues par manque de confiance en soi.</p>
    ),
    presentation: (
      <>
        <p>Pour moi, l'autonomie ne consiste pas simplement à travailler seul ou sans supervision : il s'agit avant tout de savoir juger à quel moment continuer seul et à quel moment demander de l'aide. Cette lucidité est d'autant plus cruciale que, dans un cadre professionnel, le temps est compté et les enjeux sont réels. Être autonome, c'est donc aussi faire preuve de discernement : éviter de rester bloqué trop longtemps sur un problème, sans pour autant interrompre inutilement ses collègues.</p>
        <p>J'apprécie particulièrement cette forme de travail, car elle incite à se dépasser, à chercher des solutions par soi-même, tout en restant ouvert aux retours extérieurs. En entreprise, ce confort de l'autonomie est régulièrement bousculé : on doit apprendre à composer avec les délais, les priorités et les attentes d'une équipe. Mais c'est aussi dans ces moments-là que le recours à l'autre prend tout son sens. Il permet non seulement de débloquer une situation rapidement, mais aussi de découvrir d'autres manières de penser, d'analyser un problème ou d'aborder une solution.</p>
        <p>Ce double mouvement entre indépendance et collaboration développe une forme d'agilité intellectuelle précieuse dans les environnements techniques. Au fond, cette compétence s'apparente à une gestion fine du temps partagé : savoir quand persévérer seul sans perdre en efficacité, et quand solliciter une aide sans faire perdre du temps à autrui. C'est cet équilibre, parfois subtil, qui permet de devenir un professionnel efficace, autonome mais aussi pleinement intégré à une équipe.</p>
      </>
    ),
    explanation: (
      <>
        <p>Ma première prise de conscience de cette dynamique est survenue lors de mon tout premier stage en informatique. J'ai immédiatement perçu une différence marquante entre le monde scolaire et l'environnement professionnel. À l'école, l'objectif est avant tout d'apprendre, de développer des compétences personnelles, souvent dans des projets à visée pédagogique. En entreprise, on entre dans une logique de formation par l'action, avec des attentes précises et des objectifs définis par les besoins réels de l'organisation.</p>
        <p>Très vite, j'ai compris qu'il fallait savoir poser les bonnes questions pour gagner du temps, tout en sachant se débrouiller seul lorsque cela était possible. Cette première immersion m'a permis de poser les bases de mon autonomie, tout en m'ouvrant à la logique d'équipe.</p>
        <p>Par la suite, cette compétence s'est consolidée lors de ma participation au projet ATC chez Eramet. J'étais intégré à une équipe expérimentée, composée de personnes ayant déjà mené à bien des projets similaires. Contrairement à l'univers scolaire, je n'étais pas le plus expérimenté, et cela s'est avéré être une richesse. J'ai eu accès à des retours directs, à des conseils concrets, issus de l'expérience. Les échanges avec mes collègues m'ont permis d'adopter leurs réflexes, de comprendre leurs méthodes de résolution de problèmes, et surtout d'intégrer leurs raisonnements à ma propre manière de travailler.</p>
        <p>Cette forme d'apprentissage collectif a renforcé ma capacité à avancer seul tout en m'appuyant sur l'expérience des autres. C'est enfin dans le cadre du projet Fiori que j'ai pu tester de manière plus poussée cette compétence. Ce projet avait une dimension particulière : il mêlait à la fois la mise en œuvre de mes acquis et l'apprentissage d'un nouveau langage, SAP UI5, construit sur la base du JavaScript. Ayant déjà commencé à apprendre JavaScript dans un cadre académique, je me suis retrouvé pour la première fois dans une situation où je pouvais vraiment faire appel à mes compétences en autonomie.</p>
        <p>J'ai donc appris à chercher la documentation, à comprendre par moi-même le fonctionnement des composants, à tester, à itérer. Cela a représenté une phase très stimulante du projet. Cependant, l'intégration des données SAP a marqué un tournant. Ce point technique m'a confronté à une difficulté concrète que je ne pouvais pas résoudre seul dans les temps impartis. Le délai de livraison était extrêmement court — un jour et demi pour réaliser une réplique fonctionnelle d'un site client — et il devenait risqué de rester bloqué. J'ai donc fait le choix, sans hésitation, de solliciter l'aide de mon supérieur. Son retour m'a permis de débloquer rapidement la situation, tout en poursuivant le reste du développement en toute autonomie.</p>
      </>
    ),
    results: (
      <>
        <p>Avec le recul, je pense que cette compétence d'équilibre entre autonomie et collaboration est non seulement utile, mais centrale dans toute carrière informatique. Elle permet de gagner en efficacité, de mieux s'adapter aux environnements complexes, et de rester constamment en progression. Trop souvent, la peur de demander de l'aide provient d'un sentiment d'insécurité ou du désir de prouver sa valeur seul. Or, on devient parfois plus efficace — et plus professionnel — en posant une bonne question au bon moment que dans l'illusion d'un isolement productif.</p>
        <p>Aujourd'hui, je pense avoir acquis une certaine maturité sur cette question. En entreprise, j'ai développé des réflexes simples mais essentiels : avancer même lorsqu'un blocage survient, revenir plus tard avec une question précise, connaître mes échéances et structurer mes demandes. Savoir prendre des notes, structurer mes recherches, formuler clairement mes blocages fait partie de ma manière de travailler. Ce sont autant d'habitudes qui me permettent de rester autonome tout en intégrant pleinement la dynamique d'équipe.</p>
      </>
    )
  },
  {
    id: 'communication',
    title: 'L\'Adaptation comme Habitude',
    description: 'Capacité à expliquer clairement des concepts techniques complexes à des publics variés.',
    icon: <MessageSquare size={24} />,
    overview: (
      <p>J'ai choisi ici de mettre en avant une compétence qui m'est essentielle, tant sur le plan humain que professionnel : ma capacité à m'adapter. Dans mon parcours, cette qualité s'est révélée indispensable à plusieurs reprises, et elle continue de guider ma manière d'évoluer dans différents contextes. S'adapter, selon moi, c'est faire face à une situation nouvelle en apprenant à s'y habituer rapidement et efficacement. C'est un réflexe fondamental de l'apprentissage humain, présent dès l'enfance : qu'il s'agisse de marcher, de parler ou d'accomplir des gestes simples, chaque nouvelle étape implique un effort d'ajustement. Je souhaite ici explorer cette compétence dans le cadre de mon parcours, en montrant comment elle s'est manifestée dans des environnements très divers. -Une compétence ancrée dans le parcours humain et sportif - Avant même d'en faire l'expérience dans un cadre professionnel, j'ai développé cette capacité d'adaptation dans ma vie personnelle, notamment à travers le sport. Dès mon plus jeune âge, j'ai pratiqué de nombreuses disciplines : basket, football, football américain, boxe… Chaque nouveau sport impliquait une remise à zéro : comprendre les règles, assimiler les techniques, s'intégrer à une nouvelle dynamique de groupe. J'accordais une grande importance à la curiosité dans cet apprentissage. Car pour s'adapter véritablement à un environnement, il ne suffit pas de le subir : il faut s'y intéresser, l'analyser, chercher à s'y améliorer.</p>
    ),
    implementationContext: (
      <p>Cette compétence d'adaptation s'est développée à travers diverses expériences, du sport aux stages professionnels, en passant par les différents environnements techniques rencontrés.</p>
    ),
    clientContext: (
      <p>Dans un monde professionnel en constante évolution, particulièrement dans le domaine informatique, la capacité d'adaptation est devenue un atout majeur pour répondre aux besoins changeants des clients et des technologies.</p>
    ),
    objective: (
      <p>Développer une capacité d'adaptation rapide et efficace face aux nouveaux environnements, technologies et défis professionnels.</p>
    ),
    challenges: (
      <p>Maintenir une curiosité constante et une ouverture d'esprit face aux changements, tout en conservant ses acquis et son identité professionnelle.</p>
    ),
    risks: (
      <p>Risque de dispersion ou de superficialité dans l'apprentissage, difficulté à approfondir certains domaines par excès d'adaptation.</p>
    ),
    presentation: (
      <>
        <p>C'est lors de mon stage chez Manymore, en tant que technicien en migration de parc informatique, que cette compétence a pris une dimension nouvelle. Ce fut une vraie transition : je quittais le monde académique pour entrer dans un univers aux attentes précises, où la réactivité et la capacité à apprendre rapidement sont essentielles. J'ai dû m'adapter à une entreprise, à ses outils, à ses processus, mais surtout à une équipe déjà en place.</p>
        <p>Apprendre à poser les bonnes questions, à ne pas rester bloqué inutilement, à juger s'il est plus efficace de chercher par soi-même ou de solliciter l'aide d'un collègue : autant de micro-décisions qui ont affiné mon sens de l'adaptation. Cette expérience a constitué un socle fondamental pour la suite de mon parcours, en particulier dans des projets comme l'ATC, où ce jugement entre autonomie et coopération est déterminant.</p>
        <p><strong>-La veille technique : une adaptation continue -</strong> En informatique, l'adaptation prend aussi la forme d'une veille permanente. Ce domaine évolue très rapidement, et il est crucial de se tenir informé des nouveaux outils, des tendances, des mises à jour de langages ou de frameworks. C'est une exigence que je prends très au sérieux : rester à jour, c'est éviter de développer avec des outils dépassés, mais c'est aussi garder un esprit ouvert à l'innovation. Pour moi, la veille technique est plus qu'un réflexe : c'est une discipline. Elle m'a permis de m'approprier des outils plus récents tout en comprenant l'évolution des technologies sur lesquelles ils s'appuient.</p>
      </>
    ),
    explanation: (
      <>
        <p><strong>Une vision d'ensemble sur le monde informatique -</strong> Mon parcours m'a permis d'explorer une large variété de domaines informatiques. En BTS, j'ai manipulé des langages comme le C et le C++, tout en m'initiant aux bases du réseau. Ce socle généraliste m'a donné une bonne vision d'ensemble du monde informatique et m'a permis de mieux orienter mes choix professionnels. Par la suite, ma licence professionnelle et mon master m'ont offert l'opportunité de découvrir de nouveaux environnements comme le développement web et les bases de données. À chaque étape, l'adaptation était nécessaire : nouveaux langages, nouvelles logiques, nouvelles attentes.</p>
      </>
    ),
    results: (
      <>
        <p>Aujourd'hui, je suis convaincu que cette capacité d'adaptation est une condition sine qua non pour devenir un bon expert en ingénierie. Le monde informatique évolue sans cesse, et la seule manière d'y trouver sa place durablement est de s'ajuster continuellement, sans pour autant repartir de zéro à chaque nouveauté. J'ai pu constater que l'adaptation, bien qu'exigeante au départ, devient plus fluide avec l'expérience.</p>
        <p>Par exemple, mon apprentissage actuel du développement SAP Fiori ne représente pas un obstacle insurmontable. Le langage UI5, bien qu'il possède ses spécificités, repose en grande partie sur des concepts proches de ceux du JavaScript — un langage que je maîtrise déjà. Cette continuité rend l'effort d'adaptation plus rapide, plus ciblé. C'est cette compréhension — que les nouvelles technologies s'inscrivent généralement dans une lignée existante — qui me permet aujourd'hui de dire que le plus difficile est déjà derrière moi. L'essentiel, désormais, est de rester curieux, rigoureux, et prêt à ajuster mes méthodes pour continuer à progresser.</p>
      </>
    )
  },
  {
    id: 'continuous-learning',
    title: 'L\'anglais technique : Un atout indispensable pour un consultant',
    description: 'Engagement constant dans l\'acquisition de nouvelles connaissances et compétences techniques.',
    icon: <BookOpen size={24} />,
    overview: (
      <p>Aujourd'hui, la maîtrise de l'anglais est une compétence essentielle, aussi bien dans la vie quotidienne que dans le domaine du développement informatique. Elle ne se limite pas à une simple connaissance linguistique : elle conditionne l'accès à l'information, la capacité à collaborer et l'évolution dans un environnement de plus en plus globalisé. L'anglais dans le développement informatique - Dans mon métier de développeur, l'anglais est omniprésent. C'est la langue des langages de programmation, mais aussi celle des ressources, des documentations, des tutoriels et de la veille technologique. La plupart des innovations majeures en informatique, notamment dans des domaines comme l'intelligence artificielle, émergent dans des environnements anglophones. Pour rester à jour, il est donc indispensable de suivre les évolutions du secteur en lisant des articles, en explorant des repositories ou en consultant des forums, le tout en anglais. Un développeur qui n'a pas accès à cette information prend le risque d'utiliser des technologies obsolètes ou de ne pas saisir les opportunités offertes par les nouvelles tendances. Même dans un langage comme l'ABAP, pourtant spécifique à SAP, la compréhension de l'anglais permet de lire, comprendre et structurer un code clair et réutilisable. Par ailleurs, le respect des bonnes pratiques en développement implique de coder en anglais, notamment pour nommer les variables, les fonctions ou les objets, car le code est souvent amené à être lu, repris ou maintenu par d'autres développeurs à l'international. C'est également un atout personnel. Être à l'aise avec l'anglais facilite la lecture de code existant et permet de travailler efficacement dans une équipe multiculturelle. Cela renforce la fluidité et la compréhension mutuelle au sein des projets collaboratifs.</p>
    ),
    implementationContext: (
      <p>L'anglais technique s'est imposé naturellement dans mon parcours professionnel, devenant un outil quotidien pour la recherche, la documentation et la collaboration internationale.</p>
    ),
    clientContext: (
      <p>Dans un environnement professionnel internationalisé, la maîtrise de l'anglais technique devient un facteur différenciant pour évoluer vers des rôles de consultant et participer à des projets d'envergure mondiale.</p>
    ),
    objective: (
      <p>Maîtriser l'anglais technique pour accéder aux ressources les plus récentes, collaborer efficacement dans un contexte international et évoluer vers des responsabilités de consultant.</p>
    ),
    challenges: (
      <p>Maintenir un niveau d'anglais technique élevé tout en gérant le stress des situations professionnelles importantes en langue étrangère.</p>
    ),
    risks: (
      <p>Sous-estimation de ses propres compétences linguistiques pouvant limiter les opportunités professionnelles, ou à l'inverse, surestimation menant à des situations difficiles.</p>
    ),
    presentation: (
      <>
        <p>Au-delà de l'aspect technique, la maîtrise de l'anglais à l'écrit comme à l'oral me permet de participer à des projets d'envergure internationale. Dans une ESN, cette compétence devient un réel facteur différenciant. Elle permet de ne pas être cantonné à un rôle d'exécutant, mais d'évoluer en tant que consultant. Un consultant ne se contente pas de mettre en œuvre des solutions : il participe activement à leur conception, interagit avec des clients étrangers et contribue aux décisions stratégiques du projet.</p>
        <p>Ce positionnement nécessite une confiance mutuelle entre le consultant et l'entreprise. La capacité à s'exprimer et à comprendre les enjeux dans une autre langue devient alors un véritable levier de progression dans une carrière.</p>
      </>
    ),
    explanation: (
      <>
        <p>Même si je n'ai pas encore eu l'occasion de travailler entièrement sur un projet international, j'ai déjà été confronté à des situations exigeantes en anglais. Je me souviens notamment d'une réunion qui a eu lieu seulement deux jours après mon arrivée sur un nouveau projet. En phase d'avant-vente, j'ai été invité à une réunion client avec mon chef de projet et un interlocuteur allemand. À ma grande surprise, cette réunion s'est tenue intégralement en anglais, et j'ai dû présenter mon travail devant le client, sans préparation préalable.</p>
        <p>Bien que mon niveau d'anglais soit bon, cette situation inédite a été source de stress. À la question : "Do you speak English well?", j'ai instinctivement répondu "Just a little", par modestie, alors que j'aurais pu affirmer davantage mes compétences. Avec du recul, je sais que j'aurais dû me montrer plus affirmé, car assumer ce rôle, même dans une langue étrangère, fait partie intégrante du métier.</p>
        <p>Cette expérience a été formatrice. Elle m'a poussé à mieux gérer mon stress et à me confronter plus régulièrement à l'anglais, notamment lors d'un voyage aux États-Unis l'été suivant. Aujourd'hui, je me sens plus à l'aise à l'idée de participer à un entretien ou de m'investir pleinement dans un projet en anglais. Le stress peut toujours surgir, mais je le perçois désormais comme une occasion de progresser plutôt qu'un frein.</p>
        <p><strong>L'anglais, clé de la recherche technique dans SAP -</strong> L'anglais joue également un rôle déterminant dans mon travail avec SAP. Le langage ABAP, propre à cet environnement, ne bénéficie pas toujours des mêmes ressources ouvertes que d'autres langages. Par exemple, il est moins représenté sur des plateformes comme GitHub, ce qui limite l'accès à des solutions directement générées par des outils comme ChatGPT. Pour trouver des réponses pertinentes, il faut donc adopter une démarche plus méthodique, s'appuyer sur des forums spécialisés — souvent anglophones — et faire preuve d'une certaine rigueur dans la formulation de ses recherches.</p>
        <p>Avec le temps, ce travail de documentation me permet d'enrichir mon vocabulaire technique. Plus je progresse, plus je parviens à identifier précisément mes problématiques, ce qui rend mes recherches plus efficaces et plus ciblées. C'est un cercle vertueux dans lequel la langue anglaise est un maillon indispensable.</p>
      </>
    ),
    results: (
      <p>L'anglais s'est imposé comme un pilier de mon développement professionnel. Il ne s'agit pas uniquement de lire ou de comprendre, mais de pouvoir contribuer, collaborer et s'exprimer avec aisance dans un contexte international. Dans l'univers du développement informatique et, plus particulièrement, dans l'écosystème SAP, cette langue devient un outil aussi essentiel que n'importe quel langage de programmation. Elle permet d'évoluer, de rester à jour, d'ouvrir des portes et de jouer un rôle actif dans la réussite des projets. En définitive, parler anglais ne relève plus du choix : c'est une composante structurelle du métier de développeur et de consultant.</p>
    )
  }
];

// Projects/Achievements
export const achievements: ProjectArticle[] = [
  {
    id: 'e-commerce-platform',
    title: 'Premiers pas avec SAP CPI',
    description: 'Comprendre l\'intégration cloud de SAP',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'mapping de données',
    pitch: 'Première réalisation sur le middleware SAP CPI',
    overview: (
      <p>Cette partie va parler de ma première réalisation sur le middleware SAP CPI. Ce travail est particulièrement intéressant car c'est suite à ce dernier que j'ai découvert que c'est cette technologie dans laquelle je veux continuer de travailler.</p>
    ),
    implementationContext: (
      <p>C'est en deuxième année que j'ai pu enfin avoir eu le droit de commencer un projet en SAP Integration Suite (Cloud Platform Integration). J'avais eu le droit à une formation professionnelle de 1 jour dans mon entreprise. Cette formation n'avait pu que me présenter ce qu'était cette technologie sans pour autant proposer de réalisation. Un jour de formation est à mon goût est vraiment trop peu.</p>
    ),
    clientContext: (
      <p>SOCOTEC est une entreprise spécialisée dans le contrôle technique, l'inspection, la certification et la gestion des risques pour garantir la sécurité et la conformité des bâtiments, infrastructures et installations industrielles. L'entreprise souhaite transposer ses employés de leur environnement actuel vers leur système SAP S/4HANA.</p>
    ),
    objective: (
      <p>L'objectif ici est donc de recevoir des informations concernant les employés de SOCOTEC et suite à ces informations créer un profil employé sur leur environnement S/4HANA.</p>
    ),
    challenges: (
      <p>Le défi majeur de ce projet réside dans la fiabilité et l'exhaustivité de la transmission des données : Aucune perte de données ne doit être tolérée lors de la migration. En cas d'échec, le système doit être capable d'envoyer un message d'erreur clair et détaillé facilitant la compréhension du problème.</p>
    ),
    risks: (
      <p>L'intégration des données ne devra pas comporter d'erreur de mapping (comme une mauvaise correspondance entre les champs des deux systèmes) ou ne devra pas comporter de réutilisation de données déjà existantes sur le système S/4HANA.</p>
    ),
    presentation: (
      <p>On doit créer des employés (leur créer des identifiants pour se connecter, des entrées de données correspondant à leur noms, prénom, adresse etc…) donc ce projet a pour sujet le module de ressources humaines de SAP. J'ai été accompagné pendant tout le long de la réalisation par mon chef de projet, c'est également cette personne qui m'a permis de m'introduire proprement à Integration Suite.</p>
    ),
    explanation: (
      <>
        <p>SAP Integration Suite (anciennement appelée SAP Cloud Platform Integration – CPI) est une plateforme de SAP concentré sur l'intégration cloud. Elle permet de connecter différents environnement ou système dans le but de maintenir les données des environnement qu'ils soient installés localement ou en cloud. On verra par l'exemple ci-dessous une des utilisations de cette technologie.</p>
        <p>Comme indiqué sur le schéma ci-dessus, intégration suite sert à connecter les technologies de Boomi (une autre plateforme d'intégration) d'où provient les données des employés à créer dans S/4 HANA. Le flux de CPI map donc les données reçues afin qu'elles correspondent à l'environnement S/4HANA, puis ce dernier envoie une réponse à boomi en cas de succès ou d'erreur avec un message détaillé.</p>
        <p>Je gère donc un flux de données, de leurs réception jusqu'au message de retour. Suite à la manipulation des données pour qu'elles soient conformes à S/4HANA, je déclenche un appel de fonction qui va lancer de façon automatique la création d'un employée sur S/4HANA. Je dois coder cette fonction. C'est pourquoi ce travail est intéressant, je dois également coder en ABAP pour faire fonctionner ce flux. Je dois donc comprendre le contexte de création des employés dans S/4 et le coder en ABAP.</p>
      </>
    ),
    results: (
      <p>Je suis à travers ce flux l'évolution totale des données et de ce qu'on en fait. J'ai grâce à ce travail pu mieux comprendre les mécaniques et les fonctionnements du module de RH de SAP. J'ai adoré jouer avec les données, de manipuler ces dernières avec une interface SAP qui (pour une fois) est satisfaisante à utiliser, simple et intuitive. Cette réalisation comme vu précédemment a pu également compléter mon apprentissage dans un nouveau module SAP (RH) et j'ai pu apprendre de nouvelles choses en ABAP.</p>
    )
  },
  {
    id: 'SAP ABAP',
    title: 'Naviguer dans l\'univers SAP',
    description: 'Mon Projet d\'Initiation',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'ABAP',
    pitch: 'Première réalisation chez SAP',
    overview: (
      <p>Cette première section de mon portfolio a pour objectif de mettre en lumière à la fois une compétence technique et humaine, à travers la réalisation du projet ATC mené au cours de mon stage chez Augusta Reeves. Ce projet portait sur la migration d'un système SAP ECC vers S/4HANA pour le client Eramet, avec pour mission principale l'adaptation de programmes ABAP à la nouvelle version de SAP.</p>
    ),
    implementationContext: (
      <p>Dans le cadre de ma 3e année de Licence Professionnelle à l'IUT de Paris Cité, j'ai effectué un stage du 2 mai au 31 juillet 2023 au sein de la société Augusta Reeves, PME spécialisée dans l'intégration de solutions SAP. J'étais chargé de développer, corriger et améliorer des programmes ABAP, un langage que je découvrais pour la première fois.</p>
    ),
    clientContext: (
      <p>Le client concerné, Eramet, utilisait la version ECC (ERP Central Component) de SAP, datant de 2006. Cette version, maintenue par SAP jusqu'en 2030, devenait progressivement obsolète et ne permettait pas de tirer parti des innovations modernes du système SAP, notamment l'ouverture au développement Web via Fiori. Eramet souhaitait donc migrer vers S/4HANA, une version moderne offrant de meilleures performances, une meilleure ergonomie et une plus grande flexibilité (on-premise, cloud ou hybride).</p>
    ),
    objective: (
      <p>Notre objectif était de rendre le code des programmes ABAP compatibles avec la nouvelle version S/4HANA, en traitant l'ensemble des erreurs relevées par l'outil ATC (ABAP Test Cockpit). Cette tâche impliquait de corriger les incompatibilités de syntaxe et d'architecture logicielle induites par la migration.</p>
    ),
    challenges: (
      <>
        <p>Fiabilité : maintenir la cohérence des programmes déjà fonctionnels.</p>
        <p>Modernisation : exploiter les nouveaux standards (CDS Views, nouvelle syntaxe ABAP).</p>
        <p>Documentation : savoir interpréter les Notes SAP, comprendre les impacts techniques.</p>
        <p>Transmission : garantir la maintenabilité du code pour les futures équipes.</p>
      </>
    ),
    risks: (
      <>
        <p>Altération du fonctionnement existant : modifier un code déjà opérationnel sans casser sa logique.</p>
        <p>Perte de temps en autoformation : nécessité de poser les bonnes questions et d'être encadré efficacement.</p>
        <p>Complexité technique : adaptation à une base de code vaste, hétérogène, et parfois mal documentée.</p>
      </>
    ),
    presentation: (
      <p>Le projet ATC (ABAP Test Cockpit) consistait à analyser les erreurs générées par l'outil de test suite à la migration vers S/4HANA. Ces erreurs couvraient des points techniques variés : utilisation de tables obsolètes (ex. KONV remplacée par V_KONV), nécessité d'adopter la nouvelle syntaxe ABAP, erreurs d'affectation de types, etc. Le cœur de notre travail résidait dans la compréhension fine du code existant pour évaluer si une correction était nécessaire, ou si le programme pouvait fonctionner tel quel via l'ajout de pragmas.</p>
    ),
    explanation: (
      <p>Prenons un exemple simple : un champ de 52 caractères est affecté à une structure complète. Ce type de message pourrait être interprété comme une erreur, alors qu'en réalité, le total des longueurs des champs de la structure correspond bien à 52 caractères. Autre exemple : certaines anciennes tables SAP sont devenues obsolètes et remplacées par des vues CDS. Cela nécessite non seulement un changement de source de données, mais aussi l'utilisation d'une nouvelle syntaxe.</p>
    ),
    results: (
      <>
        <p>À la fin du stage, l'ensemble des erreurs détectées par l'ATC ont été traitées par notre équipe de huit personnes.</p>
        <p><strong>Compétences humaines:</strong> Ce projet m'a permis de développer ma capacité à collaborer, à poser les bonnes questions et à savoir quand demander de l'aide, compétence essentielle dans un environnement aussi vaste que SAP.</p>
        <p><strong>Compétences techniques:</strong> J'ai acquis une solide base en ABAP, appris à naviguer dans l'écosystème SAP, et compris les enjeux de la migration vers S/4HANA. Ce projet a constitué une première immersion complète dans l'univers SAP, avec une courbe d\'apprentissage enrichissante.</p>
      </>
    )
  },
  {
    id: 'fintech-app',
    title: 'PLAN DE 2 RÉALISATIONS',
    description: 'Développement d\'une application mobile permettant aux utilisateurs de gérer leurs finances personnelles, suivre leurs dépenses et recevoir des conseils financiers personnalisés.',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Gestion',
    pitch: 'Une application mobile innovante qui rend la gestion financière accessible et engageante pour tous.',
    overview: (
      <p>Ce projet illustre une situation complexe mêlant compétences techniques, gestion du stress, adaptation rapide et transmission de savoir. En trois jours, j'ai dû gérer deux tâches importantes, former un collègue dans l'urgence et livrer une maquette SAP Fiori pour une démonstration client.</p>
    ),
    implementationContext: (
      <p>Cette mission s'est déroulée dans un contexte tendu : j'ai été convoqué pour une tâche à livrer sous deux jours, mais en parallèle, un problème de staffing m'a fait hériter d'une seconde mission également urgente. Deux managers, deux projets différents, mais une seule date de rendu. Pour répondre à cette double exigence, j'ai jonglé entre les deux projets tout en formant un collègue pour déléguer une partie de la charge.</p>
    ),
    clientContext: (
      <p>Le premier projet concernait un client en phase d'avant-vente, à qui nous devions présenter une maquette attractive d'un site SAP Fiori simulant leur futur environnement. Il s'agissait de convaincre, visuellement et fonctionnellement, de la pertinence de la solution SAP. Le second projet portait sur un autre client pour lequel il fallait copier des éléments d'un environnement SAP qualité vers la production (notamment les Partner Profiles), ce qui impliquait une forte vigilance technique.</p>
    ),
    objective: (
      <>
        <p>Pour la maquette Fiori : livrer en moins de 1,5 jour une maquette esthétique et fidèle au site d'origine, en assurant deux fonctionnalités interactives (ex. calculs de devis par type de chantier).</p>
        <p>Pour la seconde tâche : réaliser une copie à l'identique, sans perte de données, entre deux environnements SAP, et former un collègue à la manipuler en production.</p>
      </>
    ),
    challenges: (
      <>
        <p>Réussir une démonstration convaincante dans un contexte d'avant-vente. Une maquette peu soignée aurait pu compromettre la signature du client.</p>
        <p>Respecter les délais sur deux projets critiques.</p>
        <p>Transmettre clairement le savoir technique à un collègue sur une opération sensible, en un temps très court.</p>
      </>
    ),
    risks: (
      <>
        <p>Manque de maîtrise complète de la technologie Fiori, car encore en phase d'apprentissage.</p>
        <p>Formation incomplète ou mal structurée de mon collègue, pouvant entraîner des erreurs en production.</p>
        <p>Stress lié au temps, à la pression croisée des deux managers, et à la responsabilité directe sur deux livrables simultanés.</p>
      </>
    ),
    presentation: (
      <>
        <p><strong>Mission 1 : Maquette SAP Fiori</strong></p>
        <p>- Étude du site web à reproduire</p>
        <p>- Modélisation de l'interface dans SAP Fiori</p>
        <p>- Amélioration visuelle pour rendre la maquette plus attractive que le modèle original</p>
        <p>- Développement de deux fonctionnalités interactives</p>
        <p><strong>Mission 2 : Copie d'environnements SAP</strong></p>
        <p>- Identification de la bonne transaction pour répliquer les Partner Profiles</p>
        <p>- Exécution de la copie vers la production</p>
        <p>- Formation express de mon collègue à cette procédure</p>
        <p>Cette deuxième mission m'a mis sous pression : c'était ma première fois en tant que "formateur", avec la nécessité de ne rien omettre, sous peine d'erreurs graves.</p>
      </>
    ),
    explanation: (
      <p>Une maquette Fiori est une simulation visuelle interactive d'un site métier hébergé dans SAP. Dans le cadre d'une avant-vente, elle doit refléter le plus fidèlement possible l'environnement final pour que le client se projette. Les Partner Profiles en SAP sont des objets critiques liés à l'échange de données inter-systèmes ; leur copie en production nécessite précision et rigueur, car une erreur peut bloquer des flux métiers.</p>
    ),
    results: (
      <>
        <p>J'ai assisté à la présentation client où j'ai dû guider mon collègue afin qu'il ne montre que les fonctionnalités finalisées. Bien que je n'aie pas reçu de retour formel, aucun problème n'a été signalé — mission réussie. Quant à la seconde tâche, elle a été correctement exécutée par mon collègue après ma formation, preuve que le transfert de compétence a été efficace.</p>
        <p>Cette expérience m'a motivé à approfondir SAP Fiori, technologie prometteuse que j'ai à peine eu le temps d'explorer. Le stress de la situation a été formateur, notamment sur la gestion des priorités et la transmission claire d'un savoir. En revanche, la seconde tâche, bien que importante, m'a semblé peu valorisante techniquement. Néanmoins, elle m'a permis de prendre conscience de la responsabilité associée à la formation, même dans l'urgence.</p>
      </>
    )
  }
];