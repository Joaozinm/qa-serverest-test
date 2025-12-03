describe('POST /usuarios - Criação de usuário', () => {
    it('Deve criar um usuário com sucesso', () => {
        cy.api_createUser().then(({ res, user }) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso');
            expect(res.body).to.have.property('_id');
        });
    });
});

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
