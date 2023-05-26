const {test,expect, chromium} = require('@playwright/test')

test('delete-001 เมื่อทำการลบรายการคำสั่งซื้อ และไม่ได้พิมพ์ข้อความ ลบ ระบบจะไม่สามารถกดปุ่มยืนยันการลบรายการสั่งซื้อได้',async() =>{
const browser = await chromium.launch({
    args:["--ignore-certificate-errors"],
    headless: true,
});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.myorder.ai/auth/login')
await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
await page.locator('//*[@id="password-input"]').type('test123456')
await page.locator('//*[@id="login-button"]').click()
await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
await page.check('#content-main-page > app-other-sell > div > div.order-table > app-order-sell-table > div > div.row.table-box > table > tbody > div > tr:nth-child(1) > th > input')
await page.locator('//*[@id="remove-order-btn"]').click()
const ddisble = page.locator('confirm-submit-button')
await expect(ddisble).toBeHidden()
});

test('delete-002 เมื่อทำการลบรายการคำสั่งซื้อ และพิมพ์ข้อความ ลบ ระบบจะสามารถกดปุ่มยืนยันการลบรายการสั่งซื้อได้',async() =>{
    const browser = await chromium.launch({
        args:["--ignore-certificate-errors"],
        headless:true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.myorder.ai/auth/login')
    await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
    await page.locator('//*[@id="password-input"]').type('test123456')
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
    await page.check('#content-main-page > app-other-sell > div > div.order-table > app-order-sell-table > div > div.row.table-box > table > tbody > div > tr:nth-child(1) > th > input')
    await page.locator('//*[@id="remove-order-btn"]').click()
    await page.getByPlaceholder('กรุณาพิมพ์คำว่า ลบ เพื่อยืนยัน').fill('ลบ');
    await page.getByRole('button', { name: 'ยืนยัน', exact: true }).click()
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('ลบสำเร็จ 1 รายการ')
});

test('delete-003 ระบบสามารถลบรายการคำสั่งซื้อทีละรายการได้',async() =>{
    const browser = await chromium.launch({
        args:["--ignore-certificate-errors"],
        headless:true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.myorder.ai/auth/login')
    await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
    await page.locator('//*[@id="password-input"]').type('test123456')
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
    await page.locator('#content-main-page > app-other-sell > div > div.order-table > app-order-sell-table > div > div.row.table-box > table > tbody > div > tr:nth-child(1) > th > input').click()
    await page.locator('//*[@id="remove-order-btn"]').click()
    await page.getByPlaceholder('กรุณาพิมพ์คำว่า ลบ เพื่อยืนยัน').fill('ลบ');
    await page.getByRole('button', { name: 'ยืนยัน', exact: true }).click()
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('ลบสำเร็จ 1 รายการ')
});

test('delete-004 ระบบสามารถลบรายการคำสั่งซื้อทีละหลายรายการได้',async() =>{
    const browser = await chromium.launch({
        args:["--ignore-certificate-errors"],
        headless:true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.myorder.ai/auth/login')
    await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
    await page.locator('//*[@id="password-input"]').type('test123456')
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
    await page.locator('#content-main-page > app-other-sell > div > div.order-table > app-order-sell-table > div > div.row.table-box > table > thead > tr > th:nth-child(1) > input').click()
    await page.locator('//*[@id="remove-order-btn"]').click()
    await page.getByPlaceholder('กรุณาพิมพ์คำว่า ลบ เพื่อยืนยัน').fill('ลบ');
    await page.getByRole('button', { name: 'ยืนยัน', exact: true }).click()
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('ลบสำเร็จ 10 รายการ')
})