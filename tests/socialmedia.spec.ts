import { expect, test, Page } from "@playwright/test";
import { SocialMedia } from "../pages/socialMedia.page";

test.describe("SocialMedia", () => {
  let socialMedia: SocialMedia;
  let newPage: Page;

  const tikTokURL= /.*tiktok.*/i;
  const instagramURL= /.*instagram.*/i;
  const youTubeURL = /.*bushwise_sa.*/i;
  const facebookURL = /.*bushwise/;
  const linkedInURL= /.*linkedin.*/i;

  test.beforeEach(async ({ page }) => {
    socialMedia = new SocialMedia(page);
    await socialMedia.goto();
    await socialMedia.scrollToBottom();
  });

  test("Go to Bushwise TikTok page and verify URL", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("TikTok");
    await expect(newPage).toHaveURL(tikTokURL);
  });

  test("Go to Bushwise Instagram page and verify URL", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("Instagram");
    await expect(newPage).toHaveURL(instagramURL);
  });

  test("Go to YouTube channel and verify URL", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("YouTube");
    await expect(newPage).toHaveURL(youTubeURL);
  });

  test("Go to Facebook page and verify URL", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("Facebook");
    await expect(newPage).toHaveURL(facebookURL);
  });

  test("Go to LinkedIn page and verify URL", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("LinkedIn");
    await expect(newPage).toHaveURL(linkedInURL);
});


  test.afterEach(async () => {
    if (newPage) {
      await newPage.close();
    }
  });
});
