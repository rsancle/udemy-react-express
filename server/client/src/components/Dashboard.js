import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
        margin: '50px',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
});

class Dashboard extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="title">Dashboard</Typography>
                <div>
                    <Button variant="fab" color="primary" aria-label="add" className={classes.button} component={Link} to={"/surveys/new"}>
                        <AddIcon />
                    </Button>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(null, actions)(Dashboard));