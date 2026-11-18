
import { test, expect } from '@playwright/test';

test('Q1 - Invalid Login Test', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/login');

    await page.locator('#Email').fill('invaliduser123@gmail.com');

    await page.locator('#Password').fill('WrongPassword123');

    await page.locator('input.login-button').click();

    await expect(page.locator('.validation-summary-errors'))
        .toBeVisible();

    console.log('Q1 Invalid Login Test Passed');

});
