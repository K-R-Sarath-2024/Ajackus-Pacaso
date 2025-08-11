/// <reference types = "Cypress"/>

class Assertions {

/**
 * @returns {*} - A Cypress chainable object to allow further chaining.
 */

/**
 * Asserts that an element exists and is visible.
 * Can accept either a selector or an already-found element.
 * 
 * @param {string|JQuery<HTMLElement>} locatorOrElement - The locator or element.
 * @param {number} [index] - Target element at a specific index.
 * @param {string} [position] - Target the first or last element.
 * @param {string} [text] - Target element containing specific text.
 */
static assert_Element_Exist_And_Visible(locatorOrElement, index, position, text) {
    let element;

   // Case 1: Selector string
   if (typeof locatorOrElement === 'string') {
    element = cy.get(locatorOrElement);
    }
    // Case 2: Already a Cypress chainable
    else if (locatorOrElement && locatorOrElement.then && locatorOrElement.should) {
    element = locatorOrElement;
    }
    // Case 3: jQuery element
    else if (Cypress.dom.isJquery(locatorOrElement)) {
    element = cy.wrap(locatorOrElement);
    }
    // Fallback
    else {
    throw new Error('Invalid locatorOrElement provided to assert_Element_Exist_And_Visible');
    }

    if (typeof index === 'number') {
        element = element.eq(index);
    }
    if (position === 'first') {
        element = element.first();
    } else if (position === 'last') {
        element = element.last();
    }
    if (typeof text === 'string') {
        element = element.contains(text);
    }

    return element.should('exist').and('be.visible');
}

/**
 * Asserts that an element exists, is visible, and clicks it.
 * Can target by position ("first", "last"), index, and/or containing text.
 * 
 * @param {string|JQuery<HTMLElement>} locatorOrElement - The locator or element targeting one or more elements.
 * @param {Object} [options] - Optional targeting options.
 * @param {string} [options.position] - Target the first or last element.
 * @param {number} [options.index] - Target element at a specific index.
 * @param {string} [options.text] - Target element containing specific text.
 */
static assert_Element_And_Click(locatorOrElement, options = {}) {
    let element;

    // Case 1: Selector string
   if (typeof locatorOrElement === 'string') {
    element = cy.get(locatorOrElement);
    }
    // Case 2: Already a Cypress chainable
    else if (locatorOrElement && locatorOrElement.then && locatorOrElement.should) {
    element = locatorOrElement;
    }
    // Case 3: jQuery element
    else if (Cypress.dom.isJquery(locatorOrElement)) {
    element = cy.wrap(locatorOrElement);
    }
    // Fallback
    else {
    throw new Error('Invalid locatorOrElement provided to assert_Element_And_Click');
    }

    if (options.text) {
        element = element.contains(options.text);
    }

    if (options.position === 'first') {
        element = element.first();
    } else if (options.position === 'last') {
        element = element.last();
    }

    if (typeof options.index === 'number') {
        element = element.eq(options.index);
    }

    return this.assert_Element_Exist_And_Visible(element).click()
}

/**
 * Asserts that the first/last element containing specific text exists and clicks it.
 * 
 * @param {string} locator - The base selector.
 * @param {string} text - The text to match inside the element.
 * @param {string} [position] - Whether to target the first or last match.
 */
static assert_Element_Containing_Text_And_Click(locator, text, position) {
    /** @type {string} */
    const combinedSelector = `${locator}:contains("${text}")`;

    let element = cy.get(combinedSelector);
    if (position === 'first') {
        element = element.first();
    } else if (position === 'last') {
        element = element.last();
    }

    return this.assert_Element_And_Click(element)
}

/**
 * Asserts that an element exists and is visible, then types the provided text into it.
 * 
 * @param {string} locator - Locator used to find the input element
 * @param {string} enterText - The text to type into the element.
 */    

    static assert_Element_And_Enter_Value(locator, enterText) {
        return this.assert_Element_Exist_And_Visible(locator).type(enterText)
    }

/**
 * Asserts that multiple elements located by the given locator contain the expected texts.
 * 
 * @param {string} locator - Locator matches multiple elements
 * @param {string[]} expectedTexts - An array of expected text values to be matched.
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
 * Asserts that the given element exists, is visible, and contains the expected text.
 * Can optionally target a specific element by index or position ('first' or 'last').
 * 
 * @param {string} locator - Locator used to locate the element.
 * @param {string} expectedText - The text expected to be contained within the element.
 * @param {number|string} [target] - (Optional) The index of the element (number) 
 *                                   or position ('first' or 'last') to be checked.
 */
    static assert_Element_Contains_Text(locator, expectedText, target) {
        let element = cy.get(locator);

        if (typeof target === 'number') {
            element = element.eq(target);
        } else if (target === 'first') {
            element = element.first();
        } else if (target === 'last') {
            element = element.last();
        }

        return this.assert_Element_Exist_And_Visible(element).and('contain.text', expectedText);
    }    

/**
 * Asserts that the current URL includes the expected URL fragment.
 * 
 * @param {string} expectedURL - The expected part of the URL to verify.
 */     

    static assert_URL(expectedURL) {
        return cy.url().should('include', expectedURL)
    }
        
}

export default Assertions;