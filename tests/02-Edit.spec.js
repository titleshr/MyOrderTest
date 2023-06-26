const { test, expect, chromium } = require('@playwright/test');
require('dotenv').config()
const id = 'titlesaharat1@outlook.co.th';
const pwd = 'title071041';
test('edit-001 เมื่อเปิดหน้าแก้ไขข้อมูลคำสั่งซื้อ ทำการเปลี่ยนแปลงข้อมูล แต่ไม่ได้กดบันทึก ระบบจะไม่ทำการบันทึกข้อมูลที่ทำการแก้ไขลงไป', async () => {
  const browser = await chromium.launch({
    args: ["--ignore-certificate-errors"],
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.myorder.ai/auth/login')
  await page.locator('//*[@id="email-input"]').type(id)
  await page.locator('//*[@id="password-input"]').type(pwd)
  await page.locator('//*[@id="login-button"]').click()
  await page.locator('//*[@id="64996737bc51d30011948ec0"]').click()
  await page.getByText('ซีโอดี ทดสอบ').click();
  await page.getByText('แก้ไขออเดอร์').click();
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
    await page.locator('//*[@id="email-input"]').type(id)
    await page.locator('//*[@id="password-input"]').type(pwd)
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//*[@id="64996737bc51d30011948ec0"]').click();
    await page.getByText('ซีโอดี ทดสอบ').click();
    await page.getByText('แก้ไขออเดอร์').click();
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
    await page.locator('//*[@id="email-input"]').type(id)
    await page.locator('//*[@id="password-input"]').type(pwd)
    await page.locator('//*[@id="login-button"]').click();
    await page.locator('//*[@id="64996737bc51d30011948ec0"]').click()
    await page.getByText('สินค้าระบบ ทดสอบ').click();
    await page.getByText('แก้ไขออเดอร์').click();
    await page.getByPlaceholder('ระบุชื่อ - นามสกุล').fill('ทดสอบ ถูกต้อง')
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click()
    await page.waitForTimeout(1500)
    const element = await page.$('p.text.customer-name:has-text("ทดสอบ ถูกต้อง")');
    const text = await element.innerText();
    await expect(text).toBe('ทดสอบ ถูกต้อง')
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
    await page.locator('//*[@id="email-input"]').type(id)
    await page.locator('//*[@id="password-input"]').type(pwd)
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//*[@id="64996737bc51d30011948ec0"]').click()
    await page.getByText('ช้อปปี้ ทดสอบ').click()
    await page.getByText('แก้ไขออเดอร์').click()
    await page.getByPlaceholder('เบอร์ติดต่อ').fill('0800088080');
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    await page.waitForTimeout(1500)
    const element = await page.$('p.text:has-text("080-008-8080")');
    const text = await element.innerText();
    await expect(text).toBe('080-008-8080')
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
    await page.locator('//*[@id="email-input"]').type(id)
    await page.locator('//*[@id="password-input"]').type(pwd)
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//*[@id="64996737bc51d30011948ec0"]').click()
    await page.getByText('ไม่มีสลิป ทดสอบ').click()
    await page.getByText('แก้ไขออเดอร์').click()
    await page.locator('//*[@id="increase-amount-64996831c9c8ee0013b0cc02"]').click();
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click()
    await page.waitForTimeout(1500) //wait for update value
    const element = await page.$(`p.text.product-name:has-text("แมวเหมียว(${process.env.ROUND})")`)
    const text = await element.innerText();
    await expect(text).toBe(`แมวเหมียว(${process.env.ROUND})`)
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
    await page.locator('//*[@id="email-input"]').type(id)
    await page.locator('//*[@id="password-input"]').type(pwd)
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//*[@id="64996737bc51d30011948ec0"]').click()
    await page.getByText('เทส').click()
    await page.getByText('แก้ไขออเดอร์').click()
    await page.locator('//*[@id="select-payment-type-input"]/div').click()
    await page.getByRole('button', { name: 'ชำระเงินปลายทาง (COD)' }).click();
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    await page.waitForTimeout(2000);
    const element = await page.$('p.text[id^="table-balance-type-label-"]:has-text(" 100 (COD)")')
    const text = await element.innerHTML();
    await expect(text).toBe(' 100 (COD)')
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('บันทึกรายการสำเร็จแล้ว')
  });

  test('edit-007 เมื่อทำการแก้ไขข้อมูลค่าส่ง ระบบจะสามารถแสดงยอดเงินบนรายการคำสั่งซื้อได้ถูกต้อง', async () => {
    const browser = await chromium.launch({
      args: ["--ignore-certificate-errors"],
      headless: true,
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.myorder.ai/auth/login')
    await page.locator('//*[@id="email-input"]').type(id)
    await page.locator('//*[@id="password-input"]').type(pwd)
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//*[@id="64996737bc51d30011948ec0"]').click()
    await page.getByText('โอนเงิน ทดสอบ').click()
    await page.getByText('แก้ไขออเดอร์').click()
    await page.locator('#customer-express-price-input').fill('10');
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    await page.waitForTimeout(1500)
    const element = await page.$('p.text[id^="table-balance-type-label-"]:has-text(" 11 (BANK)")')
    const text = await element.innerHTML();
    await expect(text).toBe(' 11 (BANK)')
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
    await page.locator('//*[@id="email-input"]').type(id)
    await page.locator('//*[@id="password-input"]').type(pwd)
    await page.locator('//*[@id="login-button"]').click()
    await page.locator('//*[@id="64996737bc51d30011948ec0"]').click()
    await page.getByText('ทดสอบลดราคา').click()
    await page.getByText('แก้ไขออเดอร์').click()
    await page.locator('#customer-discount-input').fill('20');
    await page.getByRole('button', { name: 'บันทึกรายการ' }).click();
    await page.waitForTimeout(1500)
    const element = await page.$('p.text[id^="table-balance-type-label-"]:has-text(" 80.12 (BANK)")')
    const text = await element.innerHTML();
    await expect(text).toBe(' 80.12 (BANK)')
    const noti = page.locator('//*[@id="message-notify-0"]')
    await expect(noti).toHaveText('บันทึกรายการสำเร็จแล้ว')
  });