export default class dashboardPage {
    static menuAdmin(){
        return cy.get('.oxd-main-menu')
        .contains('Admin');
    }
    static txtAdmin(){
        return cy.get('h6').contains('Admin');
    }
}