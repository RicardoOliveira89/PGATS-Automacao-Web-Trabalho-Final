class Cart {
    clickToProcedToCheckout(name){
        cy.contains('Proceed To Checkout').click()
        cy.get('.checkout-information').should('be.visible')
        cy.get('#address_delivery').should('contain.text', name)
    }

    insertPurchaseDescription(phrase){
        cy.get('textarea[name="message"]').type(phrase)
        cy.contains('Place Order').click()
    }

    informPaymentDetails(name, cardNumber, cvc, expirationMonth, expirationYear){
        cy.get('input[data-qa="name-on-card"]').type(name)
        cy.get('input[data-qa="card-number"]').type(cardNumber)
        cy.get('input[data-qa="cvc"]').type(cvc)
        cy.get('input[data-qa="expiry-month"]').type(expirationMonth)
        cy.get('input[data-qa="expiry-year"]').type(expirationYear)
    }

    clickPayAndConfirmOrder(){
        cy.get('button[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"] b').should('be.visible')
        cy.get('#form p').should('have.text', 'Congratulations! Your order has been confirmed!')
        cy.get('.btn.btn-primary').click()
    }
}

export default new Cart()