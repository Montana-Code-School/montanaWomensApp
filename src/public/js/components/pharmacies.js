import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';




  export default class Pharmacy extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        type: 'pharmacy',
        array: []
      }

      axios.get("http://localhost:3003/api/places/"+this.state.type)
              .then(res => {

                const array = res.data.results;
                this.setState({array});
                console.log(array);
              })
          }



      render() {

      return (
          <div>
          {this.state.array.map((pharmacy, i) =>

              <ul>
                <li key={i}> {pharmacy.name} </li>
                  <ul>
                    <li key={i}> {pharmacy.vicinity} </li>
                  </ul>
              </ul>
          )}
          </div>

      )
    };
  }
