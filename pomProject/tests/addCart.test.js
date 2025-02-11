import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { add, addCarte } from '../pages/addCarte'

test('connexion avec id et pass valide', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('visual_user', 'secret_sauce');
    await page.pause();
});

// test ('add carte', async ({page})=> {
//     const addC = new addCarte(page);
//     await addC.add();
//     await page.pause();
// });
