import React, {Component} from 'react';
import {
    TextField,
    Typography,
    Button
}from '@material-ui/core';
import {observer, inject} from "mobx-react";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import './RegistrationForm.styles.scss';
import API from '../../utils/API';

@inject("RegistrationForm", "MainStore")
@observer
class RegistrationFormView extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    cleanForm () {
        const store = this.props.RegistrationForm;
        store.login = '';
        store.password = '';
    }

    async handleSubmit (event) {
        event.preventDefault();
        const store = this.props.RegistrationForm;
        const user = {
            name: store.login,
            password: store.password,
            email: store.email
        };

        try {
            const resJwt = await API.post('login/create', { ...user });
            await this.cleanForm();
            console.log(resJwt.data);
        } catch (e) {
            store.dataError_change('500 Internal Server Error');
            throw e;
        }
        // this.props.MainStore.auth_login();
        // this.props.history.push("/");

    }

    render() {
        const RegistrationForm = this.props.RegistrationForm;
        return (
            <form
                className="RegistrationForm"
                noValidate
                autoComplete="off"
                onSubmit={this.handleSubmit}
                action="/"
            >
                <Typography
                    variant="h4"
                    component="h4"
                    align="center"
                    color="textSecondary"
                >
                    Registration
                </Typography>
                <TextField
                    id="login"
                    className="RegistrationForm__fields"
                    label="Login"
                    variant="outlined"
                    value={RegistrationForm.login}
                    onChange={RegistrationForm.login_onChange}
                />
                <TextField
                    id="email"
                    className="RegistrationForm__fields"
                    label="Email"
                    variant="outlined"
                    value={RegistrationForm.email}
                    onChange={RegistrationForm.email_onChange}
                />
                <TextField
                    id="password"
                    className="RegistrationForm__fields"
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={RegistrationForm.password}
                    onChange={RegistrationForm.password_onChange}
                />
                <TextField
                    id="password_repeat"
                    className="RegistrationForm__fields"
                    type="password"
                    label="Password repeat"
                    variant="outlined"
                    value={RegistrationForm.password_repeat}
                    onChange={RegistrationForm.password_repeat_onChange}
                />
                <Button
                    variant="outlined"
                    color="primary"
                    className="RegistrationForm__button"
                    type="submit"
                >
                    Send
                </Button>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="error"
                >
                    {RegistrationForm.dataError}
                </Typography>
            </form>
        );
    }
}

export default withRouter(RegistrationFormView);
