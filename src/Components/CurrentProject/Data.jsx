import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import Information from "./Project.jsx";
import Activities from "./Activities.jsx";
import Images from "./Images.jsx";
import Photo from "./Photo.jsx";
import Services from "./Services.jsx";
import Impacts from "./Impact.jsx";

const Project = () => {
    const { id } = useParams();
  
    let [proyecto, setProyecto] = useState(storage('proyecto', []))
      useEffect(() => {
      localStorage.setItem('proyecto', JSON.stringify(proyecto));
    }, [proyecto]); 
    
    function storage (proyecto, valorInicial) {
      if(typeof window!== 'undefined') {
        const saveData = localStorage.getItem(proyecto);
        const inicial =saveData !== null ? JSON.parse(saveData) : valorInicial;
        return inicial;
      }
      return 'error'
    }

    useEffect(() => {
      let getApi = async () => {
        let urlId = `https://fieldops-api.toroto.mx/api/projects/${id}`;
        let projectData = await fetch(urlId)
        let data= await projectData.json()
         //console.log(data.data)
          setProyecto(data.data)
        };
          getApi()
        }, [id])
        
        //console.log(proyecto[0].activities)
        return (
          <div>
            <Photo id={proyecto[0].id}/>
            <Information
              location={proyecto[0].location}
              name={proyecto[0].name}
              problem={proyecto[0].problem}
            />,
              {proyecto[0].services && proyecto[0].services.map((service, index) => 
              <Services service={service}  key={index} />)}
              {proyecto[0].activities && proyecto[0].activities.map((activity) => 
                <Activities name={activity.name} description={activity.description} key={activity.name} />
                )}
              {proyecto[0].images && proyecto[0].images.map((image, index) => 
              <Images url={image}  key={index} />
              )}
              {proyecto[0].impact && proyecto[0].impact.map((impact) => 
                <Impacts name={impact.name} value={impact.value} key={impact.name} />
                )}
          </div>
        );  
      }
      
      export default Project;
