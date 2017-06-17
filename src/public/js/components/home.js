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

// class Header extends React.Component {
//   render() {
//   return(
//     <div style={headerStyle} className="jumbotron img-responsive">
//
//       <h1> MT Womens Wellness </h1>
//       <h3> Empowering Montana Women With the Resources They Need </h3>
//
//     </div>
//   );
// }

class Homepage extends React.Component {
  render() {
  return (

  <div>
  <Jumbotron>
    <JumbotronCol className="jumbo-fadeUp right img">
      <img src="./css/img/banner_larger.jpg" className="waves-graphic"/>
    </JumbotronCol>
   </Jumbotron>

   
    <HoverRow className="hover-row1">
      <Link to ='/counselors'><HoverCol imgSrc="css/img/text-counseling.png" /></Link>
      <a href="/resources"><HoverCol imgSrc="css/img/text-resources.png" /></a>
    </HoverRow>

    <HoverRow className="hover-row2">
      <a href="/pharmacies"><HoverCol imgSrc="css/img/text-pharmacy.png" /></a>
      <a href="/doctors"><HoverCol imgSrc="css/img/text-docs.png" /></a>
      <a href="/birthcontrol"><HoverCol imgSrc="css/img/text-birth-control.png" /></a>
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
