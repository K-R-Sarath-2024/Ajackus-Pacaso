// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
/// <reference types = "Cypress"/>

import './commands'
import Elements from '../common_methods/elements'
import Homepage from '../page_objects/home_page'

const homepage = new Homepage()

beforeEach(() => {
    cy.visit('https://www.development.pacaso.com/', {
        auth: {
            username: "pacaso",
            password: "rowtogether"
        }
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    cy.get('body').then($body => {
      if ($body.find('#CybotCookiebotDialog').length !== 0) {
        Elements.click('#CybotCookiebotDialogBodyButtonAccept')
      }
    });

        homepage.click_Browse_Our_Portfolio_Button();
        homepage.verify_Page_URL('/destinations');

});
