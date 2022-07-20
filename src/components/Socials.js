import React from 'react';
import call from '../icons/phone-flip-solid.svg';
import instagram from '../icons/instagram-brands.svg';
import twitter from '../icons/twitter-brands.svg';
import linkedin from '../icons/linkedin-in-brands.svg';
import github from '../icons/github-brands.svg';
import socials from '../general.module.css';
// import imgy from '../images/'


const Socials = () => {
  return (
    <div className={socials.socials_container}>
      
        <a href='https://github.com/mariamopeyemi' className={socials.socials_img} target="_blank" rel="noreferrer"><img src={github} alt='socials' width='25px' height='25px' /></a>
      
      
        <a href='https://instagram.com/mariam_afox' className={socials.socials_img} target="_blank" rel="noreferrer"><img src={instagram} alt='socials' width='25px' height='25px' /></a>
      
      
        <a href='https://twitter.com/mariam_afox' className={socials.socials_img} target="_blank" rel="noreferrer"><img src={twitter} alt='socials' width='25px' height='25px'  /></a>
      
        <a  href='/' className={socials.socials_img} target="_blank" rel="noreferrer"><img src={call} alt='socials' width='25px' height='25px' /></a>
      
      
        <a href='https://www.linkedin.com/in/opeyemi-m-afolabi-b590a5155/' className={socials.socials_img} target="_blank" rel="noreferrer"><img src={linkedin} alt='socials' width='25px' height='25px' /> </a>
      
      <hr className={socials.socials_hr} />
    </div>
  )
}

export default Socials