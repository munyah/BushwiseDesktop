import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;
    test('Open HomePage and verify title', async ({ page }) => {
        homePage = new HomePage(page);

        // open url
        await homePage.navigate();

        // verify title
        await expect(page).toHaveTitle('Best Field Guide Training #1 Courses in South Africa | Bushwise')
    })

    test('Open About us page and verify title', async ({ page }) => {
        homePage = new HomePage(page);

        // open url
        await page.goto('https://www.bushwise.co.za/about-us');

        // verify title
        await expect(page).toHaveTitle('Learn more about us | Bushwise')
    })

    test('Click the Go into the wild button using CSS Selector', async ({ page }) => {
        homePage = new HomePage(page);

        // open url
        await homePage.navigate();

        // click the button 
        await homePage.goIntoTheWildBtn.click();

        // verify url has #wildlife-courses
        // await expect(page).toHaveURL('https://www.bushwise.co.za/wildlife-courses');
        await expect(page).toHaveURL(/.*wildlife-courses/);
        
    })


    test('Verify heading text is visible using text selector', async ({ page }) => {
        homePage = new HomePage(page);

        // open url
        await homePage.navigate();

        // find the text locator  
        const headingText = homePage.headingText;

        // verify heading text is visible
        await expect(headingText).toBeVisible();
        
    })

    test('Verify Bushwise name and logo is visible using xpath selector', async ({ page }) => {
        homePage = new HomePage(page);

        // open url
        await homePage.navigate();

        // find the name and logo 
        const nameAndLogo = homePage.nameAndLogo;

        // verify name and logo is visible
        await expect(nameAndLogo).toBeVisible();
        
    })

    test('Verify text of all nav links', async ({ page }) => {
        homePage = new HomePage(page);
        const expectedLinks = [
            "ONLINE COURSES",
    "FGASA Field Guiding online course",
    "Nature Enthusiast online course",
    "Introduction Field Guiding online course",
        ];

        // open url
        await homePage.navigate();

        // find the nav links
        // const navLinks = page.locator('//*[@class="StylableHorizontalMenu3372578893__menu"]//*[@class="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item wixui-horizontal-menu__submenu-title"]');
        // const navLinks = page.locator('//*[@class="StylableHorizontalMenu3372578893__menu"]//*[@class="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item wixui-horizontal-menu__submenu-title"]').nth(1);
        // const navLinks = page.locator('#zak-primary-menu li[id*=menu]');
        const navLinks = homePage.navLinks.nth(1);

        // print out all the links
        for(const el of await navLinks.elementHandles()){
            console.log(await el.textContent());
        }

        // verify nav links text
        // expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        expect(await navLinks.textContent()).toContain(expectedLinks[1]);
        
    })
})