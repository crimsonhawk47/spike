import React, { Component } from 'react';
import Chat from '../Chat/Chat'
import {HashRouter as Router, Route} from 'react-router-dom'
import Form from '../Form'


class App extends Component {


  render() {
    return (
    <Router>
      <div>
        <Chat />
        {/* <Form /> */}
      </div>
    </Router>
      
    );
  }
  
}

export default App;
