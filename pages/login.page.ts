import { type Page, type Locator, expect } from "@playwright/test";

// Reúne os locators e as ações reutilizados pelos testes de login.
export class LoginPage {
    readonly page: Page;
    readonly alert: Locator;

    constructor(page: Page) {
        this.page = page;
        // Localiza mensagens de erro exibidas durante a autenticação.
        this.alert = page.getByText(/Erro:/i);
    }

    // Abre a vitrine da LojaQA e acessa o formulário pelo link "Entrar".
    async acessarSite() {
        await this.page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/loja.html');
        await expect(this.page).toHaveTitle('Vitrine Tech | LojaQA');
        await this.page.getByRole('link', { name: 'Entrar' }).click();
        await expect(this.page).toHaveTitle('LojaQA | Entrar');
    }

    // Preenche e-mail e senha e envia o formulário de autenticação.
    async login(email:string, password:string) {
        await this.page.getByRole('textbox', { name: 'E-mail' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Senha' }).fill(password);
        await this.page.getByRole('button', { name: 'Entrar' }).click();
    }   

}