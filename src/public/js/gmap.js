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
    var self = this;
    var pinLoop = this.props.array.map((place) => {
            return(
                <Marker
                  lat={place.geometry.location.lat}
                  lng={place.geometry.location.lng}
                  clickable={true}
                  draggable={false}
                  icon={this.props.icon}
                  title={place.name}
                  onClick={function(e){
                        var infowindow = new google.maps.InfoWindow({
                                            content: "<div className='infowindow' style='color:#A44200'><h5>"+place.name+"</h5>"+place.vicinity+"</div>",
                                            position: e.latLng,
                                        });

                        infowindow.open(this.get('map'), this);
                  }} />
            )
        });

    return(
      <div style={this.props.style}>
        <Gmaps
          width={'600px'}
          height= {'890px'}
          styles={this.props.styles}
          lat={coords.lat}
          lng={coords.lng}
          zoom={13}
          scrollwheel={false}
          loadingMessage={'Be happy'}
          params={params}
          onMapCreated={this.onMapCreated}>
          {pinLoop}
        </Gmaps>
      </div>
    )
  };
}

export default Gmap;
