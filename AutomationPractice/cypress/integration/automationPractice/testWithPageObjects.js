import { onAuthorizationFormPage } from "../../support/page Object/authorizationFormPage"
import { onAuthorizationPage } from "../../support/page Object/authorizationPage"
import { onControllerOrderPage } from "../../support/page Object/controllerOrder"
import { onControllerProductsPage } from "../../support/page Object/controllerProduct"
import { onHomePage } from "../../support/page Object/homePage"
import { navigateTo } from "../../support/page Object/navigationTo"
import { onWelcomeToAccount } from "../../support/page Object/welcomeToAccount"

describe('Test with page object', () => {
    let username = 'aseediiiwww@gmail.com'
    let password = 'Sendler'
    beforeEach('open application', ()=>{
        cy.visit('/')
    })
    it('Authorization of new user', () => {
        navigateTo.authorizationPage()
        onAuthorizationPage.createNewAccountWithEmail("aswweeuuuisw@gmail.com")
        cy.wait(7000)
        onAuthorizationFormPage.selectGender(1)
        onAuthorizationFormPage.typeName('Mihajlo')
        onAuthorizationFormPage.typeLastName('Gorunovic')
        onAuthorizationFormPage.typePassword('Sendler')
        onAuthorizationFormPage.selectBirthDay(18, 'September', '1991')
        onAuthorizationFormPage.selectAdress('Gogoljeva 16', 21000, 'Gogoljeva 3')
        onAuthorizationFormPage.typeCity('Boston')
        onAuthorizationFormPage.selectCountry('United States')
        onAuthorizationFormPage.selectState('Alabama')
        onAuthorizationFormPage.typePhoneNumber('0038143777225')
        onAuthorizationFormPage.clickSubmit()
        onWelcomeToAccount.verifyRegistrationMessage()
        
        
    })
    it('Make dress order', () => {
        navigateTo.authorizationPage()
        onAuthorizationPage.logInWithUser(username, password)
        onHomePage.searchForAProduct('dress')
        onControllerProductsPage.clickAddToChart()
        onControllerProductsPage.proceedToCheckOutForm()
        onControllerOrderPage.proceedFromSummaryCard()
        onControllerOrderPage.proceedFromAdressCard()
        onControllerOrderPage.selectAgreeWithAThermsOnShippingCard()
        onControllerOrderPage.proceedFromShippingCard()
        onControllerOrderPage.payByBankWire()
        onControllerOrderPage.confirmOrder()

    })

 
})