import React from 'react';
import './App.css';

//installed dependencies
// import { Route } from 'react-router-dom'

//components
import WelcomePage from './components/welcomepage/WelcomePage';
import About from './components/about/AboutPage';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="container">
      {/* <Route exact path='/' component={WelcomePage} /> */}
      <WelcomePage />
      <div>
        <Nav />
      </div>
      {/* <Route path='/about' component={About} /> */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
