import { test } from "@playwright/test";

test('Login HRM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button:has-text("Login")').click();
    await page.locator("//span[text()='Recruitment']").click();
    await page.locator("//button[text()=' Add ']").click();
    await page.locator('//input[@placeholder="First Name"]').fill('santhosh');
    await page.locator('//input[@placeholder="Middle Name"]').fill('kumar');
    await page.locator('//input[@placeholder="Last Name"]').fill('burgula');
    await page.locator(".oxd-select-text-input").click();
    await page.getByRole('option', { name: "Software Engineer" }).getByText("Software Engineer", { exact: true }).click();
    await page.locator('(//label[text()="Email"]/following::input)[1]').fill('santhosh@gmail.com');
    await page.locator('(//label[text()="Contact Number"]/following::input)[1]').fill('9959899494');
    await page.locator('.oxd-file-input').setInputFiles('demo-file.txt');
    await page.locator('//input[@placeholder="Enter comma seperated words..."]').fill('qwert tyui rtyui dfghjk dfgh');
    await page.locator('//textarea[@placeholder="Type here"]').fill('qwerty sdfghj sdfghj sdfghj fghj');
    await page.locator("//i[contains(@class,'oxd-icon bi-check')]").click();
    await page.locator("//button[text()=' Save ']").click();
});