import React from 'react'
import { Route  } from "react-router-dom";
import Home from './home/Home'
import Nav from './nav/Nav';
import About from './about/About';
import Projects from './projects/Projects';
import ContactPage from './contact/ContactPage';
import SignIn from './sign-in/SignIn';
import Footer from './footer/Footer';



//Component to hold all of the exported components
export const Container = () => {
    return(
        <>
      <Route exact path={`/`} component={Home} />
      <Nav />
      <Route exact path={`/about`} component={About} />
      <Route exact path={`/projects`} component={Projects} />
      <Route exact path={`/contact`} component={ContactPage} />
      <Route exact path={`/sign-in`} component={SignIn} />
        <Footer />
        </>
    )
}


