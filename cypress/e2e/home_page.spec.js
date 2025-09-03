/// <reference types = "Cypress"/>
import HomePage from '../page_objects/home_page';

const homePage = new HomePage();

describe('Home Page Functionalities', () => {
    
    it('Check whether clicking BROWSE OUR PORTFOLIO button navigates to the portfolio page', () => {
        homePage.click_Browse_Our_Portfolio_Button()
        homePage.verify_Page_URL('/destinations')  
    })

    it('Check whether clicking on Cabo image navigates to Cabo Destinations page which has Cabos homes', () => {
        homePage.click_Cabo_Image()
        homePage.verify_Page_URL('/destinations/los-cabos-mex')
        homePage.verify_Cabo_Page_Heading('Luxury homes in Los Cabos')
    })

    it('Check whether clicking on London image navigates to London Destinations page which has Londons homes', () => {
        homePage.click_London_Image()
        homePage.verify_Page_URL('/destinations/london-uk')
        homePage.verify_London_Page_Heading('Luxury homes in London')
    })

    it('Check whether clicking on Paris image navigates to Paris Listings page and Lists Paris homes', () => {
        homePage.click_Paris_Image()
        homePage.verify_Page_URL('/listings/paris_france')
        homePage.close_Tool_tip()
        homePage.verify_Paris_Page_Heading('Vacation homes for sale in Paris, France')
    })

    it('Check whether clicking on Punta Mita image navigates to International contact page', () => {
        homePage.click_Punta_Mita_Image()
        homePage.verify_Page_URL('/international-contact')
        homePage.verify_International_Contact_Page_Heading('Your vacation home abroad is waiting')
    })

    it('Check whether clicking Browse Destinations Link navigates to Destinations page', () => {
        homePage.click_Browse_Destinations_Link()
        homePage.verify_Page_URL('/destinations')
    })

    it('Check whether clicking Learn More in Scheduling section navigates to Scheduling page', () => {
        homePage.click_Learn_More_Button_For_Scheduling()
        homePage.verify_Page_URL('/scheduling')
        homePage.verify_Scheduling_Page_Heading('Scheduling made easy')
    })

    it('Check whether clicking Learn More in Design section navigates to design certified homes page', () => {
        homePage.click_Learn_More_Button_For_Design_Certified_Homes()
        homePage.verify_Page_URL('/design-certified-homes')
        homePage.verify_Design_Certified_Homes_Page_Heading('Pacaso Designed Homes')
    })

    it('Check whether clicking Learn More in Swap section navigates to swap page', () => {
        homePage.click_Learn_More_Button_For_Swap()
        homePage.verify_Page_URL('/swap')
        homePage.verify_Swap_Page_Heading('The power of swap')
    })

    it('Check whether clicking HOW IT WORKS button navigates to co-ownership simplified page', () => {
        homePage.click_How_It_Works_Button()
        homePage.verify_Page_URL('/coownership')
        homePage.verify_CoOwnership_Simplified_Page_Heading('Co-﻿ownership, simplified')
    })

    it('Check whether clicking read the report in resale section navigates to resale performance report page', () => {
        homePage.click_Read_Report_Button()
        homePage.verify_Page_URL_Regular_Expression(/\/.*-resale-performance-report$/)
    })
})