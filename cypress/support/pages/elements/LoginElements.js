class LoginElements {
    emailInput = () => cy.get('[data-testid="email"]');
    passwordInput = () => cy.get('[data-testid="senha"]');
    submitButton = () => cy.get('[data-testid="entrar"]');

}

export default new LoginElements();
