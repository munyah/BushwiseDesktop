// contact.spec.ts

import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";

test("Fill contact form and verify success message", async ({ page }) => {
  const contactPage = new ContactPage(page);

  // navigate to contact page
  await contactPage.navigate();
  await page.waitForTimeout(4000);

  // fill out the input fields and submit
  await contactPage.submitForm(
    "Automated",
    "Test",
    "automatedtest@gviprograms.com",
    "07123456789",
    "United Kingdom",
    "This is just a test"
  );

  // Using the static constants
  const frame1 = page.frame(ContactPage.iframeLoactor);
  const successAlert = await frame1?.waitForSelector(
    ContactPage.thankYouMessage,
    { state: "visible" }
  );

  expect(successAlert).toBeTruthy();
  expect(await successAlert?.textContent()).toContain(
    "Thank you for reaching out to Bushwise."
  );
});
