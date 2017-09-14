const {Key} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;

var BasePage = require('./basePage');

class HomePage extends BasePage{

    navigateToGet() {
        driver.get("http://www.google.com/ncr");
    }

    search(text){
        return driver
            .then(_ => driver.findElement(By.name('q')))
            .then(input => input.sendKeys(text))
            .then(_ => driver.findElement(By.name('q')).click())
            .then(_ => driver.findElement(By.name('q')).sendKeys(Key.TAB))
            .then(_ => driver.wait(until.elementLocated(By.css("input[value='Google Search']")), 2000))
            .then(_ => driver.findElement(By.name('q')).submit())
    }
}

module.exports = new HomePage();