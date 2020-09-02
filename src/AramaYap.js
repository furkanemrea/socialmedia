  
import React, { Component } from "react";

import { BrowserRouter as Router, NavLink } from "react-router-dom";

class AramaYap extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    user: [],
  };
  componentDidMount() {
    fetch("https://localhost:44312/api/friends", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        KullaniciAd: this.props.userSearch,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  }
  render() {
    return (
      <Router>
        <div>
          <div
            className="ui comments"
            style={{ margin: "auto", marginTop: "50px" }}
          >
            <h3 className="ui dividing header" style={{ textAlign: "center" }}>
              Üyeler
            </h3>
            <div className="comment">
              {this.state.user.map((kullanici) => (
                <div>
                  <p
                    className="avatar"
                    style={{ height: "50px", width: "50px" }}
                  >
                    <img src={kullanici.Profil} />
                  </p>
                  <div className="content">
                    <p className="author" key={kullanici.Id}>
                      {kullanici.Ad + " " + kullanici.Soyad}
                    </p>
                    <div className="metadata">
                      <span className="date"></span>
                    </div>
                    <div className="text">{kullanici.KullaniciAd} </div>
                    <div className="actions">
                      <NavLink className="reply" to="Profil">
                        Profiline Git
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default AramaYap;