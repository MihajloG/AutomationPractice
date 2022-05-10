export class AuthorizationPage{

    createNewAccountWithEmail(email){
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate').click()
    }

    logInWithUser(email, password){
        cy.get('#email').type(email)
        cy.get('[type="password"]').type(password)
        cy.get('[class="icon-lock left"]').click()
    }

}
export const onAuthorizationPage = new AuthorizationPage()