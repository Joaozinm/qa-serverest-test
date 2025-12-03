class RegisterElements {
    nameInput = () => cy.get('[data-testid="nome"]');
    emailInput = () => cy.get('[data-testid="email"]');
    passwordInput = () => cy.get('[data-testid="password"]');
    adminCheckbox = () => cy.get('[data-testid="checkbox"]');
    submitButton = () => cy.get('[data-testid="cadastrar"]');
    alertMessage = () => cy.contains('a.alert-link', 'Cadastro realizado com sucesso');
}

export default new RegisterElements();
