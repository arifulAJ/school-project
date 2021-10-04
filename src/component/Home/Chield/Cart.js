import React from 'react';

const Cart = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid pb-5 pt-5">
        <div className="col">
          <div className="card">
            <img style={{height:"335px"}} src="https://upload.wikimedia.org/wikipedia/commons/8/82/Festival_of_Science_in_Samara.jpg" className="card-img-top" alt="chemistry lab class"/>
            <div className="card-body">
              <h5 className="card-title">Chemistry Class</h5>

              <p className="card-text">Chemistry education (or chemical education) is the study of teaching and learning chemistry. ... Chemistry education can be improved by changing teaching methods and providing appropriate training to chemistry instructors, within many modes, including classroom lectures, demonstrations, and laboratory activities.</p>
              <h5>per lesson price:$12</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://asuevents.asu.edu/sites/default/files/collegestudents_sm_1.jpg" className="card-img-top" alt="computer class"/>
            <div className="card-body">
              <h5 className="card-title">Computer Class</h5>
              <p className="card-text">Get a jumpstart on college preparations, by joining us at ASU's West campus as we host our annual Road to the University event. Open to the community and students of all ages (yes, elementary students are welcome too!), this event will cover topics such as how to pay for college, the admissions process, university programs and much more!.</p>
              <h5>per lesson price:$11</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://thumbs.dreamstime.com/b/mathematics-study-calculation-algebra-science-tiny-person-concept-work-flat-persons-education-teachers-lesson-school-190027384.jpg" className="card-img-top" alt="math review"/>
            <div className="card-body">
              <h5 className="card-title">MathMatisse  class </h5>
              <p className="card-text">Mathematics provides an effective way of building mental discipline and encourages logical reasoning and mental rigor. In addition, mathematical knowledge plays a crucial role in understanding the contents of other school subjects such as science, social studies, and even music and art.</p>
              <h5>per lesson price:$16</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img style={{height:"325px"}} src="http://www.southeastern.edu/acad_research/programs/grad_bus/mba/images/mba_schedules.jpg" className="card-img-top" alt="business studies"/>
            <div className="card-body">
              <h5 className="card-title">Business studies </h5>
              <p className="card-text">Business education is a term that encompasses a number of methods used to teach students the fundamentals of business practices. These methods range from formal educational degree programs, such as the Master of Business Administration (MBA), to school-to-work opportunity systems or cooperative education.</p>
              <h5>per lesson price:$14</h5>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;