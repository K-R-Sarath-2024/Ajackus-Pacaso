/// <reference types = "Cypress"/>
import ElementsValidation from "./elements_validation";
import Assertions from "./assertions";

class Elements {

/**
 * @param {string} locator
 * @param {string} expectedText
 */    

    static verify(locator, expectedText) {
        return ElementsValidation.validate_Locator(locator).then(()=> {
            return Assertions.assert_Element_Contains_Text(locator, expectedText)
        })
    }    
            

/**
 * @param {string} locator
 * @param {string} expectedText
 * @param {number} index
 */    
    
    static verify_With_Index(locator, expectedText, index) {
        return ElementsValidation.validate_Locator_And_Index(locator, index).then(() => {
            return Assertions.assert_Element_Contains_Text(locator, expectedText, index)
        })
        
    }

/**
 * @param {string} locator
 * @param {string[]} expectedTexts
 */    

    static verify_Multiple_Elements(locator, expectedTexts) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Multiple_Elements_Containing_Text(locator, expectedTexts)
        })
        
    }

/**
 * @param {string} locator
 * @param {string} expectedText
 */     

    static verify_First_Element(locator, expectedText) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Element_Contains_Text(locator, expectedText, 'first')
        })
        
    }

/**
 * @param {string} locator
 * @param {string} expectedText
 */  

    static verify_Last_Element(locator, expectedText) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Element_Contains_Text(locator, expectedText, 'last')
        })
        
    }

/**
 * @param {string} locator
 */    

    static click(locator) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Element_And_Click(locator);
        })    
    }

/**
 * @param {string} locator
 * @param {string} text
 */    

    static click_Element_Containing_Text(locator, text) {
        return ElementsValidation.validate_Locator_And_Text(locator, text).then(() => {
            return Assertions.assert_Element_Containing_Text_And_Click(locator, text)
        })
        
    }

/**
 * @param {string} locator
 * @param {number} index
 */    

    static click_Element_With_Index(locator, index) {
        return ElementsValidation.validate_Locator_And_Index(locator, index).then(() => {
            return Assertions.assert_Element_And_Click(locator, { index: index })
        })
        
    }

/**
 * @param {string} locator
 * @param {string} text
 * @param {number} index
 */    

    static click_Element_With_Index_Containing_Text(locator, index, text) {
        return ElementsValidation.validate_Locator_Text_And_Index(locator, index, text).then(() => {
            return Assertions.assert_Element_And_Click(locator, { index: index, text: text })
        })
        
    }

/**
 * @param {string} locator
 */    

    static click_First_Element(locator) {

        return this.click_Element_With_Index(locator, 0)
        
    }

/**
 * @param {string} locator
 * @param {string} text
 */    

    static click_First_Element_Containing_Text(locator, text) {

        return ElementsValidation.validate_Locator_And_Text(locator, text).then(() => {
            return Assertions.assert_Element_And_Click(locator, { text: text, position: 'first' })
        })
            
        
    }

/**
 * @param {string} expectedURL
 */     

    static verify_URL(expectedURL)
    {

        return Assertions.assert_URL(expectedURL)

    }

/**
 * @param {string} locator
 * @param {string} enterText
 */    

    static enter_Value(locator, enterText) {
        return ElementsValidation.validate_Locator_And_Input_Text(locator, enterText).then(() => {
            return Assertions.assert_Element_And_Enter_Value(locator, enterText);
        })
    }    
        


}

export default Elements;