# Ajackus-Pacaso

## Migration Guide 1

 -- I have renamed cssLocator to locator in methods in assertions.js file just to make it generic. I have executed all the test cases and all have passed. Added inline comments too.
 -- I have renamed all the methods in elements.js file to make it generic to all locators and not specific to cssSelectors.
 -- `assert_Multiple_Elements_Containing_Text(locator, expectedTexts)` -> This method in assertions.js file is newly added to assert texts from multiple elements and compare it to the expected texts.
 -- `assert_Element_Contains_Text(locator, expectedText, target)` -> This method in assertions.js file have unified index, first and last element. So target is an optional parameter which can be index, first or last element. This method is to assert the expected text.
 -- `assert_Element_Containing_Text_And_Click(locator, text, position)` -> This method in assertions.js file have unified text and position of the element which is first or last. position is an optional parameter. This method is to click the element which contains text.
 -- `assert_Element_And_Click(locatorOrElement, options = {})` -> This method in assertions.js file is to click the element. It has options parameter which can be index, text or position or combination of text and position or text and index. Same goes with `assert_Element_Exist_And_Visible(locatorOrElement, index, position, text)` to assert whether the element is exist and visible
-- I have added inline comments to all methods in page objects too

## 2
ASSERTIONS
-- I have seperated exist and visible assertion seperately because of the need of some tests to check only exists
`assert_Element_Exist(locatorOrElement, index, position, text)`
`assert_Element_Exist_And_Visible(locatorOrElement, index, position, text)`
-- Similarly for click method too
`assert_Element_And_Click(locatorOrElement, options = {})` -> This is for exist and click
`assert_Element_Exist_And_Visible_And_Click(locatorOrElement, options = {})` -> This for exist and visible and click
-- `assert_Element_Does_Not_Contains_Text(locator, expectedText)` -> This method is to assert not contains the expected text
-- `assert_URL_Using_Regular_Expression(expectedURL)` -> This method is to assert URL using regular expression
-- `assert_Multiple_Elements_With_Attributes_Equal(locator, attribute, expectedValue)` -> This method is to assert the attribute value with the expected text(to assert equals)
-- `assert_Multiple_Elements_With_Attributes_NotEqual(locator, attribute, expectedValue)` -> This method is to assert the attribute value with the expected text(to assert not equals)
-- `assert_Scroll_Position_At_The_Top_Of_The_Page()` -> This method is to scroll to the top of the page from the bottom
-- `assert_Sorted_Values(locator, order)` -> This method is to assert the sorted results in ascending and descending order
-- `getAttr_Min_Value(locator, index)` -> This method is to get the value from attribute "value" for min price
-- `getAttr_Max_Value(locator, index)` -> Similarly for max price
-- `assert_Price(locator)` -> This method is to assert the homes listed between min and max price 
-- `get_Text(locator, position)` -> This method is to get text from the element
-- `get_Number(locator, position)` -> This method is to convert the obtained text to number
-- `number_Aliases(locator, position)` -> This method is to store the value and reuse in other test methods
-- `verify_Count_Equal(locator, position)` -> This method is to verify whether the count from apply button and the heading are equal
-- `verify_Count_NotEqual(locator, position)` -> Similarly for not equal
-- `verify_Texts_With_Index(locator, index = [], expectedTexts = [])` -> This method is to verify the string array of expected texts at the specified array index from the list of elements
-- `assert_Multiple_Elements_Containing_Same_Text(locator, expectedText)` -> This method asserts text from multiple elements contains same text

ELEMENTS
-- `verify_Texts_With_Index(locator, index = [], expectedTexts = [])` -> This method verifies expected texts and the specified indexes
-- `click_Last_Element(locator, position)` -> This method clicks the last element
-- `verify_URL_REGEXP(expectedURL)` -> This method verifies URL with regular expression
-- `verify_Elements_With_Attributes_Equal(locator, attribute, expectedValue)` -> This method verifies with attribute value
-- `verify_Elements_With_Attributes_NotEqual(locator, attribute, expectedValue)` -> Similarly for not equals
-- `verify_Multiple_Elements_Having_SameText(locator, expectedText)` -> This method verifies text from multiple elements having same expected text
-- `scroll_To_Top()` -> Scrolls to the top of the page
-- `verify_Sorting(locator, order)` -> Verifies ascending and descending sorting
-- `getAttr_Min_Value(locator, index)` -> get value from attribute "value" for min price
-- `getAttr_Max_Value(locator, index)` -> Similarly for max price
-- `verify_Price(locator)` -> This method is to verify home prices between min and max prices
-- `get_Apply_Button_Count(locator, position)` -> This method is to get count from apply button
-- `verify_Count_Equal(locator, position)` & `verify_Count_NotEqual(locator, position)` -> These methods is to verify equal and not equal count
-- `verify_Does_Not_Contain_Text(locator, expectedText)` -> This method is to assert the element does not contain the expected text
-- `verify_Element_Exist_And_Visible(locator, position)` -> This is to verify element exist and visible



 

 

