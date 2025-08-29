/// <reference types = "Cypress"/>
import HomePage from '../page_objects/home_page'
import DestinationsPage from '../page_objects/destinations_page'
import ListingsPage from '../page_objects/listings_page'

const homepage = new HomePage()
const destinationsPage = new DestinationsPage()
const listingsPage = new ListingsPage()

describe('Listings Page Functionalities', () => {

    it('Check whether clicking Heart icon in the homes, triggers login if not logged in', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

            destinationsPage.click_Bahamas_Location()
            destinationsPage.verify_Page_URL('/listings/bahamas')
            destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')

            listingsPage.close_Tooltip()
            listingsPage.click_Heart_Icon()
            listingsPage.verify_Sign_In_Popup_If_Not_LoggedIn('Sign up or sign in')
    })

    it('Check whether sorting the homes by low to high price and vice versa lists homes accordingly in listings page', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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

    it('Check whether in Listings page filtering by price list only homes of that mentioned price', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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

    it('Check whether after applying filters in listings, shows the right count in apply button and validate the same after hitting apply in the heading of the listings page', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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

    it('Check whether in Listings page filtering by bedrooms and bathrooms list only homes with the option we choose in bedrooms and bathrooms', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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

    it('Check whether we filter by pacaso in highlighted homes list only pacaso homes', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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

    it('Check whether we filter by featured in highlighted homes list only featured homes', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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

    it('Check whether after filtering in listings page, when no results are there shows Clear Filters button and heading as "0 listings"', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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

    it('Check whether when we combine both Pacasos and Featured in Refine results in listings page, it lists both the homes', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

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

    it('Check whether clicking Map and List button back and forth, shows Map when Map button is clicked and shows List when List button is clicked', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

            destinationsPage.click_California_Location()
            destinationsPage.verify_Page_URL('/listings/all_california_ca')

            listingsPage.close_Tooltip()
            listingsPage.click_Map_List_Toggle_Button()
            listingsPage.map_View_Verify()
            listingsPage.click_Map_List_Toggle_Button()
            listingsPage.list_View_Verify()
    })

    
})