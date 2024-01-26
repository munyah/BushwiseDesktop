import { expect, test, Page } from "@playwright/test";
import { SocialMedia } from "../pages/socialMedia.page";

interface SocialMediaTest {
  platform: string;
  urlRegex: RegExp;
}

const socialMediaTests: SocialMediaTest[] = [
  { platform: "TikTok", urlRegex: /.*tiktok.*/i },
  { platform: "Instagram", urlRegex: /.*instagram.*/i },
  { platform: "YouTube", urlRegex: /.*bushwise_sa.*/i },
  { platform: "Facebook", urlRegex: /.*bushwise/ },
  { platform: "LinkedIn", urlRegex: /.*linkedin.*/i }
];

test.describe("SocialMedia", () => {
  let socialMedia: SocialMedia;
  let newPage: Page;

  test.beforeEach(async ({ page }) => {
    socialMedia = new SocialMedia(page);
    await socialMedia.goto();
    await socialMedia.scrollToBottom();
  });

  socialMediaTests.forEach(({ platform, urlRegex }) => {
    test(`Go to Bushwise ${platform} page and verify URL`, async () => {
      newPage = await socialMedia.navigateToSocialMediaTab(platform);
      await expect(newPage).toHaveURL(urlRegex);
    });
  });

  test.afterEach(async () => {
    if (newPage) {
      await newPage.close();
    }
  });
});
