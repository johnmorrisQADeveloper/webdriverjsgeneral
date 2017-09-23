const {Key} = require('selenium-webdriver')

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;

driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

class BasePage {

    constructor() {
        global.driver = driver;
    }

    async quit() {
        driver.close();
        driver.quit();
    }

    async waitForLocated(locator, retries) {
        try {
            await driver.wait(until.elementLocated(locator), 5000)
        } catch (err) {
            if (retries === 0) {
                throw new Error(`Still not able to locate element ${locator.toString()} after maximum retries, Error message: ${err.message.toString()}`)
            }
            await driver.sleep(250)
            return waitForLocated(driver, locator, retries - 1)
        }
    }

    async sendKeys (WebDriverLocator, keys, retries) {
        try {
            const element = await this.driver.findElement(locator)
            await element.click()
            await element.clear()
            await element.sendKeys(keys)
            return
        } catch (err) {
            if (retries === 0) {
                throw new Error(`Unable to send keys to ${locator.toString()} after maximum retries, error : ${err.message}`)
            }
            await this.driver.sleep(250)
            return this.sendKeys(locator, keys, retries - 1)
        }
    }

    // later at somepoint , de couple the methods i.e. get location, delete file, screenshot , and check if the files are different
    async captureScreenshot(fileName1, fileLocation1, fileName2, fileLocation2, webElement ){
        try {
            // gets the element location
            var x, y, h, w;
            // var elementLocation = await driver.findElement(By.css('.header-title'))
            var elementLocation = await driver.findElement(webElement)
            await elementLocation.getLocation().then(function (location) {
                x = location.x;
                y = location.y;
            });
            // var elementSize = await driver.findElement(By.css('.header-title'));
            var elementSize = await driver.findElement(webElement);

            await elementSize.getSize().then(function (size) {
                h = size.height;
                w = size.width;
            })
            console.log("element x = " + x);
            console.log("element y = " + y);
            console.log("element h = " + h);
            console.log("element w = " + w);

            // takes screenshot of the entire page
            driver.takeScreenshot().then(
                function (image, err) {
                    require('fs').writeFile(fileLocation1+'/'+fileName1, image, 'base64', function (err) {
                        console.log(err);
                    });
                }
            );

            // extract the web element from the screenshot based on the x,y,h,w
            var Jimp = require("jimp");
            Jimp.read("shots/test.png", function (err, image) {
                if (err) throw err;
                image.crop(x,y,w,h)
                    .write(fileLocation2+'/'+fileName2); // save
            });


            // compares a two images and spots the difference into a third file
            // const fs = require('fs');
            // var resemble = require('resemblejs');
            // var diff = resemble('shots/test.png').compareTo('shots/test1.png').scaleToSameSize().onComplete(function(data){
            //     console.log(data);
            //     fs.writeFileSync('./diff.png',data.getBuffer());
            // });

            // remove a file ( need to workout the filename at somepoint )
            const fs = require('fs');
            fs.unlink('./'+fileLocation1+'/'+fileName1, (err, result) => {
                if (err) {
                    console.log("failed to delete the file " +err);
                } else {
                    console.log("file deleted " );
                }
            });

        } catch (err) {
            throw  new Error('Unable to screenshot ' + err.message);
        }
    }




}

module.exports = BasePage;
