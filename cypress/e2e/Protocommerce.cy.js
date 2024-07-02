describe('Sauce_Demo', () => {
    let a;
    it('Details_fill_using Datadriven', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.fixture('Proto_Comm').then((Proto)=>{
         a=Proto;
        cy.get('[name="name"]').eq(0).type(a.Name)
        cy.get('[type="text"]').eq(2).should('have.text','')
        cy.get('[name="email"]').type(a.Email)
        cy.get('#exampleInputPassword1').type(a.Password)
        cy.get('#exampleCheck1').click()
        cy.get('#exampleFormControlSelect1').select("Male")
        cy.get('#inlineRadio2').click()
        cy.wait(4000)
        cy.get('[name="bday"]').type(a.Date_of_Birth)
        cy.get('[type="submit"]').click()
        // cy.wait(5000)
        // cy.contains('The Form has been submitted successfully!.').should('includes',["The Form has been submitted successfully!."] )
       cy.get('[class="nav-link"]').eq(0).click()
       cy.get('btn btn-info').eq(0).click()
       cy.get('[class="btn btn-info"]').eq(1).click()
       cy.get('[class="btn btn-info"]').eq(2).click()
       cy.get('[class="navbar-toggler-icon"]').click()
       cy.get('nav-link btn btn-primary').click()
       cy.contains('Total').should('have.value of','') 
       cy.get('[class="btn btn-success"]').click()
       cy.get('#country').type("In")
       cy.get('suggestions').eq(0).contains('India').click()
    
    })
        



    })
  })