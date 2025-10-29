/// <reference types = "Cypress"/>
import Header from "../page_objects/header"
import HomePage from "../page_objects/home_page";

const header = new Header()
const homePage = new HomePage();

describe('Header Navigations', () => {

    describe('Portfolio', () => {

    beforeEach(() => {
        header.mouseHover_Portfolio('first')
        header.verify_MegaDropdown()
    })

    it('Mouse hovering on portfolio shows mega dropdown', () => {})

    it('Clicking destinations in mega dropdown navigates to destinations page', () => {
        header.click_Elements_In_MegaDropdown('Destinations')
        homePage.verify_Page_URL('/destinations') 
    })

    it('Clicking United States navigates to US locations', () => {
        header.click_Elements_In_MegaDropdown('United States')
        homePage.verify_Page_URL('/destinations#domestic')
    })

    it('Clicking International navigates to International locations', () => {
        header.click_Elements_In_MegaDropdown('International')
        homePage.verify_Page_URL('/destinations#international')
    })

    it('Clicking View all destinations navigates to all locations', () => {
        header.click_Elements_In_MegaDropdown('All destinations')
        homePage.verify_Page_URL('/destinations')
    })

    it('Clicking Luxury 2nd Homes navigates to listings page', () => {
        header.click_Elements_In_MegaDropdown('Luxury second homes')
        homePage.verify_Page_URL('/listings')
    })

    it('Clicking beaches navigates to homes near beaches page', () => {
        header.click_Elements_In_MegaDropdown('Beaches')
        homePage.verify_Page_URL('/luxury-homes/beach-homes')
    })

    it('Clicking cities navigates to homes near cities page', () => {
        header.click_Elements_In_MegaDropdown('Cities')
        homePage.verify_Page_URL('/luxury-homes/city-homes')
    })

    it('Clicking deserts navigates to homes near deserts page', () => {
        header.click_Elements_In_MegaDropdown('Desert')
        homePage.verify_Page_URL('/luxury-homes/desert-homes')
    })

    it('Clicking golf navigates to homes near golf page', () => {
        header.click_Elements_In_MegaDropdown('Golf')
        homePage.verify_Page_URL('/luxury-homes/golf-course-homes')
    })

    it('Clicking mountains navigates to homes near mountains page', () => {
        header.click_Elements_In_MegaDropdown('Mountains')
        homePage.verify_Page_URL('/luxury-homes/mountain-ski-homes')
    })

    it('Clicking lakes navigates to homes near lakes page', () => {
        header.click_Elements_In_MegaDropdown('Lakes')
        homePage.verify_Page_URL('/luxury-homes/lake-homes')
    })

    it('Clicking Vineyards navigates to homes near vineyards page', () => {
        header.click_Elements_In_MegaDropdown('Vineyards')
        homePage.verify_Page_URL('/luxury-homes/vineyards')
    })

    it('Clicking View all homes navigates to listings page', () => {
        header.click_Elements_In_MegaDropdown('View all homes')
        homePage.verify_Page_URL('/listings')
    })

    })

    describe('Co-Ownership', () => {

        beforeEach(() => {
            header.mouseHover_CoOwnership('first')
        })
        it('Clicking How it works navigates to co-ownership page', () => {
            header.click_HowItWorks_In_CoOwnership()
            homePage.verify_Page_URL('/coownership')
        })

        it('Clicking Try Pacaso navigates to pacaso now page', () => {
            header.click_TryPacaso_In_CoOwnership()
            homePage.verify_Page_URL('/luxury-homes/pacasonow')
        })

        it('Clicking Testimonials navigates to Testimonials page', () => {
            header.click_FAQs_In_CoOwnership()
            homePage.verify_Page_URL('/testimonials')
        })

        it('Clicking FAQs navigates to FAQs page', () => {
            header.click_Blog_In_CoOwnership()
            homePage.verify_Page_URL('/faq')
        })

        it('Clicking Blog navigates to blog page', () => {
            header.click_Agents_In_CoOwnership()
            homePage.verify_Page_URL('/blog')
        })
    })

    describe('Contact', () => {
        it('Clicking Contact navigates to contact page', () => {
            header.click_Contact()
            homePage.verify_Page_URL('/contact')
        })
    })

})