'use strict';

const assert = require('assert');
const {Builder, By, Key, promise, until} = require('selenium-webdriver');

var BasePage = require('./BasePage');

// async/await do not work well when the promise manager is enabled.
// See https://github.com/SeleniumHQ/selenium/issues/3037
//
// 3037 does not impact these specific examples, but it is still recommended
// that you disable the promise manager when using async/await.
promise.USE_PROMISE_MANAGER = false;

describe('Google Search', function () {
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function () {
        await driver.close();
        await driver.quit();
    });

    it('example', async function () {
         BasePage.waitForLocated(as,as)
        // await driver.get('https://www.google.com/ncr');
        // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        // let url = await driver.getCurrentUrl();
        // assert.ok(url.startsWith('https://www.google.com/search'), 'unexpected url: ' + url)
    });
});

// mocha -t 0 --harmony_async_await Async_web_mocha.js
