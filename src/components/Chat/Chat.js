import React, { Component } from 'react';
import io from 'socket.io-client'
class Chat extends Component {  

    state = {
        username: '',
        message: '',
        messages: []
    }

    componentDidMount(){
        console.log(this.state);
        this.socket = io('localhost:5000');
        this.socket.on('RECEIVE_MESSAGE', (data)=>{
            this.addMessage(data)
        })
    }

    addMessage = (data) => {
        this.setState({
            messages: [...this.state.messages, data]
        })
    }


    sendMessage = ev => {
        ev.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.username,
            message: this.state.message
        });
        this.setState({message: ''});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
                <br />
                <input type="text" placeholder="Message" value={this.state.message} onChange={event => this.setState({ message: event.target.value })} />
                <br />
                <button onClick={this.sendMessage}>Send</button>
                {this.state.messages.map(message => {
                    return <p>{message.message}</p>
                })}
            </div>
        )


    }
}
export default Chat