const {Key} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;

driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
class BasePage {

    constructor() {
        global.driver = driver;
        driver.manage().timeouts().implicitlyWait(5000);
    }

    quit(){
        driver.close();
        driver.quit();
    }
}

module.exports = BasePage;