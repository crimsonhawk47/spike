import React, { Component } from 'react';
import Chat from '../Chat/Chat'
import Form from '../Form'


class App extends Component {


  render() {
    return (
      <div>
        <h1>Live Chat!</h1>
        <Chat />
        <Form />
      </div>
    );
  }
  
}

export default App;
