class Products {
    
    clickProductDetails(){
        cy.get('a[href="/product_details/1"]').click()
    }

    searchProduct(product){
        cy.get('[name="search"]').click().type(product)
        cy.get('#submit_search i.fa').click()
        cy.get('h2.title').should('have.text', 'Searched Products')
    }

    addProductToCart(){
        cy.get('.add-to-cart').then(($buttons) => {
            const totalProducts = $buttons.length
            const randomIndex = Math.floor(Math.random() * totalProducts)
            cy.wrap($buttons.eq(randomIndex)).click({ force: true })
            cy.get('.modal-footer .btn-success', { timeout: 10000 }).should('be.visible').click()
        })
    }

    //ASSERTIONS

    verifyProductName(name){
        cy.get('div.product-information h2').should('have.text', name)
    }

    verifyProductCategory(category){
        cy.get('p:nth-child(3)').should('have.text', category)
    }

    verifyProductPrice(price){
        cy.get('span:nth-child(5) span').should('have.text', price)
    }
    
    verifyProductAvailability(availability){
        cy.get('p:nth-child(6)').should('have.text', availability)
    }

    verifyProductCondition(condition){
        cy.get('p:nth-child(7)').should('have.text', condition)
    }

    verifyProductBrand(brand){
        cy.get('p:nth-child(8)').should('have.text', brand)
    }

    verifyProductList(){
        cy.get('.features_items').then(($container) => {
        const products = $container.find('.product-image-wrapper')
        if (products.length > 0) {
            cy.wrap(products).each(($el) => {
                cy.wrap($el).should('be.visible')
            })
        } else {
            throw new Error('No products found for the search term.')
        }       
        })
    }

}

export default new Products()