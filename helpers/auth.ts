import { Page } from '@playwright/test';
import {CREDENTIALS} from './constants';

export async function login(page: Page, user = CREDENTIALS.standard) {
  await page.goto("/");
  await page.fill('#user-name', user.username);
  await page.fill('#password', user.password);
  await page.click("#login-button");
}