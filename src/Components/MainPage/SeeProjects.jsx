import React from "react";
import "./Text.scss"
import arrow from "../../icons/svg/chevron-down.svg"

const GoDown = () => (
    <div className="go-down">
        <h1 className="see">VER LISTA COMPLETA DE PROYECTOS</h1>
        <button className="arrow-down">
            <img src={arrow} className='down' alt="arrow" />
        </button> 
    </div>
);

export default GoDown;