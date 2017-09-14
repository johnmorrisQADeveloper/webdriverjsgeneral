const {Key} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;

var BasePage = require('./BasePageExample1');

class Home extends BasePage {

    navigateToGet() {
        driver.get("http://ralphsays.github.io");
    }

    isElementPresent(callback) {
        return driver.findElement(By.css("#quote"))
            .then(_ => driver.findElement(By.css("#quote")).isDisplayed())
            .then(qoute => callback(qoute));
    }


    getElementTxt(callback){
        return driver.findElement(By.css("#quote"))
            .then(_ => driver.findElement(By.css("#quote")).getText())
            .then(txt => callback(txt));
    }
}

module.exports = new Home();