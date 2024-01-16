class HomePage {
    page: any;
    goIntoTheWildBtn: any;
    headingText: any;
    nameAndLogo: any;
    navLinks: any;
    
    constructor(page){
        this.page = page;
        this.goIntoTheWildBtn = page.locator("a[aria-label='Go into the wild'] div[class='StylableButton2545352419__container']");
        this.headingText = page.locator('text=Choose your');
        this.nameAndLogo = page.locator('//*[@id="comp-ln0yip0a_r_comp-lm8z9wee"]');
        this.navLinks = page.locator('//*[@class="StylableHorizontalMenu3372578893__menu"]//*[@class="itemDepth02233374943__itemWrapper wixui-horizontal-menu__item wixui-horizontal-menu__submenu-title"]');

    }

}

export default HomePage;