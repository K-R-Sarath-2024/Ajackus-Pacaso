/// <reference types = "Cypress"/>
import HomePage from '../page_objects/home_page'
import DestinationsPage from '../page_objects/destinations_page'

const homepage = new HomePage()
const destinationsPage = new DestinationsPage()

describe('Destinations Page Functionalities', () => {

        beforeEach(() => {
                homepage.click_Browse_Our_Portfolio_Button();
                homepage.verify_Page_URL('/destinations');
        })

    it('Destinations filter lists locations accordingly', () => {
        cy.fixture('destinations').then((data) => {
      
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

    it('Should toggle between Grid view and List view', () => {

            destinationsPage.click_List_Icon()
            destinationsPage.verify_List_View('sizes','40px')
            destinationsPage.click_Grid_Icon()
            destinationsPage.verify_Grid_View('sizes','40px')
    })

    it('Clicking any location should navigate to listings page', () => {

            destinationsPage.click_CaribbeanAndBahamas_Location()
            destinationsPage.verify_Page_URL('/listings/caribbean_bahamas')
            destinationsPage.verify_CaribbeanAndBahamas_Listings_Page_Heading('Caribbean & Bahamas')
    })

    it('Clicking US or International destinations from footer should scroll to top', () => {

            destinationsPage.click_US_Destination_In_Footer()
            destinationsPage.verify_Page_Scrolled_To_The_Top()
            destinationsPage.click_International_Destination_In_Footer()
            destinationsPage.verify_Page_Scrolled_To_The_Top()
    })

    it('Redirecting back from destinations should clear the search bar', () => {

            destinationsPage.click_CaribbeanAndBahamas_Location()
            destinationsPage.verify_Page_URL('/listings/caribbean_bahamas')
            cy.go('back')
            destinationsPage.verify_Search_Input('Caribbean & Bahamas')
    })

    it('Clicking on the tile in luxury 2nd homes carousel should navigate to that particular page', () => {

            destinationsPage.click_First_Slider()
            destinationsPage.verify_Page_URL('/luxury-homes/mountain-ski-homes')
            destinationsPage.verify_Luxury_Page_Heading('Luxury homes near mountains')        
    })

})