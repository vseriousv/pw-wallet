import { action, observable } from 'mobx';
import { getTarget } from '../../helpers/elementaries';

export default class LoginFormStore {
    @observable login;
    @observable password;
    @observable dataError;

    constructor() {
        this.login = '';
        this.password = '';
        this.dataError = '';
    }

    @action dataError_change = (error) => {
        this.dataError = error;
    }

    @action login_onChange = (event) => {
        this.login = getTarget(event).value;
    };
    @action password_onChange = (event) => {
        this.password = getTarget(event).value;
    };
}
