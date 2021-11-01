import React from "react";

function Activities(props) {
  //console.log(props.name);
  //console.log(props.description);
  return (
    <div>
        <p className='location'>{props.name}</p>
      <p className='description'>{props.description}</p>
    </div>
  );
}

export default Activities;

/* {activities && (
  <section className='cards'>
      <p className='location'>{activities.name}</p>
      <p className='description'>{activities.description}</p>
    </section>
)} */