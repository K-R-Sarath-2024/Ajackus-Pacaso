/// <reference types = "Cypress"/>
import HomePage from '../pageObjects/HomePage';

const homePage = new HomePage();

describe('Home Page Functionalities', () => {
    
    it('Check whether clicking BROWSE OUR PORTFOLIO button navigates to the portfolio page', () => {
        homePage.clickBrowseOurPortfolioButton()
        homePage.verifyPageURL().should('include', '/destinations')  
    })

    it('Check whether clicking on Cabo image navigates to Cabo Destinations page which has Cabos homes', () => {
        homePage.clickCaboImage()
        homePage.verifyPageURL().should('include', '/destinations/los-cabos-mex')
        homePage.verifyCaboPageHeading().should('contain.text','Luxury homes in Los Cabos')
    })

    it('Check whether clicking on London image navigates to London Destinations page which has Londons homes', () => {
        homePage.clickLondonImage()
        homePage.verifyPageURL().should('include', '/destinations/london-uk')
        homePage.verifyLondonPageHeading().should('contain.text','Luxury homes in London')
    })

    it('Check whether clicking on Paris image navigates to Paris Listings page and Lists Paris homes', () => {
        homePage.clickParisImage()
        homePage.verifyPageURL().should('include', '/listings/paris_france')
        homePage.closeTooltip()
        homePage.verifyParisPageHeading().should('contain.text','Vacation homes for sale in Paris, France')
    })

    it('Check whether clicking on Punta Mita image navigates to International contact page', () => {
        homePage.clickPuntaMitaImage()
        homePage.verifyPageURL().should('include', '/international-contact')
        homePage.verifyInternationalContactPageHeading().should('contain.text','Your vacation home abroad is waiting')
    })

    it('Check whether clicking Browse Destinations Link navigates to Destinations page', () => {
        homePage.clickBrowseDestinationsLink()
        homePage.verifyPageURL().should('include', '/destinations')
    })

    it('Check whether clicking Learn More in Scheduling section navigates to Scheduling page', () => {
        homePage.clickLearnMoreButtonForScheduling()
        homePage.verifyPageURL().should('include', '/scheduling')
        homePage.verifySchedulingPageHeading().should('contain.text','Scheduling made easy')
    })

    it('Check whether clicking Learn More in Design section navigates to design certified homes page', () => {
        homePage.clickLearnMoreButtonForDesignCertifiedHomes()
        homePage.verifyPageURL().should('include', '/design-certified-homes')
        homePage.verifyDesignCertifiedHomesPageHeading().should('contain.text','Pacaso Designed Homes')
    })

    it('Check whether clicking Learn More in Swap section navigates to swap page', () => {
        homePage.clickLearnMoreButtonForSwap()
        homePage.verifyPageURL().should('include', '/swap')
        homePage.verifySwapPageHeading().should('contain.text','The power of swap')
    })

    it('Check whether clicking HOW IT WORKS button navigates to co-ownership simplified page', () => {
        homePage.clickHowItWorksButton()
        homePage.verifyPageURL().should('include', '/coownership')
        homePage.verifyCoOwnershipSimplifiedPageHeading().should('contain.text','Co-﻿ownership, simplified')
    })







})