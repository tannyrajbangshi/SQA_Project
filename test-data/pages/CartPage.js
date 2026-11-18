
export class CartPage {
    constructor(page) {
        this.page = page;

        this.cartRows = page.locator(
            ".cart tbody tr"
        );

        this.quantity = page.locator(
            ".qty-input"
        );

        this.termsCheckbox = page.locator(
            "#termsofservice"
        );

        this.checkoutButton = page.locator(
            "#checkout"
        );
    }

    async getCartDetails() {
        return await this.cartRows.allInnerTexts();
    }

    async getQuantity() {
        return await this.quantity.first().inputValue();
    }

    async acceptTerms() {
        await this.termsCheckbox.check();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}
