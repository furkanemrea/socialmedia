import React, { Component } from "react";
import { Container, Divider } from "semantic-ui-react";
import { Table } from "reactstrap";
import './App.css'
class Grup extends Component {
    
  constructor(props) {
    super(props);
  }

  state = {
    gruplar: [],
  };

  componentDidMount() {
    fetch("https://localhost:44312/api/grup")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          gruplar: data,
        });
      });
  }

  render() {
    const { gruplar } = this.state;
    return (
      <div className="App">
        <Table>
          <thead>
            <tr>
              <th>Grup Id</th>
              <th>Grup Adı</th>
              <th>Grup Açıklaması</th>
            </tr>
          </thead>
          <tbody>
            {gruplar.map((grup) => (
              <tr key={grup.Id}>
                <td>{grup.Id}</td>
                <td>{grup.Ad}</td>
                <td>{grup.Aciklama}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Grup;
