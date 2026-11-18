
export class ProductPage {
    constructor(page) {
        this.page = page;

        this.quantity = page.locator(
            "input[id^='addtocart_'][id$='_EnteredQuantity']"
        );

        this.addToCartButton = page.locator(
            "input[id^='add-to-cart-button-']"
        );
    }

    async openProduct(productName) {
        await this.page.getByRole("link", {
            name: productName,
            exact: true
        }).click();
    }

    async setQuantity(quantity) {
        await this.quantity.fill(String(quantity));
    }

    async addToCart() {
        await this.addToCartButton.click();
    }
}
