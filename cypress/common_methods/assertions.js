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
    // Parameter validation
    if (!locatorOrElement) {
        Cypress.log({
            name: 'assert_Element_Exist_And_Visible',
            message: `❌ Invalid locator or element`,
            consoleProps: () => ({
                locatorOrElement,
                index,
                position,
                text
            })
        });
        throw new Error(
            `Invalid locatorOrElement provided.
             Received: ${locatorOrElement},
             Index: ${index},
             Position: ${position},
             Text: ${text}`
        );
    }

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
 * Asserts that an element exists.
 * Can accept either a selector or an already-found element.
 * 
 * @param {string|JQuery<HTMLElement>} locatorOrElement - The locator or element.
 * @param {number} [index] - Target element at a specific index.
 * @param {string} [position] - Target the first or last element.
 * @param {string} [text] - Target element containing specific text.
 */

static assert_Element_Exist(locatorOrElement, index, position, text) {
    // Parameter validation
    if (!locatorOrElement) {
        Cypress.log({
            name: 'assert_Element_Exist_And_Visible',
            message: `❌ Invalid locator or element`,
            consoleProps: () => ({
                locatorOrElement,
                index,
                position,
                text
            })
        });
        throw new Error(
            `Invalid locatorOrElement provided.
             Received: ${locatorOrElement},
             Index: ${index},
             Position: ${position},
             Text: ${text}`
        );
    }

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

    return element.should('exist');
}

/**
 * Asserts that a DOM element does not exist in the page.
 * 
 * @param {string} locator - Locator used to target the element
 */

static assert_Element_Not_Exist(locator) {

    if (!locator || typeof locator !== 'string') {
        throw new Error(`Invalid locator provided. Got: ${locator}`);
    }
    return cy.get(locator).should('not.exist');

}

/**
 * Assert that a checkbox or radio button is present, visible, 
 * and currently unchecked.
 * 
 * @param {string} locator - Locator used to target the element
 */ 

static assert_Element_Unchecked(locator) {

    return this.assert_Element_Exist_And_Visible(locator).and('not.be.checked')

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
    // Validate parameters
    if (options.position && !['first', 'last'].includes(options.position)) {
        throw new Error(`Invalid "position" option: ${options.position}`);
    }
    if (options.index !== undefined && typeof options.index !== 'number') {
        throw new Error(`Invalid "index" option: expected number but got ${typeof options.index}`);
    }
    if (options.text && typeof options.text !== 'string') {
        throw new Error(`Invalid "text" option: expected string but got ${typeof options.text}`);
    }

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

    return this.assert_Element_Exist_And_Visible(element).click({force: true})
}

/**
 * Asserts that the first/last element containing specific text exists and clicks it.
 * 
 * @param {string} locator - The base selector.
 * @param {string} text - The text to match inside the element.
 * @param {string} [position] - Whether to target the first or last match.
 */
static assert_Element_Containing_Text_And_Click(locator, text, position) {
    // Validate parameters
    if(typeof locator !== 'string') {
        throw new Error(`Invalid locator: ${locator}`)
    }
    if (typeof text !== 'string') {
        throw new Error(`Invalid text provided: ${text}`);
    }
    if (position && !['first', 'last'].includes(position)) {
        throw new Error(`Invalid position option: ${position}`);
    }

    // Cypress log for debugging
    Cypress.log({
        name: 'assert_Element_Containing_Text_And_Click',
        message: `Text: "${text}", Position: ${position || 'N/A'}`
    });

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
        Cypress.log({
            name: 'assert_Multiple_Elements_Containing_Text',
            message: `Validating multiple elements contain expected texts: ${JSON.stringify(expectedTexts)}`
        });

        // --- Parameter validation ---
    if (!Array.isArray(expectedTexts) || expectedTexts.length === 0) {
        throw new Error(`'expectedTexts' should be a non-empty array of strings.`);
    }
    if (expectedTexts.some(text => typeof text !== 'string')) {
        throw new Error(`All items in 'expectedTexts' should be strings.`);
    }

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
        Cypress.log({
            name: 'assert_Element_Contains_Text',
            message: `Checking element contains text: "${expectedText}" ${target ? `(target: ${target})` : ''}`
        });

        // --- Parameter validation ---
    if (typeof expectedText !== 'string' || !expectedText.trim()) {
        throw new Error(`'expectedText' must be a non-empty string.`);
    }
    if(typeof locator !== 'string') {
        throw new Error(`locator cannot be an empty string`)
    }

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
        Cypress.log({
            name: 'assert_URL',
            message: `Checking if current URL includes: "${expectedURL}"`
        });
    
        // --- Parameter validation ---
        if (typeof expectedURL !== 'string') {
            throw new Error(`'expectedURL' must be a non-empty string.`);
        }
        return cy.url().should('include', expectedURL).then((currentURL) => {
            if(!currentURL.includes(expectedURL)) {
                throw new Error(`Navigation failed. Current URL does not include: "${expectedURL}"`)
            }
        })
    }

/**
 * Asserts that multiple elements found by a given locator have (or do not have) 
 * a specific attribute value.
 *
 * This method:
 * 1. Locates elements using the provided locator.
 * 2. Ensures the elements exist before continuing.
 * 3. Iterates through each element and checks the given attribute.
 * 4. Validates whether the attribute value is equal to (or not equal to) 
 *    the expected value, based on the `notEqual` flag.
 * 5. Adds Cypress logs for better debugging and test reporting.
 *
 * @param {string} locator - locator string for locating elements.
 * @param {string} attribute - The attribute name to check (e.g., "size", "alt", "src").
 * @param {string} expectedValue - The expected attribute value to assert against.
 * 
 * @example
 * // ✅ Asserts that all images have size="40px"
 * Assertions.assert_Multiple_Elements_With_Attributes('img', 'sizes', '40px');
 * 
 * // ❌ Asserts that no image has size="40px"
 * Assertions.assert_Multiple_Elements_With_Attributes('img', 'sizes', '40px', true);
 */

    static assert_Multiple_Elements_With_Attributes(locator, attribute, expectedValue) {

        Cypress.log({
            name: 'assert_Multiple_Elements_With_Attributes',
            message: `Checking ${locator} for ${attribute}="${expectedValue}"`
        });

        let element = cy.get(locator)

        return this.assert_Element_Exist(element).each(($element) => {
            const actualValue = $element.attr(attribute)
    
            if(actualValue !== expectedValue) {
                assert.isTrue(
                    actualValue !== expectedValue,
                    `Attribute "${attribute}" should NOT equal "${expectedValue}"`
                );
            } else {
                assert.isTrue(
                    actualValue === expectedValue,
                    `Attribute "${attribute}" should equal "${expectedValue}"`
                );
            }
        })    
    }

/**
 * Scrolls to the top of the page from bottom
 */    

    static assert_Scroll_Position_At_The_Top_Of_The_Page() {
        cy.window().its('scrollY').should('eq', 0)
    }
        
}

export default Assertions;