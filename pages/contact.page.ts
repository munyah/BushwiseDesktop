import { Page, FrameLocator, Locator } from "@playwright/test";

class ContactPage {
  private page: Page;
  frame1: FrameLocator;
  successTextLocator: Locator;

  // Define static constants for locators
  static iframeLoactor = "htmlComp-iframe";
  static thankYouMessage =
    '//h1[normalize-space()="Thank you for reaching out to Bushwise."]';

  constructor(page: Page) {
    this.page = page;
    this.frame1 = page.frameLocator("htmlComp-iframe");
    this.frame1 = page.frameLocator(ContactPage.iframeLoactor);

    // Set successText locator within the frame
    this.successTextLocator = this.frame1.locator(ContactPage.thankYouMessage);
  }

  async navigate() {
    await this.page.goto("https://www.bushwise.co.za/contact-us");
  }

  async submitForm(
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    country: string,
    message: string
  ) {
    const frame1 = await this.page.frame("htmlComp-iframe");

    // fill out the input fields
    await frame1?.fill('input[placeholder="First Name*"]', firstName);
    await frame1?.fill('input[placeholder="Last Name*"]', lastName);
    await frame1?.fill('input[placeholder="Email*"]', email);
    await frame1?.fill('input[placeholder="Phone*"]', phone);
    await frame1?.selectOption('select[name="country"]', { value: country });
    await frame1?.fill("textarea", message);

    // select checkboxes
    await frame1?.click("input#tc_agree");
    await frame1?.click("input#newsletter_signup");

    // click submit (retry 2 times)
    const submitButton = await frame1?.$("button[type='submit']");
    for (let i = 0; i < 2; i++) {
      await submitButton?.click();
    }
  }
}

export default ContactPage;
