/// <reference types = "Cypress"/>
import Elements from '../commonMethods/Elements';

class HomePage {

    constructor() {
        if(HomePage.instance){
            return HomePage.instance
        }
        HomePage.instance = this;
    }

       browseOurPortfolioButtonLocator = 'a[data-id="browse-our-portfolio-button"]'
       caboImageLocator = '//div[contains(text(),"Cabo")]'
       caboPageHeading = 'h1 span'
       londonImageLocator = '//div[contains(text(),"London")]'
       londonPageHeading = 'h1 span'
       parisImageLocator = '//div[contains(text(),"Paris")]'
       closeTooltipLocator ='div h1'
       parisPageHeading = 'div h1'
       puntaMitaImageLocator = '//div[contains(text(),"Punta Mita")]'
       internationalContactPageHeading = 'span b'
       browseDestinationsLinkLocator = '//a//span[contains(text(),"Browse Destinations")]'
       learnMoreButtonLocator = '//button[contains(text(),"Learn more")]'
       schedulingPageHeading = 'h1.type-h2'

       clickBrowseOurPortfolioButton() {
        return Elements.clickWithCSS(this.browseOurPortfolioButtonLocator)
       }

       clickCaboImage() {
        return Elements.clickFIRSTELEMENTWithXPATH(this.caboImageLocator)
       }

       verifyPageURL() {
        return Elements.verifyURL()
       }

       verifyCaboPageHeading() {
        return Elements.cssVERIFY(this.caboPageHeading)
       }

       clickLondonImage() {
        return Elements.clickFIRSTELEMENTWithXPATH(this.londonImageLocator)
       }

       verifyLondonPageHeading() {
        return Elements.cssVERIFY(this.londonPageHeading)
       }

       clickParisImage() {
        return Elements.clickFIRSTELEMENTWithXPATH(this.parisImageLocator)
       }

       closeTooltip() {
        return Elements.clickFIRSTELEMENTWithCSS(this.closeTooltipLocator)
       }

       verifyParisPageHeading() {
        return Elements.cssVERIFY(this.parisPageHeading)
       }

       clickPuntaMitaImage() {
        return Elements.clickFIRSTELEMENTWithXPATH(this.puntaMitaImageLocator)
       }

       verifyInternationalContactPageHeading() { 
        return Elements.cssVERIFY(this.internationalContactPageHeading)
       }

       clickBrowseDestinationsLink() {
        return Elements.clickWithXPATH(this.browseDestinationsLinkLocator)
       }

       clickLearnMoreButtonForScheduling() {
        return Elements.clickXPATHELEMENTWithINDEX(this.learnMoreButtonLocator, 1)
       }

       verifySchedulingPageHeading() {
        return Elements.xpathVERIFY(this.schedulingPageHeading)
       }       
}

export default HomePage;