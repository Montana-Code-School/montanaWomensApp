import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Gmap from './gmap';
// import {render} from 'react-dom';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
// import {Bcontrol} from './birthcontrol.js';

// var { Router,
//       Route,
//       IndexRoute,
//       IndexLink,
//       Link }= ReactRouter;

function Homepage(prop) {
  return (
  <div>
  <Navbar navColor='rgba(143, 57, 133, 0.6)'>
    <Nav pullLeft>
      <NavItem className="nav-item"><a href="/index.html">HOME</a></NavItem>
      <NavItem className="nav-item">ABOUT US</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem className="nav-item">CONTACT</NavItem>
    </Nav>
  </Navbar>

  <Jumbotron className="jumbo-bg">

    <JumbotronCol
      fadeEffect="fadeUP"
      style={{display: 'flex', padding: '130px', justifyContent: 'center'}}>
      <img src="css/img/banner_larger.jpg" className="jumbo-fadUp right" />
    </JumbotronCol>
   </Jumbotron>


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
      <h1 style={{paddintTop: '200px'}}>Not Feeling Right?</h1>
      <h3>Try our symptom checker to identify what could be wrong and if you should seek a medical professional. </h3>
      <a href="/symptomchecker.html"><button className="btn">SYMPTOM CHECKER</button></a>
    </JumbotronCol>

    <JumbotronCol className="jumbo-fadeUp right img">
      <img src="css/img/health-symbol.jpg" className="waves-graphic"/>
    </JumbotronCol>
   </Jumbotron>


   <Jumbotron className="jumbo-fadeIn">
    <JumbotronCol fadeEffect="fadeInRight">
      <div style={{height: '650px'}}>
        <img src="" />
      </div>
    </JumbotronCol>

    <JumbotronCol fadeEffect="fadeInLeft" style={{width: '50%'}}>
      <div style={{height: '650px', paddingTop: '125px'}}>
        <h1>What Now?</h1>
        <h2>Something</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor vestibulum pharetra.</p>
        <h2>Something Else</h2>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus elit, sed feugiat nunc nibh ut purus. Curabitur ac.</p>
        <h2>And Another</h2>
        <p>Ere. Maecenas sit amet enim ut augue varius ullamcorper ac id ante. Curabitur efficitur.</p>
      </div>
    </JumbotronCol>
   </Jumbotron>
   <Jumbotron className="jumbo-fadeIn fade-stagger">
    <JumbotronCol fadeEffect="fadeInRight" style={{width: '50%'}}>
      <h1>We probably Do Not Need This</h1>
      <h2>But here it is</h2>
      <p>Donec interdum semper tortor, at pharetra magna. Vivamus dignissim nec erat a semper. Etiam nec porttitor mauris. Aenean in.</p>
      <h2>Just In Case</h2>
      <p>Integer diam leo, faucibus nec lacus non, suscipit porta ipsum. Mauris elementum est et sapien.</p>
      <h2>It Could be something</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor vestibulum pharetra.</p>
      <h2>Or not</h2>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus elit, sed feugiat nunc nibh ut purus. Curabitur ac.</p>
    </JumbotronCol>
   </Jumbotron>

    <div style={{height: '300px'}}>
      <DrawerContainer>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}>Menu Item 1</MenuItem>
        <MenuItem hoverStyle={{backgroundColor: 'lightgray'}}><a>Menu Item 2</a></MenuItem>
      </DrawerContainer>
    </div>


  </div>
)};




// class App extends React.Component {
//
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       categories: []
// //     };
// //   }
// //
// //
// // componentDidMount() {
// //   axios.get('http://localhost:3003/api/info')
// //     .then(res => {
// //       const data = res.data;
// //       var newData = striptags(data, [], '\n' );
// //       this.setState({categories:newData});
// //     });
// //   }
//
// render() {
//
//   return (
//
//     <div>
//       <h1>DATA LOOKS LIKE:</h1>
//
//     </div>
//
//     );
//   }
// }


// function Navbar(prop){
//
//   return(
//     <div className="navbar navbar-default">
//       <div className="navbar-header">
//         <ul className="navbar-nav">
//           <li className="active"><a href="#">Home</a></li>
//           <li className="color"><a href="#">Emergency Hotline: 1-800-000-000</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// }
//
// function Header() {
//   var headerStyle = {
//     marginBottom: "0px",
//     height: "575px",
//     color: "white",
//     textAlign: "center",
//     backgroundImage: "url('img/banner_larger.jpg')",
//     backgroundSize:"100% 100%"
//
// }
//
//
//   return(
//     <div style={headerStyle} className="jumbotron">
//
//       <h1> Montana Women </h1>
//       <h3> Empowering Montana Women With the Resources They Need </h3>
//
//     </div>
//   );
// }
//
// function Box(prop) {
//   var boxStyle = {
//     backgroundColor: prop.bgcolor,
//     display: "inline-block",
//     padding: "5px",
//     margin: "5px",
//     textAlign: "center",
//     fontSize: "20",
//     // color: "white"
//
//   };
//   return (
//     <div className= "col-lg-4" style={boxStyle}>
//       <h2><a href={prop.link}> {prop.title} </a></h2>
//       <p> {prop.description} </p>
//     </div>
//   );
// }
//
// function Row() {
//   return(
//   <div>
//     <ul className='row'>
//     <Box bgcolor="#8f3985" link="/pharmacies.html" className="col-lg-4" title="Pharmacies" description="Find a pharmacy near you"/>
//     <Box bgcolor="#1B998B" link="/doctors.html" className="col-lg-4" title="Doctors/Clinics" description="Find a clinic/doctor to suit your needs" />
//     <Box bgcolor="#A44200" link="/counseling.html" className="col-lg-4" title="Counseling" description="Find the help you need." />
//     </ul>
//
//     <ul className='row'>
//     <Box bgcolor="#C9621e" link="/birthcontrol.html" title="Birth Control Methods" description="Explore different methods" />
//     <Box bgcolor="#D664BE" link="/resources.html" title="Resources" description="Connect with local women!" />
//     <Box bgcolor="#1B998B" link="/symptomchecker.html" title="Symptom Checker" description=" Check Yoself!" />
//     </ul>
//   </div>
//   );
// }


function App() {
  return(
    <div>
      <Homepage />
    </div>
  );
}
// var destination = document.querySelector('#container');

    // ReactDOM.render(
    //   <ReactRouter.Router>
    //   <ReactRouter.Route path='/' component ={App}
    //     <IndexRoute component = {Homepage}/>
    //     <IndexRoute component = {Bcontrol}/>
    //
    //     </ReactRouter.Route>
    //     </ReactRouter.Router>,
    //     destination
    //   );
      // document.getElementById('container'));

      ReactDOM.render(
        <App />,
        document.getElementById('container')
      );
