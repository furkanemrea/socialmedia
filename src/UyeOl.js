import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,

} from "reactstrap";
import "./App.css";
import "./Logo/logo.PNG";
import { Button,  Form } from "react-bootstrap";

class UyeOl extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch("https://localhost:44312/api/values", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: null,
        KullaniciAd: e.target.KullaniciAd.value,
        Sifre: e.target.Sifre.value,
        Ad: e.target.Ad.value,
        Soyad: e.target.Soyad.value,
        Mail: e.target.Mail.value,
        Profil: e.target.Profil.value,
      }),
    })
     
  }
  render() {
    return (
      <div style={{padding:"50px"}}>
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
              ÜYE OL
            </CardHeader>
          </div>
          <CardBody>
            <CardTitle></CardTitle>
            <CardText>
            <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                      <Form.Label>Kullanıcı Adı</Form.Label>
                      <Form.Control
                        type="text"
                        name="KullaniciAd"
                        required
                        
                        placeholder="Kullanıcı Adı Girin"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Şifre</Form.Label>
                      <Form.Control
                        type="text"
                        name="Sifre"
                        required
                        
                        placeholder="Şifre Girin"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Ad</Form.Label>
                      <Form.Control
                        type="text"
                        name="Ad"
                        required
                        
                        placeholder="Adınızı Girin"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Soyad</Form.Label>
                      <Form.Control
                        type="text"
                        name="Soyad"
                        required
                        
                        placeholder="Soyadınızı Girin"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Mail</Form.Label>
                      <Form.Control
                        type="text"
                        name="Mail"
                        required
                        
                        placeholder="Mail Girin"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Profil Resmi Link</Form.Label>
                      <Form.Control
                        type="text"
                        name="Profil"
                        required
                        
                        placeholder="Profil Resmi'nin linkini Girin"
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Button
                        variant="danger"
                        type="submit"
                        className="form-control"
                      >
                        Üye Ol
                      </Button>
                    </Form.Group>
                  </Form>
            </CardText>
           
           
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default UyeOl;
