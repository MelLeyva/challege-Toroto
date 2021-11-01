import React from "react";
import "./Text.scss"

const Text = () => (
    <div className="text">
        <h1 className="weAre">Somos desarrolladores de proyectos</h1>
        <p className="lorem">
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s.</p>
        <button className="propose">PROPONER UN PROYECTO</button> 
    </div>
);

export default Text;