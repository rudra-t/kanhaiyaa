import React from "react";
import blob from "./im/blob.svg";
function About() {
  return (
    <section id="About">
      <div className="container">
        <div className="row">
          <div className="col-md-6 about-image">
            <img src={blob} alt="#"></img>
          </div>
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
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100090369410858">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com/shishirp084?t=KlXdsdiYq5g0I0tRT-gHnA&s=09">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/kanha20201/?igshid=ZDdkNTZiNTM%3D">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/shishir-pandey-398896248/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
