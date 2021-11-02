import React from "react";
import Photo from "./Photo.jsx";

const Popup = ({ location, name, problem, id }) => (
  <div className="popUp">
      <Photo id={id}/>
      <span className='dat'>
      <h5 className="popup-loc">{location}</h5>
      <h1 className="popup-name">{name}</h1>
      <p className="popup-problem">{problem}</p>
      </span>
    </div>
  );

export default Popup;