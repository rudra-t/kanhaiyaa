import React from "react";
import s1 from "./im/s1.jpg";
import s2 from "./im/s2.jpg";
import s3 from "./im/s3.jpg";
function Testimonials() {
  return (
    <>
      <section id="Team">
        <h1>My Team</h1>
        <div className="container">
          <div className="team-box">
            <div className="box-img">
              <img src={s1} alt="..." />
            </div>
            <div className="box-txt">
              <h3>Divyam Kapoor</h3>
              <h5>Marketing</h5>
              <a href="https://www.facebook.com/divyamkapooRr">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/mr._kapoor_ji/?igshid=YmMyMTA2M2Y%3D">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="team-box">
            <div className="box-img">
              <img src={s2} alt="..." />
            </div>
            <div className="box-txt">
              <h3>Aryan Rajpoot</h3>
              <h5>Social Media Manager</h5>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="team-box">
            <div className="box-img">
              <img src={s3} alt="..." />
            </div>
            <div className="box-txt">
              <h3>Shreya Gupta</h3>
              <h5>Chief Advisor</h5>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/shreya-gupta-b89245255/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimonials;
