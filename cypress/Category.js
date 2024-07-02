class Category{
    VerifyTitleOfCategoryPage(){
        return cy.title().should('include','Deals')
    }
    gobackToHome(){
        return cy.go('back')
    }
}
export default Category;