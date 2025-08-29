/// <reference types = "Cypress"/>
import HomePage from '../page_objects/home_page'
import DestinationsPage from '../page_objects/destinations_page'

const homepage = new HomePage()
const destinationsPage = new DestinationsPage()

describe('Destinations Page Functionalities', () => {

    it('Check whether filtering by All Destinations, US destinations and International destinations in Destinations page lists locations accordingly', () => {
        cy.fixture('destinations').then((data) => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');
      
            destinationsPage.click_International_Heading();
            destinationsPage.verify_Page_URL('/destinations#international');
            destinationsPage.verify_International_Locations_Text('International');
            destinationsPage.verify_International_Actual_Locations(data.internationalLocations);
            destinationsPage.click_US_Heading()
            destinationsPage.verify_Page_URL('destinations#domestic')
            destinationsPage.verify_US_Locations_Text('United States')
            destinationsPage.verify_US_Actual_Locations(data.USLocations)
            destinationsPage.click_All_Destinations_Heading()
            destinationsPage.verify_All_Locations_Text('International', 'United States')
            destinationsPage.verify_All_Actual_Locations(data.AllLocations)

        })
    })

    it('Check whether clicking GRID view and List view in destinations page shows Grid view and List view accordingly', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

            destinationsPage.click_List_Icon()
            destinationsPage.verify_List_View('sizes','40px')
            destinationsPage.click_Grid_Icon()
            destinationsPage.verify_Grid_View('sizes','40px')
    })

    it('Check whether clicking any locations in destinations page navigates to Listings page of that location', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

            destinationsPage.click_Bahamas_Location()
            destinationsPage.verify_Page_URL('/listings/bahamas')
            destinationsPage.verify_Bahamas_Listings_Page_Heading('Bahamas Islands')
    })

    it('Check whether clicking US or International destinations from footer from destinations page scrolls to the top of the page', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

            destinationsPage.click_US_Destination_In_Footer()
            destinationsPage.verify_Page_Scrolled_To_The_Top()
            destinationsPage.click_International_Destination_In_Footer()
            destinationsPage.verify_Page_Scrolled_To_The_Top()
    })

    it('Check whether while redirecting back to portfolio from listings clears the search bar', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

            destinationsPage.click_Bahamas_Location()
            destinationsPage.verify_Page_URL('/listings/bahamas')
            cy.go('back')
            destinationsPage.verify_Search_Input('Bahamas Islands')
    })

    it('Check whether clicking on the tile in collections carousel navigate to that particular collection page', () => {
            homepage.click_Browse_Our_Portfolio_Button();
            homepage.verify_Page_URL('/destinations');

            destinationsPage.click_First_Slider()
            destinationsPage.verify_Page_URL('/luxury-homes/mountain-ski-homes')
            destinationsPage.verify_Luxury_Page_Heading('Luxury homes near mountains')        
    })

})