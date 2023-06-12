import React from "react";
import s1 from "./im/s1.jpg";
import s2 from "./im/s2.jpg";
import s3 from "./im/s3.jpg";
function Team() {
  return (
    <>
      <section className="my-5" id="Testimonials">
        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="row">
              <h1>What Coustmers Say</h1>
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <img src={s1} className="card-img" alt="#" />
                  </div>
                  <div className="card-text">
                    <h5>Ansha</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Doloremque, libero..
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <img src={s2} className="card-img" alt="#" />
                  </div>
                  <div className="card-text">
                    <h5>Sweta</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Labore, accusamus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <img src={s3} className="card-img" alt="#" />
                  </div>
                  <div className="card-text">
                    <h5>Carde</h5>
                    <p>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="Footer">Doveloped By Rudra Tiwari All rights Reserved</p>
      </section>
    </>
  );
}
export default Team;
