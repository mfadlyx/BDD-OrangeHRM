import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";
import forgotPasswordPage from "../../../pom/forgotpassword/forgotpassword.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
})

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text', 'Login');
});

When('I click the link Forgot Password', () => {
    cy.intercept('GET', '**/messages').as('messages');
    forgotPasswordPage.forgotPassword().click();
    cy.wait('@messages')
});

When('I submit the Username', () => {
    forgotPasswordPage.inputUsername().type('Admin');
});

Then('I click the button Reset Password', () => {
    cy.intercept('GET', '**/sendPasswordReset').as('send');
    forgotPasswordPage.btnReset().click();
    cy.wait('@send')
});

When('I Should see the successfully', () => {
    forgotPasswordPage.txtResetPassword().should('have.text', 'Reset Password link sent successfully');
})


