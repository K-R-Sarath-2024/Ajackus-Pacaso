/// <reference types = "Cypress"/>

class Assertions {

/**
 * @returns {*}
 */

/**
 * @param {string} locator
 */

    static assert_Element_Exist_And_Visible(locator) {
       return cy.get(locator).should('exist').and('be.visible')
    }

/**
 * @param {string} locator
 * @param {number} index
 */    

    static assert_Element_With_Index_Exist_And_Visible(locator, index) {
        return cy.get(locator).eq(index).should('exist').and('be.visible')
    }

/**
 * @param {string} locator
 */    

    static assert_First_Element_Exist_And_Visible(locator) {
        /** @type {string} */
        const firstElementSelector = `${locator}:first`
            return this.assert_Element_Exist_And_Visible(firstElementSelector) 
    }

/**
 * @param {string} locator
 */ 

    static assert_Last_Element_Exist_And_Visible(locator) {
        /** @type {string} */
        const lastElementSelector = `${locator}:last`
        return this.assert_Element_Exist_And_Visible(lastElementSelector) 
    }

/**
 * @param {string} locator
 */    

    static assert_Element_And_Click(locator) {
        return this.assert_Element_Exist_And_Visible(locator).then( /** @param {JQuery<HTMLElement>} $element */
            ($element) => {
            cy.wrap($element).click()
        })
    }

/**
 * @param {string} locator
 */    

    static assert_First_Element_And_Click(locator) {
        return this.assert_First_Element_Exist_And_Visible(locator).click()
    }

/**
 * @param {string} locator
 */    

    static assert_Last_Element_And_Click(locator) {
        return this.assert_Last_Element_Exist_And_Visible(locator).click()
    }    

/**
 * @param {string} locator
 * @param {string} text
 */     

    static assert_Element_Containing_Text_And_Click(locator, text) {
        /** @type {string} */
        const combinedSelector = `${locator}:contains("${text}")`
            return this.assert_Element_And_Click(combinedSelector)
    }

/**
 * @param {string} locator
 * @param {number} index
 */    

    static assert_Element_Containing_Index_And_Click(locator, index) {
        /** @type {string} */
        const indexedSelector = `${locator}:eq(${index})`
            return this.assert_Element_And_Click(indexedSelector)
    }

/**
 * @param {string} locator
 * @param {string} text
 * @param {number} index
 */      

    static assert_Element_Containing_Text_Index_And_Click(locator, index, text) {
        /** @type {string} */
        const combinedSelector = `${locator}:contains("${text}"):eq(${index})`
            return this.assert_Element_And_Click(combinedSelector)
    }

/**
 * @param {string} locator
 * @param {string} text
 */     

    static assert_First_Element_Containing_Text_And_Click(locator, text) {
        /** @type {string} */
        const combinedSelector = `${locator}:contains("${text}")`
            return cy.get(combinedSelector).first().then(() => {
                return Assertions.assert_Element_And_Click(combinedSelector)
            })
    }

/**
 * @param {string} locator
 * @param {string} enterText
 */    

    static assert_Element_And_Enter_Value(locator, enterText) {
        return this.assert_Element_Exist_And_Visible(locator).type(enterText)
    }

/**
 * @param {string} locator
 * @param {string} expectedText
 */     

    static assert_Element_Contains_Text(locator, expectedText) {
        return this.assert_Element_Exist_And_Visible(locator).should('contain.text', expectedText)
    }

/**
 * @param {string} locator
 * @param {string} expectedText
 * @param {number} index
 */    

    static assert_Element_Contains_Text_With_Index(locator, expectedText, index) {
        return this.assert_Element_With_Index_Exist_And_Visible(locator, index).should('contain.text', expectedText)
    }

/**
 * @param {string} locator
 * @param {string[]} expectedTexts
 * 
 */    

    static assert_Multiple_Elements_Containing_Text(locator, expectedTexts) {
        /** @type {string[]} */
        let actualTexts = [];
        cy.get(locator).should('exist').and('be.visible').each(($element) => {
            actualTexts.push($element.text().trim())
        }).then(() => {
                expectedTexts.forEach((text) => {
                    expect(actualTexts).to.include(text)
                })
            })      
    }

/**
 * @param {string} locator
 * @param {string} expectedText
 */    

    static assert_First_Element_Contains_Text(locator, expectedText) {
        return this.assert_First_Element_Exist_And_Visible(locator).should('contain.text', expectedText)
    }

/**
 * @param {string} locator
 * @param {string} expectedText
 */     

    static assert_Last_Element_Contains_Text(locator, expectedText) {
        return this.assert_Last_Element_Exist_And_Visible(locator).should('contain.text', expectedText)
    }

/**
 * @param {string} expectedURL
 */     

    static assert_URL(expectedURL) {
        return cy.url().should('include', expectedURL)
    }
        
}

export default Assertions;