const {Key} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;

var BasePage = require('./basePage');

class assertionPage extends BasePage {

    checkAssertion(txt) {
        return driver
            .then(_ => driver.wait(until.titleIs(''+txt+ ' - Google Search'), 2000))
    }
}

module.exports = new assertionPage();