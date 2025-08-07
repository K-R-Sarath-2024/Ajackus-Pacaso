/// <reference types = "Cypress"/>
import Elements from '../common_methods/elements';

class HomePage {

    constructor() {
        if(HomePage.instance){
            return HomePage.instance
        }
        HomePage.instance = this;
    }

       browse_Our_Portfolio_Button_Locator = 'a[data-id="browse-our-portfolio-button"]'
       cabo_London_Paris_PuntaMita_Image_Locator = '[class^="FeaturedLocations"]'
       cabo_Page_Heading = 'h1 span'
       london_Page_Heading = 'h1 span'
       close_Tooltip_Locator ='div h1'
       paris_Page_Heading = 'div h1'
       international_Contact_Page_Heading = 'span b'
       browse_Destinations_Link_Locator = '[data-id="featured-locations-actionlink- Browse Destinations"]'
       learn_More_Button_Locator = '[class^=Button_button-text]'
       scheduling_Page_Heading = 'h1.type-h2'
       design_Certified_Homes_Page_Heading = 'h1.type-h2'
       swap_Page_Heading = 'h1.type-h2'
       how_It_Works_Button = 'a[data-id="link"]'
       co_ownership_Page_Heading = 'h1.type-h2'

       click_Browse_Our_Portfolio_Button() {
        return Elements.click(this.browse_Our_Portfolio_Button_Locator)
       }

       click_Cabo_Image() {
        return Elements.click_Element_With_Index(this.cabo_London_Paris_PuntaMita_Image_Locator, 1)
       }

/**
 * @param {string} expectedURL
 */        

       verify_Page_URL(expectedURL) {
        return Elements.verify_URL(expectedURL)
       }

/**
 * @param {string} expectedText
 */        

       verify_Cabo_Page_Heading(expectedText) {
        return Elements.verify(this.cabo_Page_Heading, expectedText)
       }

       click_London_Image() {
        return Elements.click_Element_With_Index(this.cabo_London_Paris_PuntaMita_Image_Locator, 2)
       }

/**
 * @param {string} expectedText
 */        

       verify_London_Page_Heading(expectedText) {
        return Elements.verify(this.london_Page_Heading, expectedText)
       }

       click_Paris_Image() {
        return Elements.click_Element_With_Index(this.cabo_London_Paris_PuntaMita_Image_Locator, 4)
       }

       close_Tool_tip() {
        return Elements.click_First_Element(this.close_Tooltip_Locator)
       }

/**
 * @param {string} expectedText
 */        

       verify_Paris_Page_Heading(expectedText) {
        return Elements.verify_First_Element(this.paris_Page_Heading, expectedText)
       }

       click_Punta_Mita_Image() {
        return Elements.click_Element_With_Index(this.cabo_London_Paris_PuntaMita_Image_Locator, 5)
       }

/**
 * @param {string} expectedText
 */        

       verify_International_Contact_Page_Heading(expectedText) { 
        return Elements.verify(this.international_Contact_Page_Heading, expectedText)
       }

       click_Browse_Destinations_Link() {
        return Elements.click(this.browse_Destinations_Link_Locator)
       }

       click_Learn_More_Button_For_Scheduling() {
        return Elements.click_Element_With_Index(this.learn_More_Button_Locator, 1)
       }

/**
 * @param {string} expectedText
 */        

       verify_Scheduling_Page_Heading(expectedText) {
        return Elements.verify(this.scheduling_Page_Heading, expectedText)
       }
       
       click_Learn_More_Button_For_Design_Certified_Homes() {
        return Elements.click_Element_With_Index(this.learn_More_Button_Locator, 0)
       }

/**
 * @param {string} expectedText
 */        

       verify_Design_Certified_Homes_Page_Heading(expectedText) {
        return Elements.verify(this.design_Certified_Homes_Page_Heading, expectedText)
       }

       click_Learn_More_Button_For_Swap() {
        return Elements.click_Element_With_Index(this.learn_More_Button_Locator, 2)
       }

/**
 * @param {string} expectedText
 */        

       verify_Swap_Page_Heading(expectedText) {
        return Elements.verify(this.swap_Page_Heading, expectedText)
       }

       click_How_It_Works_Button() {
        return Elements.click(this.how_It_Works_Button)
       }

/**
 * @param {string} expectedText
 */        

       verify_CoOwnership_Simplified_Page_Heading(expectedText) {
        return Elements.verify(this.co_ownership_Page_Heading, expectedText)
       }
}

export default HomePage;