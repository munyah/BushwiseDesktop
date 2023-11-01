import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
    test('Fill contact form and verify success message', async ({ page }) => {
        // open contact page
        await page.goto('https://www.bushwise.co.za/contact-us');

        await page.waitForTimeout(3000);

        // Using name
        const frame1 = await page.frame('htmlComp-iframe')

        // fill out the input fields
        await frame1?.fill('input[placeholder="First Name*"]', 'Automated');
        await frame1?.fill('input[placeholder="Last Name*"]', 'Test');
        await frame1?.fill('input[placeholder="Email*"]', 'automatedtest@gviprograms.com');
        await frame1?.fill('input[placeholder="Phone*"]', '07123456789');
        await frame1?.selectOption('select[name="country"]', { value: 'United Kingdom' });
        await frame1?.fill('textarea', 'This is just a test');
        
        // select checkboxes
        await frame1?.click('input#tc_agree');
        await frame1?.click('input#newsletter_signup');

       // click submit
        const submitButton = await frame1?.$("button[type='submit']");

        // click submit again (retry 2 times)
        for (let i = 0; i < 2; i++) {
        await page.waitForTimeout(2000);
        await submitButton?.click();
        }
        
        // verify success message
        await frame1?.waitForSelector("//h1[normalize-space()='Thank you for reaching out to Bushwise.']", { state: 'visible' })
        const successAlert = await frame1?.$("//h1[normalize-space()='Thank you for reaching out to Bushwise.']")
        expect(successAlert).toBeTruthy
    })
})
