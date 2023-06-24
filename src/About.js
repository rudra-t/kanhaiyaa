import React from "react";
import blob from "./im/blob.svg";
function About() {
  return (
    <section id="About">
      <div className="container">
        <div className="row">
          <div className="col-md-6 about-text">
            <h2>About Me</h2>
            <h1>Hello,I'm SHISHIR PANDEY</h1>
            <h2>
              Co-Founder Of <span>Outlooks Fashion Zone</span>
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              totam consequuntur dolorem illo velit blanditiis,
            </p>
          </div>
          <div className="col-md-6 about-image">
            <img src={blob} alt="#"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
