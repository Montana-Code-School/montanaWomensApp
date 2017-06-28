import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';
// import BasicTable from './table';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



  export default class Pharmacy extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        type: 'pharmacy',
        array: [],
        latitude: [],
        longitude: [],
        placeId: [],
        markers: [{
          position: {lat: 46.472828,
                    lng: -114.035341},
          key: `key`,
        }]
      }

      axios.get("http://localhost:3003/api/places/"+this.state.type)
            .then(res => {
              const array = res.data.results;
              const latitude = [];
              const longitude = [];
              const placeId = [];

              array.map(pharmacy => {
                latitude.push(pharmacy.geometry.location.lat);
                longitude.push(pharmacy.geometry.location.lng);
                placeId.push(pharmacy.place_id);
              });


              this.setState({
                array: array,
                latitude: latitude,
                longitude: longitude,
                placeId: placeId
              })
              console.log(this.state.latitude);
            });
    }

    render() {
      return (
          <div>
          <Gmap array={this.state.array} />

          <ul>
          {this.state.array.map((pharmacy, i) =>
            <li key={i}>{pharmacy.name}</li>

            )}
          </ul>
          </div>

      )}
    };
