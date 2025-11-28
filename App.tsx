import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import { WaveBackground } from './components/Visuals';
import { Home } from './pages/Home';
import { SoundLab } from './pages/SoundLab';
import { About, Research, Articles, Travel, Simulation, Resources, Contact } from './pages/GeneralPages';
import { Page, Language } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isDark, setIsDark] = useState(true);
  const [currentLang, setCurrentLang] = useState<Language>('EN');

  // Update body class for Tailwind dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const renderPage = () => {
    switch (activePage) {
      case Page.HOME: return <Home setPage={setActivePage} lang={currentLang} />;
      case Page.ABOUT: return <About lang={currentLang} />;
      case Page.RESEARCH: return <Research lang={currentLang} />;
      case Page.ARTICLES: return <Articles lang={currentLang} />;
      case Page.SOUND: return <SoundLab lang={currentLang} />;
      case Page.TRAVEL: return <Travel lang={currentLang} />;
      case Page.SIMULATION: return <Simulation lang={currentLang} />;
      case Page.RESOURCES: return <Resources lang={currentLang} />;
      case Page.CONTACT: return <Contact lang={currentLang} />;
      default: return <Home setPage={setActivePage} lang={currentLang} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? 'dark' : ''}`}>
      
      {/* Dynamic Background */}
      <WaveBackground intensity={activePage === Page.SOUND ? 2 : 0.5} />
      
      <Navbar 
        activePage={activePage} 
        setPage={setActivePage} 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        currentLang={currentLang}
        setLang={setCurrentLang}
      />

      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;