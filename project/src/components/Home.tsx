import React from 'react';
import { ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="block">Bonjour, je suis</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
              Antoine TURELLO
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
            Développeur web passionné par la création d'expériences numériques élégantes et fonctionnelles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 font-medium"
              onClick={scrollToNext}
            >
              Découvrir
            </button>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 transition-colors duration-300 font-medium"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
        </button>
      </div>
    </section>
  );
};

export default Home;