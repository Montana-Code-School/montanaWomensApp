import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';

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
      return (
          <div className="healthPage pharmacy">
            <Flexbox flexDirection="row">
              <Gmap array={this.state.array} icon={'../../css/img/icon_local_pharmacy.png'}/>

              <ul>
                {this.state.array.map((pharmacy, i) =>
                  <li key={i}>{pharmacy.name}</li>
                )}
              </ul>
            </Flexbox>
          </div>
      )}
    };
