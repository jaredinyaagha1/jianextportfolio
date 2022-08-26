import React from 'react';
import Home from '../../../pages/Home/index';
import About from '../../../pages/About/index';
import Projects from '../../../pages/Projects/index';
import Contact from '../../../pages/Contact/index'
import { Card } from 'react-bootstrap';

function ViewCard() {

    return(
        <div>
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        {/* <Services /> */}
        <Contact id="contact" />
        </div>
    )
}

export default ViewCard;