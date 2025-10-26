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
    }

    navigateToCart(){
        cy.get('a[href="/view_cart"] i[class="fa fa-shopping-cart"]').click()
    }

    deleteAccount(){
        cy.get('a[href="/delete_account"]').click()
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('a[data-qa="continue-button"]').click()
    }

    logout(){
        cy.get('a[href="/logout"]').click()
    }
}

export default new Menu()