import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Label,
} from "reactstrap";
import { BrowserRouter as Router, NavLink,withRouter } from "react-router-dom";
import "./App.css";
import "./Logo/logo.PNG";

class GirisYap extends Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    handleSubmit(e){
        e.preventDefault();
        this.props.history.push("/Anasayfa");


        
    }
  render() {
      console.log("props",  this.props);
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
              <form  onSubmit={this.handleSubmit} >
                <CardText>
                  <Label>Kullanıcı Adı</Label>
                  <input type="text" className="form-control"></input>
                </CardText>
                <CardText>
                  <Label>Şifre</Label>
                  <input type="text" className="form-control"></input>
                </CardText>

                <button className="btn btn-danger form-control" type="submit" >
                  Giriş Yap
                </button>
              </form>
            </CardBody>
          </Card>
        </div>
      </Router>
    );
  }
}
export default withRouter(GirisYap);
