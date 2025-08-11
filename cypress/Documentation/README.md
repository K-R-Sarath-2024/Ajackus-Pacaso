# Ajackus-Pacaso

## Migration Guide

 -- I have renamed cssLocator to locator in methods in assertions.js file just to make it generic. I have executed all the test cases and all have passed. Added inline comments too.
 -- I have renamed all the methods in elements.js file to make it generic to all locators and not specific to cssSelectors.
 -- `assert_Multiple_Elements_Containing_Text(locator, expectedTexts)` -> This method in assertions.js file is newly added to assert texts from multiple elements and compare it to the expected texts.
 -- `assert_Element_Contains_Text(locator, expectedText, target)` -> This method in assertions.js file have unified index, first and last element. So target is an optional parameter which can be index, first or last element. This method is to assert the expected text.
 -- `assert_Element_Containing_Text_And_Click(locator, text, position)` -> This method in assertions.js file have unified text and position of the element which is first or last. position is an optional parameter. This method is to click the element which contains text.
 -- `assert_Element_And_Click(locatorOrElement, options = {})` -> This method in assertions.js file is to click the element. It has options parameter which can be index, text or position or combination of text and position or text and index. Same goes with `assert_Element_Exist_And_Visible(locatorOrElement, index, position, text)` to assert whether the element is exist and visible
-- I have added inline comments to all methods in page objects too
 

 

