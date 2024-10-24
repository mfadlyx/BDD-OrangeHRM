import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";
import dashboardPage from "../../../pom/dashboard/dashboard.cy";

Given('I visit the URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});

When('I should see the homepage', () => {
    loginPage.verifyLoginPage().should('have.text', 'Login');
});

When('I submit the Username', () => {
    loginPage.inputUsername().type('Admin');
});

When('I submit the Password', () => {
    loginPage.inputPassword().type('admin123');
});

Then('I click the button Login', () => {
    cy.intercept('GET', '**/action-summary').as('action');
    loginPage.btnSubmit().click();
    cy.wait('@action');
});

When('I click the menu item Admin', () => {
    cy.intercept('GET', '**/messages').as('messages');
    dashboardPage.menuAdmin().click();
    cy.wait('@messages');
});

When('I should see the Admin page', () => {
    dashboardPage.txtAdmin().should('have.text', 'Admin');
});