import React from 'react';
import { useNav } from '../customHooks/useNav';
// import './Page.css';
import contact from '../general.module.css';

const Contact = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
		<div className={contact.contact_container}>
			<div>
				<h1> looking to build a team?</h1>
			</div>
			<div className={contact.contact_unflex}>
				<h2>Send a message and </h2>
				<h1>
					<a href="mailto:opeyemi.dev@gmail.com">lets talk</a>
				</h1>
			</div>
		</div>
		<div className={contact.contact_copyright}>
			<h4> &#169; 2022 Dev Mariam</h4>
		</div>
		</section>
	);
};

export default Contact;
