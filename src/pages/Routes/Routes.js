import React, { Component }  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TransactionsPage from '../TransactionsPage/TransactionsPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import LoginPage from '../LoginPage/LoginPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import {observer, inject} from "mobx-react";

const PrivateRoute = ({ auth, component, ...options }) => {
    console.log("check")
    if (auth) {
        return <Route {...options} component={component}/>;
    } else {
        return <Redirect to="/login" />
    }
};

@inject("MainStore")
@observer
class Routes extends Component{
    render() {
        const MainStore = this.props.MainStore;
        return (
         <main>
              <Switch>
                 <PrivateRoute exact path='/' component={ProfilePage} auth={MainStore.auth}/>
                 <PrivateRoute path='/tx' component={TransactionsPage} auth={MainStore.auth}/>
                 <Route path='/login' component={LoginPage} />
                 <Route path='/reg' component={RegistrationPage}/>
              </Switch>
         </main>
        )
    }
}
export default Routes;
