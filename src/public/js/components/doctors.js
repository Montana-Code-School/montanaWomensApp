import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';
import Flexbox from 'flexbox-react';
import Table from './table';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';

export default class Doctors extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        type: 'doctor',
        array: [],
        styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
      }

      axios .get("https://desolate-bayou-54837.herokuapp.com/api/places/"+this.state.type)
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
        backgroundColor:'#1B998B',
        color: "#333",
        fontFamily: "helvetica",
        fontSize: 55,
        textAlign: "center",
        marginBottom: 0,
      }

      var topBottom= {
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        borderColor: '#a44200',
        borderWidth: '1px',
        paddingTop: '30px',
      }

      var mapStyle= {
        borderStyle: 'solid',
        borderColor: '#a44200',
        borderWidth: '1px',
        marginBottom: '98px',
        boxShadow: '5px 5px 2px #a44200',
      }
      return (
          <div>
          <Jumbotron style={{backgroundImage:"url('./css/img/doctor.png')"}}>
            <JumbotronCol style={{width:'40%'}}>
              <div style={{height: '400px'}}>
                <img style={{paddingTop: '100px', paddingLeft:'100px', paddingBottom:'80px'}} src="css/img/health-symbol-sm.png" />
              </div>
            </JumbotronCol>

            <JumbotronCol  style={{width: '60%'}}>
              <div style={{height: '400px', paddingTop: '125px', paddingBottom:'20px'}}>
               <h1 style={{fontSize:'5em', paddingRight:'165px'}}>Doctors and Clinics</h1>
               <h3>Find a nearby doctor or clinic.</h3>
              </div>
            </JumbotronCol>
          </Jumbotron>

            <Flexbox style={topBottom} className="healthPage doctor" flexDirection="row">
              <Gmap style={mapStyle} array={this.state.array} icon={'../../css/img/icon_local_hospital.png'} styles={this.state.styles}
              />
              <Table array={this.state.array} />
            </Flexbox>
          </div>
      );
    }
  }
