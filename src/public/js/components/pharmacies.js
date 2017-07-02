import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';
import Flexbox from 'flexbox-react';
import Table from './table';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';

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
        <Jumbotron style={{backgroundColor: '#cbe8ed'}}>
          <JumbotronCol style={{width:'40%'}}>
            <div style={{height: '400px'}}>
              <img style={{paddingTop: '100px', paddingLeft:'100px', paddingBottom:'80px'}} src="css/img/health-symbol-sm.png" />
            </div>
          </JumbotronCol>

           <JumbotronCol  style={{width: '60%'}}>
            <div style={{height: '400px', paddingTop: '125px', paddingBottom:'20px'}}>
             <h1 style={{fontSize:'5em', paddingRight:'165px'}}>Pharmacies</h1>
             <h3>Find a pharmacy near you!</h3>
             </div>
          </JumbotronCol>
        </Jumbotron> 

            <Flexbox className="healthPage pharmacy" flexDirection="row">
              <Gmap array={this.state.array} icon={'../../css/img/icon_local_pharmacy.png'}/>
              <Table heading="Pharmacies near you" array={this.state.array} />
            </Flexbox>
        </div>
      )}
    };
