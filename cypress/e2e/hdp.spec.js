/// <reference types = "Cypress"/>
import HomePage from '../page_objects/home_page'
import DestinationsPage from '../page_objects/destinations_page'
import ListingsPage from '../page_objects/listings_page'
import HomeDetailsPage from '../page_objects/hdp'

const homePage = new HomePage()
const destinationsPage = new DestinationsPage()
const listingsPage = new ListingsPage()
const homeDetailsPage = new HomeDetailsPage()

describe('HDP Functionalities', () => {

    beforeEach(() => {
        homePage.click_Browse_Our_Portfolio_Button();
        homePage.verify_Page_URL('/destinations');

        destinationsPage.click_LakeTahoe_Location()
        destinationsPage.verify_Page_URL('/listings/lake_tahoe_ca')

        listingsPage.click_Page_Number()
        listingsPage.click_Home()
    })

    describe('Gallery Tab', () => {

        beforeEach(() => {
            homeDetailsPage.click_View_AllPhotos_Button()
            homeDetailsPage.verify_Page_URL_Regular_Expression(/\/.*gallery-tab=photos$/)
        })
        it('View all photos button navigates to gallery', () => {})

        it('Clicking heart throws sign up or sign in popup, if not logged in', () => {
            homeDetailsPage.click_Heart_Top0fThePage()
            listingsPage.verify_Sign_In_Popup_If_Not_LoggedIn('Sign up or sign in')
            homeDetailsPage.click_Close_SignIn()
            homeDetailsPage.click_Heart_In_Sticky_Hub()
            listingsPage.verify_Sign_In_Popup_If_Not_LoggedIn('Sign up or sign in')
        })

        it('Clicking Pacaso Design Certified link navigates to Design page', () => {
            homeDetailsPage.click_Design_Link()
            homePage.verify_Page_URL('/design-certified-homes')
        })

        it('Clicking back navigates back to HDP', () => {
            homeDetailsPage.click_Back()
            homeDetailsPage.verify_HDP(/\/.*gallery-tab=photos$/)
        })
    })

    it('Clicking Heart throws Sign In Sign Up pop up', () => {
        homeDetailsPage.click_Follow_Button('last')
        listingsPage.verify_Sign_In_Popup_If_Not_LoggedIn('Sign up or sign in')
    })

    it('Show All Photos button should navigate to gallery', () => {
        homeDetailsPage.click_Show_All_Photos_Button()
        homeDetailsPage.verify_Page_URL_Regular_Expression(/\/.*gallery-tab=photos$/)
    })

    it('Design Cerified link should navigate to Design page', () => {
        homeDetailsPage.click_Design_Cerified_Link()
        homePage.verify_Page_URL('/design-certified-homes')
    })
    
    it('View All Amenities shows all amenities', () => {
        homeDetailsPage.click_View_All_Amenities_Button()
        homeDetailsPage.verify_Amenities("Amenities you'll enjoy",'first')
    })

    it('Learn more link should navigate to Co-Ownership page', () => {
        homeDetailsPage.click_Learn_More_Link()
        homePage.verify_Page_URL('/coownership')
        homePage.verify_CoOwnership_Simplified_Page_Heading('Co-﻿ownership, simplified')
    })

    it('Check whether ownership and downpayment calculation is correct or not', () => {
        homeDetailsPage.click_Ownership_Dropdown()
        homeDetailsPage.choose_Half_Option()
        homeDetailsPage.click_Downpayment_Dropdown()
        homeDetailsPage.choose_Downpayment_Option()
        homeDetailsPage.compare_Ownership_And_Downpayment_And_Verify()
    })    

})