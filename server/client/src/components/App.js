import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Typography from '@material-ui/core/Typography';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
    constructor() {
        super();
        this.state = {stripe: null};
    }

    componentDidMount() {
        this.props.fetchUser();

    }

    render() {
        return (
            <CssBaseline>
                <Typography>
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route exact path="/" component={ Landing } />
                            <Route exact path="/surveys" component={ Dashboard } />
                            <Route path="/surveys/new" component={ SurveyNew } />
                        </div>
                    </BrowserRouter>
                </Typography>
            </CssBaseline>
        );
    }

}

export default connect(null, actions)(App);