import React from "react";

function Images (props) {
  //console.log(props.url);
  return (
    <div className = 'images'>
        <img className='img-project' src={props.url} alt="foto" />
    </div>
  );
}

export default Images;