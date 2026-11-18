
import { test, expect } from '@playwright/test';
import { captureScreenshot } from './helpers/screenshotHelper.js';

test('Q3 - Product and Checkout Test', async ({ page }) => {

    // Step 1: Open Demo Web Shop
    await page.goto('https://demowebshop.tricentis.com/');

    // Step 2: Search for a product
    const searchBox = page.locator('#small-searchterms');
    await searchBox.fill('book');

    await page.locator('input.button-1.search-box-button').click();

    // Step 3: Verify search results
    const productLink = page.locator('.product-item .product-title a').first();

    await expect(productLink).toBeVisible({ timeout: 15000 });

    // Screenshot 1: Product Search Results
    await captureScreenshot(
        page,
        test.info(),
        'Q3-Product-Search-Results'
    );

    // Step 4: Open the first product
    await productLink.click();

   // Step 5: Increase product quantity to 2
    const quantityInput = page.locator('input.qty-input');

    await expect(quantityInput).toBeVisible({ timeout: 15000 });
    await quantityInput.fill('2');

    await expect(quantityInput).toHaveValue('2');
    // Step 6: Add product to cart
    const addToCartButton = page.locator('input[id^="add-to-cart-button-"]');

    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    // Step 7: Verify cart notification
    await expect(page.locator('.bar-notification'))
        .toContainText('The product has been added to your shopping cart');

    // Step 8: Open Shopping Cart
    await page.goto('https://demowebshop.tricentis.com/cart');

    // Step 9: Verify cart contains the product
    await expect(page.locator('.cart')).toBeVisible();

    const cartQuantity = page.locator('.cart .qty-input').first();
    await expect(cartQuantity).toHaveValue('2');

    // Screenshot 2: Shopping Cart
    await captureScreenshot(
        page,
        test.info(),
        'Q3-Shopping-Cart'
    );

    // Step 10: Accept Terms and Conditions
    await page.locator('#termsofservice').check();

    // Step 11: Proceed to Checkout
    await page.locator('#checkout').click();

    // Step 12: Verify Checkout Page
    await expect(page).toHaveURL(/checkout/);

    await expect(page.locator('body')).toBeVisible();

    // Screenshot 3: Checkout Page
    await captureScreenshot(
        page,
        test.info(),
        'Q3-Checkout-Page'
    );

    console.log('Q3 Product and Checkout Test Completed');

});
