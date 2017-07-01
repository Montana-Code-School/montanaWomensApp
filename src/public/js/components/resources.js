import React from 'react';


   export default class Resources extends React.Component {

      render () {
        var resourcesStyle = {
          padding:50,
          marginTop:65,
          height: 300,
          backgroundColor:'#ff80df',
          color: "#333",
          fontFamily: "helvetica",
          fontSize: 55,
          textAlign: "center"
        };

        return (
         <div>
          <h1 style = {resourcesStyle}> Plug In and Get Connected With Other Local Women </h1>

            run
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
