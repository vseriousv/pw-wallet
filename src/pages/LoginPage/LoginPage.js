import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm.view'
import './styles.scss';

class LoginPage extends Component {
    render() {
        return(
            <div className='formContainer'>
                <LoginForm />
            </div>
        );
    }
}
export default LoginPage;
