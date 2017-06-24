import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import Gmap from 'public/js/gmap';
// import BasicTable from './table';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



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
              <BootstrapTable  data = {pharmacy} height='300' scrollTop={ 'Bottom' }>
                  <TableHeaderColumn dataField='name' isKey>NAME</TableHeaderColumn>
                  <TableHeaderColumn dataField='vicinity'>ADDRESS</TableHeaderColumn>
                  <TableHeaderColumn dataField='rating'>RATING</TableHeaderColumn>
              </BootstrapTable>
            )
          }
          </div>

      )};

}
