import React from "react";

function Impacts(props) {
  //console.log(props.name);
  //console.log(props.description);
  return (
    <div className='impact-info'>
        <p className='imp-value'>{props.value}</p>
        <h3 className='imp-name'>{props.name}</h3>
    </div>
  );
}

export default Impacts;