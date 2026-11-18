
export class HomePage {
    constructor(page) {
        this.page = page;

        this.booksCategory = page.getByRole("link", {
            name: "Books",
            exact: true
        });

        this.searchBox = page.locator("#small-searchterms");
        this.searchButton = page.locator(
            "input.button-1.search-box-button"
        );

        this.cartLink = page.locator(
            "a.ico-cart"
        );
    }

    async open() {
        await this.page.goto("/");
    }

    async openBooks() {
        await this.booksCategory.click();
    }

    async searchProduct(product) {
        await this.searchBox.fill(product);
        await this.searchButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}
