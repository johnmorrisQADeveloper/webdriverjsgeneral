var assert = require('assert');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;





var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
driver.get("https://decohere.herokuapp.com/planets", function(done) {
    driver.findElement({id: "wt"}, function(weight) {
        weight.sendKeys("200", function() {
            driver.findElement({id: "calculate"}, function(calculate) {
                calculate.click(function() {
                    driver.findElement(({id: "outputmrc"}).getAttribute('value'), function(mercury) {
                        assert.equal(mercury, '75.6');
                    });
                });
            });
        });
    });
    done;
});




// driver.findElement(By.id("wt"),function (element) {
//     console.log("no");
//     console.log(element.getText());
// })


// var assert = require('assert');
// var selenium = require('selenium-webdriver');
//
// var driver = new selenium.Builder().
// withCapabilities(selenium.Capabilities.firefox()).
// build();
//
// driver.get("https://decohere.herokuapp.com/planets");
// driver.findElement({id: "wt"}).sendKeys('200');
// driver.findElement({id: "calculate"}).click();