import {test} from '@playwright/test';
test.beforeEach(async({}, testInfo) => {
    
    if(testInfo.title === 'Criar usuário com dados válidos') {
        console.log('CRIANDO USUÁRIO\n');
    }
});

test.afterEach(async({}, testInfo) => {
    if(testInfo.title === 'Criar usuário com dados válidos') {
        console.log('EXCLUINDO CADASTRO')
    }
});

test('Criar usuário com dados válidos', async() => {
    const name: string = 'Maria Silva';
    const email: string = 'maria.test@example.com';
    const password: string = 'Senhateste123';

    console.log('Cadastro de usuário com dados válidos')
    console.log(`Nome: ${name}, E-mail: ${email}, Senha: ${password}`);
});

test('Cadastro com usuário vazio', async() => {
    const name: string = '';
    const email: string = 'maria.test@example.com';
    const password: string = 'Senhateste123';

    console.log('Cadastro com usuário vazio')
    console.log(`Nome: ${name}, E-mail: ${email}, Senha: ${password}`);

});