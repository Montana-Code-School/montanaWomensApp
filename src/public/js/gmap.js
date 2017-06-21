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
    return(
      <Gmaps
        width={'800 px'}
        height= {'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        scrollwheel={false}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
      <Marker
        lat={coords.lat}
        lng={coords.lng}
        draggable={true}
        onDragEnd={this.onDragEnd} />
      <InfoWindow
        lat={coords.lat}
        lng={coords.lng}
        content={'Hello, React'}
        onCloseClick={this.onCloseClick} />

      </Gmaps>
    );
  }

};

export default Gmap;
