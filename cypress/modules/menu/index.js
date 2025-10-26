class Menu {
    navigateToLogin(){
        cy.get('a[href="/login"]').click()
    }

    navigateToContacts(){
         cy.get('a[href*=contact]').click()
    }
    navigateToProducts(){
        cy.get('#header a[href="/products"]').click()
        cy.get('h2.title').should('have.text', 'All Products')
        cy.get('div.padding-right').should('be.visible')
    }

    logout(){
        cy.get('a[href="/logout"]').click()
    }
}

export default new Menu()