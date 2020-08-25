import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Label
} from "reactstrap";
import { Form } from "react-bootstrap";
import { BrowserRouter as Router,withRouter } from "react-router-dom";
import "./App.css";
import "./Logo/logo.PNG";

class GirisYap extends Component {
  state={
    kontrol:' ',
  }
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClickButton=this.handleClickButton.bind(this);
        
    }
    async handleSubmit(e){
      
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
      }).then( (resp)=> resp.json()).then(data=>{
        
        this.setState({
          kontrol:data,
     
        })
      }); 



      if(this.state.kontrol==='Added Succesfully'){
        console.log('Succes');
      }
      else  
      {
        console.log('Kullanıcı Adı ya da şifre hatalı');
      }
    



      
    }
    //handleClickButton Event'i handleSubmit Event'inden önce yapıyor bu da hataya sebep oluyor.
    handleClickButton(){
      // if(this.state.kontrol==='Added Succesfully'){

      // }
      // else  
      // {
      //   console.log('Kullanıcı Adı ya da şifre hatalı');
      // }
      

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
              <form  onSubmit={this.handleSubmit} >
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

                <button className="btn btn-danger form-control" type="submit" onClick={this.handleClickButton} >
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


// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardTitle,
//   CardText,
//   Label,
//   Form,
// } from "reactstrap";
// import { BrowserRouter as Router, NavLink, withRouter } from "react-router-dom";
// import "./App.css";
// import "./Logo/logo.PNG";

// class GirisYap extends Component {
//   state={
//     log:' ',
//   }
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.onClickHandle=this.onClickHandle.bind(this)
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.history.push("/Anasayfa");
//   }

//   onClickHandle(e) {
//     e.preventDefault();
//     fetch("https://localhost:44312/api/user", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Id: null,
//         KullaniciAd: e.target.KullaniciAd.value,
//         Sifre: e.target.Sifre.value,
//       }),
//     }).then((resp)=>{
//       this.setState({
//           log:resp.text()
//       })
//     });
//     console.log(this.state.log);
//   }
//   render() {
//     console.log("props", this.props);

//     return (
//       <Router>
//         <div style={{ padding: "50px" }}>
//           <Card>
//             <div>
//               <img
//                 src="https://i.hizliresim.com/MkT257.png"
//                 style={{ position: "absolute", left: "10px" }}
//                 width="70px"
//                 height="60px"
//               ></img>
//               <CardHeader
//                 className="h1"
//                 style={{ textAlign: "center", color: "blue" }}
//               >
//                 GİRİŞ YAP
//               </CardHeader>
//             </div>
//             <CardBody>
//               <CardTitle></CardTitle>
//               <form onSubmit={this.handleSubmit}>
//                 <CardText>
//                   <Form.Group>
//                     <Label>Kullanıcı Adı</Label>
//                     <Form.Control
//                       type="text"
//                       name="KullaniciAd"
//                       required
//                       placeholder="Kullanıcı Adı Girin"
//                     ></Form.Control>
//                   </Form.Group>
//                 </CardText>
//                 <CardText>
//                   <Label>Şifre</Label>
//                   <Form.Control
//                       type="text"
//                       name="Sifre"
//                       required
//                       placeholder="Şifre Girin"
//                     ></Form.Control>
//                 </CardText>

//                 <button
//                   className="btn btn-danger form-control"
//                   type="submit"
//                   onClick={this.onClickHandle}
//                 >
//                   Giriş Yap
//                 </button>
//               </form>
//             </CardBody>
//           </Card>
//         </div>
//       </Router>
//     );
//   }
// }
// export default withRouter(GirisYap);
