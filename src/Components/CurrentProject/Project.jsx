import React from "react";

const Information = ({
  name,
  location,

}) => {
  return (
    <div className='info'>
      <h5 className="loc-project">{location}</h5>
      <div className="name-project">{name}</div>
     </div>
  );
};
// <p className="problem">{problem}</p>

export default Information;

