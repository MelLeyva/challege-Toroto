import { useParams } from "react-router";
import React, { useEffect, useState } from "react";

const Project = () => {
  const { id } = useParams();

  let [proyecto, setProyectos] = useState([]);
  useEffect(() => {
      const getApi = async () => {
        const urlId = `https://fieldops-api.toroto.mx/api/projects/${id}`;
        const projectData = await fetch(urlId)
        const proyecto= await projectData.json()
        console.log(proyecto)
        setProyectos(proyecto);
      };
      getApi()
  }, [id]);


  return (
    <div>
        <section className="projectito">
          <p className="name">{proyecto.name}</p>
          <p className="description">{proyecto.description}</p>
        </section>
    
    </div>
  );
}

export default Project;
