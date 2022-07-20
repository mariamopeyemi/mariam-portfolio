import React from 'react';
import project from '../general.module.css';

// interface NavProps{
// 	img : string,
//     title: string, info: string, livelink: string, codelink: string,
// }
const ProjectCard= ({img, title, info, livelink, codelink}) => {
    
  return (
    <div className={project.project_card}>
        <div className={project.project_moniCard}>
            <h3>{title}</h3>
            <p>{info}</p>
            <a href={livelink} rel="noreferrer" target="_blank">
            <button className={project.nav_btn}>View Live</button></a>
            <a href={codelink} rel="noreferrer" target="_blank">
            <button className={project.nav_btn}>View Code</button></a>
        </div>
        <div className={project.project_miniCard}>
            <img className={project.project_miniCard_img} src={img} alt=''  style={{borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}} />
        </div>
    </div>
  )
}

export default ProjectCard;