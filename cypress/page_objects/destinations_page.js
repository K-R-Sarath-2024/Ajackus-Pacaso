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
    

/**
 * This methods clicks the International heading
 */

    click_International_Heading() {
        Elements.click(this.international_Heading_Locator)
    }

/**
 * This method verifies the page URL with expected string
 * 
 * @param {string} expectedText
 */     

    verify_Page_URL(expectedText) {
        Elements.verify_URL(expectedText)
    }

/**
 * This methods asserts the heading of the International locations
 * 
 * @param {string} expectedText
 */     

    verify_International_Locations_Text(expectedText) {
        Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText, 2)
    }

/**
 * This methods asserts actual locations with expected texts of International locations
 * 
 * @param {string[]} expectedTexts
 */     

    verify_International_Actual_Locations(expectedTexts) {
        Elements.verify_Multiple_Elements(this.international_Locations, expectedTexts)
    }

/**
 * This method clicks United States heading
 */    

    click_US_Heading() {
        Elements.click(this.US_Heading_Locator)
    }

/**
 * This method asserts the heading of the US locations
 * 
 * @param {string} expectedText
 */     

    verify_US_Locations_Text(expectedText) {
        Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText, 3)
    }

/**
 * This methods asserts actual locations with expected texts Of US locations
 * 
 * @param {string[]} expectedTexts
 */     

    verify_US_Actual_Locations(expectedTexts) {
        Elements.verify_Multiple_Elements(this.US_Locations, expectedTexts)
    }

/**
 * This method clicks all destinations heading
 */    

    click_All_Destinations_Heading() {
        Elements.click(this.All_Destinations_Heading_Locator)
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
        Elements.verify_Multiple_Elements(this.All_Locations, expectedTexts)
    }

    

}

export default DestinationsPage