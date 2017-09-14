const {Key} = require('selenium-webdriver');
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
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    after(function () {
        driver.quit();
    });

    it('search google with classic chaining', function () {
        return driver.get('http://www.google.com/ncr')
            .then(_ => driver.findElement(By.name('q')))
            .then(input => input.sendKeys('webdriver'))
            .then(_ => driver.findElement(By.name('q')).click())
            .then(_ => driver.findElement(By.name('q')).sendKeys(Key.TAB))
            .then(_ => driver.findElement(By.css("input[value='Google Search']")).click())
            .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    });
});