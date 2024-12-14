import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://example.com', 
    headless: true,                  
    browserName: 'chromium',         
  },
  timeout: 60000, // Increase global timeout to 60 seconds
});
