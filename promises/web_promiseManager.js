var assert = require('assert');
var selenium = require('selenium-webdriver');

var driver = new selenium.Builder().
withCapabilities(selenium.Capabilities.firefox()).
build();

driver.get("https://decohere.herokuapp.com/planets").
then(function() {
    return driver.findElement({id: "wt"});
}).
then(function(weight) {
    return weight.sendKeys("200");
}).
then(function() {
    return driver.findElement({id: "calculate"});
}).
then(function(calculate) {
    return calculate.click();
}).
then(function() {
    return driver.findElement({id: "outputmrc"}).getAttribute('value');
}).
then(function(mercury) {
    assert.equal(mercury, '75.6');
});