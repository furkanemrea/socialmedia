import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Label,
  NavLink,
} from "reactstrap";
import { Form } from "react-bootstrap";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "./App.css";
import "./Logo/logo.PNG";
import Modal from "react-awesome-modal";


class GirisYap extends Component {
  state = {
    kontrol: " ",
    visible: false,
  };
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }
  closeModal() {
    this.setState({
      visible: false,
    });
  }

  //async ve await kullanım sebebi işlemleri sıraya sokmak.
  async handleSubmit(e) {
    e.preventDefault();
    await fetch("https://localhost:44312/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        KullaniciAd: e.target.KullaniciAd.value,
        Sifre: e.target.Sifre.value,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          kontrol: data,
        });
      });

    if (this.state.kontrol === "Add operation failed") {
      this.openModal();
    }
  }
  render() {
    return (
      <Router>
        <div style={{ padding: "50px" }}>
          <Card>
            <div>
              <img
                src="https://i.hizliresim.com/MkT257.png"
                style={{ position: "absolute", left: "10px" }}
                width="70px"
                height="60px"
              ></img>
              <CardHeader
                className="h1"
                style={{ textAlign: "center", color: "blue" }}
              >
                GİRİŞ YAP
              </CardHeader>
            </div>
            <CardBody>
              <CardTitle></CardTitle>
              <form onSubmit={this.handleSubmit}>
                <CardText>
                  <Label>Kullanıcı Adı</Label>
                  <Form.Control
                    type="text"
                    name="KullaniciAd"
                    required
                    placeholder="Kullanıcı Adı Girin"
                  ></Form.Control>
                </CardText>
                <CardText>
                  <Label>Şifre</Label>
                  <Form.Control
                    type="text"
                    name="Sifre"
                    required
                    placeholder="Şifre Girin"
                  ></Form.Control>
                </CardText>
                
                
                
                <button
                  className="btn btn-danger form-control"
                  type="submit"
                  onClick={this.handleClickButton}
                  
                >
                  Giriş Yap
                </button>
                
                <Modal
                  visible={this.state.visible}
                  width="500"
                  height="200"
                  effect="fadeInUp"
                  onClickAway={() => this.closeModal()}
                >
                  <div style={{ textAlign: "center", padding: "15px" }}>
                    <h1>Hata !</h1>
                    <p>
                      Lütfen Kullanıcı Adınızı ya da Şifrenizi Kontrol Ediniz
                      !!! .
                    </p>
                    <NavLink
                      className="form-control btn btn-primary"
                      onClick={() => this.closeModal()}
                    >
                      Kapat
                    </NavLink>
                  </div>
                </Modal>
              </form>
            </CardBody>
          </Card>
        </div>
      </Router>
    );
  }
}
export default withRouter(GirisYap);
