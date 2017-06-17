import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
// // import Gmap from './gmap';
// // import {render} from 'react-dom';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
// // import {Bcontrol} from './birthcontrol.js';
//
// const App = ()=> <h1>hello world</h1>
//
// //


class App extends React.Component {

render () {
function Header() {
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


  return(
    <div style={headerStyle} className="jumbotron img-responsive">

      <h1> MT Womens Wellness </h1>
      <h3> Empowering Montana Women With the Resources They Need </h3>

    </div>
  );
}

function Homepage(prop) {
  return (
  <div>
  <Navbar navColor='rgba(143, 57, 133, .8)'>
    <Nav pullLeft>
      <NavItem className="nav-item"><a href="/index.html">HOME</a></NavItem>
      <NavItem className="nav-item">ABOUT US</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem className="nav-item">CONTACT</NavItem>
    </Nav>
  </Navbar>

  <HoverRow className="hover-row1">
    <a href="/counseling.html"><HoverCol imgSrc="css/img/text-counseling.png" /></a>
    <a href="/resources.html"><HoverCol imgSrc="css/img/text-resources.png" /></a>
  </HoverRow>
  <HoverRow className="hover-row2">
    <a href="/pharmacies.html"><HoverCol imgSrc="css/img/text-pharmacy.png" /></a>
    <a href="/doctors.html"><HoverCol imgSrc="css/img/text-docs.png" /></a>
    <a href="/birthcontrol.html"><HoverCol imgSrc="css/img/text-birth-control.png" /></a>
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
};

}
export default App
