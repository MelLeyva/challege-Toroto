import React from "react";
import serviceIcon from "../../icons/svg/service_icon.svg";
import "./Item.scss";
import { Link } from "react-router-dom";
import Photo from "../CurrentProject/Photo.jsx";

function Item({ project }) {
  //console.log(project);
  //const idProject = project.id
  return (
    <div>
      {project && (
        <section className='cards'>
           <Photo id={project.id}/>
            <p className='location'>{project.location}</p>
            <h2 className='name'>{project.name}</h2>
            <p className='description'>{project.problem}</p>
            <span className='services'>
              <li className='tag-one'> 
              <img src={serviceIcon} className="tag" alt="tag" />
              Servicio X</li>
              <li className='tag-two'>
              <img src={serviceIcon} className="tag" alt="tag" />
              Servicio X </li>
            </span>
              <Link to={`proyectos/${project.id}`}>
            <button className='view-project' key={project.id}> 
                VER PROYECTO COMPLETO
            </button>
              </Link>
          </section>
     )}
    </div>
  );
}

export default Item;
