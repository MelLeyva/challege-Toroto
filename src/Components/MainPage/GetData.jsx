import React, { useEffect, useState } from "react";
import Item from "./Item.jsx";
import "./Item.scss";


function GetData() {
  let [projects, setProjects] = useState();
  let getApi = async () => {
    let url = `https://fieldops-api.toroto.mx/api/projects/`;
    let getFetchData = await fetch(url).then((resul) => resul.json());
    // console.log(getFetchData)
    setProjects(getFetchData);
    
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className='grid-projects'>
      <h1 className='all-projects'>Todos los proyectos</h1>
      <section className="container">    
        {projects && projects.data.map((project) => 
        <Item project={project} key={project.id} />
        )}
      </section>
    </div>
    
  );
}

export default GetData;
