import { test, expect } from '@playwright/test';

test('Login Functionality on Wiley Online Library', async ({ page }) => {
 
  await page.goto('https://onlinelibrary.wiley.com/');

  
  await page.waitForSelector('text=Sign In', { state: 'visible' });  // Adjust selector if needed
  await page.click('text=Sign In', { timeout: 60000 });  // Increase timeout to 60s

  
  await page.waitForSelector('#username');
  
  // Fill in the login credentials
  await page.fill('#username', 'yourUsername');  // Replace with actual username
  await page.fill('#password', 'yourPassword');  // Replace with actual password
  
  // Click the login button
  await page.click('button[type="submit"]');  // Ensure this is the correct button for login

  // Wait for successful login 
  await page.waitForSelector('text=Welcome');  // Modify this if needed to check for successful login

  // Verify a successful login 
  const welcomeText = await page.innerText('h1');
  expect(welcomeText).toContain('Welcome');
});
