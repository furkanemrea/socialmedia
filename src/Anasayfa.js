import React, { Component } from "react";
import Arkadas from "./Arkadas";
import Profil from "./Profil";
import Info from "./Info";
import Gonderi from "./Gonderi";
import Kesfet from "./Kesfet";
import { Button, Icon } from "semantic-ui-react";
import AramaYap from "./AramaYap";
import GoProfil from "./GoProfil";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

class Anasayfa extends Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);

  }
  state = {
    userSearch: ' ',
  };
  handleChange(e){
    e.preventDefault();
    
    this.setState({
      userSearch: e.target.value,
    })
    
  
  }
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
                <input
                  type="text"
                  onChange={(e)=>this.handleChange(e)}
                  name="userSearch"
                  placeholder="Arama Yap"
                  style={{
                    
                    borderBlockColor:"red",
                    borderRadius:"15px",
                    height: "30px",
                    textAlign:"center"
                  }}
                ></input>
                <NavLink to="AramaYap" arama="asd" className="btn btn-danger" style={{marginLeft:"15px",borderRadius:"15px",marginBottom:"5px"}}>
                  Ara
                </NavLink>
              </span>
            </div>
          </nav>
          <div>
            <Switch>
              <Route
                path="/Info"
                exact
                render={(props) => (
                  <>
                    <Info user="user"/>
                  </>
                )}
              />
              <Route path="/Arkadas" exact component={Arkadas} />
              <Route path="/Profil" exact component={Profil} />
              <Route path="/Gonderi" exact component={Gonderi} />
              <Route path="/Kesfet" exact component={Kesfet} />
           
              <Route
                path="/AramaYap"
                exact
                render={(props) => (
                  <>
                    <AramaYap userSearch={this.state.userSearch}/>
                  </>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Anasayfa;
