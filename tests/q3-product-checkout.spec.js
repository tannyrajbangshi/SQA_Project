
import { test, expect } from '@playwright/test';

test('Q3 - Product and Checkout Test', async ({ page }) => {

    // Step 1: Open Books category
    await page.goto('https://demowebshop.tricentis.com/books');

    // Step 2: Wait for product links
    const productLink = page.locator('.product-item .product-title a').first();

    await expect(productLink).toBeVisible({ timeout: 15000 });

    // Step 3: Open first product
    await productLink.click();

    // Step 4: Add product to cart
    const addToCartButton = page.locator('input[id^="add-to-cart-button-"]');

    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    // Step 5: Verify cart notification
    await expect(page.locator('.bar-notification'))
        .toContainText('The product has been added to your shopping cart');

    // Step 6: Open Shopping Cart
    await page.goto('https://demowebshop.tricentis.com/cart');

    // Step 7: Verify cart contains product
    await expect(page.locator('.cart')).toBeVisible();

    // Step 8: Accept Terms and Conditions
    await page.locator('#termsofservice').check();

    // Step 9: Proceed to Checkout
    await page.locator('#checkout').click();

    // Step 10: Verify checkout page
    await expect(page).toHaveURL(/checkout/);

    console.log('Q3 Product and Checkout Test Completed');

});
