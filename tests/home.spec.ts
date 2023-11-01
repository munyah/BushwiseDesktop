import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => {
        // open url
        await page.goto('https://www.bushwise.co.za/');

        // verify title
        await expect(page).toHaveTitle('Best Field Guide Training #1 Courses in South Africa | Bushwise')
    })

    test('Open About us page and verify title', async ({ page }) => {
        // open url
        await page.goto('https://www.bushwise.co.za/about-us');

        // verify title
        await expect(page).toHaveTitle('Learn more about us | Bushwise')
    })

    test('Click the Go into the wild button using CSS Selector', async ({ page }) => {
        // open url
        await page.goto('https://www.bushwise.co.za/');

        // click the button 
        await page.locator("a[aria-label='Go into the wild'] div[class='StylableButton2545352419__container']").click();

        // verify url has #get-started
        // await expect(page).toHaveURL('https://www.bushwise.co.za/wildlife-courses');
        await expect(page).toHaveURL(/.*wildlife-courses/);
        
    })


    test('Verify heading text is visible using text selector', async ({ page }) => {
        // open url
        await page.goto('https://www.bushwise.co.za/');

        // find the text locator  
        const headingText = page.locator('text=Choose your');

        // verify heading text is visible
        await expect(headingText).toBeVisible();
        
    })
})