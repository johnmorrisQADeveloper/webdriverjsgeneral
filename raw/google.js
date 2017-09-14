'use strict';

var WebDriver = require('selenium-webdriver');
var driver = new WebDriver.Builder().withCapabilities(
    WebDriver.Capabilities.chrome()
).build();

driver.get('https://www.google.co.uk');

driver.findElement({name: 'q'}).then(function(input) {
    input.sendKeys('codechewing');
    input.sendKeys(WebDriver.Key.ENTER);
});

driver.sleep(1000);

var elem = driver.findElement({id: 'ires'});
var link = elem.findElement({css: 'h3.r a'});

link.getText().then(function(text) {
    var pageTitle = 'Code Chewing –HTML, PHP, CSS, Javascript tips';
    console.log('codechewing.com is the top result?');
    console.log(text.indexOf(pageTitle) !== -1);
});

driver.quit();