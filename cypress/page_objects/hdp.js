/// <reference types = "Cypress"/>
import Elements from '../common_methods/elements';

class HomeDetailsPage {

    constructor() {
        if(HomeDetailsPage.instance) {
            return HomeDetailsPage.instance
        }
        HomeDetailsPage.instance = this
    }

    show_AllPhotos_Button = 'button[data-id="show-all-photo-button"]'
    heart_Locator = '[data-id="Heart"]'
    close_SignIn_Popup = 'button[data-id="sign-in-modal-close-button"]'
    design_Certified_Link_Locator = 'a[target="_blank"]'
    backButton_Locator = 'button[data-id="media-hub-close"]'
    follow_Button = 'button[data-id="follow-button"]'
    view_All_Amenities_Locator = 'button[data-id="view-all-amenities-button"]'
    amenities_Heading = '#dialog-heading'
    learn_More_Link = 'a[class^="StyledLink"]'
    dropdown_Locator_Financing = '[data-id="ChevronSouth"]'
    ownership_Option = 'button[value="HALF"]'
    downpayment_Option = 'button[value="50"]'
    half_Ownership_Amount = '#ownership-calculator-share-select-help-text'
    fifty_Downpayment_Amount = '#ownership-calculator-downpayment-select-help-text'

/**
 * This method clicks view all photos button
 */    

    click_View_AllPhotos_Button() {
        cy.wait(1000)
        Elements.click_Element_With_Index(this.show_AllPhotos_Button, 0)
    }

/**
 * This method verifies page URL with Regular Expression
 * @param {RegExp} expectedURL
 */    

    verify_Page_URL_Regular_Expression(expectedURL) {
        cy.wait(1000)
        return Elements.verify_URL_REGEXP(expectedURL)      
    }

/**
 * This method clicks the heart symbol
 */    

    click_Heart_Top0fThePage() {
        return Elements.click_Element_With_Index(this.heart_Locator, 8)
    }

/**
 * This method clicks the heart symbol in sticky hub
 */    

    click_Heart_In_Sticky_Hub() {
        return Elements.click_Element_With_Index(this.heart_Locator, 9)
    }

/**
 * This method closes sign in popup
 */    

    click_Close_SignIn() {
        return Elements.click(this.close_SignIn_Popup)
    }

/**
 * This method clicks design link
 */    

    click_Design_Link() {
        return Elements.click_Element_With_Index(this.design_Certified_Link_Locator, 29)
    }

/**
 * This method clicks back button
 */    

    click_Back() {
        return Elements.click(this.backButton_Locator)
    }

/**
 * This method verifies HDP with URL does not include the expected URL as regular expression
 * @param {RegExp} expectedURL
 */    

    verify_HDP(expectedURL) {
        cy.wait(1000)
        return Elements.verify_URL_REGEXP_NOTMATCH(expectedURL)
    }

/**
 * This method clicks follow button
 * @param {string} position
 */    

    click_Follow_Button(position) {
        cy.wait(3000)
        return Elements.click_Last_Element(this.follow_Button, position)
    }

/**
 * This method clicks show All photos button
 */    

    click_Show_All_Photos_Button() {
        cy.wait(1500)
        return Elements.click_Element_With_Index(this.show_AllPhotos_Button, 1)
    }

/**
 * This method clicks design certified link
 */    

    click_Design_Cerified_Link() {
        cy.wait(1500)
        return Elements.click_Element_With_Index(this.design_Certified_Link_Locator, 1)
    }

/**
 * This method clicks view all amenities button
 */    

    click_View_All_Amenities_Button() {
        cy.wait(1250)
        return Elements.click_First_Element(this.view_All_Amenities_Locator)
    }

/**
 * This method verifies amenities
 * @param {string} expectedText
 * @param {number|string} [target]
 */    

    verify_Amenities(expectedText, target) {
        return Elements.verify(this.amenities_Heading, expectedText, target)
    }

/**
 * This method clicks learn more link
 */    

    click_Learn_More_Link() {
        cy.wait(1250)
        return Elements.click_Element_With_Index(this.learn_More_Link, 4)
    }

/**
 * This method clicks ownership dropdown
 */    

    click_Ownership_Dropdown() {
        Elements.scroll_Into_View(this.dropdown_Locator_Financing, 0)
        cy.wait(2000)
        return Elements.click_First_Element(this.dropdown_Locator_Financing)
    }

/**
 * This method clicks 1/2 option in ownership dropdown
 */    

    choose_Half_Option() {
        cy.wait(2000)
        return Elements.click(this.ownership_Option)
    }

/**
 * This method clicks downpayment dropdown
 */    

    click_Downpayment_Dropdown() {
        cy.wait(2000)
        return Elements.click_Element_With_Index(this.dropdown_Locator_Financing, 1)
    }

/**
 * This method chooses 50% as downpayment option
 */    

    choose_Downpayment_Option() {
        cy.wait(2000)
        return Elements.click(this.downpayment_Option)
    }

/**
 * This method compares ownership amount and downpayment amount
 */    

    compare_Ownership_And_Downpayment_And_Verify() {
        return Elements.verify_Downpayment_Ownership_Price(this.half_Ownership_Amount, this.fifty_Downpayment_Amount)
    }
}

export default HomeDetailsPage