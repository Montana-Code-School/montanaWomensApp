import React from 'react';


export default class Pharmacies extends React.Component{

  render (){
    var pharmaciesStyle = {
      padding:50,
      marginTop:65,
      height: 300,
      backgroundColor:'#8f246b',
      color: "#333",
      fontFamily: "monospace",
      fontSize: 55,
      textAlign: "center"
    };



    return (
      <div style = {pharmaciesStyle}>
           <h1>Find a Pharmacy That Fits Your Needs</h1>


      </div>

      );
     }
   }
