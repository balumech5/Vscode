describe('Data Driven', ()=>{
    it('Read the Excel Data', ()=>{
        cy.parseXlsx('cypress\fixtures\UserName.xlsx').then((UserName)=>{
            const rowLength = cypress.$(UserName[0].data).length

            cy.log(rowLength)
            for(let i=1; i<rowLength; i++){
                let value = UserName[0].data[i]

                cy.visit("https://practicetestautomation.com/practice-test-login/")

                cy.get('[name="username"]').type(value[0])
                cy.get('[name="password"]').type(value[1])
                cy.get('[id="submit"]').click()
                
            }
        })
    })
})