import React from 'react';
import { Element } from 'react-scroll';
import About from './About';
import ProjectsOverview from './ProjectsOverview';
import Contact from './Contact';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Home = () => {

    const location = useLocation();
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
      document.fonts.ready.then(() => {
          setFontsLoaded(true);
      });

      if (fontsLoaded) {
        if (location.hash === '#about') {
          scroller.scrollTo('about', { smooth: true, duration: 500 });
        } else if (location.hash === '#contact') {
          scroller.scrollTo('contact', { smooth: true, duration: 500 });
        }
      }

      }, [location, fontsLoaded]);

      if (!fontsLoaded) {
        return (
          <p id="loading">
            Loading ...
            <br />
            Please wait ...
          </p>

        );
    }


    return (
        <>
        <Element name="about">
            <About />
        </Element>

        <ProjectsOverview />

        <Element name="contact">
            <Contact />
        </Element>
        </>
    );
};

export default Home;
