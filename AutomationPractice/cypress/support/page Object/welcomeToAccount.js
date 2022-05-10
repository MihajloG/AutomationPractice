

export class WelcomeToAccount{

verifyRegistrationMessage(){
    cy.get('[class="info-account"]').should('contain', 'Welcome to your account. Here you can manage all of your personal information and orders.')
}
}
export const onWelcomeToAccount= new WelcomeToAccount()