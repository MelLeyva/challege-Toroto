import React from "react";
import Photo from "../CurrentProject/Photo.jsx";

const Popup = ({ location, name, problem, id }) => (
  <div className="popUp">
      <Photo id={id}/>
      <h5 claseName="location">{location}</h5>
      <h1 className="name">{name}</h1>
      <p className="problem">{problem}</p>
    </div>
  );

export default Popup;