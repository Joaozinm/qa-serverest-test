describe('GET /usuarios', () => {
    it('Deve listar usuários com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then(res => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('quantidade');
            expect(res.body).to.have.property('usuarios');
            expect(res.body.usuarios).to.be.an('array');
        });
    });
});
