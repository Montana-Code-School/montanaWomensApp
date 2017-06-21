/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
//
// import xml2js from 'xml2js';
// // import striptags from 'striptags';
//
//
//
//
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
//
//
// function Navbar(prop){
//
//   return(
//     <div className="navbar navbar-default">
//       <div className="navbar-header">
//        <div className='dropdown'>
//         <button className = 'btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle ='dropdown'
//         aria-haspopup='true' aria-expanded='false'>
//         Help Line
//         </button>
//       <div className='dropdownMenu' aria-labelledby='dropdownMenuButton'>
//         <a className ='dropdownItem' href='#'> Emergency call 911</a>
//         <a className ='dropdownItem' href='#'> Drug and Alcohol Abuse 1-(855)603-2445</a>
//         <a className ='dropdownItem' href='#'> Domestic Violence Hotline 1-(800)799-7233</a>
//        </div>
//       </div>
//       //  <ul className="navbar-nav">
//         //  <li className="active"><a href="#">Home</a></li>
//           //<li className="color"><a href="#">Emergency Hotline: 1-800-000-000</a></li>
//         //</ul>
//       </div>
//     </div>
//   );
// }
//
// function Header() {
//   return(
//     <div className="jumbotron">
//
//       <h1> Montana Women </h1>
//       <h3> Empowering Montana Women With the Resources They Need </h3>
//       <h4> "The Women's Swiss Army Knife!"</h4>
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
//     fontSize: 20,
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
//   render:function(){
//     var rowStyle={
//       WebkitFilter: 'drop-shadow(0px 0px 5px  #666)',
//       filter: 'drop-shadow(0px 0px 5px #666)'
//    };
//   return(
//   <div>
//     <ul className='row'>
//     <Box bgcolor="#8f3985" className="col-lg-4" title="Pharmacies" description="Find a pharmacy near you"/>
//     <Box bgcolor="#1B998B" link="/doctors.html" className="col-lg-4" title="Doctors/Clinics" description="Find a clinic/doctor to suit your needs" />
//     <Box bgcolor="#A44200" link="/counseling" className="col-lg-4" title="Counseling" description="Find the help you need." />
//     </ul>
//
//     <ul className='row'>
//     <Box bgcolor="#C9621e" link="/birthcontrol.html" title="Birth Control Methods" description="Explore different methods" />
//     <Box bgcolor="#D664BE" link="/resources.html" title="Resources" description="Connect with local women!" />
//     <Box bgcolor="#1B998B" link="/symptomchecker.html" title="Symptom Checker" description=" blahhhhhh" />
//     </ul>
//   </div>
//   );
//  }
// }
//
//
// function App() {
//   return(
//     <div>
//       <Navbar />
//       <Header/>
//       <Row />
//       <Gmap />
//     </div>
//   );
// }
//
//     ReactDOM.render(
//       <App />,
//       document.getElementById('container'));


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map