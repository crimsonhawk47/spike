import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    message: {
        fontSize: '20px'
    },
    author: {
        fontSize: '20px',
        color: 'red'
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
                <Grid className={classes.root} justify="center" container spacing={2} >
                    <Grid item container xs={12} justify='center'><h1>Live Chat!</h1></Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={9}>

                            <Grid item>
                                <Input type="text" placeholder="Username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
                            </Grid>
                            <Grid item>
                                <Input type="text" placeholder="Message" value={this.state.message} onChange={event => this.setState({ message: event.target.value })} />
                            </Grid>
                            <Grid item >
                                <Button onClick={this.sendMessage}>Send</Button>
                            </Grid>


                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        {this.props.reduxStore.messages.map((message, index) => {
                            return (<Grid container justify='center' spacing={1}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={3} container justify='flex-end'>
                                    <Typography className={classes.author} key={index}> {message.username+':'} </Typography>

                                </Grid>
                                {/* <Grid item xs = {1}/> */}
                                <Grid item xs={7}>
                                    <Typography className={classes.message} key={index}>{message.message}</Typography>

                                </Grid>
                            </Grid>
                            )
                        })}

                    </Grid>
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