import React from "react";
import imgProject1 from "../../img/img_project_1.png"
import serviceIcon from "../../icons/svg/service_icon.svg";
import "./item.scss";

function Item({ project }) {
  console.log(project);
  return (
    <div>
      {project && (
          <section className='cards'>
            <img src={imgProject1} className="photo" alt="paisaje" />
            <p className='location'>{project.location}</p>
            <h2 className='name'>{project.name}</h2>
            <p className='description'>{project.description}</p>
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
