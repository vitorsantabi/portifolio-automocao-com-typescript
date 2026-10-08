import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";

let loginPage: LoginPage;

// Prepara a página de login da LojaQA antes de cada cenário.
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.acessarSite();
})

// Confirma que as credenciais válidas levam o administrador ao painel.
test('login com sucesso', async ({ page }) => {
    await loginPage.login('admin@system.com', 'AdminPassword123');
    await expect(page).toHaveURL(/painel\.html$/);
})

// Confirma que um usuário inexistente recebe a mensagem de erro esperada.
test('Login com falha', async ({ page }) => {
    await loginPage.login('naoexiste@example.com', 'SenhaInvalida123');
    await expect(loginPage.alert).toContainText('Erro: usuário não encontrado');
})
