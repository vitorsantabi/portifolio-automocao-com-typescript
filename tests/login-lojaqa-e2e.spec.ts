import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('ato 1 - validar carregamento e visibilidade de elementos', async () => {

  test('Validar titulo e carregamento da pagina', async ({ page }) => {
    //navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`)
    //validar titulo
    await expect(page).toHaveTitle(/LojaQA | Entrar/i);
  });
  test('Verificar exibicao dos campos do form de login', async ({ page }) => {

    //navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`)

    //validar campos
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#loginBtn')).toBeVisible();
    //verificar se btn esta desativado
    await expect(page.locator('#loginBtn')).toBeDisabled();

  });

});

test.describe('ATO 2 - Caminho Feliz', ()=>{
  test('validar acesso e redicionar ao painel',async({page})=>{
    //navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`)
    // preencher campoos utilizando o fill()
    await page.fill('#email','admin@system.com');
    await page.fill('#password', 'AdminPassword123');
    //Validar botao ativo
    await expect(page.locator('#loginBtn')).toBeEnabled();
    // Acao de clique no btn
    await page.click('#loginBtn');
    //validar o redirecioamento para a pagina /painel
    await expect(page).toHaveURL(/painel\.html/);
  })
})
