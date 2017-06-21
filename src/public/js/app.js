import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import cors from 'cors';
// // import Gmap from './gmap';

//
// infowindow = new google.maps.InfoWindow();
//    var service = new google.maps.places.PlacesService(map);
//    service.nearbySearch({
//      location: missoula,
//      radius: 5000,
//      type: ['pharmacy']
//    }, callback);
//  }
//
//  function callback(results, status) {
//    if (status === google.maps.places.PlacesServiceStatus.OK) {
//      for (var i = 0; i < results.length; i++) {
//        createMarker(results[i]);
//      }
//    }
//  }
 export default class GooglePlaces extends React.Component{

   var Google_Places_API_key='AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE';

   var BaseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.878178,-114.001003&radius=5000&type=pharmacy';
 getInitialState: function(){
   return {
     data:[]

   }
 },
  componentDidMount:function(){
    var _this=this;
    this.serverRequest =

 axios
 .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.878178,-114.001003&radius=5000&type=pharmacy&key')
   .then(function (response) {
     _this.setState({

     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });

 }
}
