import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import {BrowserRouter, Switch, Route, /*Router,*/ Link} from 'react-router-dom';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import Flexbox from 'flexbox-react';
//import BrowserHistory from 'browser-history';

import Home from './components/home';
import Counselors from './components/counselors';
import Pharmacies from './components/pharmacies';
import Birthcontrol from './components/birthcontrol';
import Resources from './components/resources';
import Doctors from './components/doctors';



const Navigation = ()=> (
<Navbar navColor='rgba(143, 57, 133, .8)'>

  <Nav pullright>
     <NavItem className="nav-item"><Link to = '/'>Home</Link></NavItem>
     <NavItem className="nav-item"><Link to ='/counselors'>Counselors</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/pharmacies'>Pharmacies</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/birthcontrol'>Birth Control Methods</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/resources'>Resources</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/doctors'>Doctors And Clinics</Link></NavItem>
     <NavItem className="nav-item"><Link to ='/symptomchecker'>Symptom Checker</Link></NavItem>

  </Nav>
</Navbar>
)

const Main = ()=> (
  <main>
  <Switch>
   <Route exact path = '/' component = {Home}/>
   <Route path = '/counselors' component = {Counselors}/>
   <Route path = '/pharmacies' component = {Pharmacies}/>
   <Route path = '/birthcontrol' component = {Birthcontrol}/>
   <Route path = '/resources' component = {Resources}/>
   <Route path = '/doctors' component = {Doctors}/>


  </Switch>
  </main>
)

const App = () => (
  <div>
    <Navigation/>
    <Main/>
  </div>
 )


 //var browserHistory = ReactRouter.browserHistory;


ReactDOM.render((
//  <Router history = {browserHistory}>
   <BrowserRouter >
  <App/>
   </BrowserRouter>
  //</Router>
),  document.getElementById('container'))
