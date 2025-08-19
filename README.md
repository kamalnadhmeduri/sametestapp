# sametestapp

npm init -y
npm install playwright

npx playwright install


const { chromium } = require('playwright');
const { format } = require('date-fns');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const USERNAME = process.env.SN_USER;
  const PASSWORD = process.env.SN_PASS;

  // Tomorrow’s date
  const tomorrow = format(new Date(Date.now() + 86400000), 'yyyy-MM-dd');

  // Your 4 desk preferences in order
  const deskPreferences = ['D101', 'D102', 'D103', 'D104'];

  // Go to booking page
  await page.goto('https://company.service-now.com/desk-booking');

  // Login
  await page.fill('#username', USERNAME);
  await page.fill('#password', PASSWORD);
  await page.click('#loginBtn');

  await page.waitForTimeout(3000);

  // Select tomorrow's date
  await page.fill('#dateField', tomorrow);

  let booked = false;

  for (const desk of deskPreferences) {
    try {
      console.log(`Trying to book desk: ${desk}`);

      // Select desk (adjust selector as per ServiceNow page)
      await page.selectOption('#deskDropdown', desk);

      // Click book
      await page.click('#bookDeskBtn');

      // Wait for success message (adjust selector to your page)
      await page.waitForSelector('.success-message', { timeout: 3000 });

      console.log(`✅ Successfully booked desk: ${desk}`);
      booked = true;
      break;
    } catch (err) {
      console.log(`❌ Desk ${desk} not available, trying next...`);
    }
  }

  if (!booked) {
    console.log("⚠️ Could not book any preferred desks.");
    await page.screenshot({ path: 'failed-booking.png' });
  }

  await browser.close();
})();
