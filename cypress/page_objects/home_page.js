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

/**
 * This method clicks browse our portfolio button
 */       

       click_Browse_Our_Portfolio_Button() {
        cy.wait(1000)      
        return Elements.click(this.browse_Our_Portfolio_Button_Locator)
       }

/**
 * This method clicks the Cabo Image
 */       

       click_Cabo_Image() {
        return Elements.click_Element_With_Index(this.cabo_London_Paris_PuntaMita_Image_Locator, 1)
       }

/**
 * This method verifies the Page URL with expected string
 * @param {string} expectedURL
 */        

       verify_Page_URL(expectedURL) {
        return Elements.verify_URL(expectedURL)
       }

/**
 * This method verifies cabo page heading
 * @param {string} expectedText
 */        

       verify_Cabo_Page_Heading(expectedText) {
        return Elements.verify(this.cabo_Page_Heading, expectedText)
       }

/**
 * This method clicks london image 
 */       

       click_London_Image() {
        return Elements.click_Element_With_Index(this.cabo_London_Paris_PuntaMita_Image_Locator, 2)
       }

/**
 * This method verifies london page heading
 * @param {string} expectedText
 */        

       verify_London_Page_Heading(expectedText) {
        return Elements.verify(this.london_Page_Heading, expectedText)
       }

/**
 * This method clicks Paris image
*/       

       click_Paris_Image() {
        return Elements.click_Element_With_Index(this.cabo_London_Paris_PuntaMita_Image_Locator, 4)
       }

/**
 * This method clicks on the page heading to close the tooltip
 */       

       close_Tool_tip() {
        return Elements.click_First_Element(this.close_Tooltip_Locator)
       }

/**
 * This method verifies paris page heading
 * @param {string} expectedText
 */        

       verify_Paris_Page_Heading(expectedText) {
        return Elements.verify_First_Element(this.paris_Page_Heading, expectedText)
       }

/**
 * This method clicks Punta mita image
 */       

       click_Punta_Mita_Image() {
        return Elements.click_Element_With_Index(this.cabo_London_Paris_PuntaMita_Image_Locator, 5)
       }

/**
 * This method verifies international contact page heading
 * @param {string} expectedText
 */        

       verify_International_Contact_Page_Heading(expectedText) { 
        return Elements.verify(this.international_Contact_Page_Heading, expectedText)
       }

/**
 * This method clicks Browse destinations link
 */       

       click_Browse_Destinations_Link() {
        return Elements.click(this.browse_Destinations_Link_Locator)
       }

/**
 * This method clicks learn more button in scheduling section
 */       

       click_Learn_More_Button_For_Scheduling() {
        return Elements.click_Element_With_Index(this.learn_More_Button_Locator, 1)
       }

/**
 * This method verifies scheduling page heading
 * @param {string} expectedText
 */        

       verify_Scheduling_Page_Heading(expectedText) {
        return Elements.verify(this.scheduling_Page_Heading, expectedText)
       }

/**
 * This method clicks learn more button in design section
 */        
       
       click_Learn_More_Button_For_Design_Certified_Homes() {
        return Elements.click_Element_With_Index(this.learn_More_Button_Locator, 0)
       }

/**
 * This method verifies design page heading
 * @param {string} expectedText
 */        

       verify_Design_Certified_Homes_Page_Heading(expectedText) {
        return Elements.verify(this.design_Certified_Homes_Page_Heading, expectedText)
       }

/**
 * This method clicks learn more button in swap section
 */       

       click_Learn_More_Button_For_Swap() {
        return Elements.click_Element_With_Index(this.learn_More_Button_Locator, 2)
       }

/**
 * This method verifies swap page heading
 * @param {string} expectedText
 */        

       verify_Swap_Page_Heading(expectedText) {
        return Elements.verify(this.swap_Page_Heading, expectedText)
       }

/**
 * This method clicks How it works button
 */       

       click_How_It_Works_Button() {
        return Elements.click(this.how_It_Works_Button)
       }

/**
 * This method verifies co-ownership page heading
 * @param {string} expectedText
 */        

       verify_CoOwnership_Simplified_Page_Heading(expectedText) {
        return Elements.verify(this.co_ownership_Page_Heading, expectedText)
       }
}

export default HomePage;