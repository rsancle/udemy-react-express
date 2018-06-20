import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div key={ survey._id }>
                    <p>{survey.body}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                SurveyList
                { this.renderSurveys() }
            </div>
        );
    };
}

function mapStateToProps (state) {
    return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);