import React from 'react';



class Photo extends React.Component{
  render (){
    return(
      <div>
       <img  src="css/img/health-symbol.jpg" style={imgStyle} className="waves-graphic"/>

      </div>
    );
  }
}

class Header extends React.Component {
  render (){
    return (
        padding:50,
        marginTop:65,
        height: 300,
        backgroundColor:'#b34700',
        color: "#333",
        fontFamily: "monospace",
        fontSize: 55,
        textAlign: "center"

   );
  }
}

class Map extends React.Component{
  render(){
    return(

      <h1> Hello world</h1>

    );
  }
}


export default class Counselors extends React.Component{
  render (){
    var counselorsStyle = {
        // padding: 5,
        // margin: 5,
        backgroundColor:'#F00',
        padding:50,
        marginTop:65,
        height: 300,
        backgroundColor:'#b34700',
        color: "#333",
        fontFamily: "monospace",
        fontSize: 55,
        textAlign: "center"


    };
    return (
      <div style = {counselorsStyle}>
          <h1> Find a Local Counselor Near You to Get Help and Support for Youself or Your Family Members</h1>

           <Map/>
      </div>


      );
     }
   }
