import React, { Component } from "react";
import { Button,  Form } from "react-bootstrap";

class Gonderi extends Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

        this.state = {
          photo: ' ',
        };
      }
       handleChange(event){
        this.setState({
          photo:event.target.value
        })
      }

      handleSubmit(e){
        e.preventDefault();
        fetch("https://localhost:44312/api/posts", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Id: null,
            KullaniciId: 1,
            Resim: e.target.photo.value,
            Aciklama: e.target.description.value,
          }),
        })
      }

  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="post card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <img
                    src={this.state.photo}
                    className="img-thumbnail img-fluid"
                    id="img"
                    alt="..."
                    style={{ height: "300px", width: "400px" }}
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-content">
                    <p>
                    <span className="card-title">Fotoğraf Linki</span>
                      <Form.Control type="text" className="form-control" name="photo" onChange={this.handleChange} ></Form.Control>
                      <span className="card-title">Açıklama</span>
                      <Form.Control type="text" className="form-control" name="description"></Form.Control>
           
                      
                    </p>
                    <button className="form-control btn btn-primary" type="submit">Oluştur</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Gonderi;
