export class HomePage {
searchForAProduct(productName){
    cy.get('#search_query_top').type(productName)
        cy.get('.ac_results')
        .find('li')
        .contains('T-shirts').click()
}
selectWomenBlouses(){
    cy.get('.sf-with-ul').contains('Women').trigger('mouseover')
        cy.get('.submenu-container.clearfix.first-in-line-xs').first().invoke('show')
        cy.get('[title="Blouses"]').click()
}

selectWomenCasualDresses(){
    cy.get('.sf-with-ul').contains('Women').trigger('mouseover')
        cy.get('.submenu-container.clearfix.first-in-line-xs').last().invoke('show')
        cy.get('[title="Casual Dresses"]').last().click()
}

}

export const onHomePage = new HomePage()