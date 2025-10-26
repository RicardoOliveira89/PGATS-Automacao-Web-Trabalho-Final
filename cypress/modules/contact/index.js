class Contact {
    fillInContactFormFields(name, email, subject, message){
        cy.get('[data-qa="name"]').type(name)
        cy.get('[data-qa="email"]').type(email)
        cy.get('[data-qa="subject"]').type(subject)
        cy.get('[data-qa="message"]').type(message)
    }

    attachFile(file){
        cy.fixture(file).as('file')
        cy.get('input[type=file]').selectFile('@file')
        cy.get('[data-qa="submit-button"]').click()
    }

    //ASSERTIONS
    
    verifyFormSubmission(){
        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
    }
}

export default new Contact()