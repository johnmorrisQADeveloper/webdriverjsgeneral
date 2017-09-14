var homePage = require('./homepage');
var asssertPage = require('./assertionPage');

homePage.navigateToGet();
homePage.search("john");
asssertPage.checkAssertion("john");