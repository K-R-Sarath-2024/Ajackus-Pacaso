/// <reference types = "Cypress"/>
import Elements from '../common_methods/elements';


class HomePage {

    constructor() {
        if(HomePage.instance){
            return HomePage.instance
        }
        HomePage.instance = this;
    }
       

    browse_Our_Portfolio_Button_Locator= 'a[data-id="browse-our-portfolio-button"]'
    browse_Full_Portfolio_Button_And_Links= '[class^="StyledLink"]'
    close_Tooltip_Locator= 'div h1'
    co_ownership_Page_Heading= 'h1.type-h2'

/**
 * This method clicks browse our portfolio button
 */       

       click_Browse_Our_Portfolio_Button() {
        return Elements.click(this.browse_Our_Portfolio_Button_Locator)
       }

/**
 * This method clicks the Browse Full portfolio button
 */       

       click_Browse_Full_Portfolio_Button() {
        return Elements.click_Element_With_Index(this.browse_Full_Portfolio_Button_And_Links, 0)
       }

/**
 * This method verifies the Page URL with expected string
 * @param {string} expectedURL
 */        

       verify_Page_URL(expectedURL) {
        cy.wait(1000)
        return Elements.verify_URL(expectedURL)
       }

       verify_Page_URL_Regular_Expression(expectedURL) {
        cy.wait(1000)
        return Elements.verify_URL_REGEXP(expectedURL)      
       }
 
/**
 * This method clicks Why Pacaso is different link
 */

       click_See_Why_Pacaso_Is_Different() {
              return Elements.click_Element_With_Index(this.browse_Full_Portfolio_Button_And_Links, 1)
       }

/**
 * This method clicks Learn more about flexible ownership link 
 */       

       click_Learn_more_about_flexible_ownership() {
        return Elements.click_Element_With_Index(this.browse_Full_Portfolio_Button_And_Links, 2)
       }

/**
 * This method clicks See How it works link
*/       

       click_See_How_It_Works() {
        return Elements.click_Element_With_Index(this.browse_Full_Portfolio_Button_And_Links, 3)
       }


/**
 * This method clicks See more owner stories link
 */       

       click_See_More_Owner_Stories() {
        return Elements.click_Element_With_Index(this.browse_Full_Portfolio_Button_And_Links, 4)
       }

/**
 * This method clicks get in touch button
 */       

       click_Get_In_Touch_Button() {
       return Elements.click_Element_With_Index(this.browse_Full_Portfolio_Button_And_Links, 5)
      }       
      
/**
 * This method verifies co-ownership page heading
 * @param {string} expectedText
 */        

       verify_CoOwnership_Simplified_Page_Heading(expectedText) {
        return Elements.verify(this.co_ownership_Page_Heading, expectedText)
       }

}

export default HomePage;