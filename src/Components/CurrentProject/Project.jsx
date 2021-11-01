import React from "react";

const Information = ({
  name,
  location,

}) => {
  return (
    <div className='info'>
      <h5 className="loc-project">{location}</h5>
      <h1 className="name-project">{name}</h1>
     </div>
  );
};
// <p className="problem">{problem}</p>

export default Information;

