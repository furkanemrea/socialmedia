import React, { Component } from "react";
import Anasayfa from './Anasayfa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faSwatchbook,
  faAdjust,
  faAddressBook,
  faLocationArrow,
  faCalendar,
  faBook,
} from "@fortawesome/free-solid-svg-icons";


class AramaYap extends Component {
  constructor(props){
    super(props)
  }
  render() {
      const {userSearch}=this.props;
  
    return (
      <div>
        <div>
        {userSearch}
        </div>
      </div>
    );
  }
}

export default AramaYap;
