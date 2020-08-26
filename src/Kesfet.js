import React, { Component } from "react";
import { Button, Icon, Label, Image, Reveal, Grid } from "semantic-ui-react";

class Kesfet extends Component {
  constructor(props) {
    super();
    this.handleFavori = this.handleFavori.bind(this);
    this.state = {
      begeni: 0,
      profil: [],
    };
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
  handleFavori() {
    this.setState({
      begeni: +1,
    });
  }
  componentDidMount(){
      this.getList();
  }
  render() {
    const { profil } = this.state;
    return (
      <div style={{ padding: "50px" }}>
        {profil.map((gonderi) => (
          <div>
            <h3 style={{ textAlign: "center", color: "blue" }}>
              {gonderi.Ad}{" "}{gonderi.Soyad}{" ( "}{gonderi.KullaniciAd}{" )"}
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
                    <div style={{ color: "gray" }}>03.12.2018</div>
                  </span>
                  {gonderi.Aciklama}
                </p>
              </Grid.Row>

              <Grid.Row>
                <Button as="div" labelPosition="right">
                  <Button icon onClick={this.handleFavori} color="red">
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
