describe('Sauce_Demo', () => {
    let a;
    it('Details_fill_using Datadriven', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('[class="nav-link"]').eq(1).click()
       cy.get('[class="btn btn-info"]').eq(0).click()
       cy.get('[class="btn btn-info"]').eq(1).click()
       cy.get('[class="btn btn-info"]').eq(2).click()
       cy.wait(4000)
       cy.get('[class="navbar-toggler-icon"]').click({force: true})
       cy.get('a[class="nav-link btn btn-primary"]').click()
       cy.get('[class="text-right"]').should['contains','₹. 250000'] 
       cy.get('[class="btn btn-success"]').click()
       cy.get('#country').type("In")
       cy.wait(4000)
       cy.get('.suggestions').eq(0).contains('India').click()
    
       cy.get('[type="checkbox"]').click({force: true})
       cy.get('[value="Purchase"]').click()
       cy.get('div div [class="alert alert-success alert-dismissible"]').should['include',"{Your order}"]
    
    })
    })