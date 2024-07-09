class HomePage{
    Visiting Amazon(){
        return cy.visit('https://www.amazon.in/')
    }
    verify TitleofHomepage(){
        return cy.title().should('include', title)
    }
    FindHelloSigninAndClickSignIn(){
        return cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover').then(()=>{
            cy.get('#nav-flyout-ya-signin a'),eq(0),click()
        })
    }
    SearchACategoryAndClick(){
        return cy.get('.nav-progressive-content a').each(($categories)=>{
            if($categories.text().includes('Today')){
                cy.wrap($categories).click()
            }
        })
    }
}
export default HomePage;