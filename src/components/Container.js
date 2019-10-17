import React from 'react'
import Design from './welcomepage/Design'
import Nav from './nav/Nav';
import ProfilePic from './about/ProfilePic';
import Projects from './projects/Projects';
import ContactPage from './contact/ContactPage';
import Footer from './footer/Footer';


//Component to hold all of the exported components
export const Container = () => {
    return(
        <div>
        <Design />
        <Nav />
        <ProfilePic />
        <Projects />
        <ContactPage />
        <Footer />
        </div>
    )
}


