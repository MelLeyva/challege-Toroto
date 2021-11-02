import React from "react";
import serviceIcon from "../../icons/svg/service_icon.svg";


function Services (props) {
  //console.log(props.service);
  return (
    <div className='service'>
        <img src={serviceIcon} className="tag" alt="tag" />
        <p >{props.service && props.service === "Desarrollo de proyectos de captura de carbono forestal" ? (<p>Captura de carbono</p>) : (props.service)}</p>
    </div>
  );
}

export default Services;