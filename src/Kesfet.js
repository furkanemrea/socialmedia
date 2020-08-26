import React, { Component } from "react";
import { Button,Comment, Icon, Label, Image, Reveal, Grid } from "semantic-ui-react";

class Kesfet extends Component {
  constructor(props) {
    super();
    this.handleFavori = this.handleFavori.bind(this);
    this.state = {
      Id:0,
      profil: [],
    };
  }
  componentDidUpdate(){
    this.getList();
  }
  getList() {
    fetch("https://localhost:44312/api/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          profil: data,
        });
      });
  }
  handleFavori(e,Id) {
  
    e.preventDefault();
    fetch("https://localhost:44312/api/posts/"+Id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });

    document.getElementsByName("btn"+Id).disabled=true;
   
  }
  componentDidMount() {
    this.getList();
  }
  render() {
    const { profil } = this.state;
    return (
      <div style={{ padding: "50px" }}>
        {profil.map((gonderi) => (
          <div>
            <h3 style={{ textAlign: "center", color: "blue" }}>
              {gonderi.Ad} {gonderi.Soyad}
              {" ( "}
              {gonderi.KullaniciAd}
              {" )"}
            </h3>
            <Grid centered columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <Reveal animated="rotate left">
                    <Reveal.Content visible>
                      <img
                        circular
                        size="small"
                        height="250px"
                        width="250px"
                        src="https://thumbs.gfycat.com/MiserlyEvergreenCalf-small.gif"
                      />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                      <img
                        circular
                        size="small"
                        height="250px"
                        width="250px"
                        src={gonderi.Resim}
                      />
                    </Reveal.Content>
                  </Reveal>
                </Grid.Column>
                <p>
                  <span>
                    <div style={{ color: "gray" }}>{gonderi.Tarih}</div>
                  </span>
                  {gonderi.Aciklama}
                </p>
              </Grid.Row>
      
              <Grid.Row>
                <Button as="div" labelPosition="right">
                  <Button icon onClick={(e)=>this.handleFavori(e,gonderi.Id)}    color="red">
                    <Icon name="heart" />
                    Beğen
                  </Button>
                  <Label as="a" basic pointing="left">
                    {gonderi.Begeni}
                  </Label>
                </Button>
              </Grid.Row>
            </Grid>
            <hr></hr>
          </div>
        ))}
      </div>
    );
  }
}

export default Kesfet;
