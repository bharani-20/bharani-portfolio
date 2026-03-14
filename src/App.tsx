import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profileData';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary noise-bg relative">
      {/* Global background grid */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />

      <Navbar name={profileData.name} />

      <main className="relative z-10">
        <section id="home">
          <Hero data={profileData} />
        </section>

        <section id="about">
          <About data={profileData} />
        </section>

        <section id="skills">
          <Skills skills={profileData.skills} />
        </section>

        <section id="projects">
          <Projects projects={profileData.projects} />
        </section>

        <section id="contact">
          <Contact data={profileData} />
        </section>
      </main>

      <Footer data={profileData} />
    </div>
  );
};


export default App;
