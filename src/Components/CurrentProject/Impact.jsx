import React from "react";

function Impacts(props) {
  //console.log(props.name);
  //console.log(props.description);
  return (
    <div className='impact'>
        <p className='imp-name'>{props.name}</p>
      <p className='imp-descrip'>{props.value}</p>
    </div>
  );
}

export default Impacts;