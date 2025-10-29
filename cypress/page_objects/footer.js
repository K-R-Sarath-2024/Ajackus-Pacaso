/// <reference types = "Cypress"/>
import Elements from '../common_methods/elements';

class Footer{

    constructor() {
        if(Footer.instance) {
            return Footer.instance
        }
        Footer.instance = this
    }
    
    portfolio_Locator = 'footer ul[aria-label="Portfolio"] li a'
    coOwnership_Locator = 'footer ul[aria-label="Co-Ownership"] li a'

    click_AllHomes_In_Footer() {
        return Elements.click_Element_With_Index(this.portfolio_Locator, 0)
    }

    click_AllDestinations_In_Footer() {
        return Elements.click_Element_With_Index(this.portfolio_Locator, 1)
    }

    click_USDestinations_In_Footer() {
        return Elements.click_Element_With_Index(this.portfolio_Locator, 2)
    }

    click_InternationalDestinations_In_Footer() {   
        return Elements.click_Element_With_Index(this.portfolio_Locator, 3)
    }

    click_Sell_In_Footer() {    
        return Elements.click_Element_With_Index(this.portfolio_Locator, 4)
    }
    
    click_HowItWorks_In_CoOwnership() {
        return Elements.click_Element_With_Index(this.coOwnership_Locator, 0)
    }

    click_TryPacaso_In_CoOwnership() {
        return Elements.click_Element_With_Index(this.coOwnership_Locator, 1)
    }

    click_Financing_In_CoOwnership() {
        return Elements.click_Element_With_Index(this.coOwnership_Locator, 2)
    }

    click_Testimonials_In_CoOwnership() {
        return Elements.click_Element_With_Index(this.coOwnership_Locator, 3)
    }

    click_FAQs_In_CoOwnership() {
        return Elements.click_Element_With_Index(this.coOwnership_Locator, 4)
    }

    click_Webinars_In_CoOwnership() {
        return Elements.click_Element_With_Index(this.coOwnership_Locator, 5)
    }

    click_Blog_In_CoOwnership() {
        return Elements.click_Element_With_Index(this.coOwnership_Locator, 6)
    }

}

export default Footer