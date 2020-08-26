import React, { Component } from "react";
import Arkadas from "./Arkadas";
import Profil from "./Profil";
import Info from "./Info";
import Gonderi from "./Gonderi";
import Kesfet from "./Kesfet";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";


class Anasayfa extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <NavLink className="navbar-brand" to="/Info">
              Insta Project
            </NavLink>
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
                  <NavLink className="nav-link" to="/Arkadas">
                    Arkadaşlarım <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/Profil">
                    Profilim <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/Gonderi">
                    Gönderi Oluştur <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/Kesfet">
                    Keşfet <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
              </ul>
              <span className="navbar-text text-warning">
                Furkan Emre ALTINTAŞ
              </span>
            </div>
          </nav>
          <div>
            <Switch>
              <Route path="/Info" exact component={Info} />
              <Route path="/Arkadas" exact component={Arkadas} />
              <Route path="/Profil" exact component={Profil} />
              <Route path="/Gonderi" exact component={Gonderi} />
              <Route path="/Kesfet" exact component={Kesfet} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Anasayfa;
