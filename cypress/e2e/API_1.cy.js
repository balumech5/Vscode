describe("Sample Execution", ()=>{
    it ("Sample http request", ()=>{
        // this cy.request we willbe declaring two values namely:http method (get,put, post, push) and e d point

        cy.request('GET','https://reqres.in/api/users?page=2' )
        .its('status').should('equal', 200)
    })
})