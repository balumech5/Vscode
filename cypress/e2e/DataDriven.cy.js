describe('Login_Test Practice', () => {
    it.only('Login Using Fixtures', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/');

      cy.fixture('studentlogin.json').then((testdata)=>{

        cy.get('[id="username"]').type(testdata.username);
        cy.get('[id="password"]').type(testdata.password);
        cy.get('[id="submit"]').click();

        cy.get('.post-title').should('have.text',testdata.expected);
  

      })  
    })
  })