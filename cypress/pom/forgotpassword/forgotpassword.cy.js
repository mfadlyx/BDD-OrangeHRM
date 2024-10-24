export default class forgotPasswordPage {
    static forgotPassword(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }
    static inputUsername(){
        return cy.get('[name="username"]');
    }
    static btnReset(){
        return cy.get('[type="submit"]')
    }
    static txtResetPassword(){
        return cy.get('h6').contains('successfully')
    }
}