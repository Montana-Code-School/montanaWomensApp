import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Flexbox from 'flexbox-react';

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

  <Flexbox flexDirection="row" justifyContent="center">
      <img src="./css/img/banner_larger.jpg" className="photo"/>
      <h1 className="banner" > Montana Women&rsquo;s Wellness Resource </h1>
   </Flexbox>

   <div style={{height: '1em'}}>
   <DrawerContainer>
     <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}>Emergency Help Lines</MenuItem>
     <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Substance Abuse (Drug and Alcohol)<br/><b>1(855)603-2445</b></a></MenuItem>
     <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Domestic Violence<br/><b>1(800)483-7858</b></a></MenuItem>
     <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Suicide Prevention Lifeline<br/><b>1(800)273-8255</b></a></MenuItem>
     <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>YWCA<br/><b>1(800)483-7858</b></a></MenuItem>
   </DrawerContainer>
   </div>


   <div>
    <Flexbox flexDirection="row" justifyContent="center" flexWrap="wrap" minHeight="20vh" paddingTop="5em">
      <Flexbox element='section'>
        <Link to ='/counselors'><HoverCol imgSrc="css/img/text-counseling.png" /></Link>
        <Link to='/resources'><HoverCol imgSrc="css/img/text-resources.png" /></Link>
      </Flexbox>
    </Flexbox>
  <Flexbox flexDirection="row" justifyContent="center" minHeight="20vh" paddingTop="1em" paddingBottom="5em">
    <Flexbox element='div'>
      <Link to="/pharmacies"><HoverCol imgSrc="css/img/text-pharmacy.png" /></Link>
      <Link to="/doctors"><HoverCol imgSrc="css/img/text-docs.png" /></Link>
      <Link to="/birthcontrol"><HoverCol imgSrc="css/img/text-birth-control.png" /></Link>
    </Flexbox>
  </Flexbox>
  </div>



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


</div>
  )};
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
};
