describe('Amazon_test', () => {
    it('Add_to_cart', () => {
      cy.visit('https://commercejs-demo-store.netlify.app/')
      cy.contains("Shop now").click();


    })
  })