class RegisterElements {
    nameInput = () => cy.get('[data-testid="nome"]');
    emailInput = () => cy.get('[data-testid="email"]');
    passwordInput = () => cy.get('[data-testid="senha"]');
    adminCheckbox = () => cy.get('[data-testid="checkbox"]');
    submitButton = () => cy.get('[data-testid="entrar"]');
    alertMessage = () => cy.get('.close.btn-close-succcess-alert');
}

export default new RegisterElements();
