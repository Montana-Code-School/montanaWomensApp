
import React from 'react';


export default class Doctors extends React.Component{
  render (){
    var doctorsStyle = {
      //image:'css/img/health-symbol.jpg',
      padding:50,
      marginTop:65,
      height: 300,
      backgroundColor:'#00b38f',
      color: "#333",
      fontFamily: "monospace",
      fontSize: 55,
      textAlign: "center"
    };
    return (
      <div style = {doctorsStyle}>
           <h1>Take the Time to Choose From the Many Doctors and Clinics in Your Area</h1>
      </div>

      );
     }
   }
