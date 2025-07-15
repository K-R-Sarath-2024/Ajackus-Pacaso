/// <reference types = "Cypress"/>

class Elements {

    static cssVERIFY(cssLocator) {

        return cy.get(cssLocator).should('be.visible')

    } 

    static xpathVERIFY(xpathLocator) {

        return cy.xpath(xpathLocator).should('be.visible')

    }

    static clickWithCSS(cssLocator)
    {

        return cy.get(cssLocator).should('be.visible').click()

    }

    static clickWithXPATH(xpathLocator)
    {

        return cy.xpath(xpathLocator).should('be.visible').click()

    }

    static clickFIRSTELEMENTWithXPATH(xpathLocator)
    {

        return cy.xpath(xpathLocator).first().should('be.visible').click()
    
    }

    static clickXPATHELEMENTWithINDEX(xpathLocator, index)
    {
        
        return cy.xpath(xpathLocator).eq(index).should('be.visible').click()
    
    }

    static clickCSSELEMENTWithINDEX(cssLocator, index)
    {
        
        return cy.get(cssLocator).eq(index).should('be.visible').click()
    
    }

    static clickFIRSTELEMENTWithCSS(cssLocator)
    {
        
        return cy.get(cssLocator).first().should('be.visible').click()
    
    }

    static verifyURL()
    {

        return cy.url()

    }

    static enterValueWithCSS(cssLocator, enterText) {
            
        return cy.get(cssLocator).should('be.visible').type(enterText)

    }

    static enterValueWithXPATH(xpathLocator, enterText) {
            
        return cy.xpath(xpathLocator).should('be.visible').type(enterText)

    }


}

export default Elements;