var webdriver = require('selenium-webdriver'),
    {describe, it, after, before} = require('selenium-webdriver/testing');

By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;



describe("Testsuite ", function () {

    var driver;

    before(function () {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();


    })

    after(function () {
        driver.quit();
    })

    it("Testcase1", function (done) {
        this.timeout(5000);
        driver.get('https://library-app.firebaseapp.com/')
            .then(_ => driver.findElement({css: "#ember318"}).sendKeys("asd@email.com"))
            .then(_ => driver.findElement(By.css("button.btn-block")).click())
            .then(_ => driver.wait(until.elementLocated(By.css("div.alert-success"))), 6000) // explicitly wait for an element for 2 secconds
            .then(_ => driver.findElement(By.css("div.alert-success")).getText())
            .then(txt => console.log("Text is " + txt));
        setTimeout(done, 3000);
    })

    it("Testcase2", function () {
        driver.findElements(By.css("#main-navbar li"))
            .then(_ => driver.findElements(By.css("#main-navbar li")))
            .then(elements => {
                for (i = 0; i < elements.length; i++) {
                    elements[i].getText().then(txt => {
                        console.log(txt);
                    })
                }
            })
    })


})