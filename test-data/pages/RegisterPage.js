
export class RegisterPage {
    constructor(page) {
        this.page = page;

        this.gender = page.locator("#gender-male");
        this.firstName = page.locator("#FirstName");
        this.lastName = page.locator("#LastName");
        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.confirmPassword = page.locator("#ConfirmPassword");
        this.registerButton = page.locator("#register-button");
        this.successMessage = page.locator(".result");
    }

    async open() {
        await this.page.goto("/register");
    }

    async register(user) {
        await this.gender.check();
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.email.fill(user.email);
        await this.password.fill(user.password);
        await this.confirmPassword.fill(user.password);

        await this.registerButton.click();
    }
}
