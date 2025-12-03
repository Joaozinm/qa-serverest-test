describe('POST /login - Autenticação', () => {
    it('Deve autenticar um usuário existente', () => {

        cy.api_createUser().then(({ user }) => {
            cy.api_login(user.email, user.password)
                .then(res => {
                    expect(res.status).to.eq(200);
                    expect(res.body.message).to.eq('Login realizado com sucesso');
                    expect(res.body.authorization).to.be.a('string');
                })
        });
    });
});