import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
  } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return this.props.kntrl ? (
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
              <input
                type="text"
                onChange={(e) => this.handleChange(e)}
                name="userSearch"
                placeholder="Arama Yap"
                style={{
                  borderBlockColor: "red",
                  borderRadius: "15px",
                  height: "30px",
                  textAlign: "center",
                }}
              ></input>
              <NavLink
                to="AramaYap"
                arama="asd"
                className="btn btn-danger"
                style={{
                  marginLeft: "15px",
                  borderRadius: "15px",
                  marginBottom: "5px",
                }}
              >
                Ara
              </NavLink>
            </span>
          </div>
        </nav>
      </div>
    ) : (
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
    );
  }
}
export default Navbar;
