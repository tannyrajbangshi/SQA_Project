
export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.country = page.locator("#BillingNewAddress_CountryId");
        this.city = page.locator("#BillingNewAddress_City");
        this.address = page.locator("#BillingNewAddress_Address1");
        this.zip = page.locator("#BillingNewAddress_ZipPostalCode");
        this.phone = page.locator("#BillingNewAddress_PhoneNumber");

        this.billingContinue = page.locator(
            ".new-address-next-step-button"
        );

        this.shippingContinue = page.locator(
            ".shipping-address-next-step-button"
        );

        this.shippingMethodContinue = page.locator(
            ".shipping-method-next-step-button"
        );

        this.paymentMethodContinue = page.locator(
            ".payment-method-next-step-button"
        );

        this.paymentInfoContinue = page.locator(
            ".payment-info-next-step-button"
        );

        this.confirmOrder = page.locator(
            ".confirm-order-next-step-button"
        );

        this.orderSuccess = page.locator(".order-completed");
        this.orderNumber = page.locator(".order-number");
    }

    async fillBillingAddress() {
        await this.country.selectOption({ label: "United States" });
        await this.city.fill("New York");
        await this.address.fill("123 Test Street");
        await this.zip.fill("10001");
        await this.phone.fill("1234567890");
    }

    async completeCheckout() {
        // Billing
        await this.fillBillingAddress();
        await this.billingContinue.click();

        // Shipping address
        await this.shippingContinue.click();

        // Shipping method
        await this.shippingMethodContinue.click();

        // Payment method
        await this.paymentMethodContinue.click();

        // Payment information
        await this.paymentInfoContinue.click();

        // Confirm order
        await this.confirmOrder.click();
    }

    async getOrderNumber() {
        return await this.orderNumber.innerText();
    }
}
