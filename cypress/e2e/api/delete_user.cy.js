describe('DELETE /usuarios - Exclusão de usuário', () => {
    it('Deve excluir um usuário com sucesso', () => {


        cy.api_createUser().then(({ res, user }) => {

            const userId = res.body._id;


            cy.request({
                method: 'DELETE',
                url: `https://serverest.dev/usuarios/${userId}`
            }).then(deleteRes => {


                expect(deleteRes.status).to.eq(200);
                expect(deleteRes.body.message).to.eq('Registro excluído com sucesso');
            });
        });

    });
});