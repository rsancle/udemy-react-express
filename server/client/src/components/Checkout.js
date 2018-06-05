import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

//TODO change this checkout system by react stripe elements system
class Checkout extends Component {

    render() {
        return (
            <StripeCheckout
                name='Emaily Store'
                description='You are going to pay 5 dollars'
                token={ token => this.props.handleToken(token) }
                amount={500}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button>Pay!</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Checkout);