/// <reference types = "Cypress"/>
import ElementsValidation from "./elements_validation";

class Elements {

/**
 * @param {string} cssLocator
 */    

    static css_Verify(cssLocator) {

        return ElementsValidation.validate_CSS_Locator(cssLocator).then(() => {
            return cy.get(cssLocator).should('be.visible')
        })

    } 

/**
 * @param {string} cssLocator
 */     

    static verify_First_Element_With_CSS(cssLocator) {

        return ElementsValidation.validate_CSS_Locator(cssLocator).then(() => {
            return cy.get(cssLocator).first().should('be.visible')
        })

    }

/**
 * @param {string} cssLocator
 */ 

    static verify_Last_Element_With_CSS(cssLocator) {

        return ElementsValidation.validate_CSS_Locator(cssLocator).then(() => {
            return cy.get(cssLocator).last().should('be.visible')
        })

    }

/**
 * @param {string} cssLocator
 */    

    static click_With_CSS(cssLocator) {

        return ElementsValidation.validate_CSS_Locator(cssLocator).then(() => {
            return cy.get(cssLocator).should('be.visible').click()
        })

    }

/**
 * @param {string} cssLocator
 * @param {string} text
 */    

    static click_With_CSS_Containing_Text(cssLocator, text) {

        return ElementsValidation.validate_CSS_Locator_And_Text(cssLocator, text).then(() => {
            return cy.get(cssLocator).contains(text).should('be.visible').click()
        })

    }

/**
 * @param {string} cssLocator
 * @param {number} index
 */    

    static click_CSS_Element_With_Index(cssLocator, index) {

        return ElementsValidation.validate_CSS_Locator_And_Index(cssLocator, index).then(() => {
            return cy.get(cssLocator).eq(index).should('be.visible').click()
        })
        
    }

/**
 * @param {string} cssLocator
 * @param {string} text
 * @param {number} index
 */    

    static click_CSS_Element_With_Index_Containing_Text(cssLocator, index, text) {

        return ElementsValidation.validate_CSS_Locator_Text_And_Index(cssLocator, index, text).then(() => {
            return cy.get(cssLocator).contains(text).eq(index).should('be.visible').click()
        })
        
    }

/**
 * @param {string} cssLocator
 */    

    static click_First_Element_With_CSS(cssLocator) {

        return this.click_CSS_Element_With_Index(cssLocator, 0)
        
    }

/**
 * @param {string} cssLocator
 * @param {string} text
 */    

    static click_First_Element_With_CSS_Containing_Text(cssLocator, text) {

        return ElementsValidation.validate_CSS_Locator_And_Text(cssLocator, text).then(() => {
            return cy.get(cssLocator).contains(text).first().should('be.visible').click()
        })
        
    }

    static verify_URL()
    {

        return cy.url()

    }

/**
 * @param {string} cssLocator
 * @param {string} enterText
 */    

    static enter_Value_With_CSS(cssLocator, enterText) {

        return ElementsValidation.validate_CSS_Locator_And_Input_Text(cssLocator, enterText).then(() => {
            return cy.get(cssLocator).should('be.visible').type(enterText)
        })

    }


}

export default Elements;