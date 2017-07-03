import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';
import Flexbox from 'flexbox-react';
import Table from './table';

export default class Pharmacy extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        type: 'pharmacy',
        array: [],
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#FF3333"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#8B008B"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#FF0099"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#468847"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#00617d"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#30a4E7"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#000000"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#FFFFFF"}]}]
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
        backgroundColor:'#ff80df',
        color: "#333",
        fontFamily: "helvetica",
        fontSize: 55,
        textAlign: "center",
        marginBottom: 0,
      };

      return (
        <div>
        <h1 style = {resourcesStyle}>Find a Local Pharmacy Near You</h1>
        <Flexbox className="healthPage pharmacy" flexDirection="row">
              <Gmap array={this.state.array} icon={'../../css/img/icon_local_pharmacy.png'} styles={this.state.styles}/>
              <Table array={this.state.array} />
            </Flexbox>
        </div>
      )}
    };
