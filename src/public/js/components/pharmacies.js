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
        textAlign: "center"
      };



      return (
        <div>
        <h1 style = {resourcesStyle}>Local Pharmacies</h1>
            <Flexbox className="healthPage pharmacy" flexDirection="row">
              <Gmap array={this.state.array} icon={'../../css/img/icon_local_pharmacy.png'}/>
              <Table heading="Pharmacies near you" array={this.state.array} />
            </Flexbox>
        </div>
      )}
    };
