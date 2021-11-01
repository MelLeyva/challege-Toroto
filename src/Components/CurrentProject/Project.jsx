import React from "react";

const Information = ({
  name,
  problem,
  location,

}) => {
  return (
    <div>
      <h5 className="location">{location}</h5>
      <h1 className="name">{name}</h1>
      <p className="problem">{problem}</p>
     </div>
  );
};

export default Information;

