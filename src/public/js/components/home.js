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
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}>Emergency Help Lines</MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Substance Abuse (Drug and Alcohol)<br/><b> 1(855)603-2445</b></a></MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Domenstic Violence<br/><b>1(800)799-7233</b></a></MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>YWCA <br/><b> 1(800)483-7858</b></a></MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Suicide Prevention Lifeline<br/><b> 1(800)273-8255</b></a></MenuItem>
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
