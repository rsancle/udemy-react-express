import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

    render() {
        return (
            <h1>Dashboard</h1>
        );
    }
}

export default connect(null, actions)(Dashboard);