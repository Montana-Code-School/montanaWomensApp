import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import Map from 'google-maps-react';
import Home from './components/home';
import Pharmacy from './components/pharmacies';
import Birthcontrol from './components/birthcontrol';
import Resources from './components/resources';
import Doctors from './components/doctors';

const Navigation = ()=> (

<Navbar navColor='rgba(143, 57, 133, .8)'>
  <Nav pullLeft>
     <NavItem className="nav-item"><Link to = '/'>Home</Link></NavItem>
     <NavItem className="nav-item"><Link to ='/doctors'>Doctors</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/pharmacies'>Pharmacies</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/birthcontrol'>Birth Control Methods</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/resources'>Resources</Link></NavItem>
  </Nav>
  <Nav pullRight>
    <NavItem className="nav-item">CONTACT</NavItem>
  </Nav>
</Navbar>
)

const Main = ()=> (
  <main>
  <Switch>
   <Route exact path = '/' component = {Home}/>
   <Route path = '/doctors' component = {Doctors} />
   <Route path = '/pharmacies' component = {Pharmacy}/>
   <Route path = '/birthcontrol' component = {Birthcontrol}/>
   <Route path = '/resources' component = {Resources}/>
  </Switch>
  </main>
)

const App = () => (
  <div>
    <Navigation/>
    <Main/>
  </div>
 )

ReactDOM.render((<BrowserRouter >
  <App/>
</BrowserRouter>
),  document.getElementById('container'))
