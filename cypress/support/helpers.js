import { faker } from '@faker-js/faker'
class Helpers {
    getRandomNumber(){
        return faker.number.bigInt()
    }

    getRandomEmail(){
        return faker.internet.email({ firstName: 'QATester' })
    }

    //ASSERTIONS
    
    verifyPage(page) {
        cy.url().should('include', page)
    }
}

export default new Helpers()