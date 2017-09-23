var BlinkDiff = require('blink-diff');
var expect = require('chai').expect;
const fs = require('fs');
var resemble = require('resemblejs');

var webdriver = require('selenium-webdriver'),
    {describe, it, after, before} = require('selenium-webdriver/testing');

By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    promise = require('selenium-webdriver').promise;
var assert = require("chai").assert;
var client = require('webdriverio');
driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

describe('my screenshot', async function () {

    it('TestCase1: should capture screen page', async function () {

        /*
        await driver.get('https://learn.visualregressiontesting.com/');

        var x, y, h, w;
        var elementLocation = await driver.findElement(By.css('.header-title'));
        await elementLocation.getLocation().then(function (location) {
            x = location.x;
            y = location.y;
        });
        var elementSize = await driver.findElement(By.css('.header-title'));
        await elementSize.getSize().then(function (size) {
            h = size.height;
            w = size.width;
        })
        console.log("element x = " + x);
        console.log("element y = " + y);
        console.log("element h = " + h);
        console.log("element w = " + w);

        // works
        driver.takeScreenshot().then(
            function (image, err) {
                require('fs').writeFile('shots/out.png', image, 'base64', function (err) {
                    console.log(err);
                });
            }
        );

        var Jimp = require("jimp");
        Jimp.read("shots/test.png", function (err, image) {
            if (err) throw err;
            image.crop(x,y,w,h)
                .write("lena-small-bw.jpg"); // save
        });


        // works
        const fs = require('fs');
        var resemble = require('resemblejs');
        var diff = resemble('shots/test.png').compareTo('shots/test1.png').scaleToSameSize().onComplete(function(data){
            console.log(data);
            fs.writeFileSync('./diff.png',data.getBuffer());
        });

        await driver.close();
        await driver.quit();
        */

        // remove a file ( need to workout the filename at somepoint
        const fs = require('fs');
        fs.unlink('./shots/test2.png', (err, result) => {
            if (err) {
                console.log("failed file deleted " + fs.getName() );

                console.log("failed to delete the file " +err);

            } else {
                console.log("file deleted " );
            }
        });

        // check if you can output files in one place
        // use one method - with all the things in one place.
        // modularise methods and call the methods
    })
})