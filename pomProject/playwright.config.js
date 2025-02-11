// playwright.config.js
module.exports = {
    testDir: './pomProject', // Dossier contenant vos tests
    use: {
      headless: false, // Désactive le mode sans interface graphique (utile pour debug)
      browserName: 'chromium', // Utilise Chrome par défaut
    },
  };
  