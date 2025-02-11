import { test, expect } from '@playwright/test'; // Importation correcte de test et expect
const LoginPage = require('../pages/LoginPage');

test('connexion', async ({ page }) => {
    const loginPages = new LoginPage(page);
    await loginPages.navigate();
    await loginPages.connexion('visual_user', 'secret_sauce');
});