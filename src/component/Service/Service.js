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
            <h1>our service is  here</h1>
         <div className="cart">
         {
      university.map(un=> <Chield id={un.id} un={un}></Chield>)
           }
         </div>
           
        </div>
    );
};

export default Service;