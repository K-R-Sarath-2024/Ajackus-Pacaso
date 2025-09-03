/// <reference types = "Cypress"/>
import Elements from '../common_methods/elements';

class ListingsPage {

    constructor() {
        if(ListingsPage.instance) {
            return ListingsPage.instance
        }
        ListingsPage.instance = this
    }

    heart_Icon_Of_Homes = '[data-id="Heart"]'
    signIn_Popup = 'h1.type-subhead'
    refine_Button = 'button[data-id="Refine"]'
    price_Low_To_High_Locator = 'input[value="Price: Low to high"]'
    apply_Button = 'button[class^="Button"]'
    low_To_High_And_High_To_Low_Sorted_Values_Locator = 'mark.text-primary'
    price_High_To_Low_Locator = 'input[value="Price: High to Low"]'
    min_And_Max_Dropdown_Locator = '[data-id="ChevronSouth"]'
    min_Price_Options_Select = '#minimum-price-options button'
    max_Price_Options_Select = '#maximum-price-options button'
    price_Locator = 'mark.text-primary'
    apply_Button_HomeCount = 'button div[class^="Button"] span'
    verify_Count = 'div.font-semibold'
    close_Tooltip_Info = 'button[aria-label="Legend"]'
    close_Actual_Tooltip = 'button[data-id="undefined-close-button"]'
    select_Bedroom = 'fieldset[aria-describedby="bedrooms-min"] div div div input'
    select_Bathroom = 'fieldset[aria-describedby="bathrooms-min"] div div div input'
    verify_Bedroom_And_Bathroom = 'a[data-title="home card"] div.flex-row div.flex-row div[class^=mr]'
    pacaso_homes = '#pacaso-homes-checkbox'
    verify_pacaso_homes = 'div.type-body-sm-medium.text-primary'
    verify_Featured_Homes = 'div.type-body-sm-medium.text-purple-800'
    featured_Homes = '#featured-homes-checkbox'
    townhome_Property_Type = '#townhome-type'
    clear_Filters_Button = 'button[data-id="Clear filters"]'
    clearAll_Button = 'button[aria-label="Clear all"]'
    map_And_List_Toggle_Button = 'button[class*="map-button"]'
    verify_Map_View = '[class*="slide-in"]'
    verify_List_View = '[class*="slide-out"]'
    filter_Indication_Locator = '[class*="filter-indicator"]'

/**
 * This method closes the tooltip
 */    

    close_Tooltip() {
        cy.wait(3000)
        Elements.click_First_Element(this.close_Tooltip_Info)
        Elements.click(this.close_Actual_Tooltip)
    }

/**
 * This method clicks the Heart symbol
 */    

    click_Heart_Icon() {
        return Elements.click_Element_With_Index(this.heart_Icon_Of_Homes, 0)
    }

/**
 * This method verifies SignIn popop
 * @param {string} expectedText
 */    

    verify_Sign_In_Popup_If_Not_LoggedIn(expectedText) {
        cy.wait(2000)
       return Elements.verify(this.signIn_Popup, expectedText)
    }

/**
 * This method clicks Refine button
 */    

    click_Refine_Button() {
        cy.wait(750)
       return Elements.click_Element_With_Index(this.refine_Button, 2)
    }

/**
 * This method clicks Low to High Price Sort option
 */    

    click_Low_To_High_Price_Sort() {
       return Elements.click(this.price_Low_To_High_Locator)
    }

/**
 * This method clicks the apply button
 * @param {string} position
 */    

    click_Apply_Button(position) {
       return Elements.click_Last_Element(this.apply_Button, position)
    }

/**
 * This method verifies ascending sort order
 * @param {string} order
 */    

    verify_Low_To_High_Price_Sorted_Values(order) {
        cy.wait(1000)
        return Elements.verify_Sorting(this.low_To_High_And_High_To_Low_Sorted_Values_Locator, order)
    }

/**
 * This method clicks High to Low Price Sort option
 */    

    click_High_To_Low_Price_Sort() {
        return Elements.click(this.price_High_To_Low_Locator)
    }

/**
 * This method verifies descending sort order
 * @param {string} order
 */    

    verify_High_To_Low_Price_Sorted_Values(order) {
        cy.wait(1000)
        return Elements.verify_Sorting(this.low_To_High_And_High_To_Low_Sorted_Values_Locator, order)
    }

/**
 * This method clicks Minimum price dropdown
 */    

    click_Min_Value_Dropdown() {
        return Elements.click_Element_With_Index(this.min_And_Max_Dropdown_Locator, 3)
    }

/**
 * This method gets the minimum price value
 */    

    get_Attribute_Min_Value() {
        return Elements.getAttr_Min_Value(this.min_Price_Options_Select, 3)
    }

/**
 * This method selects the minimum price from the dropdown
 */    

    select_Min_Value() {
        return Elements.click_Element_With_Index(this.min_Price_Options_Select, 3)
    }

/**
 * This method clicks maximum price dropdown
 */    

    click_Max_Value_Dropdown() {
        return Elements.click_Element_With_Index(this.min_And_Max_Dropdown_Locator, 4)
    }

/**
 * This method gets the maximum price value
 */    

    get_Attribute_Max_Value() {
        return Elements.getAttr_Max_Value(this.max_Price_Options_Select, 19)
    }

/**
 * This method selects the maximum price from the dropdown
 */    

    select_Max_Value() {
        return Elements.click_Element_With_Index(this.max_Price_Options_Select, 19)
    }

/**
 * This method verifies the homes listed between minimum and maximum value
 */    

    verify_Price_Between_Min_And_Max() {
        cy.wait(1000)
        return Elements.verify_Price(this.price_Locator)
    }

/**
 * This method gets the count from apply button
 * @param {string} position
 */    

    get_Count_From_Apply_button(position) {
        cy.wait(1000)
        return Elements.get_Apply_Button_Count(this.apply_Button_HomeCount, position)
    }

/**
 * This method verifies the count in page heading which we obtained from apply button
 * @param {string} position
 */    

    verify_Count_In_Heading(position) {
        cy.wait(3000)
        return Elements.verify_Count_Equal(this.verify_Count, position)
    }

/**
 * This method selects bedroom option
 */    

    choose_Bedroom() {
        return Elements.click_Element_With_Index(this.select_Bedroom, 5)
    }

/**
 * This method selects bathroom option
 */    

    choose_Bathroom() {
        return Elements.click_Element_With_Index(this.select_Bathroom, 5)
    }

/**
 * This method verifies bedrooms and bathrooms from the listed homes
 * @param {number[]} index
 * @param {string[]} expectedTexts 
 */    

    verify_Bed_And_BathRooms(index = [], expectedTexts = []) {
        cy.wait(1000)
        return Elements.verify_Texts_With_Index(this.verify_Bedroom_And_Bathroom, index, expectedTexts)
    }

/**
 * This method clicks Pacaso homes option from Refine popup
 */    

    click_Pacaso_Homes() {
        return Elements.click(this.pacaso_homes)
    }

/**
 * This method verifies pacaso homes
 * @param {string} expectedText
 */    

    pacaso_Homes_Verify(expectedText) {
        return Elements.verify_Multiple_Elements_Having_SameText(this.verify_pacaso_homes, expectedText)
    }

/**
 * This method clicks Featured homes option from Refine popup
 */    

    click_Featured_Homes() {
        return Elements.click(this.featured_Homes)
    }

/**
 * This method verifies featured homes
 * @param {string} expectedText
 */     

    featured_Homes_Verify(expectedText) {
        return Elements.verify_Multiple_Elements_Having_SameText(this.verify_Featured_Homes, expectedText)
    }

/**
 * This method clicks Townhome option from Refine popup
 */    

    click_Townhome() {
        return Elements.click(this.townhome_Property_Type)
    }

/**
 * This method verifies clear filter button
 * @param {string} position
 */    

    verify_ClearFilters_Button(position) {
        return Elements.verify_Element_Exist_And_Visible(this.clear_Filters_Button, position)
    }

/**
 * This method clicks Clear All button in refine popup
 */    

    click_Clear_All_Button() {
        return Elements.click(this.clearAll_Button)
    }

/**
 * This method verifies the count in apply button
 * @param {string} position
 */    

    verify_Count_In_Apply_button(position) {
        cy.wait(1000)
        return Elements.verify_Count_NotEqual(this.apply_Button_HomeCount, position)
    }

/** 
 * This method clicks Map/List toggle button
 */    

    click_Map_List_Toggle_Button() {
        return Elements.click_First_Element(this.map_And_List_Toggle_Button)
    }

/**
 * This method verifies the map view
 */    

    map_View_Verify() {
        cy.wait(1000)
        return Elements.verify_Element_Exist_And_Visible(this.verify_Map_View)
    }

/**
 * This method verifies the list view
 */    

    list_View_Verify() {
        cy.wait(1000)
        return Elements.verify_Element_Exist_And_Visible(this.verify_List_View)
    }

/**
 * This method clicks clear filters button 
 */    

    click_Clear_Filters_Button() {
        cy.wait(2000)
        return Elements.click_First_Element(this.clear_Filters_Button)
    }

/**
 * This method verifies whether filter indication is removed
 */    

    verify_Filter_Indication_Is_Removed() {
        cy.wait(1000)
        return Elements.verify_Element_Not_Exist(this.filter_Indication_Locator)
    }

/**
 * This method verifies that element is not checked 
 */    

    verify_Element_Unchecked() {
        return Elements.verify_Element_Not_Checked(this.townhome_Property_Type)
    }

}

export default ListingsPage