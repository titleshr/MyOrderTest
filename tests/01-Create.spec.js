const { test, expect, chromium } = require('@playwright/test');

test('create-001 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก Line ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="line-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-002 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก Instagram ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="instagram-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-003 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก Twitter ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="twitter-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-004 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก Facebook ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="facebook-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-005 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก WWW ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="website-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-006 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก ETC. ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="other-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-007 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก Tiktok ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="tiktok-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-008 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก Lazada ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="lazada-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-009 เมื่อสร้างคำสั่งซื้อโดยเลือกช่องทางการติดต่อจาก Shopee ระบบสามารถสร้างคำสั่งซื้อได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="shopee-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});


test('create-010 ถ้ากรอกที่อยู่โดยกรอกพื้นที่ที่เป็นเขตท่องเที่ยวและมีค่าส่งแพง ระบบจะแสดงข้อความแจ้งเตือนว่าเป็นพื้นที่ท่องเที่ยวและมีค่าส่งแพง', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="shopee-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('ต.นาเกลือ อ.บางละมุง จ.ชลบุรี 20260')
  const noti = page.locator('//*[@id="notification-remote-area-modal"]/div/div/div/div[1]/div[1]/p')
  await expect(noti).toHaveText('20260 เป็นพื้นที่ท่องเที่ยวของขนส่ง')
});

test('create-011 ถ้ากรอกที่อยู่โดยกรอกพื้นที่ที่มีการจัดส่งล่าช้า ระบบจะแสดงข้อความแจ้งเตือนว่าเป็นพื้นที่ที่มีการจัดส่งล่าช้า', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="shopee-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('ต.นาเกลือ อ.บางละมุง จ.ชลบุรี 20260')
  const noti = page.locator('//*[@id="notification-remote-area-modal"]/div/div/div/div[1]/div[1]/p')
  await expect(noti).toHaveText('20260 เป็นพื้นที่ท่องเที่ยวของขนส่ง')
});


test('create-012 เมื่อทำการกดปุ่มล้างข้อมูล ระบบจะลบข้อมูลบน field ชื่อ - นามสกุล, เบอร์โทรศัพท์, ที่อยู่, ตำแหน่งของผู้รับ, อีเมล, หมายเหตุ', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="shopee-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ต.สุรศักดิ์ อ.ศรีราชา จ.ชลบุรี 20110')
  await page.locator('//*[@id="clear-address-button"]').click()
  const name = page.locator('//*[@id="customer-name-input"]')
  const tel = page.locator('//*[@id="customer-name-input"]')
  const address = page.locator('//*[@id="address-input"]')
  const location = page.locator('//*[@id="search-address"]')
  await expect(name).toHaveText('')
  await expect(tel).toHaveText('')
  await expect(address).toHaveText('')
  await expect (location).toHaveText('')
});

test('create-013 ระบบสามารถสร้างคำสั่งซื้อโดยเลือกรายการสินค้าจากสินค้าในระบบได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="line-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-014 ระบบสามารถสร้างคำสั่งซื้อโดยเลือกรายการสินค้ากรอกเองได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="line-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="custom-product-add"]').click()
  await page.locator('//*[@id="custom-product-name-input-0"]').click()
  await page.locator('//*[@id="custom-product-name-input-0"]').type('สินค้าทดสอบ')
  await page.locator('//*[@id="custom-product-price-input-0"]').click()
  await page.locator('//*[@id="custom-product-price-input-0"]').type('20')
  await page.locator('//*[@id="custom-product-weight-input-0"]').click()
  await page.locator('//*[@id="custom-product-weight-input-0"]').type('1')
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-015 ระบบสามารถสร้างคำสั่งซื้อโดยเลือกวิธีการชำระเงินแบบ โอนเงิน (ฺBANK) ได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="line-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});


test('create-016 ระบบสามารถสร้างคำสั่งซื้อโดยไม่แนบสลิปและลิงก์ใบเสร็จได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="line-button"]/img').click()
  await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
  await page.locator('//*[@id="system-product-add"]').click()
  await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
  await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
  await page.locator('#cancel-order-button > div.confirm-button').click()
});

test('create-017 ระบบสามารถตรวจสอบสลิปปลอม จากสลิปที่มี QR Code ได้', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
  await page.locator('//*[@id="password-input"]').type('test123456')
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
  await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[1]/div[5]/div[4]/app-payment/div/div/div[3]/div[2]/div/div[1]/label').setInputFiles('./tests/photo/fake slip.jpg')
  const noti = page.locator('//*[@id="message-notify-0"]')
  await expect(noti).toHaveText('ระบบไม่สามารถอ่านค่าสลิปได้ หรือสลิปหมดอายุ กรุณากรอกข้อมูลเอง')
  await page.pause()
});

test('create-018 เมื่อทำการแนบสลิป ระบบจะแสดงตัวอย่างรูปภาพสลิปที่แนบไป', async () => {
    const browser = await chromium.launch({
      args: ["--ignore-certificate-errors"],
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.myorder.ai/auth/login')
    await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
    await page.locator('//*[@id="password-input"]').type('test123456')
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
    await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[1]/div[5]/div[4]/app-payment/div/div/div[3]/div[2]/div/div[1]/label').setInputFiles('./tests/photo/real slip.jpg')
    const slip = page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[1]/div[5]/div[4]/app-payment/div/div/div[3]/div[4]/div[6]/div')
    await expect(slip).toBeVisible()
  });

  test('ระบบสามารถสร้างคำสั่งซื้อโดยเลือกวิธีการชำระเงินแบบ ชำระเงินปลายทาง (COD) ได้', async () => {
      const browser = await chromium.launch({
        args: ["--ignore-certificate-errors"],
        headless: true,
      });
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('https://www.myorder.ai/auth/login')
      await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
      await page.locator('//*[@id="password-input"]').type('test123456')
      await page.locator('//*[@id="login-button"]').click()
      await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
      await page.locator('//*[@id="line-button"]/img').click()
      await page.locator('//*[@id="address-detect-input"]').type('สหรัตน์ นาที\n0800612534\n88/222 ม.9 ตำบลศรีราชา อำเภอศรีราชา จังหวัดชลบุรี 20110')
      await page.locator('//*[@id="system-product-add"]').click()
      await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click()
      await page.locator('//*[@id="other-sell-create-basket-modal"]/div/div/div/div/div[2]/div[3]/div/div[3]').click()
      await page.locator('//*[@id="payment-type-input"]/app-dropdown/div').click()
      await page.locator('//*[@id="cod"]/div/div/div/span').click()
      await page.locator('#cancel-order-button > div.confirm-button').click()
    });

    test('create-020 ระบบสามารถ import ไฟล์ excel ที่มี format ข้อมูลที่ถูกต้อง เพื่อสร้างคำสั่งซื้อได้', async () => {
      const browser = await chromium.launch({
        args: ["--ignore-certificate-errors"],
        headless: true,
      });
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('https://www.myorder.ai/auth/login')
      await page.pause()
      await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
      await page.locator('//*[@id="password-input"]').type('test123456')
      await page.locator('//*[@id="login-button"]').click()
      await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
      await page.locator('//*[@id="open-download-button"]/p').click()
      await page.locator('//*[@id="myorder"]').click()
      await page.locator('//*[@id="uploadModal"]/div/div/div[2]/div/label').setInputFiles('./tests/file/MyOrder_Default_Template.xlsx')
      await page.locator('//*[@id="submit-upload-button"]').click()
      const noti = page.locator('//*[@id="message-notify-0"]')
      await expect(noti).toHaveText('อัปโหลดไฟล์สำเร็จ')
      await page.pause()
    });


