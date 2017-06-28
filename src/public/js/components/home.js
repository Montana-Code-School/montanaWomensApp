import React from 'react';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


  var headerStyle = {
    marginBottom: "0px",
    marginTop: "0px",
    height: "575px",
    paddingTop: "90px",
    color: "white",
    textAlign: "center",
    backgroundImage: "url('css/img/banner_larger.jpg')",
    backgroundSize:"contain",
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat"
}

class Homepage extends React.Component {
  render() {
  return (

  <div>
  <Jumbotron>
    <JumbotronCol className="jumbo-fadeUp right img">

      <img src="./css/img/banner_larger.jpg" className="photo"/>
      <h1 className="banner" > MT Womens Wellness Resource </h1>
    </JumbotronCol>
   </Jumbotron>


    <HoverRow className="hover-row1">
      <Link to ='/counselors'><HoverCol imgSrc="css/img/text-counseling.png" /></Link>
      <Link to="/resources"><HoverCol imgSrc="css/img/text-resources.png" /></Link>
    </HoverRow>

    <HoverRow className="hover-row2">
      <Link to="/pharmacies"><HoverCol imgSrc="css/img/text-pharmacy.png" /></Link>
      <Link to="/doctors"><HoverCol imgSrc="css/img/text-docs.png" /></Link>
      <Link to="/birthcontrol"><HoverCol imgSrc="css/img/text-birth-control.png" /></Link>
    </HoverRow>

    <Jumbotron className="jumbo-fadeIn fade-stagger">

    <JumbotronCol fadeEffect="fadeInRight" style={{width: '50%'}}>
      <h1 style={{paddingTop: '150px'}}>Not Feeling Right?</h1>
      <h3>Try our quick and easy symptom checker as a first step toward discovering what might be wrong. </h3>
      <a href="/symptomchecker.html"><button className="btn">SYMPTOM CHECKER</button></a>
    </JumbotronCol>

    <JumbotronCol className="jumbo-fadeUp right img">
      <img src="css/img/health-symbol.jpg" className="waves-graphic"/>
    </JumbotronCol>

  </Jumbotron>


    <div style={{height: '300px'}}>
      <DrawerContainer>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}>Counseling</MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Resources</a></MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Birth Control Methods</a></MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Docs and Clinics</a></MenuItem>
      </DrawerContainer>
    </div>
</div>
  )};
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}
