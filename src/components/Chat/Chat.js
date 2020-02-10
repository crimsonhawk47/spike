import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});

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

        const { classes } = this.props;

        return (
            <div>
                <Grid className={classes.root} container spacing={12} >
                    {[0, 1].map(err => {
                        return (
                            <Grid item xs={4}>
                                <Grid container justify="center" spacing={1}>

                                    <Grid item>
                                        <input type="text" placeholder="Username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
                                    </Grid>
                                    <Grid item>
                                        <input type="text" placeholder="Message" value={this.state.message} onChange={event => this.setState({ message: event.target.value })} />
                                    </Grid>
                                    <Grid item >
                                        <button onClick={this.sendMessage}>Send</button>
                                    </Grid>

                                    {/* {this.props.reduxStore.messages.map((message, index) => {
                                return <p key={index}> FROM {message.username}:  {message.message}</p>
                            })} */}
                                </Grid>
                            </Grid>
                        )
                    })}


                </Grid>
            </div>
        )


    }
}


const mapStateToProps = (reduxStore) => {
    return (
        {
            reduxStore
        }
    )
}

export default withStyles(styles)(connect(mapStateToProps)(Chat))