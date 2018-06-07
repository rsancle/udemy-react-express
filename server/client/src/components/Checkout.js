import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { CurrencyUsd } from 'mdi-material-ui';
import { connect } from 'react-redux';
import * as actions from '../actions';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    cssRoot: {

        margin: theme.spacing.unit,

        color: theme.palette.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[300],
        },
    }
});

//TODO change this checkout system by react stripe elements system
class Checkout extends Component {


    render() {
        const { classes } = this.props;
        return (
            <StripeCheckout
                name='Emaily Store'
                description='You are going to pay 5 dollars'
                token={ token => this.props.handleToken(token) }
                amount={500}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <Button variant="contained" color="primary" className={classes.cssRoot}>
                    <CurrencyUsd className={classes.leftIcon} />
                    Add Credits
                </Button>
            </StripeCheckout>
        );
    }
}
Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(connect(null, actions)(Checkout));