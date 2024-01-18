import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
        
     })
    test('Open HomePage and verify title', async ({ page }) => {
        // verify title
        await expect(page).toHaveTitle('Best Field Guide Training #1 Courses in South Africa | Bushwise')
    })

    test('Click the Go into the wild button using CSS Selector', async ({ page }) => {
        // click the button 
        await homePage.goIntoTheWildBtn.click();

        // verify url has #wildlife-courses
        await expect(page).toHaveURL(/.*wildlife-courses/);
        
    })

    test('Verify heading text is visible using text selector', async () => {
        // find the text locator  
        const headingText = homePage.headingText;

        // verify heading text is visible
        await expect(headingText).toBeVisible();
        
    })

    test('Verify Bushwise name and logo is visible using xpath selector', async () => {
        // find the name and logo 
        const nameAndLogo = homePage.nameAndLogo;

        // verify name and logo is visible
        await expect(nameAndLogo).toBeVisible();
        
    })

    test('Verify text of all nav links', async () => {
        const expectedLinks = [
            "ONLINE COURSES",
    "FGASA Field Guiding online course",
    "Nature Enthusiast online course",
    "Introduction Field Guiding online course",
        ];

        // find the nav links
        const navLinks = homePage.navLinks.nth(1);

        // print out all the links
        for(const el of await navLinks.elementHandles()){
            console.log(await el.textContent());
        }

        // verify nav links text
        expect(await navLinks.textContent()).toContain(expectedLinks[1]);
        
    })
})