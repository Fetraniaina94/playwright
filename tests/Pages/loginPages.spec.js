class LoginPage {
    constructor(page) {
        this.page = page;
        this.mailId = '#user-name';
        this.passwordId = '#password';
        this.btnId = '#login-button';
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async connexion(mail, password, btn) {
        await this.page.fill(this.mailId, mail);
        await this.page.fill(this.passwordId, password);
        await this.page.click(this.btnId, btn);
    }
}

export default { LoginPage };