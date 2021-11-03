import React from "react";

function Impacts(props) {
  //console.log(props.name);
  //console.log(props.description);
  return (
    <div className='impact-info'>
        <p className='imp-value'>{props.value}</p>
        <p className='imp-name'>{props.name}</p>
    </div>
  );
}

export default Impacts;