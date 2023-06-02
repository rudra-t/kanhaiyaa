import React from "react";
import first from "./im/first.jpg";
function Card() {
  return (
    <>
      <section id="Services">
        <div className="container">
          <div className="row">
            <h1>
              What <span>I Do</span>
            </h1>
            <div className="col-sm-6 col-lg-4 p-3">
              <div className="card">
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
            <div className="col-sm-6 col-lg-4 p-3">
              <div className="card">
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
            <div className="col-sm-6 col-lg-4 p-3">
              <div className="card">
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
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
