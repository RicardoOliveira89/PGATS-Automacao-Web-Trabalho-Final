class Products {
    
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

    verifyProductList(){
        cy.get('.features_items').then(($container) => {
        
        const produtos = $container.find('.product-image-wrapper')

        if (produtos.length > 0) {
            cy.wrap(produtos).each(($el) => {
                cy.wrap($el).should('be.visible')
            })
        } else {
            throw new Error('Nenhum produto encontrado para o termo pesquisado.')
        }
                
        })
    }

    searchProduct(product){
        cy.get('[name="search"]').click().type(product);
        cy.get('#submit_search i.fa').click();
        cy.get('h2.title').should('have.text', 'Searched Products');
    }
}

export default new Products()