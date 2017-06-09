import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



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


function Navbar(prop){

  return(
    <div className="navbar navbar-default">
      <div className="navbar-header">
        <ul className="navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li className="color"><a href="#">Emergency Hotline: 1-800-000-000</a></li>
        </ul>
      </div>
    </div>
  );
}

function Header() {
  return(
    <div className="jumbotron">

      <h1> Montana Women </h1>
      <h3> Empowering Montana Women With the Resources They Need </h3>
      <h4> "The Women's Swiss Army Knife!"</h4>

    </div>
  );
}

function Box(prop) {
  var boxStyle = {
    backgroundColor: prop.bgcolor,
    display: "inline-block",
    paddingTop: 10,
    paddingBottom: 40,
    paddingLeft:5,
    paddingRight:5,
    textAlign: "center",
    fontSize: "20"

  };
  return (
    <div className= "col-lg-3" style={boxStyle}>
      <h2> {prop.title} </h2>
      <p> {prop.description} </p>
    </div>
  );
}

function Row() {
  return(
  <div>
    <Box bgcolor="#8F3985" title="Pharmacies" description="Find a pharmacy near you"/>
    <Box bgcolor="#1B998B" title="Doctors/Clinics" description="Find a clinic/doctor to suit your needs" />
    <Box bgcolor="#D664BE" title="Counseling" description="Find the help you need." />
    <Box bgcolor="#A44200" title="Resources" description="Connect with local women!" />
  </div>
  );
}


function App() {
  return(
    <div>
      <Navbar />
      <Header/>
      <Row />
    </div>
  );
}

    ReactDOM.render(
      <App />,
      document.getElementById('container'));
