import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

// Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import ScrollToTop from './components/ScrollToTop';

// Data
import { technicalSkills, transversalSkills, achievements } from './data/content';

function MainContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
        <About />
        <Timeline />
        <Skills 
          technicalSkills={technicalSkills} 
          transversalSkills={transversalSkills} 
        />
        <Projects achievements={achievements} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <button 
            onClick={toggleDarkMode}
            className="fixed right-4 top-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainContent />} />
            
            {/* Technical skills routes */}
            {technicalSkills.map(skill => (
              <Route 
                key={`tech-${skill.id}`}
                path={`/skills/technical/${skill.id}`} 
                element={<ArticlePage article={skill} category="Compétence Technique" />} 
              />
            ))}

            {/* Transversal skills routes */}
            {transversalSkills.map(skill => (
              <Route 
                key={`trans-${skill.id}`}
                path={`/skills/transversal/${skill.id}`} 
                element={<ArticlePage article={skill} category="Compétence Transversale" />} 
              />
            ))}

            {/* Achievement routes */}
            {achievements.map(achievement => (
              <Route 
                key={`proj-${achievement.id}`}
                path={`/projects/${achievement.id}`} 
                element={<ArticlePage article={achievement} category="Réalisation" />} 
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;