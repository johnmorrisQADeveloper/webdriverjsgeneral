
//classic promise chaining
const {Builder, By, until, Key} = require('selenium-webdriver');
new Builder()
    .forBrowser('chrome')
    .build()
    .then(driver => {
        return driver.get('http://www.google.com/ncr')

            // works one
            // .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver'))
            // .then(_ => driver.findElement(By.name('q')).submit())
            // .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
            // .then(_ => driver.quit());

            // works two as well
            .then(_ => driver.findElement(By.name('q')))
            .then(input => input.sendKeys('webdriver'))
            .then(_ => driver.findElement(By.name('q')).click())
            .then(_ => driver.findElement(By.name('q')).sendKeys(Key.TAB))
            .then(_ => driver.findElement(By.css("input[value='Google Search']")).click())
            .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
            .then(_ => driver.quit());

    });


