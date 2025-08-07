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
    

    click_International_Heading() {
        Elements.click(this.international_Heading_Locator)
    }

/**
 * @param {string} expectedText
 */     

    verify_Page_URL(expectedText) {
        Elements.verify_URL(expectedText)
    }

/**
 * @param {string} expectedText
 */     

    verify_International_Locations_Text(expectedText) {
        Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText, 2)
    }

/**
 * @param {string[]} expectedTexts
 */     

    verify_International_Actual_Locations(expectedTexts) {
        Elements.verify_Multiple_Elements(this.international_Locations, expectedTexts)
    }

    click_US_Heading() {
        Elements.click(this.US_Heading_Locator)
    }

/**
 * @param {string} expectedText
 */     

    verify_US_Locations_Text(expectedText) {
        Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText, 3)
    }

/**
 * @param {string[]} expectedTexts
 */     

    verify_US_Actual_Locations(expectedTexts) {
        Elements.verify_Multiple_Elements(this.US_Locations, expectedTexts)
    }

    click_All_Destinations_Heading() {
        Elements.click(this.All_Destinations_Heading_Locator)
    }

/**
 * @param {string} expectedText1
 * @param {string} expectedText2
 */     

    verify_All_Locations_Text(expectedText1, expectedText2) {
        Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText1, 0)
        Elements.verify_With_Index(this.international_And_US_Text_Locator, expectedText2, 1)
    }

/**
 * @param {string[]} expectedTexts
 */     

    verify_All_Actual_Locations(expectedTexts) {
        Elements.verify_Multiple_Elements(this.All_Locations, expectedTexts)
    }

    

}

export default DestinationsPage