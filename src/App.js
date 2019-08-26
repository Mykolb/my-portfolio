import React from 'react';
import './App.css';

//installed dependencies
import { Route } from 'react-router-dom'

//components
import WelcomePage from './components/welcomepage/WelcomePage';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="container">
      {/* routes */}
      <Route exact path='/' component={WelcomePage} />
      <div>
        <Nav />
      </div>
    </div>
  );
}

export default App;
