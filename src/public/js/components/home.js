import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Flexbox from 'flexbox-react';


class Homepage extends React.Component {
  render() {
  return (

  <div>

    <div className ='design-photo'>
    <Flexbox justifyContent='center'>

      <img src="./css/img/banner_larger.jpg" className=""/>
      <h1 className="banner" >Montana Women&rsquo;s Wellness Resource</h1>
    </Flexbox>
    </div>


   <div className='drawerStyle' style={{height: '-1em'}}>
     <DrawerContainer className="Drawer">

       <MenuItem hoverStyle={{backgroundColor: '#cbe8ed'}}><b>Emergency Help Lines</b></MenuItem>
       <MenuItem hoverStyle={{backgroundColor: '#cbe8ed'}}><a>Emergency<br/><b> Dial 911</b></a></MenuItem>
       <MenuItem hoverStyle={{backgroundColor: '#cbe8ed'}}><a>Substance Abuse (Drug and Alcohol)<br/> 1(855)603-2445</a></MenuItem>
       <MenuItem hoverStyle={{backgroundColor: '#cbe8ed'}}><a>Domestic Violence<br/>1(800)799-7233</a></MenuItem>
       <MenuItem hoverStyle={{backgroundColor: '#cbe8ed'}}><a>YWCA Crisis Hotline<br/> 1(800)483-7858</a></MenuItem>
       <MenuItem hoverStyle={{backgroundColor: '#cbe8ed'}}><a>Rape and Abuse National Hotline<br/> 1(800)656-HOPE</a></MenuItem>

     </DrawerContainer>
   </div>

     <div>
        <Flexbox flexDirection="row" justifyContent="center" minHeight="20vh" paddingTop ="2em">
           <Flexbox element = 'div'>
            <Link to='/counselors'><HoverCol imgSrc="css/img/text-counseling.png" /> </Link>

            <Link to="/resources"><HoverCol imgSrc="css/img/text-resources.png" /></Link>
           </Flexbox>
        </Flexbox>
          <Flexbox flexDirection="row"justifyContent="center" minHeight="20vh" paddingTop = "1em" paddingBottom = "2em" >
           <Flexbox element = 'div'>
             <Link to="/pharmacies"><HoverCol imgSrc="css/img/text-pharmacy.png" /></Link>
             <Link to="/doctors"><HoverCol imgSrc="css/img/text-docs.png" /></Link>
             <Link to="/birthcontrol"><HoverCol imgSrc="css/img/text-birth-control.png" /></Link>
          </Flexbox>
         </Flexbox>
     </div>

     <div className='symptoms'>

        <Jumbotron className="jumbo-fadeIn fade-stagger">
        <Flexbox flexDirection="row" justifyContent="center" minHeight="20vh" >

        <JumbotronCol fadeEffect="fadeInRight" style={{width: '50%'}}>
        <Flexbox flexDirection='column' element='section'>
          <h1 className='symptomheader'style={{paddingTop: '3em'}}>Not Feeling Right?</h1>
          <h3 className='symptomdescript'>Try our quick and easy symptom checker as a first step toward discovering what might be wrong. </h3>
          <a href="/symptomchecker.html"><button className="btn">SYMPTOM CHECKER</button></a>
        </Flexbox>
        </JumbotronCol>

        <Flexbox className="jumbo-fadeUp right img">
          <img src="css/img/health-symbol.jpg" className="health-symbol"/>
        </Flexbox>

       </Flexbox>
       </Jumbotron>
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
    );
  }
};
