import React from 'react';


class Photo extends React.Component{
  render (){
    return(
      <div>
       <img style={imgStyle} className="img-responsive" src={this.props.link} />

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
        padding: 5,
        margin: 5,
        backgroundColor:'#F00'

    };
    return (
      <div style = {counselorsStyle}>
          <h1 style = {headerStyle}> Find a Local Counselor Near You to Get Help and Support for Youself or Your Family Members</h1>

           <Map/>
      </div>


      );
     }
   }
//
