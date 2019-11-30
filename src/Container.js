import React from 'react'
import Home from './home/Home'
import Nav from './nav/Nav';
import About from './about/About';
import Projects from './projects/Projects';
import ContactPage from './contact/ContactPage';
import Footer from './footer/Footer';


//Component to hold all of the exported components
export const Container = () => {
    return(
        <div>
        <Home />
        <Nav />
        <About />
        <Projects />
        <ContactPage />
        <Footer />
        </div>
    )
}


