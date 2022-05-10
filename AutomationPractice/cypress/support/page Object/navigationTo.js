export class NavigationTo{


    authorizationPage(){
        cy.contains('Sign in').click()
    }
}

export const navigateTo = new NavigationTo()