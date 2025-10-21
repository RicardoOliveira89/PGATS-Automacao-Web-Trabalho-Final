class Menu {
    navigateToLogin(){
        cy.get('a[href="/login"]').click()
    }

    navigateToContacts(){
         cy.get('a[href*=contact]').click()
    }

    logout(){
        cy.get('a[href="/logout"]').click()
    }
}

export default new Menu()