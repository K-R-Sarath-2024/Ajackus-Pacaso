/// <reference types = "Cypress"/>
import ElementsValidation from "./elements_validation";
import Assertions from "./assertions";

class Elements {

/**
 * @param {string} locator
 * @param {string} expectedText
 * @param {number|string} [target]
 */    

    static verify(locator, expectedText, target) {
        return ElementsValidation.validate_Locator(locator).then(()=> {
            return Assertions.assert_Element_Contains_Text(locator, expectedText, target)
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
 * @param {number[]} index
 * @param {string[]} expectedTexts
 */    

    static verify_Texts_With_Index(locator, index = [], expectedTexts = []) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.verify_Texts_With_Index(locator, index, expectedTexts)
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
 * @param {string} position
 */    

    static click_Last_Element(locator, position) {

        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Element_And_Click(locator, {position: position});
        }) 

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

    static verify_URL_Another_Origin(expectedURL)
    {

        return Assertions.assert_URL_Another_Origin(expectedURL)

    }

/**
 * @param {RegExp} expectedURL
 */    

    static verify_URL_REGEXP(expectedURL) 
    {

        return Assertions.assert_URL_Using_Regular_Expression(expectedURL)

    }

    static verify_URL_REGEXP_NOTMATCH(expectedURL)
    {

        return Assertions.assert_URL_REGEXP_NOTMATCH(expectedURL)

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

/** 
 * @param {string} locator 
 * @param {string} attribute 
 * @param {string} expectedValue  
 */    
    
    static verify_Elements_With_Attributes_Equal(locator, attribute, expectedValue) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Multiple_Elements_With_Attributes_Equal(locator, attribute, expectedValue)
        })
    }

/** 
 * @param {string} locator 
 * @param {string} attribute 
 * @param {string} expectedValue  
 */    
    
    static verify_Elements_With_Attributes_NotEqual(locator, attribute, expectedValue) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Multiple_Elements_With_Attributes_NotEqual(locator, attribute, expectedValue)
        })
    }    

/**
 * @param {string} locator
 * @param {string} expectedText
 */    

    static verify_Multiple_Elements_Having_SameText(locator, expectedText) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Multiple_Elements_Containing_Same_Text(locator, expectedText)
        })
    }

/**
 * Scrolls to top of the page from bottom
 */    

    static scroll_To_Top() {
        return Assertions.assert_Scroll_Position_At_The_Top_Of_The_Page()
    }

    static scroll_Into_View(locator, index) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.scroll_Into_View(locator, index)
        })
    }

/**
 * @param {string} locator
 * @param {string} order
 */    

    static verify_Sorting(locator, order) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Sorted_Values(locator, order)
        })
    }

/**
 * @param {string} locator
 * @param {number} index
 */    

    static getAttr_Min_Value(locator, index) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.getAttr_Min_Value(locator, index)
        })
    }

/**
 * @param {string} locator
 * @param {number} index
 */     

    static getAttr_Max_Value(locator, index) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.getAttr_Max_Value(locator, index)
        })
    }

/**
 * @param {string} locator
 */    

    static verify_Price(locator) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Price(locator)
        })
    }

/**
 * @param {string} locator
 * @param {string} position
 */    

    static get_Apply_Button_Count(locator, position) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.number_Aliases(locator, position)
        })
    }

/**
 * @param {string} locator
 * @param {string} position
 */    

    static verify_Count_Equal(locator, position) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.verify_Count_Equal(locator, position)
        })
    }   

/** 
 * @param {string} locator
 */     

    static verify_Element_Not_Exist(locator) {

        return ElementsValidation.validate_Locator_NotExist(locator).then(() => {
            return Assertions.assert_Element_Not_Exist(locator)
        })

    }

/** 
 * @param {string} locator
 */    

    static verify_Element_Not_Checked(locator) {

        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Element_Unchecked(locator)
        })

    }
        
    static verify_Count_NotEqual(locator, position) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.verify_Count_NotEqual(locator, position)
        })
    }

/**
 * @param {string} locator
 * @param {string} expectedText
 */    

    static verify_Does_Not_Contain_Text(locator, expectedText) {
        return ElementsValidation.validate_Locator(locator).then(()=> {
            return Assertions.assert_Element_Does_Not_Contains_Text(locator, expectedText)
        })
    }

/** 
 * @param {string} [position]
 */    

    static verify_Element_Exist_And_Visible(locator, position) {
        return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.assert_Element_Exist_And_Visible(locator, position)
        })
    }

/**
 * @param {string} locator
 * @param {number} index
 * @param {string} expectedPartialText
 */    

    static verify_Element_Class_Value_With_Index_And_PartialText(locator, index, expectedPartialText) {

        return ElementsValidation.validate_Locator_And_Index(locator, index).then(() => {
            return Assertions.assert_ClassAttr_Includes_Value_With_Index(locator, index, expectedPartialText)
        })

    }

/**
 * @param {string} locator1
 * @param {string} locator2
 */    

    static verify_Downpayment_Ownership_Price(locator1, locator2) {

        ElementsValidation.validate_Locator(locator1)
        ElementsValidation.validate_Locator(locator2)
        return Assertions.compare_OwnershipPrice_DownpaymentPrice(locator1, locator2)

    }

/**
 * @param {string} locator
 * @param {string} [position]
 */    

    static mouseHover(locator, position) {
       return ElementsValidation.validate_Locator(locator).then(() => {
            return Assertions.mouseHover(locator, position)
        })
    }



}

export default Elements;