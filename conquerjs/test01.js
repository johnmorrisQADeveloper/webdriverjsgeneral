const {Key} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;

driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
// waits for elements for 5 secs
//driver.manage().timeouts().implicitlyWait(5000);

// chaining promises
driver.get('https://library-app.firebaseapp.com/')
    .then(_ => driver.findElement({css: "#ember318"}).sendKeys("asd@email.com"))
    .then(_ => driver.findElement(By.css("button.btn-block")).click())
    .then(_ => driver.wait(until.elementLocated(By.css("div.alert-success"))),2000) // explicitly wait for an element for 2 secconds
    .then(_ => driver.findElement(By.css("div.alert-success")).getText())
    .then(txt => console.log("Text is " + txt));

// not recomend this , good to know
driver.sleep(3000);

// extract values from a list of elements
driver.findElements(By.css("#main-navbar li"))
    .then(_ => driver.findElements(By.css("#main-navbar li")))
    .then(elements => {
        for (i = 0; i < elements.length; i++) {
            elements[i].getText().then(txt => {
                console.log(txt);
            })
        }
    })

driver.close();
driver.quit();