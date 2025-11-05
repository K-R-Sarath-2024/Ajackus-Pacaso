/// <reference types = "Cypress"/>
import Elements from '../common_methods/elements';

class DestinationsPage {

    constructor() {
        if(DestinationsPage.instance) {
            return DestinationsPage.instance
        }
        DestinationsPage.instance = this
    }

    international_Heading_Locator = '#market-filter-tab-2'
    international_And_US_Text_Locator = 'h4.flex'
    international_Locations = '#market-filter-panel-2 div.grid div.type-body-lg-medium'
    US_Heading_Locator = '#market-filter-tab-3'
    US_Locations = '#market-filter-panel-3 div.grid div.type-body-lg-medium'
    All_Destinations_Heading_Locator = '#market-filter-tab-1'
    All_Locations = '#market-filter-panel-1 div.grid div.type-body-lg-medium'
    list_button_Locator = '[data-id="List"]'
    list_And_Grid_View = 'div.grid picture source'
    grid_button_Locator = '[data-id="Card view"]'
    bahamas_Location_Grid = '[class*="PortfolioPage_image-gradient"]'
    caribbeanAndBahamas_Listings_Page_Heading = 'div.type-h2'
    footer_Portfolio_List = 'ul[aria-label="Portfolio"] li'
    search_Bar_Input = 'button.whitespace-nowrap.text-primary'
    slider_List = 'ul.slider-list li div.flex-grow'
    verify_Luxury_Homes_Page_Heading = 'h1.type-h2 span'
    
    

/**
 * This methods clicks the International heading
 */

    click_International_Heading() {
       return Elements.click(this.international_Heading_Locator)
    }

/**
 * This method verifies the page URL with expected string
 * 
 * @param {string} expectedText
 */     

    verify_Page_URL(expectedText) {
        return Elements.verify_URL(expectedText)
    }

/**
 * This methods asserts the heading of the International locations
 * 
 * @param {string} expectedText
 */     

    verify_International_Locations_Text(expectedText) {
        return Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText, 2)
    }

/**
 * This methods asserts actual locations with expected texts of International locations
 * 
 * @param {string[]} expectedTexts
 */     

    verify_International_Actual_Locations(expectedTexts) {
        return Elements.verify_Multiple_Elements(this.international_Locations, expectedTexts)
    }

/**
 * This method clicks United States heading
 */    

    click_US_Heading() {
        return Elements.click(this.US_Heading_Locator)
    }

/**
 * This method asserts the heading of the US locations
 * 
 * @param {string} expectedText
 */     

    verify_US_Locations_Text(expectedText) {
        return Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText, 3)
    }

/**
 * This methods asserts actual locations with expected texts Of US locations
 * 
 * @param {string[]} expectedTexts
 */     

    verify_US_Actual_Locations(expectedTexts) {
        return Elements.verify_Multiple_Elements(this.US_Locations, expectedTexts)
    }

/**
 * This method clicks all destinations heading
 */    

    click_All_Destinations_Heading() {
        return Elements.click(this.All_Destinations_Heading_Locator)
    }

/**
 * This method asserts the heading of US and International heading
 * 
 * @param {string} expectedText1
 * @param {string} expectedText2
 */     

    verify_All_Locations_Text(expectedText1, expectedText2) {
        Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText1, 0)
        Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText2, 1)
    }

/**
 * This method asserts actual locations with expected texts Of All locations
 * 
 * @param {string[]} expectedTexts
 */     

    verify_All_Actual_Locations(expectedTexts) {
        return Elements.verify_Multiple_Elements(this.All_Locations, expectedTexts)
    }

/**
 * This method clicks the List Icon in Destinations Page
 */    

    click_List_Icon() {
        return Elements.click(this.list_button_Locator)
    }

/**
 * This method verifies the List view in Destinations page with the expected attribute value
 * 
 * @param {string} attribute
 * @param {string} expectedValue 
 */    

    verify_List_View(attribute, expectedValue) {
        return Elements.verify_Elements_With_Attributes_Equal(this.list_And_Grid_View, attribute, expectedValue)
    }

/**
 * This method clicks the Grid Icon in the Destinations page
 */    

    click_Grid_Icon() {
        return Elements.click(this.grid_button_Locator)
    }

/**
 * This method verifies the Grid view in Destinations page with the expected attribute value
 * 
 * @param {string} attribute
 * @param {string} expectedValue 
 */    

    verify_Grid_View(attribute, expectedValue) {
        return Elements.verify_Elements_With_Attributes_NotEqual(this.list_And_Grid_View, attribute, expectedValue)
    }

/**
 * This method clicks the Whistler location in Destinations page
 */    

    click_CaribbeanAndBahamas_Location() {
        return Elements.click_First_Element(this.bahamas_Location_Grid)
    }

/**
 * This method verifies Bahamas listings page heading with the expected text
 * 
 * @param {string} expectedText 
 */    

    verify_CaribbeanAndBahamas_Listings_Page_Heading(expectedText) {
        cy.wait(3000)
        return Elements.verify_First_Element(this.caribbeanAndBahamas_Listings_Page_Heading, expectedText)
    }

/**
 * This method clicks US Destinations in Footer in Destinations page
 */    

    click_US_Destination_In_Footer() {
        return Elements.click_Element_With_Index(this.footer_Portfolio_List, 2)
    }

/**
 * This method verifies page scroll from bottom to top
 */    

    verify_Page_Scrolled_To_The_Top() {
        return Elements.scroll_To_Top()
    }

/**
 * This method clicks International Destinations in Footer in Destinations page
 */    

    click_International_Destination_In_Footer() {
        return Elements.click_Element_With_Index(this.footer_Portfolio_List, 3)
    }

/**
 * This method clicks California location
 */    

    click_LakeTahoe_Location() {
        return Elements.click_Element_With_Index(this.bahamas_Location_Grid, 14)
    }

/**
 * This method verifies search input
 * @param {string} expectedText
 */    

    verify_Search_Input(expectedText) {
        cy.wait(1000)
        return Elements.verify_Does_Not_Contain_Text(this.search_Bar_Input, expectedText)
    }

/**
 * This method clicks the first slide in collections carousel
 */    

    click_First_Slider() {
        return Elements.click_Element_With_Index(this.slider_List, 7)
    }

/**
 * This method verifies luxury homes page heading
 * @param {string} expectedText
 */    

    verify_Luxury_Page_Heading(expectedText) {
        return Elements.verify(this.verify_Luxury_Homes_Page_Heading, expectedText)
    }
    

}

export default DestinationsPage