import React, {Component} from 'react';
import RegistrationFormView from "../../components/RegistrationForm/RegistrationForm.view";
import './styles.scss';

class RegistrationPage extends Component {
    render() {
        return(
            <div className='formContainer'>
                <RegistrationFormView />
            </div>
        );
    }
}
export default RegistrationPage;
