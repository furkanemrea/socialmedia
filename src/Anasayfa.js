import React, { Component } from "react";
import Arkadas from "./Arkadas";

class Anasayfa extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <a className="navbar-brand" href="#">
            Insta Project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Arkadaşlarım <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Profilim <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <span className="navbar-text text-warning">
              Furkan Emre ALTINTAŞ
            </span>
          </div>
        </nav>
        <div>
            <Arkadas></Arkadas>
        </div>
      </div>
    );
  }
}
export default Anasayfa;
