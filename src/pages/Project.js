import React from 'react';
import { useNav } from '../customHooks/useNav';
import healthxp from '../images/healthxp.png';
import aphro from '../images/aphropagereact.png';
import dashboard from '../images/DASHBID.png';
import project from '../general.module.css';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const projectRef = useNav('Project');

	return (
		<div ref={projectRef} id='projectContainer' className={project.project_container}>
		
      <h1 className={project.project_title}>My Projects</h1>
      <ProjectCard
        img={healthxp}
        
        title='DATING APP'
        info='Ticketify is a user-friendly mobile app that allows commuters to view available buses at any terminal, Make a reservation, ticket purchases on the go and management of BRT cards.'
        livelink='https://healthxp-web.vercel.app/'
        codelink='https://harriet-osarumen-portfolio.netlify.app/'
        />
      <ProjectCard
        img={aphro}
        title='DATING APP'
        info='Ticketify is a user-friendly mobile app that allows commuters to view available buses at any terminal, Make a reservation, ticket purchases on the go and management of BRT cards.'
        livelink='https://www.devchuck.me/'
        codelink='https://harriet-osarumen-portfolio.netlify.app/'
        />
      <ProjectCard
        img={dashboard}
        title='DATING APP'
        info='Ticketify is a user-friendly mobile app that allows commuters to view available buses at any terminal, Make a reservation, ticket purchases on the go and management of BRT cards.'
        livelink='https://www.devchuck.me/'
        codelink='https://harriet-osarumen-portfolio.netlify.app/'
        />
		</div>
	);
};

export default Project;