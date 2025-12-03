describe('POST /usuarios - Criação de usuário', () => {
    it('Deve criar um usuário com sucesso', () => {
        cy.api_createUser().then(({ res, user }) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('message', 'Cadastro realizado com sucesso');
            expect(res.body).to.have.property('_id');
        });
    });
});
