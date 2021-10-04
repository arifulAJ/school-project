import React, { useEffect, useState } from 'react';
import Chield from './Chield/Chield';
import './Chield/service.css'


const Service = () => {
    const [university,setUniversity]=useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setUniversity(data))
    },[])
    return (
        <div>
            <h1 style={{textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>We are provide eight subject for honers and masters </h1>
            <p style={{textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>I can say that you are in right track because our educational system is ultramodern every thing is update  </p>
         <div className="cart">
         {
      university.map(un=> <Chield id={un.id} un={un}></Chield>)
           }
         </div>
           
        </div>
    );
};

export default Service;