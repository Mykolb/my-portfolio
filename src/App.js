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

function App() {
  return (
    <div className="container">
      {/* <Route exact path='/' component={WelcomePage} /> */}
      <WelcomePage />
      <div>
        <Nav />
      </div>
      {/* <Route path='/about' component={About} /> */}
      <AboutHeader />
      <ProjectsHeader />
      <ContactHeader />
      <ContactPage />
    </div>
  );
}

export default App;
