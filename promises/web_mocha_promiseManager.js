var webdriver = require('selenium-webdriver'),
    {describe, it, after, before} = require('selenium-webdriver/testing');
By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;
var assert = require("chai").assert;

describe('checking', function () {
    this.timeout(15000);

    var driver;

    before(function () {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
    });

    after(function () {
        driver.quit();
    });

    it('navigate to planets page', function () {
        driver.get("https://decohere.herokuapp.com/planets");
    });

    it('calculates a weight', function () {
        driver.findElement({id: "wt"}).sendKeys('200');
        driver.findElement({id: "calculate"}).click();
        driver.findElement({id: "outputmrc"}).getAttribute('value').then(function (mercury) {
            assert.equal(mercury, '75.6');
        });
    });
});