 export class AuthorizationFormPage{

    selectGender(indexof){
        cy.get('[type="radio"]').eq(indexof).click({force:true})
    }

    typeName(name){
        cy.get('#customer_firstname').type(name)
    }

    typeLastName(lastname){
        cy.get('#customer_lastname').type(lastname)
    }

    typePassword(password){
        cy.get('[type="password"]').type(password)
    }

    selectBirthDay(day, month, year){
        cy.get('#days').select(day).should('have.value', day)
        cy.get('#months').select(month)
        cy.get('#years').select(year).should('have.value', year)
    }

    selectAdress(adress, postalcode, aliasadress){
        cy.get('#address1').type(adress)
        cy.get('[class="form-control uniform-input text"]').type(postalcode)
        cy.get('[value="My address"]').type(aliasadress)
    }

    typeCity(city){
        cy.get('#city').type(city)
    }

    selectCountry(){
        cy.get('[name="id_country"]').select('United States').should('have.value', 21)
    }

    selectState(state){
        cy.get('[name="id_state"]').select(state).find('option:selected').invoke('text').then((textvalue)=>{
            cy.log('selected text value - ' + textvalue)
        })
        }
    typePhoneNumber(number){
        cy.get('#phone_mobile').type(number)
    }

    clickSubmit(){
        cy.get('#submitAccount').click()
    }

    


}

export const onAuthorizationFormPage = new AuthorizationFormPage()