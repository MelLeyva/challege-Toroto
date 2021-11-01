import React from "react";

function Activities(props) {
  //console.log(props.name);
  //console.log(props.description);
  return (
    <div className='activities'>
      <p className='-name-activity'>{props.name}</p>
      <p className='descrip-activity'>{props.description}</p>
    </div>
  );
}

export default Activities;
