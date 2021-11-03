import React, { useState } from "react";
import arrow from "../../icons/svg/chevron-down.svg"

function Activities(props, index) {
  //console.log(props.name);
  //console.log(props.description);

  const [clicked, setClicked] = useState(null)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <div className='acordeon'>
      <div className='name-activity'>
        <button className='title' onClick={() => toggle(index)} key={index}>
          {props.name}
          <img src={arrow} className={clicked === index ? 'arrow rotate' : 'arrow' } alt="tag" />
        </button>
      </div>
      <div className={clicked === index ? 'descrip show' : 'descrip' }>{props.description}</div>
    </div>
  );
}

export default Activities;
