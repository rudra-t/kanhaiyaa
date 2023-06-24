import React from "react";
import first from "./im/first.jpg";
function Card() {
  return (
    <>
      <section id="Services">
        <h1>
          What <span>I Do</span>
        </h1>
        <div className="container">
          <div className="service-box">
            <i className="fas fa-code"></i>
            <div className="card-body">
              <h2 classsName="card-title">Human Resource</h2>
              <p classsName="card-sub-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ut?
              </p>
            </div>
          </div>
          <div className="service-box">
            <i className="fas fa-code"></i>
            <div className="card-body">
              <h2 classsName="card-title">Human Resource</h2>
              <p classsName="card-sub-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ut?
              </p>
            </div>
          </div>
          <div className="service-box">
            <i className="fas fa-code"></i>
            <div className="card-body">
              <h2 classsName="card-title">Human Resource</h2>
              <p classsName="card-sub-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, ut?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
