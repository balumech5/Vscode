describe('Amazon_test', () => {
    it('Add_to_cart', () => {
      cy.visit('https://www.amazon.in/')
      cy.get('#twotabsearchtextbox').type("Realme")
      cy.get('#nav-search-submit-button').click()
      cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(0).invoke('removeAttr','target').click()



    })
  })