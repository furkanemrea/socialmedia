import React from "react";
import UyeOl from "./UyeOl";
import Ziyaret from "./Ziyaret";
import Anasayfa from "./Anasayfa";
import Arkadas from "./Arkadas";
import Profil from "./Profil";
import {
  BrowserRouter as Router,  
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Route>
        <Route path="/" component={Ziyaret} exact />
        <Route path="/Anasayfa" component={Anasayfa} exact />
        <Route path="/Profil" component={Profil} exact />
        </Route>
      </Router>

   
    </div>
  );
}

export default App;
