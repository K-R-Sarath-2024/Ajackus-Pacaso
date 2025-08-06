/// <reference types = "Cypress"/>

class ElementsValidation {

/**
 * @param {string} cssLocator
 */    

    static validate_CSS_Locator(cssLocator) {

        if(typeof cssLocator !== 'string') {
            throw new Error("'cssLocator' should be a string but was undefined or null or an empty string")
        }
        return cy.get('body').then(($body) => {
            if($body.find(cssLocator).length === 0) {
                throw new Error(`Element not found: '${cssLocator}'`);
            }
        })

    }

/**
 * @param {string} cssLocator
 * @param {string} text
 */
    
    static validate_CSS_Locator_And_Text(cssLocator, text) {

        if(typeof cssLocator !== 'string' && typeof text !== 'string') {
            throw new Error("'cssLocator' and 'text' should be a string but was undefined or null or an empty string")
        }
        return cy.get('body').then(($body) => {
            if($body.find(cssLocator).filter((_, el) => el.innerText.includes(text)).length === 0) {
                throw new Error(`Element with selector '${cssLocator}' containing text '${text}' not found`)
            }
        })

    }
 
/**
 * @param {string} cssLocator
 * @param {string} text
 * @param {number} index
 */    

    static validate_CSS_Locator_Text_And_Index(cssLocator, text, index) {

        if(typeof cssLocator !== 'string' && typeof text !== 'string' && typeof index != 'number') {
            throw new Error("'cssLocator' and 'text' should be a string but was undefined or null or an empty string & 'index' should be a non-negative number")
        }
        return cy.get('body').then(($body) => {
            if($body.find(cssLocator).filter((_, el) => el.innerText.includes(text)).length === 0) {
                throw new Error(`Element with selector '${cssLocator}' containing text '${text}' not found`)
            }
            if(index >= $body.find(cssLocator).filter((_, el) => el.innerText.includes(text)).length === 0) {
                throw new Error("Index Out of Bounds Exception")
            }
        })

    }

/**
 * @param {string} cssLocator
 * @param {number} index
 */      

    static validate_CSS_Locator_And_Index(cssLocator, index) {

        if(typeof cssLocator !== 'string' && typeof index !== 'number') {
            throw new Error("'cssLocator' should be a string but was undefined or null or an empty string & 'index' should be a non-negative number")
        }
        return cy.get('body').then(($body) => {
            if($body.find(cssLocator).length === 0) {
                throw new Error(`Element not found: '${cssLocator}'`);
            }
            if(index >= $body.find(cssLocator).length === 0) {
                throw new Error("Index Out of Bounds Exception")
            }
        })

    }

/**
 * @param {string} cssLocator
 * @param {string} enterText
 */     

    static validate_CSS_Locator_And_Input_Text(cssLocator, enterText) {

        if(typeof cssLocator !== 'string' && typeof enterText !== 'string') {
            throw new Error("'cssLocator' and 'enterText' should be a string but was undefined or null or an empty string")
        }
        return cy.get('body').then(($body) => {
            const el = $body.find(cssLocator)
            if(el.length === 0) {
                throw new Error(`Element not found: '${cssLocator}'`);
            }
            const tagName = /** @type {string} */ (el.prop('tagName')).toLowerCase()
            if(tagName !== 'input' || tagName !== 'textarea') {
                throw new Error(`Element '${cssLocator}' is not a valid input or textarea. Found: <${tagName}>`)
            }
        })

    }

}

export default ElementsValidation;