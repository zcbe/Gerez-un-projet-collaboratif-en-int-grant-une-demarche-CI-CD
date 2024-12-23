module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Configuration de Jasmine
      },
      clearContext: false // Laisse la sortie de Jasmine Spec Runner visible dans le navigateur
    },
    jasmineHtmlReporter: {
      suppressAll: true // Supprime les traces dupliquées
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/bobapp'),
      subdir: '.',
      reporters: [
        { type: 'html' }, // Pour la visualisation locale
        { type: 'text-summary' },  // Résumé de la couverture dans la console
        { type: 'lcov', subdir: '.' } // Format lcov pour SonarCloud
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'], // Utiliser Chrome en mode headless pour CI
    singleRun: true,  // Exécuter les tests une seule fois
    restartOnFileChange: true
  });
};
