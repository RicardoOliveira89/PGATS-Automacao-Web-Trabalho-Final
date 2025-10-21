class Login {
    fillOutPreRegistrationForm(name, email) {
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()
    }

    fillOutTheLoginForm(user, pass){
        cy.get('[data-qa="login-email"]').type(user)
        cy.get('[data-qa="login-password"]').type(pass)
        cy.get('[data-qa="login-button"]').click()

    }

    verifyLoginSuccessfully(user){
        cy.get('i.fa-user').parent('a').should('contain', user)
        cy.get('a[href="/logout"]').should('be.visible')
        cy.contains('b', user)
    }

    verifyLoginFailed(){
        cy.get('p').contains('Your email or password is incorrect!').should('be.visible')
    }

    verifyLogoutSuccessfully(){
        cy.url().should('contain', 'login')
    }

    verifyExistingEmail(){
        cy.get('p').contains('Email Address already exist!').should('be.visible')
    }
}

export default new Login()