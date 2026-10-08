import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

// Pré-condição comum: autentica como administrador e confirma a abertura do painel.
test.beforeEach(async ({ page }) => {
	const loginPage = new LoginPage(page);

	await loginPage.acessarSite();
	await loginPage.login('admin@system.com', 'AdminPassword123');

	await expect(page).toHaveURL(/painel\.html$/);
	await expect(page).toHaveTitle('Painel | LojaQA');
});

// CT 01: abre a seção de usuários e confirma que pelo menos um usuário está listado.
test('[CT 01] exibe a lista de usuários', async ({ page }) => {
	await page.getByRole('button', { name: /Usuários/ }).click();

	await expect(page.getByRole('button', { name: /user@system\.com/ }).first()).toBeVisible();
});

// CT 02: abre Produtos e valida os filtros de pesquisa e categoria, além de um produto.
test('[CT 02] exibe produtos e seus filtros', async ({ page }) => {
	await page.getByRole('button', { name: /Produtos/ }).click();

	await expect(page.getByRole('searchbox', { name: /Buscar por ID do produto/ })).toBeVisible();
	await expect(page.locator('select').filter({ hasText: 'Todas as categorias' })).toBeVisible();
	await expect(page.getByRole('button', { name: /Mouse Óptico Atlas/ })).toBeVisible();
});

// CT 03: abre Lojas, seleciona a Vitrine Tech e confere seus dados e produtos cadastrados.
test('[CT 03] exibe os dados detalhados de uma loja', async ({ page }) => {
	await page.getByRole('button', { name: /Lojas/ }).click();

	const store = page.getByRole('button', { name: /Vitrine Tech Responsável:/ });
	await expect(store).toBeVisible();
	await store.click();

	await expect(page.getByRole('textbox', { name: 'Nome da loja' })).toHaveValue('Vitrine Tech');
	await expect(page.getByRole('textbox', { name: 'Responsável' })).toHaveValue('LojaQA Oficial');
	await expect(page.getByRole('textbox', { name: 'E-mail de contato' })).toHaveValue('lojista@system.com');
	await expect(page.getByRole('heading', { name: /Produtos Cadastrados desta Loja/ })).toBeVisible();
	// Escopo a busca aos detalhes da loja, pois o produto também aparece na lista geral.
	await expect(page.locator('#adminStoresList').getByText('Mouse Óptico Atlas', { exact: true })).toBeVisible();
});
