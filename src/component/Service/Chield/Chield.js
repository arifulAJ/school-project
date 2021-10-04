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
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div></div>
 </div>
    
    );
};

export default Chield;