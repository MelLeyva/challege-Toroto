import React from "react";

function Services (props) {
  console.log(props.service);
  return (
    <div>
        <p className='service'>{props.service}</p>
  
    </div>
  );
}

export default Services;