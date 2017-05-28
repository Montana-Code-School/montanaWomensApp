// import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

  // var json = null;
  // $.ajax({
  //   'async': false,
  //   'global': false,
  //   'url': "localhost:3003/api/info",
  //   'dataType': "json",
  //   'success': function (data) {
  //     json = data;
  //   }
  // });
  // console.log(json);

  axios.get(`http://localhost:3003/api/info`)
    .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });


//     class App extends React.Component {
//       constructor(props) {
//         super(props);
//
//         this.state = {
//           categories: []
//         };
//       }
//
//
//
//     componentDidMount() {
//       axios.get(`http://localhost:3003/api/info`)
//         .then(res => {
//           const categories = res.data.data;
//           this.setState({categories});
//
//         });
//     }
//
//   render() {
//   return (
//     <div>
//       <h1>BEEEEERRRRRR!!!</h1>
//       <ul>
//         {this.state.categories.map(category =>
//           <li key={category.name}>{category.name}</li>
//         )}
//       </ul>
//     </div>
//     );
//   }
// }


    //
    // ReactDOM.render(
    //   <App />,
    //   document.getElementById('container'));
