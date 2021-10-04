import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide pb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner slider w-50 mx-auto pt-5 pb-5">
          <div className="carousel-item active">
            <img  src="https://www.engineering.uga.edu/uploads/main/convocation_fall_19_news.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item ">
            <img src="https://bluechipwebdesign.com/wp-content/uploads/2018/10/Information-Technology-Education.jpg" alt="..."/>
          </div>
          
          <div className="carousel-item ">
            <img src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/images/articles/26f030d286f288c673431fbddc6e1190be5655ea.jpg" alt="..."/>
          </div>
        
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Slider;