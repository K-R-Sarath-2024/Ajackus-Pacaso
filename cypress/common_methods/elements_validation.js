/// <reference types = "Cypress"/>

class ElementsValidation {

/**
 * @param {string} locator
 */    

    static validate_Locator(locator) {

        if(typeof locator !== 'string') {
            throw new Error("'locator' should be a string but was undefined or null or an empty string")
        }
        return cy.get('body').then(($body) => {
            if($body.find(locator).length === 0) {
                throw new Error(`Element not found: '${locator}'`);
            }
        })

    }

/**
 * @param {string} locator
 * @param {string} text
 */
    
    static validate_Locator_And_Text(locator, text) {

        if(typeof locator !== 'string' && typeof text !== 'string') {
            throw new Error("'locator' and 'text' should be a string but was undefined or null or an empty string")
        }
        return cy.get('body').then(($body) => {
            if($body.find(locator).filter((_, el) => el.innerText.includes(text)).length === 0) {
                throw new Error(`Element with selector '${locator}' containing text '${text}' not found`)
            }
        })

    }
 
/**
 * @param {string} locator
 * @param {string} text
 * @param {number} index
 */    

    static validate_Locator_Text_And_Index(locator, text, index) {

        if(typeof locator !== 'string' && typeof text !== 'string' && typeof index != 'number') {
            throw new Error("'locator' and 'text' should be a string but was undefined or null or an empty string & 'index' should be a non-negative number")
        }
        return cy.get('body').then(($body) => {
            if($body.find(locator).filter((_, el) => el.innerText.includes(text)).length === 0) {
                throw new Error(`Element with selector '${locator}' containing text '${text}' not found`)
            }
            if(index >= $body.find(locator).filter((_, el) => el.innerText.includes(text)).length === 0) {
                throw new Error("Index Out of Bounds Exception")
            }
        })

    }

/**
 * @param {string} locator
 * @param {number} index
 */      

    static validate_Locator_And_Index(locator, index) {

        if(typeof locator !== 'string' && typeof index !== 'number') {
            throw new Error("'locator' should be a string but was undefined or null or an empty string & 'index' should be a non-negative number")
        }
        return cy.get('body').then(($body) => {
            if($body.find(locator).length === 0) {
                throw new Error(`Element not found: '${locator}'`);
            }
            if(index >= $body.find(locator).length === 0) {
                throw new Error("Index Out of Bounds Exception")
            }
        })

    }

/**
 * @param {string} locator
 * @param {string} enterText
 */     

    static validate_Locator_And_Input_Text(locator, enterText) {

        if(typeof locator !== 'string' && typeof enterText !== 'string') {
            throw new Error("'locator' and 'enterText' should be a string but was undefined or null or an empty string")
        }
        return cy.get('body').then(($body) => {
            const el = $body.find(locator)
            if(el.length === 0) {
                throw new Error(`Element not found: '${locator}'`);
            }
            const tagName = /** @type {string} */ (el.prop('tagName')).toLowerCase()
            if(tagName !== 'input' || tagName !== 'textarea') {
                throw new Error(`Element '${locator}' is not a valid input or textarea. Found: <${tagName}>`)
            }
        })

    }

}

export default ElementsValidation;