/// <reference types = "Cypress"/>
import ElementsValidation from "./elements_validation";
import Assertions from "./assertions";

class Elements {

/**
 * @param {string} cssLocator
 * @param {string} expectedText
 */    

    static css_Verify(cssLocator, expectedText) {

        return ElementsValidation.validate_CSS_Locator(cssLocator).then(() => {
            return Assertions.assert_Element_Contains_Text(cssLocator, expectedText)
        })

    } 

/**
 * @param {string} cssLocator
 */     

    static verify_First_Element_With_CSS(cssLocator, expectedText) {

        return ElementsValidation.validate_CSS_Locator(cssLocator).then(() => {
            return Assertions.assert_First_Element_Contains_Text(cssLocator, expectedText)
        })

    }

/**
 * @param {string} cssLocator
 */ 

    static verify_Last_Element_With_CSS(cssLocator) {

        return ElementsValidation.validate_CSS_Locator(cssLocator).then(() => {
            return Assertions.assert_Last_Element_Exist_And_Visible(cssLocator)
        })

    }

/**
 * @param {string} cssLocator
 */    

    static click_With_CSS(cssLocator) {

        return ElementsValidation.validate_CSS_Locator(cssLocator).then(() => {
            return Assertions.assert_Element_And_Click(cssLocator)
        })

    }

/**
 * @param {string} cssLocator
 * @param {string} text
 */    

    static click_With_CSS_Containing_Text(cssLocator, text) {

        return ElementsValidation.validate_CSS_Locator_And_Text(cssLocator, text).then(() => {
            return Assertions.assert_Element_Containing_Text_And_Click(cssLocator, text)
        })

    }

/**
 * @param {string} cssLocator
 * @param {number} index
 */    

    static click_CSS_Element_With_Index(cssLocator, index) {

        return ElementsValidation.validate_CSS_Locator_And_Index(cssLocator, index).then(() => {
            return Assertions.assert_Element_Containing_Index_And_Click(cssLocator, index)
        })
        
    }

/**
 * @param {string} cssLocator
 * @param {string} text
 * @param {number} index
 */    

    static click_CSS_Element_With_Index_Containing_Text(cssLocator, index, text) {

        return ElementsValidation.validate_CSS_Locator_Text_And_Index(cssLocator, index, text).then(() => {
            return Assertions.assert_Element_Containing_Text_Index_And_Click(cssLocator, index, text)
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
            return Assertions.assert_First_Element_Containing_Text_And_Click(cssLocator, text)
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
 * @param {string} cssLocator
 * @param {string} enterText
 */    

    static enter_Value_With_CSS(cssLocator, enterText) {

        return ElementsValidation.validate_CSS_Locator_And_Input_Text(cssLocator, enterText).then(() => {
            return Assertions.assert_Element_And_Enter_Value(cssLocator, enterText)
        })

    }


}

export default Elements;