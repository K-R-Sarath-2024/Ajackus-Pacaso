/// <reference types = "Cypress"/>
import Elements from '../common_methods/elements';

class Header{

    constructor() {
        if(Header.instance) {
            return Header.instance
        }
        Header.instance = this
    }

    portfolio_Locator = '[data-id="button-submenu-1"]'
    mega_Dropdown = '[data-id="portfolio-mega-dropdown"]'
    dropdown_Elements_Locator = '[data-id="portfolio-mega-dropdown"] a'
    coOwnership_Locator = '[data-id="button-submenu-2"]'
    coOwnership_Dropdown = 'span[data-id*="header-submenuitem"]'
    contact_Locator = 'a[class*="NavButton"]'

    mouseHover_Portfolio(position) {
        Elements.mouseHover(this.portfolio_Locator, position)
    }

    verify_MegaDropdown() {
        cy.wait(1000)
        Elements.verify_Element_Exist_And_Visible(this.mega_Dropdown)
    }

    click_Elements_In_MegaDropdown(text) {
        Elements.click_Element_Containing_Text(this.dropdown_Elements_Locator, text)
    }

    mouseHover_CoOwnership(position) {
        Elements.mouseHover(this.coOwnership_Locator, position)
    }

    click_HowItWorks_In_CoOwnership() {
        Elements.click_Element_With_Index(this.coOwnership_Dropdown, 0)
    }

    click_TryPacaso_In_CoOwnership() {
        Elements.click_Element_With_Index(this.coOwnership_Dropdown, 1)
    }

    click_FAQs_In_CoOwnership() {
        Elements.click_Element_With_Index(this.coOwnership_Dropdown, 2)
    }

    click_Blog_In_CoOwnership() {
        Elements.click_Element_With_Index(this.coOwnership_Dropdown, 3)
    }

    click_Agents_In_CoOwnership() {
        Elements.click_Element_With_Index(this.coOwnership_Dropdown, 4)
    }

    click_Contact() {
        Elements.click(this.contact_Locator)
    }

}

export default Header