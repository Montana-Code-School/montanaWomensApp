import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



// function addProducts(quantity) {
//   const startId = products.length;
//   for (let i = 0; i < quantity; i++) {
//     const id = startId + i;
//     products.push({
//       id: id,
//       name: 'Item name ' + id,
//       price: 2100 + i
//     });
//   }
// }
//
// addProducts(20);

class ScrollTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={ } height='120' scrollTop={ 'Bottom' }> <!-- Available value is Top, Bottom or any number value -->
          <TableHeaderColumn dataField={ } isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
