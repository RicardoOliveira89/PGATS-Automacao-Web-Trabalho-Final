class Products {
    verifyBeingOnProductDetailsPage(){
        cy.url().should('include', '/product_details')
    }

    clickProductDetails(){
        cy.get('a[href="/product_details/1"]').click()
    }

    verifyProductName(name){
        cy.get('div.product-information h2').should('have.text', name);
    }

    verifyProductCategory(category){
        cy.get('p:nth-child(3)').should('have.text', category);
    }

    verifyProductPrice(price){
        cy.get('span:nth-child(5) span').should('have.text', price)
    }
    
    verifyProductAvailability(availability){
        cy.get('p:nth-child(6)').should('have.text', availability)
    }

    verifyProductCondition(condition){
        cy.get('p:nth-child(7)').should('have.text', condition);
    }

    verifyProductBrand(brand){
        cy.get('p:nth-child(8)').should('have.text', brand);
    }
}

export default new Products()