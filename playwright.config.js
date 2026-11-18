
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    timeout: 60000,

    fullyParallel: false,

    retries: 0,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }],
        ['allure-playwright']
    ],

    use: {
        baseURL: 'https://demowebshop.tricentis.com',

        browserName: 'chromium',

        headless: true,

        screenshot: 'only-on-failure',

        trace: 'retain-on-failure'
    }
});
