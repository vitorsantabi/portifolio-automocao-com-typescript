# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login com sucesso
- Location: tests\login.spec.ts:10:5

# Error details

```
Error: Method not implemented.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | export class LoginPage {
  3  |     login(username: string, password: string) {
> 4  |         throw new Error('Method not implemented.');
     |               ^ Error: Method not implemented.
  5  |     }
  6  |     readonly page: Page;
  7  |     readonly alert: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.alert = page.getByRole('alert');
  12 |     }
  13 | async acessarSite() {
  14 |     await this.page.goto('https://www.saucedemo.com/');
  15 |     await expect(this.page).toHaveTitle("Swag Labs");
  16 | }
  17 | async preencherLogin(email: string, password: string) {
  18 |     await this.page.locator('#user-name').fill(email);
  19 |     await this.page.getByLabel('Password').fill(password);
  20 |     await this.page.getByRole('button', { name: 'login-button' }).click();
  21 |     
  22 | }
  23 | 
  24 | }
```