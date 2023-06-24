import React from "react";
import s4 from "./im/s4.jpg";
function Footer() {
  return (
    <>
      <section className="py-5" id="Contact">
        <div className="container">
          <div className="text-center mb-5">
            <h1>
              Feel free<sapn className="text-white"> to connect</sapn>
            </h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-success">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 m-auto text-md-end mt-3 mt-md-0">
              <img
                src={s4}
                className="img-fluid img-thumbnail p-2"
                alt="#"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid text-white p-2 text-center fs-5">
        Doveloped by Rudra Tiwari
      </div>
    </>
  );
}
export default Footer;
