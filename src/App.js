import React from 'react';
import './App.css';

//installed dependencies
// import { Route } from 'react-router-dom'

//components
import WelcomePage from './components/welcomepage/WelcomePage';
import AboutHeader from './components/about/AboutHeader'
import ProfilePic from './components/about/ProfilePic'
import Nav from './components/nav/Nav';
// import ProjectsHeader from './components/projects/ProjectsHeader';
import Projects from './components/projects/Projects';
import ContactPage from './components/contact/ContactPage';
import Footer from './components/footer/Footer';




function App() {
  return (
    <div className="container">
      <WelcomePage />
      <div>
        <Nav />
      </div>
      <AboutHeader />
      <ProfilePic />
      {/* <ProjectsHeader /> */}
      <Projects />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
