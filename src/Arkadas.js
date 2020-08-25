import React, { Component } from "react";
import {
  BrowserRouter as Router,

  NavLink,
} from "react-router-dom";
class Arkadas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    this.refleshList();
  }
  refleshList() {
    fetch("https://localhost:44312/api/values")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  }
  render() {
    const { user } = this.state;
    return (
      <Router>
        <div>
          <div
            className="ui comments"
            style={{ margin: "auto", marginTop: "50px" }}
          >
            <h3 className="ui dividing header">Üyeler</h3>
            <div className="comment">
              {user.map((kullanici) => (
                <div>
                  <NavLink 
                    className="avatar"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <img src={kullanici.Profil} />
                  </NavLink>
                  <div className="content">
                    <NavLink className="author" key={kullanici.Id}>
                      {kullanici.Ad + " " + kullanici.Soyad}
                    </NavLink>
                    <div className="metadata">
                      <span className="date"></span>
                    </div>
                    <div className="text">{kullanici.KullaniciAd} </div>
                    <div className="actions">
                      <NavLink className="reply" to="Profil">Profiline Git</NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
      </Router>
    );
  }
}
export default Arkadas;
