/// <reference types = "Cypress"/>
import Footer from "../page_objects/footer"
import HomePage from "../page_objects/home_page";

const footer = new Footer()
const homePage = new HomePage();

describe('Footer Navigations', () => {

    describe('Portfolio', () => {

        it('Clicking All Homes in footer navigates to listings page', () => {

            footer.click_AllHomes_In_Footer()
            homePage.verify_Page_URL('/listings')
        })

        it('Clicking All Destinations in footer navigates to destinations page', () => {
            footer.click_AllDestinations_In_Footer()
            homePage.verify_Page_URL('/destinations')
        })

        it('Clicking US Destinations in footer navigates to destinations page', () => {
            footer.click_USDestinations_In_Footer()
            homePage.verify_Page_URL('/destinations#domestic')
        })

        it('Clicking International Destinations in footer navigates to destinations page', () => {
            footer.click_InternationalDestinations_In_Footer()
            homePage.verify_Page_URL('/destinations#international')
        })

        it('Clicking Sell in footer navigates to sell page', () => {
            footer.click_Sell_In_Footer()
            homePage.verify_Page_URL('/sell')
        })

    })

    describe('Co-Ownership', () => {

        it('Clicking How it works in footer navigates to co-ownership page', () => {
            footer.click_HowItWorks_In_CoOwnership()
            homePage.verify_Page_URL('/coownership')
        })

        it('Clicking Try Pacaso in footer navigates to pacaso now page', () => {
            footer.click_TryPacaso_In_CoOwnership()
            homePage.verify_Page_URL('/luxury-homes/pacasonow')
        })

        it('Clicking Financing in footer navigates to financing page', () => {
            footer.click_Financing_In_CoOwnership()
            homePage.verify_Page_URL('/financing')
        })

        it('Clicking Testimonials in footer navigates to testimonials page', () => {
            footer.click_Testimonials_In_CoOwnership()
            homePage.verify_Page_URL('/testimonials')
        })

        it('Clicking FAQs in footer navigates to FAQs page', () => {
            footer.click_FAQs_In_CoOwnership()
            homePage.verify_Page_URL('/faq')
        })

        it('Clicking Webinars in footer navigates to webinars page', () => {
            footer.click_Webinars_In_CoOwnership()
            homePage.verify_Page_URL('/webinar')
        })

        it('Clicking Blog in footer navigates to blog page', () => {
            footer.click_Blog_In_CoOwnership()
            homePage.verify_Page_URL('/blog')
        })

    })

})