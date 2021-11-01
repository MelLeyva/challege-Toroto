import React from "react";

function Images (props) {
  //console.log(props.url);
  return (
    <div>
        <img className='img' src={props.url} alt="foto" />
  
    </div>
  );
}

export default Images;