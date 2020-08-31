import React, { Component } from "react";
import UyeOl from "./UyeOl";
import GirisYap from "./GirisYap";
import Ziyaret from "./Ziyaret";
import Anasayfa from "./Anasayfa";
import createHistory from "history/createBrowserHistory";
import Profil from "./Profil";
import { BrowserRouter as Router, Route } from "react-router-dom";

const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <Route>
            <Route path="/" component={Ziyaret} exact />
            <Route path="/Anasayfa" component={Anasayfa} exact />
            <Route path="/Profil" component={Profil} exact />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
