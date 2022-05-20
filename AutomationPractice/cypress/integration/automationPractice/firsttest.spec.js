describe('Our first suite', () =>{

    it('first test', () => {

        cy.visit('/')
        cy.contains('Sign in').click()

       /* cy.get('#email_create')
        .type('exapmle@gmail.com')

        cy.get('[class="icon-user left"]').click()*/
        
        cy.get('#email')
        .type('example@gmail.com')
        cy.get('[type="password"]').type('any1234')

        cy.get('[class="icon-lock left"]').click()

        cy.get('[class="row"]')
        .parents('body')
        .find('.alert-danger')
        .should('contain', 'There is 1 error')

    })

    it('Authorization', () => {
        cy.visit('/')
        cy.contains('Sign in').click()

       
      /*  cy.get('#email_create')
        .parents('form')
        .find('input')
        .should('contain', 'example@gmail.com')*/

        cy.get('#SubmitCreate').click()
        cy.wait(7000)
        cy.get('[type="radio"]').eq(0).click({force:true})
        cy.get('#customer_firstname').type('Mihajlo')
        cy.get('#customer_lastname').type('Gorunovic')
        cy.get('[type="password"]').type('Adams').should()
        cy.get('#days').select(1).should('have.value', 1)
        cy.get('#months').select('February').should('have.value', 2)
        cy.get('#years').select('1999').should('have.value', '1999')
        cy.get('#address1').type('Gogoljeva 16')
        cy.get('#city').type('Novi Sad')

        cy.get('[name="id_state"]').select(6).find('option:selected').invoke('text').then((textvalue)=>{
            cy.log('selected text value - ' + textvalue)
        })

        cy.get('[class="form-control uniform-input text"]').type('21000')
        cy.get('[name="id_country"]').select('United States').should('have.value', 21)
        cy.get('#phone_mobile').type('00381642698885')
        cy.get('[value="My address"]').type('gogoljeva 13')
        cy.get('#submitAccount').click()

        
    })
    it.only('SignUp', () => {
        cy.visit('/')
        //cy.contains('Sign in').click()
        
       /* cy.get('#email')
        .type('aseediiiwww@gmail.com')
        cy.get('[type="password"]').type('Sendler')
        cy.get('[class="icon-lock left"]').click()*/

        cy.get('.sf-with-ul').contains('Women').trigger('mouseover')
        cy.get('.submenu-container.clearfix.first-in-line-xs').last().invoke('show')
        cy.get('[title="Casual Dresses"]').last().click()
       // cy.get('.sf-with-ul').contains('Casual Dresses').trigger('mouseover')
        //cy.get('.submenu-container.clearfix.first-in-line-xs').first().invoke('show')
       // cy.get('[title="Blouses"]').click()
       /* cy.get('.btn-default').invoke('show')
        /*cy.contains('Proceed to checkout').click()

      /*  cy.get('#search_query_top').type('dress')
        cy.get('.ac_results')
        .find('li')
        .contains('T-shirts').click()

        cy.get('#add_to_cart').find('[name="Submit"]').click()
        cy.get('.button-container').find('[title="Proceed to checkout"]').click()
        cy.get('.cart_navigation').find('[title="Proceed to checkout"]').click()
        cy.get('.cart_navigation').find('[name="processAddress"]').click()

        cy.get('[type="checkbox"]').eq(0).click({force:true})
        cy.get('[name="processCarrier"]').click()

        cy.get('#HOOK_PAYMENT').find('[title="Pay by bank wire"]').click()

        cy.get('.cart_navigation').find('[type="submit"]').click()
        cy.get('.box').should('contain', 'Your order on My Store is complete.')*/

      
    })
})
