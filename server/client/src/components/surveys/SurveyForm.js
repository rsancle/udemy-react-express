import React, { Component } from 'react';
import { reduxForm , Field } from "redux-form";
import { Link } from 'react-router-dom';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import _ from  'lodash';
import invalidEmails from '../../utils/emailsValidator';
import formFields from './formFields';

class SurveyForm extends Component{

    renderFields() {
        return _.map(formFields, ({name, type, label}) => {

            return (
                <Field key={name} type={type} name={name} label={label} component={ TextField }/>
            );
        });

    }


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    { this.renderFields() }
                    <Button component={ Link } to={"/surveys"}>
                        cancel
                    </Button>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }


}

function validate(values) {
    const errors = {};

    errors.recipients = invalidEmails(values.recipients || '');

    _.forEach(formFields, ({name, label}) => {
        if(!values[name]) {
            errors[name] = `You should provide a ${label}`;
        }
    });

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);