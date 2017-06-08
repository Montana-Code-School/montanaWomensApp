import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import xml2js from 'xml2js';
import striptags from 'striptags';


class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       categories: []
//     };
//   }
//
//
// componentDidMount() {
//   axios.get('http://localhost:3003/api/info')
//     .then(res => {
//       const data = res.data;
//       var newData = striptags(data, [], '\n' );
//       this.setState({categories:newData});
//     });
//   }

render() {

  return (

    <div>
      <h1>DATA LOOKS LIKE:</h1>

    </div>

    );
  }
}


    ReactDOM.render(
      <App />,
      document.getElementById('container'));
