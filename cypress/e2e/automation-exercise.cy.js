/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import helpers from '../support/helpers'
import userData from '../fixtures/data-user.json'
import menu from '../modules/menu'
import login from '../modules/login'
import register from '../modules/register'
import contact from '../modules/contact'
import product from '../modules/products'
import home from '../modules/home'
import cart from '../modules/shopping-cart'

describe('Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Test Case 1: Register User', () => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const completeName = firstName + ' ' + lastName
        menu.navigateToLogin()
        login.fillOutPreRegistrationForm(`${firstName} ${lastName}`, helpers.getRandomEmail())
        register.fillOutTheCompleteRegistrationForm('Mr', userData.password, '18', 'April', '1989', faker.person.firstName(), faker.person.lastName(), `PGATS ${faker.company.name()}`, faker.location.streetAddress(), 'Canada', faker.location.state(), faker.location.city(), faker.location.zipCode(), userData.mobileNumber)
        register.verifyRegistrationSucessfully()
        register.verifyLoggedUser(completeName)
    })

    it('Test Case 2: Login User with correct email and password', () => {
        menu.navigateToLogin()
        login.fillOutTheLoginForm(userData.email, userData.password)
        login.verifyLoginSuccessfully(userData.name)
    })

    it('Test Case 3: Login User with incorrect email and password', () => {
        menu.navigateToLogin()
        login.fillOutTheLoginForm('incorrect@email', 'incorrectPassword')
        login.verifyLoginFailed()
    })

    it('Test Case 4: Logout User', () => {
        menu.navigateToLogin()
        login.fillOutTheLoginForm(userData.email, userData.password)
        menu.logout()
        helpers.verifyPage('login')
    })

    it('Test Case 5: Register User with existing email', () => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        menu.navigateToLogin()
        login.fillOutPreRegistrationForm(`${firstName} ${lastName}`, userData.email)
        login.verifyExistingEmail()
    })

    it('Test Case 6: Contact Us Form', () => {
        menu.navigateToContacts()
        contact.fillInContactFormFields(userData.name, userData.email, userData.subject, userData.message)
        contact.attachFile('test-file.pdf')
        contact.verifyFormSubmission()
    })

    it('Test Case 8: Verify All Products and product detail page', () => {
        menu.navigateToProducts()
        product.verifyProductList()
        product.clickProductDetails()
        helpers.verifyPage('product_details')
        product.verifyProductName('Blue Top')
        product.verifyProductCategory('Category: Women > Tops')
        product.verifyProductPrice('Rs. 500')
        product.verifyProductAvailability('Availability: In Stock')
        product.verifyProductCondition('Condition: New')
        product.verifyProductBrand('Brand: Polo')
    })

    it('Test Case 9: Search Product', () => {
        menu.navigateToProducts()
        product.searchProduct('shirt')
        product.verifyProductList()
    })

    it('Test Case 10: Verify Subscription in home page', () => {
        home.sucessfulSubscription(userData.email)
    })

    it('Test Case 15: Place Order: Register before Checkout', () => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const email = faker.internet.email()
        const completeName = firstName + ' ' + lastName
        menu.navigateToLogin()
        login.fillOutPreRegistrationForm(`${firstName} ${lastName}`, email)
        register.fillOutTheCompleteRegistrationForm('Mr', userData.password, '18', 'April', '1989', firstName, lastName, `PGATS ${faker.company.name()}`, faker.location.streetAddress(), 'Canada', faker.location.state(), faker.location.city(), faker.location.zipCode(), userData.mobileNumber)
        register.verifyRegistrationSucessfully()
        register.verifyLoggedUser(completeName)
        menu.navigateToProducts()
        product.addProductToCart()
        menu.navigateToCart()
        helpers.verifyPage('view_cart')
        cart.clickToProcedToCheckout(completeName)
        cart.insertPurchaseDescription('Automation Test')
        cart.informPaymentDetails(completeName, userData.creditCardNumber, userData.creditCardCvc, userData.creditCardExpirationMonth, userData.creditCardExpirationYear)
        cart.clickPayAndConfirmOrder()
        menu.deleteAccount()
    })

})