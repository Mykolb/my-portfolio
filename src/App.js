import React from 'react';
import './App.css';

//installed dependencies
// import { Route } from 'react-router-dom'

//components
import WelcomePage from './components/welcomepage/WelcomePage';
import AboutHeader from './components/about/AboutHeader';
import Nav from './components/nav/Nav';
import ProjectsHeader from './components/projects/ProjectsHeader';
import ContactHeader from './components/contact/ContactHeader';
import ContactPage from './components/contact/ContactPage'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'



function App() {
  return (
    <div className="container">
      <WelcomePage />
      <div>
        <Nav />
      </div>
      <AboutHeader />
      <ProjectsHeader />
      <Projects />
      <ContactHeader />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
