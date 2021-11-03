import React from "react";
import P001 from "../../img/img_project_1.png"
import P002 from "../../img/img_project_2.png"
import P003 from "../../img/img_project_3.png"
import P004 from "../../img/img_project_4.png"
// import "./Styles-Project.scss"

const PhotoProject = ({ id }) => (
    <div className='project-image'>
      {id === "P001" ? (
        <img src={P001} className="picture" alt="paisaje" />
      ) : (
        console.log("")
      )}
      {id === "P002" ? (
        <img src={P002} className="picture" alt="paisaje" />
      ) : (
        console.log("")
      )}
      {id === "P003" ? (
        <img src={P003} className="picture" alt="paisaje" />
      ) : (
        console.log("")
      )}
      {id === "P004" ? (
        <img src={P004} className="picture" alt="paisaje" />
      ) : (
        console.log("")
      )}
    </div>
  );

export default PhotoProject;