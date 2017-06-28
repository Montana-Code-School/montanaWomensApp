import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

const coords = {
  lat: 46.878178,
  lng:-114.001003
};

const params = {v: '3.exp', key: 'AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE'};

class Gmap extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {

    var markLoop = this.props.array.map((place, i) => {
      return(
        <Marker
          key={place.place_id}
          lat={place.geometry.location.lat}
          lng={place.geometry.location.lng}
          draggable={false}
          clickable={true}
         />
      );
    });

    return(
      <Gmaps
        width={'700px'}
        height= {'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={13}
        scrollwheel={false}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        {markLoop}
      </Gmaps>
    )
  };
}

export default Gmap;
