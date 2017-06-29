import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';
import Flexbox from 'flexbox-react';

  export default class Pharmacy extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        type: 'pharmacy',
        array: [],
        InfoWindow: null
      }
      this.handleClick = this.handleClick.bind(this);

      axios .get("http://localhost:3003/api/places/"+this.state.type)
            .then(res => {
              const array = res.data.results;

              this.setState({
                array: array,
            });

          })
        }

        handleClick() {
            this.setState(prevState => ({
              infoWindow: !prevState.infoWindow
            }));
          }

    render() {

      return (
          <div className="pharmPage">
            <Flexbox flexDirection="row">
              <Gmap array={this.state.array} onClick={this.state.onClick}/>
              <ul>
                {this.state.array.map((pharmacy, i) =>
                  <li key={i}>{pharmacy.name}</li>
                )}
              </ul>
            </Flexbox>
          </div>
      )}
    };
