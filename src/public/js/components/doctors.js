import React from 'react';
import Gmap from 'public/js/gmap';
import Flexbox from 'flexbox-react';

  export default class Doctors extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        type: 'doctor',
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
          <div className="healthPage doctor">
            <Flexbox flexDirection="row">
              <Gmap array={this.state.array} icon={'../../css/img/icon_local_hospital.png'}
              />
              <ul>
                {this.state.array.map((doctor, i) =>
                  <li key={i}>{doctor.name}</li>
                )}
              </ul>
            </Flexbox>
          </div>
      )}
    };
