/// <reference types = "Cypress"/>

class Elements {

    static cssVERIFY(cssLocator) {

        return cy.get(cssLocator).should('be.visible')

    } 

    static clickWithCSS(cssLocator)
    {

        return cy.get(cssLocator).should('be.visible').click()

    }

    static clickWithCSSContaningText(cssLocator, text) 
    {

        return cy.get(cssLocator).contains(text).should('be.visible').click()

    }

    static clickCSSELEMENTWithINDEX(cssLocator, index)
    {
        
        return cy.get(cssLocator).eq(index).should('be.visible').click()
    
    }

    static clickCSSELEMENTWithINDEXContainingText(cssLocator, index, text)
    {
        
        return cy.get(cssLocator).contains(text).eq(index).should('be.visible').click()
    
    }

    static clickFIRSTELEMENTWithCSS(cssLocator)
    {
        
        return cy.get(cssLocator).first().should('be.visible').click()
    
    }

    static clickFIRSTELEMENTWithCSSContainingText(cssLocator, text)
    {
        
        return cy.get(cssLocator).contains(text).first().should('be.visible').click()
    
    }

    static verifyURL()
    {

        return cy.url()

    }

    static enterValueWithCSS(cssLocator, enterText) {
            
        return cy.get(cssLocator).should('be.visible').type(enterText)

    }


}

export default Elements;