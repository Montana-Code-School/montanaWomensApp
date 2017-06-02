import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    // this.serverRequest = this.serverRequest.bind(this);
  }

componentDidMount() {
  axios.get('http://localhost:3003/api/info')
    .then(res => {
      const data = res.data.content[3]._;
      this.setState({categories:data});
      console.log(data);
    });
  }

render() {
  return (

    <div>
      <h1>DATA LOOKS LIKE:</h1>
    <p> {this.state.categories}</p>
    </div>

    );
  }
}


    ReactDOM.render(
      <App />,
      document.getElementById('container'));
