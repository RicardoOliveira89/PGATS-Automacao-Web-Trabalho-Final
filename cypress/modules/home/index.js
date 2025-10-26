class Home {
    sucessfulSubscription(email){
        cy.get('#footer h2').should('have.text', 'Subscription')
        cy.get('#susbscribe_email').click().type(email)
        cy.get('#subscribe i.fa').click()
        cy.get('#success-subscribe div.alert').should('have.text', 'You have been successfully subscribed!')
    }
}

export default new Home()