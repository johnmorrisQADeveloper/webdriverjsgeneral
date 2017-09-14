var webdriver = require('selenium-webdriver'),
    {describe, it, after, before} = require('selenium-webdriver/testing');

By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;
var assert = require("chai").assert;
var home = require('./HomepageExample1');

describe('TestSuite --  Site Says', function () {
    // this uses
    it('TestCase1 - shows a quote container', function () {
        home.navigateToGet();

        home.isElementPresent(quote => {
            console.log('IsPresent1: ' + quote);
            var x = quote;
            console.log('IsPresent2: ' + x);
            assert.equal(x, true);
        })
    });

    it('TestCase2 - qoute text is ', function () {

        home.getElementTxt(eTxt => {
            console.log('Text1: ' + eTxt);
            var text = eTxt;
            console.log('Text2: ' + text);
            console.log(!!text);
        })
        home.quit();
    });
});