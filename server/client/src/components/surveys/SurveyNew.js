import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component{
    /*constructor(props) {
        super(props);
        this.state = { showReview: false};
    }*/
    // Less work than use the constructor
    state = { showFormReview: false};

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview
                onCancel={() => this.setState({ showFormReview: false })}
            />;
        }
        return <SurveyForm
                    onSurveySubmit={() => this.setState({ showFormReview: true })}
                />;
    }

    render() {
        return (
            <div>
                <Typography variant="title">SurveyNew</Typography>
                { this.renderContent() }
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);