
import { test, expect } from '@playwright/test';
import { getRegistrationData } from '../test-data/testData.js';
import { captureScreenshot } from './helpers/screenshotHelper.js';

test('Q2 - Register and Add Product to Cart', async ({ page }) => {

    const user = getRegistrationData();

    // Open registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // Select gender
    await page.locator('#gender-male').check();

    // Enter registration details
    await page.locator('#FirstName').fill(user.firstName);
    await page.locator('#LastName').fill(user.lastName);
    await page.locator('#Email').fill(user.email);
    await page.locator('#Password').fill(user.password);
    await page.locator('#ConfirmPassword').fill(user.password);

    // Click Register
    await page.locator('#register-button').click();

    // Verify registration
    await expect(page.locator('.result')).toContainText('Your registration completed');

    // Navigate to product
    await page.goto('https://demowebshop.tricentis.com/books');

    // Add first book to cart
    await page.locator('.product-box-add-to-cart-button').first().click();

    // Verify success notification
    await expect(page.locator('.bar-notification')).toBeVisible();
    // Capture Q2 Screenshot
    await captureScreenshot(
    page,
    test.info(),
    'Q2-Product-Added-To-Cart'
    );

    console.log('Q2 Registration and Cart Test Passed');

});
