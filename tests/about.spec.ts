import { test, expect } from "@playwright/test";
import AboutPage from "../pages/about.page";

test.describe('About', () => {
    let aboutPage: AboutPage
    test('Open About us page and verify title', async ({ page }) => {
        aboutPage = new AboutPage(page);

        // open url
        await aboutPage.navigate();

        // verify title
        await expect(page).toHaveTitle('Learn more about us | Bushwise')
    })
    
    
})
