import {test, except} from '@playwright/test'

class LoginPage {
    constructor(page) {
        this.page = page;
        this.userId = '#user-name';
        this.passID = '#password';
        this.loginBtnId = '#login-button';
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.userId, username);
        await this.page.fill(this.passID, password);
        await this.page.click(this.loginBtnId);
    }
}

export { LoginPage }; // Exportation pour les modules ES