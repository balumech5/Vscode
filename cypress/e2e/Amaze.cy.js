import HomePage from "../HomePage";
import Category from "../Category";
import Signin from "../SigninPage";
import HomePage from "../HomePage";
import Category from "../Category";

describe('Implementing Page Object Model',()=>{
    let amazonData;
    let HomePage = new HomePage()
    let Category = new Category()
    let SigninPage = new Signin()
    
    before(()=>{
        cy.fixture('amazonData').then((amz)=>{

        })
    })
    it('Automate Amazon', ()=>{
        HomePage.V
        isiting Amazon()
    })
})