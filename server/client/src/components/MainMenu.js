import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { GooglePlus } from 'mdi-material-ui';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';

import Checkout from './Checkout';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MainMenu extends Component {

    state = {
        auth: true,
        anchorEl: null,
    };


    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    renderContent() {

        switch (this.props.auth) {
            case null:
                return 'Still waiting';
            case false:
                return <a href='/auth/google'>
                    <GooglePlus/> Login with Google
                </a>;
            default:
                const { anchorEl } = this.state;
                const open = Boolean(anchorEl);
                return [
                    <div key="1">
                        <Checkout/>
                    </div>,
                    <div key="3">
                        <p > Credits: {this.props.auth.credits}</p>
                    </div>,
                    <div key="2">
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}> <a href='/api/logout'>Logout</a></MenuItem>

                        </Menu>
                    </div>
                ];
        }
    }

    render() {
        const classes  = styles;


        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            <Link to={ this.props.auth ? '/surveys' : '/'}>Emaily</Link>
                        </Typography>
                        { this.renderContent() }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

/*
* Takes sub state auth from store and return it as auth prop
*/
function mapStateToProps ({ auth }) {
return { auth };
}

/*function mapStateToProps (state) {
return { auth: state.auth };
}*/

export default connect(mapStateToProps)(MainMenu);

