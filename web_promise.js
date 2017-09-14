var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;

// chrome, firefox, safari
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get("https:google.co.uk");
driver.getTitle().then(function(pageTitle) {
    console.log("The title is " + pageTitle);
});

driver.findElement(By.css("#lst-ib")).sendKeys("john jose morris");

// then is using promise
driver.findElement(By.css("#lst-ib")).then(function (element) {
        element.getText().then(function (txt) {
            console.log("element text is "+txt);
        })
})

driver.findElement(By.css("input[value='Google Search']")).click();

driver.close();
driver.quit();