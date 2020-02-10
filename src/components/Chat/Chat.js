import React, { Component } from 'react';
import {connect} from 'react-redux';
// import io from 'socket.io-client'
class Chat extends Component {

    state = {
        username: '',
        message: '',
        messages: []
    }


    sendMessage = ev => {
        //Sending dispatch with message to sendMessage saga
        this.props.dispatch({
            type: 'SEND_MESSAGE',
            payload: {
                message: this.state.message,
                username: this.state.username
            }
        })
        this.setState({ message: '' });
        this.setState({ username: '' });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
                <br />
                <input type="text" placeholder="Message" value={this.state.message} onChange={event => this.setState({ message: event.target.value })} />
                <br />
                <button onClick={this.sendMessage}>Send</button>
                {this.props.reduxStore.messages.map((message, index) => {
                    return <p key={index}> FROM {message.username}:  {message.message}</p>
                })}
            </div>
        )


    }
}


const mapStateToProps = (reduxStore) => {
    return(
        {
            reduxStore
        }
    )
}

export default connect(mapStateToProps)(Chat)