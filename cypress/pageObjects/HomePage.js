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
       caboImageLocator = 'div'
       caboPageHeading = 'h1 span'
       londonImageLocator = 'div'
       londonPageHeading = 'h1 span'
       parisImageLocator = 'div'
       closeTooltipLocator ='div h1'
       parisPageHeading = 'div h1'
       puntaMitaImageLocator = 'div'
       internationalContactPageHeading = 'span b'
       browseDestinationsLinkLocator = 'a span'
       learnMoreButtonLocator = 'button'
       schedulingPageHeading = 'h1.type-h2'
       designCertifiedHomesPageHeading = 'h1.type-h2'
       swapPageHeading = 'h1.type-h2'
       howItWorksButton = 'a[data-id="link"]'
       coownershipPageHeading = 'h1.type-h2'

       clickBrowseOurPortfolioButton() {
        return Elements.clickWithCSS(this.browseOurPortfolioButtonLocator)
       }

       clickCaboImage() {
        return Elements.clickFIRSTELEMENTWithCSSContainingText(this.caboImageLocator, 'Cabo')
       }

       verifyPageURL() {
        return Elements.verifyURL()
       }

       verifyCaboPageHeading() {
        return Elements.cssVERIFY(this.caboPageHeading)
       }

       clickLondonImage() {
        return Elements.clickFIRSTELEMENTWithCSSContainingText(this.londonImageLocator, 'London')
       }

       verifyLondonPageHeading() {
        return Elements.cssVERIFY(this.londonPageHeading)
       }

       clickParisImage() {
        return Elements.clickFIRSTELEMENTWithCSSContainingText(this.parisImageLocator, 'Paris')
       }

       closeTooltip() {
        return Elements.clickFIRSTELEMENTWithCSS(this.closeTooltipLocator)
       }

       verifyParisPageHeading() {
        return Elements.cssVERIFY(this.parisPageHeading)
       }

       clickPuntaMitaImage() {
        return Elements.clickFIRSTELEMENTWithCSSContainingText(this.puntaMitaImageLocator, 'Punta Mita')
       }

       verifyInternationalContactPageHeading() { 
        return Elements.cssVERIFY(this.internationalContactPageHeading)
       }

       clickBrowseDestinationsLink() {
        return Elements.clickWithCSSContaningText(this.browseDestinationsLinkLocator, 'Browse Destinations')
       }

       clickLearnMoreButtonForScheduling() {
        return Elements.clickCSSELEMENTWithINDEXContainingText(this.learnMoreButtonLocator, 1, 'Learn more')
       }

       verifySchedulingPageHeading() {
        return Elements.cssVERIFY(this.schedulingPageHeading)
       }
       
       clickLearnMoreButtonForDesignCertifiedHomes() {
        return Elements.clickCSSELEMENTWithINDEXContainingText(this.learnMoreButtonLocator, 0, 'Learn more')
       }

       verifyDesignCertifiedHomesPageHeading() {
        return Elements.cssVERIFY(this.designCertifiedHomesPageHeading)
       }

       clickLearnMoreButtonForSwap() {
        return Elements.clickCSSELEMENTWithINDEXContainingText(this.learnMoreButtonLocator, 2, 'Learn more')
       }

       verifySwapPageHeading() {
        return Elements.cssVERIFY(this.swapPageHeading)
       }

       clickHowItWorksButton() {
        return Elements.clickWithCSS(this.howItWorksButton)
       }

       verifyCoOwnershipSimplifiedPageHeading() {
        return Elements.cssVERIFY(this.coownershipPageHeading)
       }
}

export default HomePage;