export default class loginPage {
    static verifyLoginPage(){
        return cy.get('h5').contains('Login');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static inputPassword(){
        return cy.get('[name="password"]');
    }
    static btnSubmit(){
        return cy.get('[type="submit"]');
    }
    static invalidCredentials(){
        return cy.get('[class="oxd-alert-content oxd-alert-content--error"]');
    }
    static txtDashboard(){
        return cy.get('h6').contains('Dashboard');
    }
}