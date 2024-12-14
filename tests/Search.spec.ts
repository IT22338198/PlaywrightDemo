import { test, expect } from '@playwright/test';

test('Search Functionality on Wiley Online Library', async ({ page }) => {
  // Go to the Wiley Online Library home page
  await page.goto('https://onlinelibrary.wiley.com/');

  await page.waitForSelector('input[name="q"]');  // Assuming the search bar uses the name "q"

  
  const searchTerm = 'Artificial Intelligence';  // Replace with the term you want to search for
  await page.fill('input[name="q"]', searchTerm);  // Fill the search bar with the term

  // Click on the search button 
  await page.click('button[type="submit"]');  // Adjust the selector if needed

  // Wait for the search results to load
  await page.waitForSelector('.search-result');  // Ensure that search results are visible (adjust selector if needed)

  
  const results = await page.locator('.search-result');  // This will depend on the actual result element on the page
  const resultText = await results.innerText();
  expect(resultText).toContain(searchTerm);  // Ensure that the search term appears in the results

  //  Verify that at least one result is displayed
  const resultCount = await page.locator('.search-result').count();  // Adjust selector for search result count
  expect(resultCount).toBeGreaterThan(0);  // There should be at least one result
});
