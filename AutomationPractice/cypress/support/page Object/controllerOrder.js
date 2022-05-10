 export class ControllerOrder{
    proceedFromSummaryCard(){
        cy.get('.cart_navigation').find('[title="Proceed to checkout"]').click()
    } 
    proceedFromAdressCard(){
        cy.get('.cart_navigation').find('[name="processAddress"]').click()
    }

    selectAgreeWithAThermsOnShippingCard(){
        cy.get('[type="checkbox"]').eq(0).click({force:true})
    }

    proceedFromShippingCard(){
        cy.get('[name="processCarrier"]').click()
    }

    payByBankWire(){
        cy.get('#HOOK_PAYMENT').find('[title="Pay by bank wire"]').click()
    }

    payByCheck(){
        cy.get('#HOOK_PAYMENT').find('[title="Pay by check."]').click()
    }
    confirmOrder(){
        cy.get('.cart_navigation').find('[type="submit"]').click()
        cy.get('.box').should('contain', 'Your order on My Store is complete.')
    }
}

export const onControllerOrderPage = new ControllerOrder()
