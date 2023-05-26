const { test, expect, chromium } = require('@playwright/test');

test('edit-001 เมื่อเปิดหน้าแก้ไขข้อมูลคำสั่งซื้อ ทำการเปลี่ยนแปลงข้อมูล แต่ไม่ได้กดบันทึก ระบบจะไม่ทำการบันทึกข้อมูลที่ทำการแก้ไขลงไป', async () => {
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
  await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[2]/app-order-sell-table/div/div[2]/table/tbody/div/tr[1]/td[9]').click()
  await page.getByRole('cell', { name: 'ดู แก้ไขคำสั่งซื้อ ลบ ' }).getByText('แก้ไขคำสั่งซื้อ').click();
  await page.getByRole('button', { name: 'ยกเลิก' }).click();
});

test('edit-002 เมื่อเปิดหน้าแก้ไขข้อมูลคำสั่งซื้อ ทำการลบค่าที่บังคับให้กรอก และทำการกดบันทึก ระบบจะไม่สามารถแก้ไขข้อมูลคำสั่งซื้อได้และแสดงข้อความแจ้งเตือนให้กรอกข้อมูลที่ถูกบังคับให้กรอก', async () => {
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
    await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[2]/app-order-sell-table/div/div[2]/table/tbody/div/tr[1]/td[9]').click()
    await page.getByRole('cell', { name: 'ดู แก้ไขคำสั่งซื้อ ลบ ' }).getByText('แก้ไขคำสั่งซื้อ').click();
    await page.getByPlaceholder('ระบุชื่อ - นามสกุล').fill('');
    await page.getByPlaceholder('เบอร์ติดต่อ').fill('');
    await page.getByPlaceholder('กรุณากรอกที่อยู่').fill('');
    await page.getByRole('textbox', { name: ' พิมพ์เพื่อค้นหา' }).fill('');
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    const name = page.locator('//*[@id="order-edit-modal"]/div/div/div[2]/div[1]/div/div[1]/p[2]')
    const tel = page.locator('//*[@id="order-edit-modal"]/div/div/div[2]/div[1]/div/div[2]/p[2]')
    const address = page.locator('//*[@id="order-edit-modal"]/div/div/div[2]/div[1]/div/div[3]/p[2]')
    const location = page.locator('//*[@id="order-edit-modal"]/div/div/div[2]/div[1]/div/div[4]/p[2]')
    await expect(name).toHaveText('กรุณาระบุ ชื่อ-นามสกุล')
    await expect(tel).toHaveText('กรุณากรอกเบอร์โทรให้ครบถ้วน')
    await expect(address).toHaveText('กรุณาระบุที่อยู่')
    await expect(location).toHaveText('กรุณาระบุตำแหน่ง')
  });

  test('edit-003 เมื่อทำการแก้ไขข้อมูลชื่อ - นามสกุลผู้รับ ระบบจะสามารถแสดงชื่อผู้รับบนรายการคำสั่งซื้อได้ถูกต้อง', async () => {
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
    await page.pause()
    await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[2]/app-order-sell-table/div/div[2]/table/tbody/div/tr[1]/td[9]').click()
    await page.getByRole('cell', { name: 'ดู แก้ไขคำสั่งซื้อ ลบ ' }).getByText('แก้ไขคำสั่งซื้อ').click();
    await page.getByPlaceholder('ระบุชื่อ - นามสกุล').fill('ทดสอบ ถูกต้อง');
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    const name = page.locator('//*[@id="table-name-label-0"]')
    await expect(name).toHaveText('ทดสอบ ถูกต้อง')
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('บันทึกรายการสำเร็จแล้ว')
  });

  test('edit-004 เมื่อทำการแก้ไขข้อมูลเบอร์โทรศัพท์ ระบบจะสามารถแสดงเบอร์โทรศัพท์บนรายการคำสั่งซื้อได้ถูกต้อง', async () => {
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
    await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[2]/app-order-sell-table/div/div[2]/table/tbody/div/tr[2]/td[9]').click()
    await page.getByRole('cell', { name: 'ดู แก้ไขคำสั่งซื้อ ลบ ' }).getByText('แก้ไขคำสั่งซื้อ').click();
    await page.getByPlaceholder('เบอร์ติดต่อ').fill('0800088080');
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    const tel = page.locator('//*[@id="table-tel-label-1"]')
    await expect(tel).toHaveText('080-008-8080')
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('บันทึกรายการสำเร็จแล้ว')
  });


  test('edit-005 เมื่อทำการแก้ไขข้อมูลจำนวนสินค้า ระบบจะสามารถแสดงยอดเงินบนรายการคำสั่งซื้อได้ถูกต้อง', async () => {
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
    await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[2]/app-order-sell-table/div/div[2]/table/tbody/div/tr[3]/td[9]').click()
    await page.getByRole('cell', { name: 'ดู แก้ไขคำสั่งซื้อ ลบ ' }).getByText('แก้ไขคำสั่งซื้อ').click();
    await page.locator('//*[@id="646f29d2ccc8060011236e49-add-amount"]').click();
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click()
    const product = page.locator('//*[@id="table-product-label-2"]')
    await expect(product).toHaveText('ทดสอบ(2)')
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('บันทึกรายการสำเร็จแล้ว')
  });

  test('edit-006 เมื่อทำการแก้ไขข้อมูลวิธีการชำระเงิน ระบบจะสามารถแสดงวิธีการชำระเงินบนรายการคำสั่งซื้อได้ถูกต้อง', async () => {
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
    await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[2]/app-order-sell-table/div/div[2]/table/tbody/div/tr[9]/td[9]').click()
    await page.getByRole('cell', { name: 'ดู แก้ไขคำสั่งซื้อ ลบ ' }).getByText('แก้ไขคำสั่งซื้อ').click();
    await page.locator('//*[@id="select-payment-type-input"]/div').click()
    await page.getByRole('button', { name: 'ชำระเงินปลายทาง (COD)' }).click();
    await page.pause()
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    const product = page.locator('//*[@id="table-balance-type-label-8"]')
    await expect(product).toHaveText(' 100 (COD)')
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('บันทึกรายการสำเร็จแล้ว')
  });

  test('edit-007 เมื่อทำการแก้ไขข้อมูลค่าส่ง ระบบจะสามารถแสดงยอดเงินบนรายการคำสั่งซื้อได้ถูกต้อง', async () => {
    const browser = await chromium.launch({
      args: ["--ignore-certificate-errors"],
      headless: false,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.myorder.ai/auth/login')
    await page.locator('//*[@id="email-input"]').type('titlesaharat@outlook.co.th')
    await page.locator('//*[@id="password-input"]').type('test123456')
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//html/body/app-root/app-team-list/div/div[2]/div[2]/app-team-list-select/div/div[1]/app-team-box').click()
    await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[2]/app-order-sell-table/div/div[2]/table/tbody/div/tr[9]/td[9]').click()
    await page.getByRole('cell', { name: 'ดู แก้ไขคำสั่งซื้อ ลบ ' }).getByText('แก้ไขคำสั่งซื้อ').click();
    await page.locator('#customer-express-price-input').fill('10');
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    const product = page.locator('//*[@id="table-balance-type-label-8"]')
    await expect(product).toHaveText('110 (COD)')
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('บันทึกรายการสำเร็จแล้ว')
  });

test('edit-008 เมื่อทำการแก้ไขข้อมูลส่วนลด ระบบจะสามารถแสดงยอดเงินบนรายการคำสั่งซื้อได้ถูกต้อง', async () => {
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
    await page.locator('//*[@id="content-main-page"]/app-other-sell/div/div[2]/app-order-sell-table/div/div[2]/table/tbody/div/tr[6]/td[9]').click()
    await page.getByRole('cell', { name: 'ดู แก้ไขคำสั่งซื้อ ลบ ' }).getByText('แก้ไขคำสั่งซื้อ').click();
    await page.locator('#customer-discount-input').fill('20');
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    const product = page.locator('//*[@id="table-balance-type-label-5"]')
    await expect(product).toHaveText(' 80 (BANK)')
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('บันทึกรายการสำเร็จแล้ว')
  });

