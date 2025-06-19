import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Heart, ArrowRight } from 'lucide-react';
import { SkillArticle } from '../types';

interface SkillsProps {
  technicalSkills: SkillArticle[];
  transversalSkills: SkillArticle[];
}

const Skills: React.FC<SkillsProps> = ({ technicalSkills, transversalSkills }) => {
  const [activeTab, setActiveTab] = useState<'technical' | 'transversal'>('technical');

  return (
    <div className="bg-white dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
            Mes Compétences
          </h2>
          <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Expertise & Savoir-faire
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes compétences techniques et transversales acquises au fil de mes expériences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('technical')}
              className={`flex items-center px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-300 ${
                activeTab === 'technical'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              id="tech-skills"
            >
              <Code size={18} className="mr-2" />
              Compétences Techniques
            </button>
            <button
              onClick={() => setActiveTab('transversal')}
              className={`flex items-center px-4 py-2 rounded-md text-sm md:text-base transition-colors duration-300 ${
                activeTab === 'transversal'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              id="soft-skills"
            >
              <Heart size={18} className="mr-2" />
              Compétences Humaines
            </button>
          </div>
        </div>

        {/* Technical Skills */}
        <div className={`${activeTab === 'technical' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skill) => (
              <div 
                key={skill.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-600 group"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                    <span className="text-blue-600 dark:text-blue-400">
                      {skill.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {skill.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                    {skill.description}
                  </p>
                  <Link 
                    to={`/skills/technical/${skill.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
                  >
                    En savoir plus
                    <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transversal Skills */}
        <div className={`${activeTab === 'transversal' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transversalSkills.map((skill) => (
              <div 
                key={skill.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-600 group"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center mb-4">
                    <span className="text-teal-600 dark:text-teal-400">
                      {skill.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {skill.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                    {skill.description}
                  </p>
                  <Link 
                    to={`/skills/transversal/${skill.id}`}
                    className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium group-hover:underline"
                  >
                    En savoir plus
                    <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;