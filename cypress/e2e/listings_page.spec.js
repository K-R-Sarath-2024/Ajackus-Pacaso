/// <reference types = "Cypress"/>
import HomePage from '../page_objects/home_page'
import DestinationsPage from '../page_objects/destinations_page'
import ListingsPage from '../page_objects/listings_page'

const homepage = new HomePage()
const destinationsPage = new DestinationsPage()
const listingsPage = new ListingsPage()

describe('Listings Page Functionalities', () => {

        beforeEach(() => {
                homepage.click_Browse_Our_Portfolio_Button();
                homepage.verify_Page_URL('/destinations');
        })

    describe('Navigation & Authentication', () => {

        it('Clicking Heart icon, triggers login if not logged in', () => {
    
                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Heart_Icon()
                listingsPage.verify_Sign_In_Popup_If_Not_LoggedIn('Sign up or sign in')
        })

    })
    
    describe('Sorting & Filtering', () => {
        it('Low to high and high to low price sorting should list homes accordingly', () => {
    
                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Low_To_High_Price_Sort()
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_Low_To_High_Price_Sorted_Values('asc')
                listingsPage.click_Refine_Button()
                listingsPage.click_High_To_Low_Price_Sort()
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_High_To_Low_Price_Sorted_Values('desc')       
        })
    
        it('Filtering by price should list homes accordingly', () => {
    
                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Min_Value_Dropdown()
                listingsPage.get_Attribute_Min_Value()
                listingsPage.select_Min_Value()
                listingsPage.click_Max_Value_Dropdown()
                listingsPage.get_Attribute_Max_Value()
                listingsPage.select_Max_Value()
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_Price_Between_Min_And_Max()
        })
    
        it('Count in apply button and heading should be same', () => {
    
                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Min_Value_Dropdown()
                listingsPage.get_Attribute_Min_Value()
                listingsPage.select_Min_Value()
                listingsPage.click_Max_Value_Dropdown()
                listingsPage.get_Attribute_Max_Value()
                listingsPage.select_Max_Value()
                listingsPage.get_Count_From_Apply_button('last')
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_Count_In_Heading('first')
        })
    
        it('Filtering by bedrooms and bathrooms should list homes accordingly', () => {
    
                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.choose_Bedroom()
                listingsPage.choose_Bathroom()
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_Bed_And_BathRooms([0,1], ['5', '5'])
        })
    
        it('Filtering by Pacaso should list Pacaso homes accordingly', () => {
    
                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Pacaso_Homes()
                listingsPage.get_Count_From_Apply_button('last')
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_Count_In_Heading('first')
                listingsPage.pacaso_Homes_Verify('Pacaso')
        })
    
        it('Filtering by Featured should list Featured homes accordingly', () => {
    
                destinationsPage.click_California_Location()
                destinationsPage.verify_Page_URL('/listings/all_california_ca')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Featured_Homes()
                listingsPage.get_Count_From_Apply_button('last')
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_Count_In_Heading('first')
                listingsPage.featured_Homes_Verify('Featured')
        })
    
        it('No results after filtering should show Clear Filters button and heading as "0 listings"', () => {
    
                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Townhome()
                listingsPage.get_Count_From_Apply_button('last')
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_Count_In_Heading('first')
                listingsPage.verify_ClearFilters_Button('first')
        })

        it('Check whether clicking Clear All in Refine popup in listings page clears the selection', () => {
    
                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Townhome()
                listingsPage.get_Count_From_Apply_button('last')
                listingsPage.click_Clear_All_Button()
                listingsPage.verify_Count_In_Apply_button('last')
        })

        it('Clicking Pacasos and Featured in Refine results, should lists both the homes', () => {
    
                destinationsPage.click_California_Location()
                destinationsPage.verify_Page_URL('/listings/all_california_ca')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Pacaso_Homes()
                listingsPage.click_Featured_Homes()
                listingsPage.get_Count_From_Apply_button('last')
                listingsPage.click_Apply_Button('last')
                listingsPage.verify_Count_In_Heading('first')
                listingsPage.pacaso_Homes_Verify('Pacaso')
                listingsPage.featured_Homes_Verify('Featured')
        })

        it.only('Clearing filters should clear selections in Refine popup', () => {

                destinationsPage.click_Bahamas_Location()
                destinationsPage.verify_Page_URL('/listings/bahamas')
                destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')

                listingsPage.close_Tooltip()
                listingsPage.click_Refine_Button()
                listingsPage.click_Townhome()
                listingsPage.click_Apply_Button('last')
                listingsPage.click_Clear_Filters_Button()
                listingsPage.verify_Filter_Indication_Is_Removed()
                listingsPage.click_Refine_Button()
                listingsPage.verify_Element_Unchecked()
        })
    })

    describe('Toggling List & Map View', () => {

        it('Toggling between Map and List view should show Map and List view accordingly', () => {
                
                destinationsPage.click_California_Location()
                destinationsPage.verify_Page_URL('/listings/all_california_ca')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Map_List_Toggle_Button()
                listingsPage.map_View_Verify()
                listingsPage.click_Map_List_Toggle_Button()
                listingsPage.list_View_Verify()
        })
    })

    describe('Page Navigations', () => {

        it('Clicking on page number, directly goes to the desired page', () => {
                destinationsPage.click_California_Location()
                destinationsPage.verify_Page_URL('/listings/all_california_ca')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Page_Number()
                listingsPage.verify_Page('active')
        })

        it('Clicking forward and back arrow, moves to next and previous pages', () => {
                destinationsPage.click_California_Location()
                destinationsPage.verify_Page_URL('/listings/all_california_ca')
    
                listingsPage.close_Tooltip()
                listingsPage.click_Forward_Arrow()
                listingsPage.verify_NextPage('active')
                listingsPage.click_Backward_Arrow()
                listingsPage.verify_PreviousPage('active')
        })
    })    
})