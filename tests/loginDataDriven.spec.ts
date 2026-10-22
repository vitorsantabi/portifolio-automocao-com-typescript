import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ctsLogins } from '../data/login.data';

test.describe('Autenticação por Data-Driven de múltiplos perfis com POM', () => {
    for (const cenario of ctsLogins) {
        test(`Login perfil: ${cenario.perfil}`, async ({ page }) => {
            const loginPage = new LoginPage(page);

            await loginPage.goto();
            await loginPage.login(cenario.email, cenario.senha);

            if (cenario.esperaSucesso) {
                await expect(page).toHaveURL(cenario.urlEsperada);
            } else {
                await expect(loginPage.errorMessage).toBeVisible();
                await expect(page).toHaveURL(cenario.urlEsperada);

                
            }
        });
    }
});