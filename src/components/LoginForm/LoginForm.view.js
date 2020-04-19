import React, {Component} from 'react';
import {
    TextField,
    Typography,
    Button
}from '@material-ui/core';
import {observer, inject} from "mobx-react";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import './LoginForm.styles.scss';
import API from '../../utils/API';

@inject("LoginFormStore", "MainStore")
@observer
class LoginPageView extends Component {
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
        const store = this.props.LoginFormStore;
        store.login = '';
        store.password = '';
    }

    async handleSubmit (event) {
        event.preventDefault();
        const store = this.props.LoginFormStore;
        const user = {
            name: store.login,
            password: store.password
        };

        try {
            const resJwt = await API.post('auth/login', { ...user });
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
        const LoginFormStore = this.props.LoginFormStore;
        return (
            <form
                className="LoginForm"
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
                    Login
                </Typography>
                <TextField
                    id="login"
                    className="LoginForm__fields"
                    label="Login"
                    variant="outlined"
                    value={LoginFormStore.login}
                    onChange={LoginFormStore.login_onChange}
                />
                <TextField
                    id="password"
                    className="LoginForm__fields"
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={LoginFormStore.password}
                    onChange={LoginFormStore.password_onChange}
                />
                <Button
                    variant="outlined"
                    color="primary"
                    className="LoginForm__button"
                    type="submit"
                >
                    Send
                </Button>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="error"
                >
                    {LoginFormStore.dataError}
                </Typography>
            </form>
        );
    }
}

export default withRouter(LoginPageView);
