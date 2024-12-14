import { test, expect } from '@playwright/test';

test('Logout Functionality on Wiley Online Library', async ({ page }) => {
  // Go to the Wiley Online Library home page
  await page.goto('https://onlinelibrary.wiley.com/');

  // Navigate to the login page
  await page.click('text=Sign In');  // Adjust the selector based on the actual text

  
  await page.waitForSelector('#username');

  // Fill in the login credentials 
  await page.fill('#username', 'yourUsername');
  await page.fill('#password', 'yourPassword');

  // Click the login button
  await page.click('button[type="submit"]');  // Ensure this is the correct button for login

 
  await page.waitForSelector('text=Welcome');  // Modify based on the text or element that confirms login
  
  
  await page.click('text=Profile');  // This might be a user icon or name (you may need to inspect this)
  await page.click('text=Log out');  // Click the logout option (adjust the text as necessary)

  
  await page.waitForSelector('text=Sign In');  // Assuming the "Sign In" link appears after logout

  
  const isSignInVisible = await page.isVisible('text=Sign In');
  expect(isSignInVisible).toBe(true);  // The "Sign In" link should be visible if the user is logged out
});


