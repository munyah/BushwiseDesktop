import { expect, test, Page } from "@playwright/test";
import { SocialMedia } from "../pages/socialMedia.page";

test.describe("SocialMedia", () => {
  let socialMedia: SocialMedia;
  let newPage: Page;

  const tikTokTitle = "Log in | TikTok" || "Bushwise Field Guides 🦁 (@bushwise) | TikTok";
  const instagramTitle = "Page couldn't load • Instagram" || "Bushwise (@bushwise.sa) • Instagram photos and videos";
  const youTubeTitle = "Bushwise - YouTube";
  const facebookTitle = "Bushwise | Facebook";
  const linkedInTitle = "Sign Up | LinkedIn" || "Bushwise Field Guides | LinkedIn";

  test.beforeEach(async ({ page }) => {
    socialMedia = new SocialMedia(page);
    await socialMedia.goto();
    await socialMedia.scrollToBottom();
  });

  test("Go to Bushwise TikTok page and verify title", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("TikTok");
    await expect(newPage).toHaveTitle(tikTokTitle);
  });

  test("Go to Bushwise Instagram page and verify title", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("Instagram");
    await expect(newPage).toHaveTitle(instagramTitle);
  });

  test("Go to YouTube channel and verify title", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("YouTube");
    await expect(newPage).toHaveTitle(youTubeTitle);
  });

  test("Go to Facebook page and verify title", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("Facebook");
    await expect(newPage).toHaveTitle(facebookTitle);
  });

  test("Go to LinkedIn page and verify title", async () => {
    newPage = await socialMedia.navigateToSocialMediaTab("LinkedIn");
    await expect(newPage).toHaveTitle(linkedInTitle);
  });

  test.afterEach(async () => {
    if (newPage) {
      await newPage.close();
    }
  });
});
