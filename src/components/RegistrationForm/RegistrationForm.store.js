import {action, observable} from 'mobx';
import { getTarget } from '../../helpers/elementaries';

export default class RegistrationFormStore {
    @observable login;
    @observable password;
    @observable password_repeat;
    @observable email;
    @observable dataError;

    constructor() {
        this.login = '';
        this.password = '';
        this.password_repeate = '';
        this.email = '';
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
    @action password_repeat_onChange = (event) => {
        this.password_repeat = getTarget(event).value;
    };
    @action email_onChange = (event) => {
        this.email = getTarget(event).value;
    };
}
