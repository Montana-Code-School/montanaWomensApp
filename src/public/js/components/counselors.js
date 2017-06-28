import React from 'react';
import Flexbox from 'flexbox-react';



class Photo extends React.Component{
  render (){
    return(
      <div>
       <img  src="css/img/health-symbol.jpg" style={imgStyle} className="waves-graphic"/>

      </div>
    );
  }
}


export default class Counselors extends React.Component{
  render (){
    var counselorsStyle = {
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
      <div>
          <h1 style = {counselorsStyle}> Find a Local Counselor Near You to Get Help and Support for Youself or Your Family Members</h1>
      </div>


      );
     }
   }

   var pStyle = {
     fontSize: "20px",
     padding: "5px",
     textAlign:"center"
   }

   var fontStyle = {
     fontSize: "18px",
     padding: "5px",
     textAlign:"center"
   }

   var titleStyle ={
     textAlign:"center"
   }

   var websiteStyle = {
     textAlign:"center"
   }

   class List extends React.Component {
     render (){
     return (
       <div>
       <h1 style = {titleStyle}> {this.props.title} </h1>
       <p style = {pStyle}> {this.props.description} </p>
       <h5 style = {websiteStyle}> {this.props.website} </h5>
       <h6 style = {fontStyle}> {this.props.number} </h6>
       </div>
     );
    }
   }
