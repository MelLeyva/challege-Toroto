import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import Information from "./Project.jsx";
import Activities from "./Activities.jsx";
import Images from "./Images.jsx";
import PhotoProject from "./Photo-project.jsx";
import Services from "./Services.jsx";
import Impacts from "./Impact.jsx";
import WorksMap from "./WorksMap.jsx";
import toolTip from "../../icons/svg/tooltip_icon.svg"
import Modal from "./ModalTool.jsx";
import { useModal } from "./UseModal.jsx";
import "./Styles-Project.scss"
import ProposeProject from "./ProposeProjects.jsx";

function storage(id, valorInicial = []) {
    const saveData = localStorage.getItem(id);
    return saveData ? JSON.parse(saveData) : valorInicial;
}

const Project = () => {
  const { id } = useParams();
  
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  let [proyecto, setProyecto] = useState(() => storage('proyecto'))

  useEffect(() => {
    const getApi = async () => {
      const urlId = `https://fieldops-api.toroto.mx/api/projects/${id}`;
      const projectData = await fetch(urlId)
      const data = await projectData.json()
      setProyecto(data.data)
    };
    getApi()
  }, [id])

  useEffect(() => {
    console.log('proyect from server', proyecto)
    localStorage.setItem('proyecto', JSON.stringify(proyecto));
  }, [proyecto]);
 

  //console.log(proyecto[0].activities)
  /* const [selected, setselected] = Acordeon(null) */

  //const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  if (proyecto.length === 0) {
    return (
      <div className='conteiner'>
        <div className='grid'>
          <div>Loading ...</div>
        </div>
      </div>
    )
  }

  return (
    <div className='conteiner'>
      <div className='grid'>
        <div className='resume'>
          <Information
            location={proyecto[0].location}
            name={proyecto[0].name}
          />
          <div className='services-project'>
            {proyecto[0].services && proyecto[0].services.map((service, index) =>
              <Services service={service} key={index} />)}
          </div>
          <p className='descrip-project'>
            {proyecto[0].description}
          </p>
        </div>
        <PhotoProject id={proyecto[0].id} />
      </div>
      <div className='problem-project'>
        <h2>Problematica</h2>
        <p>{proyecto[0].problem}</p>
      </div>
      <div className='implement'>
        <h2 className='implement-title'>Implementación</h2>
        <button className='tool' onClick={openModal1}><img src={toolTip} className="tool-tip" alt="tool" /></button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}></Modal>
      </div>
      <div className='title-act' >Actividades de restauración
        <div className='activities' >
          {proyecto[0].activities && proyecto[0].activities.map((activity, index) =>
            <Activities name={activity.name} description={activity.description} key={index} />
          )}
        </div>
      </div>
      <WorksMap />
      <div className='galery'>Galeria de imágenes
        <div className='grid-photos'>
          {proyecto[0].images && proyecto[0].images.map((image, index) =>
            <Images url={image} key={index} />
          )}
        </div>
      </div>
      <div className='impacts'>Impacto
        <div className='impact'>
          {proyecto[0].impact && proyecto[0].impact.map((impact) =>
            <Impacts name={impact.name} value={impact.value} key={impact.name} />
          )}
        </div>
      </div>
        <ProposeProject />
    </div>
  );
}

export default Project;
