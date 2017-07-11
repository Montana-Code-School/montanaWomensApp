import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import { Jumbotron, JumbotronCol, HoverRow, HoverCol, DrawerContainer, MenuItem, Navbar, NavItem, Nav, Button} from 'react-dynamic-ui';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Flexbox from 'flexbox-react';
import { Chat } from 'botframework-webchat';

export default class Chatbot extends React.Component {
  render() {
    return (

      <div className='chatbot'>

        <Jumbotron className="jumbo-fadeIn fade-stagger">
          <Flexbox flexDirection="row" justifyContent="space-around" flexWrap="wrap" minHeight="20vh" >

            <JumbotronCol fadeEffect="fadeInRight" style={{width: '50%'}}>
              <Flexbox flexDirection='column' element='section'>
              <h1 className='symptomheader'style={{paddingTop: '3em'}}>Have a question about local resources?</h1>
              <h3 className='symptomdescript'>Try our chatbot to get information fast. </h3>
              </Flexbox>
            </JumbotronCol >
            <JumbotronCol className="jumbo-fadeUp" style={{width: '50%'}}>
              <Flexbox flexDirection="column" element='section'>
                <iframe src='https://webchat.botframework.com/embed/MTWomensResourceChatbot?s=5CLvAQ6ZWs0.cwA.G2E.0K7g79ZrlWCYlKqQpgs32C_N7TJdvr1hMb12FKh8ay4' ></iframe>
              </Flexbox>
            </JumbotronCol>

          </Flexbox>
        </Jumbotron>
      </div>
  )}
}
