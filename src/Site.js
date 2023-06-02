import React from "react";
import blob from "./im/blob.svg";
function Home() {
  return (
    <>
      <header id="Site">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="site-img">
                <img src={blob}></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="site-text">
                <h3>My initiative towards quality fashion service.</h3>
                <h1>
                  <span>Outlooks Fashion Zone</span>
                </h1>
                <p>
                  Everyone wants
                  <b>
                    <i> quality </i>
                  </b>
                  but not get so we are here with our premium
                  <b>
                    <i> quality </i>
                  </b>
                  in least time at your doorstep.So we have a{" "}
                  <b>
                    <i> best </i>
                  </b>{" "}
                  products for the
                  <b>
                    <i> best </i>
                  </b>
                  person like you.
                </p>
                <a className="btn" href="#Services">
                  MY SITE
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Home;
