export class ControllerProducts {

    clickAddToChart(){
        cy.get('#add_to_cart').find('[name="Submit"]').click()
    }

    proceedToCheckOutForm(){
        cy.get('.button-container').find('[title="Proceed to checkout"]').click()
    }
}

export const onControllerProductsPage = new ControllerProducts()