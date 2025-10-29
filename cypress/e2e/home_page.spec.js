/// <reference types = "Cypress"/>
import HomePage from '../page_objects/home_page';

const homePage = new HomePage();

describe('Home Page Functionalities', () => {
    
    it('Check whether clicking BROWSE OUR PORTFOLIO button navigates to the portfolio page', () => {
        homePage.click_Browse_Our_Portfolio_Button()
        homePage.verify_Page_URL('/destinations')  
    })

    it('Check whether clicking Browse Full Portfolio button navigates to destinations page', () => {
        homePage.click_Browse_Full_Portfolio_Button()
        homePage.verify_Page_URL('/destinations')
    })

    it('Check whether clicking See why Pacaso is different link navigates to co ownership page', () => {
        homePage.click_See_Why_Pacaso_Is_Different()
        homePage.verify_Page_URL('/coownership')
        homePage.verify_CoOwnership_Simplified_Page_Heading('Co-﻿ownership, simplified')
    })

    it('Check whether clicking Learn more about flexible ownership navigates to co ownership page', () => {
        homePage.click_Learn_more_about_flexible_ownership()
        homePage.verify_Page_URL('/coownership')
        homePage.verify_CoOwnership_Simplified_Page_Heading('Co-﻿ownership, simplified')
    })

    it('Check whether clicking See how it works navigates to co ownership page', () => {
        homePage.click_See_How_It_Works()
        homePage.verify_Page_URL('/coownership')
        homePage.verify_CoOwnership_Simplified_Page_Heading('Co-﻿ownership, simplified')
    })

    it('Check whether clicking see more owner stories link navigates to testimonials page', () => {
        homePage.click_See_More_Owner_Stories()
        homePage.verify_Page_URL('/testimonials')
    })

    it('Check whether clicking Get in touch navigates to Contact page', () => {
        homePage.click_Get_In_Touch_Button()
        homePage.verify_Page_URL('/contact')
    })

})