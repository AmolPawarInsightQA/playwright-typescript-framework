import { test, expect } from '../fixtures/testFixtures';

test('social links open the expected pages and user can sign in', async ({ page, pageNavigation }) => {
  await pageNavigation.openLoginPage();

  const youtubePage = await pageNavigation.openSocialPage(pageNavigation.youtubeButton);
  await expect(youtubePage).toHaveTitle(/Mukesh otwani/i);
  await youtubePage.close();
  await page.bringToFront();

  const twitterPage = await pageNavigation.openSocialPage(pageNavigation.twitterButton);
  await expect(twitterPage).toHaveURL('https://x.com/MukeshOtwani');
  await twitterPage.close();
  await page.bringToFront();

  await pageNavigation.login('admin@email.com', 'admin@123');
  await expect(pageNavigation.welcomeMessage).toBeVisible();
});