import React from "react";
import P001 from "../../img/img_project_1.png"
import P002 from "../../img/img_project_2.png"
import P003 from "../../img/img_project_3.png"
import P004 from "../../img/img_project_4.png"

const Popup = ({ location, name, problem, id }) => (
    <div className="popUp">
      {id === "P001" ? (
        <img src={P001} className="photo" alt="paisaje" />
      ) : (
        console.log("no es el id")
      )}
      {id === "P002" ? (
        <img src={P002} className="photo" alt="paisaje" />
      ) : (
        console.log("no es el id")
      )}
      {id === "P003" ? (
        <img src={P003} className="photo" alt="paisaje" />
      ) : (
        console.log("no es el id")
      )}
      {id === "P004" ? (
        <img src={P004} className="photo" alt="paisaje" />
      ) : (
        console.log("no es el id")
      )}
      <h5 claseName="location">{location}</h5>
      <h1 className="name">{name}</h1>
      <p className="problem">{problem}</p>
    </div>
  );

export default Popup;