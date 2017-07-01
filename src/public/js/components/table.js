import React from 'react';

export default class Table extends React.Component {
  render() {
    return (
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>{this.props.heading}</th>
            </tr>
          </thead>
          <tbody>
          {this.props.array.map((place, i) =>
            <tr>
              <td key={i}>{place.name}</td>
              <td>{place.vicinity}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}  
