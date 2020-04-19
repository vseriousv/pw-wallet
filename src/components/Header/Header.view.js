import React, {Component} from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Container
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import "./Header.styles.scss";
import {observer, inject} from "mobx-react";

@inject("HeaderStore", "MainStore")
@observer
class HeaderView extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.MainStore.auth_logout();
    }
    render() {
        const MainStore = this.props.MainStore;
        return (

            <div className="root">
                <AppBar position="static">
                    <Container>
                        <Toolbar>
                            <Link to='/'>
                                <h2 className="title"> PW </h2>
                            </Link>
                            <div className="buttonsNavigation">
                                {MainStore.auth &&
                                    <>
                                        <Button className="buttonsNavigation__btn" component={Link} to="/">
                                            Profile
                                        </Button>
                                        <Button className="buttonsNavigation__btn" component={Link} to="/tx">
                                            Transactions
                                        </Button>
                                    </>
                                }
                                {!MainStore.auth &&
                                    <>
                                        <Button className="buttonsNavigation__btn" component={Link} to="/reg">Registration</Button>
                                        <Button className="buttonsNavigation__btn" component={Link} to="/login">LogIN</Button>
                                    </>
                                }
                            </div>
                            {MainStore.auth &&
                                <Button color="inherit" onClick={this.handleLogout}>LogOut</Button>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        );
    }
}

export default HeaderView;
