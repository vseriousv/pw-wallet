import {action, computed, observable} from 'mobx';
import LoginFormStore from '../components/LoginForm/LoginForm.store';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm.store';
import HeaderStore from '../components/Header/Header.store';

class MainStore {
    @observable auth;

    constructor() {
        this.auth = localStorage.getItem('auth') != null ? true: false;
        this.LoginFormStore = new LoginFormStore();
        this.RegistrationForm = new RegistrationForm();
        this.HeaderStore = new HeaderStore();
    }

    @action auth_login = () => {
        localStorage.setItem('auth', 'true')
        this.auth = localStorage.getItem('auth');
    };

    @action auth_logout = () => {
        localStorage.removeItem('auth');
        this.auth = localStorage.getItem('auth');
    };

    @computed get auth_general_login() {
        return this.auth;
    }
}

export default new MainStore();
