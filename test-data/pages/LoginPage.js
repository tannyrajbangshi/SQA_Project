
export class LoginPage {
    constructor(page) {
        this.page = page;

        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.loginButton = page.locator("input.login-button");
        this.errorMessage = page.locator(".validation-summary-errors");
    }

    async open() {
        await this.page.goto("/login");
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.innerText();
    }
}
