import React from 'react';
import { Home, About, Contact } from './';
import Project from './Project';
import home from '../general.module.css';
import Socials from '../components/Socials';

const Main = () => (
	<main className={home.container}>
		<Home />
		<About />
		<Project />
		<Contact />
		<Socials />
	</main>
);

export default Main;
