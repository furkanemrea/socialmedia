import React, { Component } from "react";
import UyeOl from "./UyeOl";
import GirisYap from "./GirisYap";
import Anasayfa from "./Anasayfa";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";


class Ziyaret extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <NavLink className="navbar-brand text-warning" to="/">
              İnsta Project
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"></li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <NavLink
                  className="btn btn-outline-danger my-2 my-sm-0"
                  type="submit"
                  to="GirisYap"
                >
                  Giriş Yap
                </NavLink>
                <NavLink
                  className="btn btn-outline-warning my-2 my-sm-0"
                  type="submit"
                  to="UyeOl"
                  style={{ marginLeft: "10px" }}
                >
                  Üye Ol
                </NavLink>
              </form>
            </div>
          </nav>
          <div>
            <Switch>
              <Route path="/UyeOl" exact component={UyeOl} />
              <Route path="/GirisYap" exact component={GirisYap} giris={Anasayfa} />
           
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Ziyaret;
