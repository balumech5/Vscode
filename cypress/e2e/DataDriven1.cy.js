describe('Login_Test Practice', () => {
    it.only('Login Using Datadriven1', () => {
        cy.fixture('studentlogin.json').then((testdata)=>{

            cy.visit('https://practicetestautomation.com/practice-test-login/');
            testdata.forEach(userData => {
                cy.get('[id="username"]').type(userData.username);
                cy.get('[id="password"]').type(userData.password);
                cy.get('[id="submit"]').click();

                if(userData.username==student && userData.password==Password123){
                    cy.get('.post-title').should('have.text',userData.expected);
                }elseif(userData.username!=student && userData.password==Password123) {
                    cy.get('.show').should('have.text', userData.expected);
                }
            
                elseif(userData.username==student && userData.password!=Password123){

                
                }
                
            });

           
    
           
          })
     
       
    })
  })