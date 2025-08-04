/// <reference types = "Cypress"/>

class Assertions {

/**
 * @returns {*}
 */

/**
 * @param {string} cssLocator
 */

    static assert_Element_Exist_And_Visible(cssLocator) {
       return cy.get(cssLocator).should('exist').and('be.visible')
    }

/**
 * @param {string} cssLocator
 */    

    static assert_First_Element_Exist_And_Visible(cssLocator) {
        /** @type {string} */
        const firstElementSelector = `${cssLocator}:first`
            return this.assert_Element_Exist_And_Visible(firstElementSelector) 
    }

/**
 * @param {string} cssLocator
 */ 

    static assert_Last_Element_Exist_And_Visible(cssLocator) {
        /** @type {string} */
        const lastElementSelector = `${cssLocator}:last`
        return this.assert_Element_Exist_And_Visible(lastElementSelector) 
    }

/**
 * @param {string} cssLocator
 */    

    static assert_Element_And_Click(cssLocator) {
        return this.assert_Element_Exist_And_Visible(cssLocator).then( /** @param {JQuery<HTMLElement>} $element */
            ($element) => {
            cy.wrap($element).click()
        })
    }

/**
 * @param {string} cssLocator
 */    

    static assert_First_Element_And_Click(cssLocator) {
        return this.assert_First_Element_Exist_And_Visible(cssLocator).click()
    }

/**
 * @param {string} cssLocator
 */    

    static assert_Last_Element_And_Click(cssLocator) {
        return this.assert_Last_Element_Exist_And_Visible(cssLocator).click()
    }    

/**
 * @param {string} cssLocator
 * @param {string} text
 */     

    static assert_Element_Containing_Text_And_Click(cssLocator, text) {
        /** @type {string} */
        const combinedSelector = `${cssLocator}:contains("${text}")`
            return this.assert_Element_And_Click(combinedSelector)
    }

/**
 * @param {string} cssLocator
 * @param {number} index
 */    

    static assert_Element_Containing_Index_And_Click(cssLocator, index) {
        /** @type {string} */
        const indexedSelector = `${cssLocator}:eq(${index})`
            return this.assert_Element_And_Click(indexedSelector)
    }

/**
 * @param {string} cssLocator
 * @param {string} text
 * @param {number} index
 */      

    static assert_Element_Containing_Text_Index_And_Click(cssLocator, index, text) {
        /** @type {string} */
        const combinedSelector = `${cssLocator}:contains("${text}"):eq(${index})`
            return this.assert_Element_And_Click(combinedSelector)
    }

/**
 * @param {string} cssLocator
 * @param {string} text
 */     

    static assert_First_Element_Containing_Text_And_Click(cssLocator, text) {
        /** @type {string} */
        const combinedSelector = `${cssLocator}:contains("${text}")`
            return cy.get(combinedSelector).first().then(() => {
                return Assertions.assert_Element_And_Click(combinedSelector)
            })
    }

/**
 * @param {string} cssLocator
 * @param {string} enterText
 */    

    static assert_Element_And_Enter_Value(cssLocator, enterText) {
        return this.assert_Element_Exist_And_Visible(cssLocator).type(enterText)
    }

/**
 * @param {string} cssLocator
 * @param {string} expectedText
 */     

    static assert_Element_Contains_Text(cssLocator, expectedText) {
        return this.assert_Element_Exist_And_Visible(cssLocator).should('contain.text', expectedText)
    }

/**
 * @param {string} cssLocator
 * @param {string} expectedText
 */    

    static assert_First_Element_Contains_Text(cssLocator, expectedText) {
        return this.assert_First_Element_Exist_And_Visible(cssLocator).should('contain.text', expectedText)
    }

/**
 * @param {string} expectedURL
 */     

    static assert_URL(expectedURL) {
        return cy.url().should('include', expectedURL)
    }
        
}

export default Assertions;