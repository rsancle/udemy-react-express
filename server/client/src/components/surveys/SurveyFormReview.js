import React from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import Save from '@material-ui/icons/Save';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    { formValues[name]}
                </div>
            </div>
        );
    });
    return (
        <div>
            <h5>Review</h5>
            <div>
                { reviewFields }
            </div>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={() => submitSurvey(formValues, history)}>
                <Save />
                Save
            </Button>
        </div>
    );
}

function mapStateToProps(state) {

    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));