import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import Home from './components/home';
import Counselors from './components/counselors';
import Pharmacy from './components/pharmacies';
import Birthcontrol from './components/birthcontrol';
import Resources from './components/resources';
import Flexbox from 'flexbox-react';



const Navigation = ()=> (

  <div>

   <Flexbox flexDirection = 'row'>
     <Navbar navColor='rgba(143, 57, 133, .8)'>
       <NavItem className="nav-item"><Link to = '/'>Home</Link></NavItem>
       <NavItem className="nav-item"><Link to ='/counselors'>Counselors</Link></NavItem>
       <NavItem className="nav-item"><Link to = '/pharmacies'>Pharmacies</Link></NavItem>
       <NavItem className="nav-item"><Link to = '/birthcontrol'>Birth Control Methods</Link></NavItem>
       <NavItem className="nav-item"><Link to = '/resources'>Resources</Link></NavItem>
       <NavItem className="nav-item"><Link to = '/doctors'>Doctors And Clinics</Link></NavItem>
       <NavItem className="nav-item"><Link to ='/symptomchecker.html'>Symptom Checker</Link></NavItem>
     </Navbar>
   </Flexbox>
  </div>
)

const Main = ()=> (
  <main>
  <Switch>
   <Route exact path = '/' component = {Home}/>
   <Route path = '/counselors' component = {Counselors}/>
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
