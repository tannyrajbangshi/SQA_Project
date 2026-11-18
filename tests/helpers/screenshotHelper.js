
import fs from 'node:fs';
import path from 'node:path';

export async function captureScreenshot(page, testInfo, name) {

    // Screenshot folder location
    const screenshotDir = path.resolve('screenshots');

    // Create folder if it does not exist
    fs.mkdirSync(screenshotDir, {
        recursive: true
    });

    // Screenshot file path
    const screenshotPath = path.join(
        screenshotDir,
        `${name}.png`
    );

    // Capture screenshot
    await page.screenshot({
        path: screenshotPath,
        fullPage: true
    });

    // Attach screenshot to Allure report
    await testInfo.attach(name, {
        path: screenshotPath,
        contentType: 'image/png'
    });

    console.log('Screenshot saved:', screenshotPath);
}
