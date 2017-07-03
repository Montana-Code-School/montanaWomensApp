import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';
import Flexbox from 'flexbox-react';
import Table from './table';

export default class Doctors extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        type: 'doctor',
        array: [],
        styles: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#0072B2"},{"saturation":100},{"lightness":-54},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#E69F00"},{"saturation":100},{"lightness":-49},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#D55E00"},{"saturation":100},{"lightness":-46},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#CC79A7"},{"saturation":-55},{"lightness":-36},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"hue":"#F0E442"},{"saturation":-15},{"lightness":-22},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"hue":"#56B4E9"},{"saturation":-23},{"lightness":-2},{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"hue":"#000000"},{"saturation":0},{"lightness":-100},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#009E73"},{"saturation":100},{"lightness":-59},{"visibility":"on"}]}]
      }

      axios .get("http://localhost:3003/api/places/"+this.state.type)
            .then(res => {
              const array = res.data.results;

              this.setState({
                array: array,
            });
          })
        }

    render() {
      var resourcesStyle = {
        padding:50,
        marginTop:65,
        height: 300,
        backgroundColor:'#1B998B',
        color: "#333",
        fontFamily: "helvetica",
        fontSize: 55,
        textAlign: "center",
        marginBottom: 0,
      };

      return (
          <div>
          <h1 style={resourcesStyle}>Find Local Doctors and Clinics Near You</h1>
            <Flexbox className="healthPage doctor" flexDirection="row">
              <Gmap array={this.state.array} icon={'../../css/img/icon_local_hospital.png'} styles={this.state.styles}
              />
              <Table array={this.state.array} />
            </Flexbox>
          </div>
      )}
    };
