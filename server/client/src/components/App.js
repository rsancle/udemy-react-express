import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import { Container } from 'semantic-ui-react';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Container fluid>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={ Landing } />
                        <Route exact path="/surveys" component={ Dashboard } />
                        <Route path="/surveys/new" component={ SurveyNew } />
                    </div>
                </BrowserRouter>
            </Container>
        );
    }

}

export default connect(null, actions)(App);