import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';

import Home from './components/home';
import Counselors from './components/counselors';
import Gmap from './components/pharmacies';
import Birthcontrol from './components/birthcontrol';
import Resources from './components/resources';
import Symptomchecker from './components/symptomchecker';


const Navigation = ()=> (
  // <header>
  //  <nav>
  //   <ul>
  //    <li><Link to = '/'>Home</Link></li>
  //    <li><Link to ='/counselors'>Counselors</Link></li>
  //    <li><Link to = '/pharmacies'>Pharmacies</Link></li>
  //    <li><Link to = '/birthcontrol'>Birth Control Methods</Link></li>
  //    <li><Link to = '/resources'>Resources</Link></li>
  //   </ul>
  //  </nav>
  // </header>

<Navbar navColor='rgba(143, 57, 133, .8)'>
  <Nav pullLeft>
     <NavItem className="nav-item"><Link to = '/'>Home</Link></NavItem>
     <NavItem className="nav-item"><Link to ='/counselors'>Counselors</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/pharmacies'>Pharmacies</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/birthcontrol'>Birth Control Methods</Link></NavItem>
     <NavItem className="nav-item"><Link to = '/resources'>Resources</Link></NavItem>
     <NavItem className="nav-item"><Link to="/symptomchecker">Symptom Checker</Link></NavItem>
  </Nav>
  <Nav pullRight>
    <NavItem className="nav-item">CONTACT</NavItem>
  </Nav>
</Navbar>
)

// <NavItem className="nav-item"><a href="../symptomchecker.html">Symptom Checker</a></NavItem>

const Main = ()=> (
  <main>
  <Switch>
   <Route exact path = '/' component = {Home}/>
   <Route path = '/counselors' component = {Counselors}/>
   <Route path = '/pharmacies' component = {Gmap}/>
   <Route path = '/birthcontrol' component = {Birthcontrol}/>
   <Route path = '/resources' component = {Resources}/>
   <Route path = '/symptomchecker' component = {Symptomchecker}/>
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
