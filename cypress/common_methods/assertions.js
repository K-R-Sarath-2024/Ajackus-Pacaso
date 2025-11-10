/// <reference types = "Cypress"/>

class Assertions {


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
   
    return this.assert_Element_Exist(locatorOrElement, index, position, text).and('be.visible')

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

    return this.assert_Element_Exist(locator).then(($element) => {
        if($element.prop('checked')) {
            expect(false).to.be.true
        } else {
            expect(true).to.be.true
        }
    })
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

    element = element.then(($element) => {
        if($element.attr('target') === '_blank') {
            cy.wrap($element).invoke('removeAttr', 'target');
        }
        return cy.wrap($element)
    })

    return this.assert_Element_Exist(element).click({force: true})
}

    static assert_Element_Exist_And_Visible_And_Click(locatorOrElement, options = {}) {

        return this.assert_Element_Exist_And_Visible(locatorOrElement, options).click({force: true})

    }

    /**
     * Asserts that an element matching a base locator and containing the provided text exists and is visible.
     * Optionally narrows by first/last occurrence.
     *
     * @param {string} locator - The base selector.
     * @param {string} text - The text to include-match within the element.
     * @param {('first'|'last')} [position]
     */
    static assert_Element_Exist_And_Visible_Containing_Text(locator, text, position) {
        if (typeof locator !== 'string' || !locator.trim()) {
            throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
        }
        if (typeof text !== 'string' || !text.trim()) {
            throw new Error(`'text' must be a non-empty string. Received: ${text}`);
        }
        if (position && !['first','last'].includes(position)) {
            throw new Error(`Invalid position option: ${position}`);
        }

        let element = cy.get(locator).contains(text);
        if (position === 'first') {
            element = element.first();
        } else if (position === 'last') {
            element = element.last();
        }
        return this.assert_Element_Exist_And_Visible(element);
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

        // --- Parameter validation ---
    if (!Array.isArray(expectedTexts) || expectedTexts.length === 0) {
        throw new Error(`'expectedTexts' should be a non-empty array of strings.`);
    }
    if (expectedTexts.some(text => typeof text !== 'string')) {
        throw new Error(`All items in 'expectedTexts' should be strings.`);
    }

        /** @type {string[]} */
        let actualTexts = [];
        return this.assert_Element_Exist_And_Visible(locator).each(($element) => {
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
 * Asserts that an element located by the given locator
 * does **not** contain the specified text.
 *
 * This method:
 * 1. Validates the input parameters (`locator` and `expectedText`).
 * 2. Uses Cypress `cy.get(locator)` to find the element(s).
 * 3. Ensures the element(s) exist and are visible via `assert_Element_Exist_And_Visible`.
 * 4. Asserts that none of the located elements contain the given text.
 *
 * @param {string} locator - locator used to find the target element(s).
 * @param {string} expectedText - The text that the element(s) must not contain.
 */     
    
    static assert_Element_Does_Not_Contains_Text(locator, expectedText) {
        if (typeof expectedText !== 'string' || !expectedText.trim()) {
            throw new Error(`'expectedText' must be a non-empty string.`);
        }
        if(typeof locator !== 'string') {
            throw new Error(`locator cannot be an empty string`)
        }
    
            let element = cy.get(locator);

            return this.assert_Element_Exist_And_Visible(element).and('not.contain.text', expectedText)
    }

/**
 * Asserts that the current URL includes the expected URL fragment.
 * 
 * @param {string} expectedURL - The expected part of the URL to verify.
 */     

    static assert_URL(expectedURL) {
    
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
 * Asserts that the current URL includes the expected URL fragment.
 * 
 * @param {string} expectURL - The expected part of the URL to verify.
 */     

    static assert_URL_Another_Origin(expectURL) {
        if (typeof expectURL !== 'string') {
            throw new Error(`'expectedURL' must be a non-empty string.`);
        }
        return cy.origin('https://www.pacaso.com', { args: { expectURL } }, ({ expectURL }) => {
            cy.url().should('include', expectURL)
        })
    }

/**
 * Asserts that the current URL includes the expected URL fragment.
 * 
 * @param {RegExp} expectedURL - The expected part of the URL to verify.
 */     

    static assert_URL_Using_Regular_Expression(expectedURL) {

        // --- Parameter validation ---
        if (!(expectedURL instanceof RegExp)) {
        throw new Error(`'expectedURL' must be a valid RegExp`);
        }
        return cy.url().should('match', expectedURL)

    }

/**
 * Asserts that the current URL does not includes the expected URL fragment.
 * 
 * @param {string} expectedURL - The expected part of the URL to verify.
 */    

    static assert_URL_REGEXP_NOTMATCH(expectedURL) {

        // --- Parameter validation ---
        if (!(expectedURL instanceof RegExp)) {
            throw new Error(`'expectedURL' must be a valid RegExp`);
        }
        return cy.url().should('not.match', expectedURL)

    }

/**
 * Asserts that multiple elements found by a given locator have 
 * a specific attribute value.
 *
 * This method:
 * 1. Locates elements using the provided locator.
 * 2. Ensures the elements exist before continuing.
 * 3. Iterates through each element and checks the given attribute.
 * 4. Validates whether the attribute value is equal to  
 *    the expected value.
 *
 * @param {string} locator - locator string for locating elements.
 * @param {string} attribute - The attribute name to check (e.g., "size", "alt", "src").
 * @param {string} expectedValue - The expected attribute value to assert against.
 */

    static assert_Multiple_Elements_With_Attributes_Equal(locator, attribute, expectedValue) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (typeof attribute !== 'string' || !attribute.trim()) {
        throw new Error(`'attribute' must be a non-empty string. Received: ${attribute}`);
    }

    if (typeof expectedValue !== 'string' || expectedValue.length === 0) {
        throw new Error(`'expectedValue' must be a non-empty string. Received: ${expectedValue}`);
    }

        let element = cy.get(locator)

        return this.assert_Element_Exist(element).each(($element) => {
            const actualValue = $element.attr(attribute)
            expect(actualValue === expectedValue).to.be.true
        })    
    }

/**
 * Asserts that multiple elements found by a given locator does not have 
 * a specific attribute value.
 *
 * This method:
 * 1. Locates elements using the provided locator.
 * 2. Ensures the elements exist before continuing.
 * 3. Iterates through each element and checks the given attribute.
 * 4. Validates whether the attribute value is not equal to  
 *    the expected value.
 *
 * @param {string} locator - locator string for locating elements.
 * @param {string} attribute - The attribute name to check (e.g., "size", "alt", "src").
 * @param {string} expectedValue - The expected attribute value to assert against.
 */

    static assert_Multiple_Elements_With_Attributes_NotEqual(locator, attribute, expectedValue) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (typeof attribute !== 'string' || !attribute.trim()) {
        throw new Error(`'attribute' must be a non-empty string. Received: ${attribute}`);
    }

    if (typeof expectedValue !== 'string' || expectedValue.length === 0) {
        throw new Error(`'expectedValue' must be a non-empty string. Received: ${expectedValue}`);
    }

        let element = cy.get(locator)

        return this.assert_Element_Exist(element).each(($element) => {
            const actualValue = $element.attr(attribute)
            expect(actualValue !== expectedValue).to.be.true
        })    
    }    

/**
 * Scrolls to the top of the page from bottom
 */    

    static assert_Scroll_Position_At_The_Top_Of_The_Page() {
        cy.window().its('scrollY').should('eq', 0)
    }

/**
 * Asserts that the numeric values extracted from elements located by the given locator 
 * are sorted in the specified order (`asc` for ascending or `desc` for descending).
 * 
 * - Extracts text from each element found by the locator.
 * - Cleans text by removing `$` and `,`, then converts it into numbers.
 * - Eliminates duplicate values before sorting.
 * - Compares the actual values against the expected sorted order.
 * @param {string} locator
 * @param {string} order
 */    

    static assert_Sorted_Values(locator, order) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (typeof order != 'string' || !order.trim()) {
        throw new Error(`'order' must be a non-empty string {asc or desc}. Received: ${position}`);
    }

        let element = cy.get(locator)

        let actualValues = []

        return this.assert_Element_Exist_And_Visible(element).each(($element) => {
            cy.wrap($element).invoke('text').then((text) => {
                const cleanedText = text.replaceAll(/\$/g, '').replaceAll(/,/g, '').trim()
                const textToNumber = parseInt(cleanedText)
                actualValues.push(textToNumber)
            })
        }).then(() => {
            // eliminate duplicates
            const uniqueValues = [...new Set(actualValues)];

            // sort based on order
            const sortedValues = [...uniqueValues].sort((a, b) => {
            return order === 'asc' ? a - b : b - a
        });

        expect(uniqueValues, `Values should be in ${order.toUpperCase()} order`).to.deep.equal(sortedValues);
        })
    }

/**
 * Retrieves the numeric `value` attribute of an element at a given index
 * from a list of elements located by the provided locator.
 * 
 * - Uses `invoke('attr', 'value')` to extract the attribute.
 * - Converts the attribute value to a number using `parseInt`.
 * - Stores the result as a Cypress alias (`@minPrice`) for reuse in other tests.
 * @param {string} locator 
 * @param {number} index 
 * @returns {number}
 */    

    static getAttr_Min_Value(locator, index) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (!Number.isInteger(index) || index < 0) {
        throw new Error(`'index' must be a non-negative integer. Received: ${index}`);
    }

        return this.assert_Element_Exist_And_Visible(locator, index).invoke('attr', 'value').then((val) => parseInt(val)).as('minPrice')
    }

/**
 * Retrieves the numeric `value` attribute of an element at a given index
 * from a list of elements located by the provided locator.
 * 
 * - Uses `invoke('attr', 'value')` to extract the attribute.
 * - Converts the attribute value to a number using `parseInt`.
 * - Stores the result as a Cypress alias (`@maxPrice`) for reuse in other tests.
 * @param {string} locator 
 * @param {number} index 
 */    

    static getAttr_Max_Value(locator, index) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (!Number.isInteger(index) || index < 0) {
        throw new Error(`'index' must be a non-negative integer. Received: ${index}`);
    }

        return this.assert_Element_Exist_And_Visible(locator, index).invoke('attr', 'value').then((val) => parseInt(val)).as('maxPrice')
    }

/**
 * Asserts that all price values displayed on the page fall within
 * the range defined by the `@minPrice` and `@maxPrice` aliases.
 *
 * - Collects text values from the provided locator.
 * - Cleans up formatting (removes `$` and `,`).
 * - Converts the text to numbers and stores them in an array.
 * - Fetches the `@minPrice` and `@maxPrice` aliases (previously set).
 * - Validates that each actual value is within the min–max range.
 * @param {string} locator
 */    

    static assert_Price(locator) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

        let element = cy.get(locator);
        let actualValues = [];
    
        // collect all prices from UI
        return this.assert_Element_Exist(element).each(($element) => {
            cy.wrap($element).invoke('text').then((text) => {
                const cleanedText = text.replaceAll(/\$/g, '').replaceAll(/,/g, '').trim();
                const textToNumber = parseInt(cleanedText);
                actualValues.push(textToNumber);
            });
        }).then(() => {
            // fetch alias values before assertion
            cy.get('@minPrice').then((minValue) => {
                cy.get('@maxPrice').then((maxValue) => {
                    actualValues.forEach((value) => {
                        expect(value).to.be.within(minValue, maxValue);
                    });
                });
            });
        });
    }

/**
 * Retrieves the text content of a specific element located by `locator`
 * at the given `position` (index).
 *
 * - Ensures the element exists and is visible.
 * - Fetches the text content of the element.
 * @param {string} locator
 * @param {string} position
 * @returns {string}
 */    

    static get_Text(locator, position) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (typeof position != 'string' || !position.trim()) {
        throw new Error(`'position' must be a non-empty string {first or last}. Received: ${position}`);
    }

        let element = cy.get(locator)

        return this.assert_Element_Exist_And_Visible(element, position).invoke('text')

    }

/**
 * Extracts the first number found in the text of an element
 * located by `locator` at the given `position` (index).
 *
 * - Uses `get_Text` to retrieve the element's text.
 * - Applies regex to extract digits from the text.
 * - Converts the extracted string into an integer.
 * @param {string} locator
 * @param {string} position
 */    

    static get_Number(locator, position) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (typeof position != 'string' || !position.trim()) {
        throw new Error(`'position' must be a non-empty string {first or last}. Received: ${position}`);
    }

        return this.get_Text(locator, position).then((text) => {
            const number = parseInt(text.match(/\d+/)[0])
            return number
        })
    }

/**
 * Stores the numeric value extracted from the element (using `get_Number`) 
 * as a Cypress alias for later use in tests.
 *
 * - Calls `get_Number(locator, position)` internally.
 * - Saves the result into an alias named `@countFromApplyButton`.
 * @param {string} locator
 * @param {string} position
 */    

    static number_Aliases(locator, position) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (typeof position != 'string' || !position.trim()) {
        throw new Error(`'position' must be a non-empty string {first or last}. Received: ${position}`);
    }

        this.get_Number(locator, position).as('countFromApplyButton')
    }

/**
 * Verifies that the number extracted from a given element
 * (using `get_Number(locator, position)`) is equal to the
 * previously stored alias `@countFromApplyButton`.
 *
 * @param {string} locator - locator to target the element(s).
 * @param {string} position - Index of the element to extract the number from.
 * @returns {boolean}
 */    

    static  verify_Count_Equal(locator, position) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (typeof position != 'string' || !position.trim()) {
        throw new Error(`'position' must be a non-empty string {first or last}. Received: ${position}`);
    }

        this.get_Number(locator, position).then((actualNumber) => {
            cy.get('@countFromApplyButton').then((number) => {
                expect(actualNumber === number).to.be.true
            })
        })
    }

/**
 * Verifies that the number extracted from a given element
 * (using `get_Number(locator, position)`) is not equal to the
 * previously stored alias `@countFromApplyButton`.
 *
 * @param {string} locator - locator to target the element(s).
 * @param {string} position - Index of the element to extract the number from.
 */    

    static  verify_Count_NotEqual(locator, position) {

        // --- Parameter validation ---
    if (typeof locator !== 'string' || !locator.trim()) {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (typeof position != 'string' || !position.trim()) {
        throw new Error(`'position' must be a non-empty string {first or last}. Received: ${position}`);
    }

        this.get_Number(locator, position).then((actualNumber) => {
            cy.get('@countFromApplyButton').then((number) => {
                expect(actualNumber !== number).to.be.true
            })
        })
    }

/**
 * Verifies that specific elements at given indexes contain the expected texts.
 *
 * @param {string} locator - The locator to find the list of elements.
 * @param {number[]} index - Array of indexes of elements to check.
 * @param {string[]} expectedTexts - Array of expected texts (aligned with indexes).
 */    

    static verify_Texts_With_Index(locator, index = [], expectedTexts = []) {

        // --- Parameter validation ---
    if (typeof locator !== 'string') {
        throw new Error(`'locator' must be a non-empty string. Received: ${locator}`);
    }

    if (!Array.isArray(index) || index.length === 0 || !index.every(i => Number.isInteger(i) && i >= 0)) {
        throw new Error(`'index' must be a non-empty array of non-negative integers. Received: ${JSON.stringify(index)}`);
    }

    if (!Array.isArray(expectedTexts) || expectedTexts.length !== index.length || !expectedTexts.every(t => typeof t === 'string' && t.trim())) {
        throw new Error(`'expectedTexts' must be an array of non-empty strings with the same length as 'index'. 
        Received: ${JSON.stringify(expectedTexts)}`);
    }
        this.assert_Element_Exist_And_Visible(locator, index).then(() => {
            index.forEach((i, position) => {
                this.assert_Element_Exist_And_Visible(locator, i).invoke('text').then(
                    /**
                     * @param {string} text
                     */
                    (text) => {
                    expect(text.trim()).to.equal(expectedTexts[position])
                })
            })
        })
    }

/**
 * Asserts that multiple elements located by `locator` 
 * all contain the given expected text.
 *
 * @param {string} locator - The selector to find elements.
 * @param {string} expectedText - The text expected inside each element.
 */    

    static assert_Multiple_Elements_Containing_Same_Text(locator, expectedText) {

        // Validate parameters
        if(typeof locator !== 'string') {
            throw new Error(`Invalid locator: ${locator}`)
        }

        if (typeof expectedText !== 'string' || !expectedText.trim()) {
            throw new Error(`'expectedText' must be a non-empty string.`);
        }

        /** @type {string[]} */
        let actualTexts = [];
        this.assert_Element_Exist_And_Visible(locator).each(($element) => {
            actualTexts.push($element.text().trim())
        }).then(() => {
            actualTexts.forEach((text) => {
                expect(text).to.contain(expectedText)
            })
        })

    }

/**
 * Asserts that the `class` attribute of a specific element 
 * (identified by index from a list of matched elements) 
 * contains the expected partial text.
 *
 * @param {string} locator - Locator used to identify elements.
 * @param {number} index - The index of the element in the list of matched elements (0-based).
 * @param {string} expectedPartialText - The partial text that should be included in the element's `class` attribute.
 */    

    static assert_ClassAttr_Includes_Value_With_Index(locator, index, expectedPartialText) {

        // Validate parameters
        if(typeof locator !== 'string') {
            throw new Error(`Invalid locator: ${locator}`)
        }

        if (!Number.isInteger(index) || index < 0) {
            throw new Error(`'index' must be a non-negative integer. Received: ${index}`);
        }

        if(typeof expectedPartialText !== 'string') {
            throw new Error(`expectedPartialText should be a non-empty string. Received: ${expectedPartialText}`)
        }

        return cy.get(locator).eq(index).invoke('attr', 'class').should('include', expectedPartialText)

    }

/**
 * Get the ownership amount as a number from the given locator.
 * Strips "$" and "," from the text content before parsing.
 *
 * @param {string} locator - locator for the ownership element
 */    

    static get_Ownership_Amount(locator) {

        return this.assert_Element_Exist_And_Visible(locator).invoke('text').then((text) => {
            const cleanedText = text.replaceAll(/\$/g, '').replaceAll(/,/g, '').trim()
            const number = parseInt(cleanedText)
            return number
        })

    }

/**
 * Get the downpayment amount as a number from the given locator.
 * Strips "$" and "," from the text content before parsing.
 *
 * @param {string} locator - locator for the ownership element
 */    

    static get_Downpayment_Amount(locator) {

        return this.assert_Element_Exist_And_Visible(locator).invoke('text').then((text) => {
            const cleanedText = text.replaceAll(/\$/g, '').replaceAll(/,/g, '').trim()
            const number = parseInt(cleanedText)
            return number
        })   

    }

/**
 * Compare ownership price with downpayment price.
 * Asserts that ownership price is exactly double the downpayment price.
 *
 * @param {string} locator1 - locator for the ownership element
 * @param {string} locator2 - locator for the downpayment element
 */    

    static compare_OwnershipPrice_DownpaymentPrice(locator1, locator2) {

        return this.get_Ownership_Amount(locator1).then((ownershipPrice) => {
            this.get_Downpayment_Amount(locator2).then((downpaymentPrice) => {
                expect(ownershipPrice).to.eq(downpaymentPrice * 2)
            })
        })

    }

/**
 * Scroll an element into view by its locator and index.
 * 
 * @param {string} locator - locator for the target element
 * @param {number} index - Index of the element in the list
 */    

    static scroll_Into_View(locator, index) {
        return cy.get(locator).eq(index).scrollIntoView()
    }

/**
 * @param {string} locator
 * @param {string} [position]
 */    

    static mouseHover(locator, position) {
        return this.assert_Element_Exist_And_Visible(locator, position).scrollIntoView().trigger('mouseover', { force: true });
    }
        
}

export default Assertions;