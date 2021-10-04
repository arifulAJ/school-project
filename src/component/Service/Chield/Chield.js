import React from 'react';

const Chield = (props) => {
    const {name,university,country,img}=props.un;
    console.log(props);
    return (
 <div>
     
     <div class="card-group ">
  <div class="card">
    <img style={{height:"350px"}}  src={img} class="card-img-top " alt="..."/>
    <div class="card-body">
      <h5 class="card-title">class : {name}</h5>
     <h6>university : {university}</h6>
     <h6>country : {country}</h6>

      <p class="card-text">In missile guidance, the planned flight path events to be 
A detailed and explicit set of directions for accomplishing some purpose, the set being expressed in some language suitable for input to a computer, or in machine language..</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div></div>
 </div>
    
    );
};

export default Chield;