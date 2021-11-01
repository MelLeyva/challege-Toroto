import React from "react";

function Impacts(props) {
  //console.log(props.name);
  //console.log(props.description);
  return (
    <div>
        <p className='location'>{props.name}</p>
      <p className='description'>{props.value}</p>
    </div>
  );
}

export default Impacts;