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
}

module.exports = BasePage;
