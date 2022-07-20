import React from 'react';
import { useNav } from '../customHooks/useNav';
// import './Page.css';
import opeyemi from '../images/plainMariam.jpeg';
import home from '../general.module.css';

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');

	return (
		<div ref={homeRef} id='homeContainer' className={home.home_container}>
		
        <div className={home.home_first_container}>
            <img src={opeyemi} alt='' width='300px' height='300px' style={{borderRadius: '30%'}} />
        </div>
        <div className={home.home_second_container}>
            <h1>
              Hello World 👋, I am Afolabi Opeyemi,
            </h1>
            <h2> a Front-end Developer from Lagos, Nigeria. </h2>
            <div  className={home.home_btn_container}>
                <a target="_blank" rel="noreferrer noopener" href="/media/DEV AFOLABI O. M..pdf" >
                  <button className={home.home_btn}>Resume</button>
                </a>
                <div  className={home.home_spacer}></div>
              <a href="mailto:opeyemi.dev@gmail.com">
                <button className={home.home_btn}>Contact</button>
              </a>
            </div>
        </div>
		</div>
	);
};

export default Home;
