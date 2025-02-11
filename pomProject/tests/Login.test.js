import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'


test('connexion avec id et pass valide', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('visual_user', 'secret_sauce');
    await page.pause();
});