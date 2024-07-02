describe('Sauce_Demo', () => {
    it('Add_to_cart', () => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('#user-name').type("standard_user")
      cy.get('#password').type("secret_sauce")
      cy.get('#login-button').click()
      cy.contains('Sauce Labs Backpack').click()
      cy.get('btn_primary btn_inventory').click()
      cy.wait(4000)
      cy.get('.inventory_details_back_button').click()
    })
  })