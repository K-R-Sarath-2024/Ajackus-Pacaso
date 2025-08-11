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
})