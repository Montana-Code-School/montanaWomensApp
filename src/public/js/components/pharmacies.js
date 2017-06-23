

//
// import React from 'react';
// import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

var Promise = require('q').Promise;
//
// var arrayContaining = jasmine.arrayContaining;
// var objectContaining = jasmine.objectContaining;
// var stringMatching = jasmine.stringMatching;
// import axios from 'axios';
// import cors from 'cors';
//
//       const coords = {
//         lat: 46.878178,
//         lng:-114.001003
//       };
//
//       const params = {v: '3.exp', key: 'AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE'};
//
//       //make axios call to wellness api

  // var googleMapsClient = require('@google/maps').createClient({
  // key: 'AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE'
  // });

  export default class Gmap extends React.Component {

    constructor(props) {
      super(props);
      this.state = {type: 'pharmacy'}
    //   googleMapsClient.geocode({
    //   location: "-33.865, 151.038"
    // }, function(err, response) {
    //   if (!err) {
    //     console.log(response.json.results);
    //   }
    // });
      axios.get("http://localhost:3003/api/places/"+this.state.type)
        .then(res => {
          console.log(res.data.results[0].name);
        })
    }
     onSubmit (event) {
      this.setState({type: this.state.type})
      event.preventDefault();
    }
    render() {
      return (
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      )};

}
