import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import about from '../general.module.css';
import mariam from '../images/makeupMariam.jpeg'

const About = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const aboutRef = useNav('About');

	return (
		<div ref={aboutRef} id='aboutContainer'>
			<div className={about.about_container}>
      <div className={about.about_left}>
        <h1 style={{marginBottom:'15px'}}>About Me</h1>
        <h3 >- Hello again- </h3>
        <h3>
          I am Afolabi Opeyemi Mariam.
          A product manager and software developer passionate about software products and focused on building innovative solution-centric applications.
          </h3><h3>
          I am focused on frontend technology and currently building products using reactJs and Vanilla JavaScript. 
          I convert Figma files to react App and ensure they have cross-browser compatibility, accessibility, and responsiveness.
        </h3><h3>
          As a product manager, I have a superpower of empathy and this helps me build products that are solution and customer-centric. 
        </h3><h3>
          I love meeting people, traveling, surfing the internet and engaging meaningful conversations.
        </h3>
      </div>
      <div className={about.about_right}>
        <img src={mariam} alt='Dev Mariam' width='450px' height='500px' style={{borderRadius: '20px'}} />
      </div>
    </div>
    {/* <div>
        <h2>
          Some of the tools in my toolkit are but not limited to: HTML, CSS, JavaScript/TypeScript, React, Next.js, Redux, TailWind, StyledComponent, CSS modules, Material UI, Git, Command line and Vercel.
        </h2>
    </div> */}
		</div>
	);
};

export default About;
