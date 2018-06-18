import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CssBaseline from '@material-ui/core/CssBaseline';



import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


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
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={ Landing } />
                        <Route exact path="/surveys" component={ Dashboard } />
                        <Route path="/surveys/new" component={ SurveyNew } />
                    </div>
                </BrowserRouter>
            </CssBaseline>
        );
    }

}

export default connect(null, actions)(App);