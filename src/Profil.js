import React, { Component } from "react";
import {
  faInfoCircle,
  faSwatchbook,
  faAdjust,
  faAddressBook,
  faLocationArrow,
  faCalendar,
  faBook,
  faSchool,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class Profil extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://localhost:44312/api/user/2")
      .then((tesp) => tesp.json())
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.slice(0, 1),
        });
      });
  }
  render() {
    return (
      <div style={{marginTop:"15px"}}>
        <h4 className="center" style={{textAlign:"center"}}>Profilim</h4>
        <div className="home container">
          {this.state.posts.map((card) => {
            return (
              <div className="post card" key={card.Id}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={card.Profil}
                        className="img-thumbnail img-fluid"
                        id="img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-content">
                        <p to="/">
                          <span className="card-title">
                            <FontAwesomeIcon
                              icon={faAdjust}
                            ></FontAwesomeIcon>{" "}
                            {card.KullaniciAd} {" "} <br></br>
                          </span><br></br>
                          <span className="card-title">
                            <FontAwesomeIcon
                              icon={faAddressBook}
                            ></FontAwesomeIcon>{" "}
                        {card.Ad} {" "} {card.Soyad}
                          </span>
                        </p>
                 
                  
                        {/* <p>
                          <FontAwesomeIcon
                            icon={faSwatchbook}
                          ></FontAwesomeIcon>{" "}
                          Age
                        </p> */}
                        <p>
                          <FontAwesomeIcon
                            icon={faLocationArrow}
                          ></FontAwesomeIcon>{" "}
                          {card.Mail}
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>{" "}
                          {card.Okul}
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>{" "}
                          {card.Sehir}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-style">
                  <img src="{logo}" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Profil;
