import React,{useState} from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';
import nav from '../general.module.css';

const Nav = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<><nav>
			<div className='nav_name'><h1>Mariam</h1></div>
			<>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
			<a href="https://medium.com/@opeyemi.afolabi45" >
			<button className='nav_btn'>Blog</button>
			</a>
			</>
			<div onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? 
                        <div className={nav.nav_toggle}> &#128473; </div> 
                    :   <div className={nav.nav_toggle}> &#9776;</div>
                    }
            </div>
		</nav>
			
	</>
	);
};

export default Nav;
