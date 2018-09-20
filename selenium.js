const webdriverio = require('webdriverio');

const options = {
  desiredCapabilities: {
    browserName: 'chrome',
  },
};

webdriverio
.remote(options)
.init()
.url('http://buddy.works')
.saveScreenshot('indexScreenshot.png')
.end();
