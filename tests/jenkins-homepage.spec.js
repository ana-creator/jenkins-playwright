import { test, expect } from '@playwright/test';

test('Jenkins Homepage', async ({ page, browserName }) => {
  await page.goto('https://www.jenkins.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jenkins/);
  // receive screenshots for each browser, 3 screenshots in total, with name homepage-<browserName>.png
  await page.screenshot({ path: 'tests/homepage-'+browserName+'.png', fullPage: true });
});