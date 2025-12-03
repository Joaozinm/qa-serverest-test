import Register from '../../support/pages/actions/RegisterActions';
import { faker } from '@faker-js/faker';

describe('E2E - Cadastro de Usuário', () => {

    it('Deve cadastrar um usuário com sucesso', () => {
        const nome = faker.person.fullName();
        const email = faker.internet.email();
        const senha = '123456';

        Register.cadastrarUsuario(nome, email, senha, true);

        Register.validarMensagemSucesso('Cadastro realizado com sucesso');
    });
});
