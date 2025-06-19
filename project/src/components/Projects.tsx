import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { ProjectArticle } from '../types';

interface ProjectsProps {
  achievements: ProjectArticle[];
}

const Projects: React.FC<ProjectsProps> = ({ achievements }) => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
            Mes Réalisations
          </h2>
          <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Projets Récents
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Une sélection de mes projets les plus significatifs et des défis que j'ai relevés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-xs font-semibold bg-orange-500 text-white px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm italic">
                  "{project.pitch}"
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
                >
                  Voir le projet
                  <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;