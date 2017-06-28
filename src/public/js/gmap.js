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

    // var markLoop = this.props.array.map((place, i) => {
    //   return(
    //     <Marker
    //       key={place.placeId}
    //       lat={place.latitude}
    //       lng={place.longitude}
    //       draggable={false}
    //       clickable={true}
    //      />
    //   );
    // });

    return(
      <Gmaps
        width={'800 px'}
        height= {'600px'}
        lat={coords.lat}
        lng={coords.lng}
        radius={5000}
        zoom={12}
        scrollwheel={false}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        {this.props.array.map((place, i) => {
          <Marker
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
            draggable={false}
            clickable={true}
            />
          })
        }

      </Gmaps>
    )
  };
}

export default Gmap;
