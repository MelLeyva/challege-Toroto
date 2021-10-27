import React from "react";
import P001 from "../../img/img_project_1.png"
import P002 from "../../img/img_project_2.png"
import P003 from "../../img/img_project_3.png"
import P004 from "../../img/img_project_4.png"
import serviceIcon from "../../icons/svg/service_icon.svg";
import "./item.scss";

function Item({ project }) {
  console.log(project);
  const idProject = project.id
  return (
    <div>
      {project && (
        <section className='cards'>
            {idProject === "P001" ? (
            <img src={P001} className='photo' alt="paisaje" />
            ):(
              console.log('no es el id')
            )
            } 
            {idProject === "P002" ? (
            <img src={P002} className='photo' alt="paisaje" />
            ):(
              console.log('no es el id')
            )
            } 
            {idProject === "P003" ? (
            <img src={P003} className='photo' alt="paisaje" />
            ):(
              console.log('no es el id')
            )
            } 
            {idProject === "P004" ? (
            <img src={P004} className='photo' alt="paisaje" />
            ):(
              console.log('no es el id')
            )
            } 
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
            <button className='view-project'>VER PROYECTO COMPLETO</button>
          </section>
     )}
    </div>
  );
}

export default Item;
