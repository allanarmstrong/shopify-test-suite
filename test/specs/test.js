var assert = require('assert');
require('dotenv').config();

describe('Index Page', () => {
  browser.url(`https://${process.env.SHOP_URL}`);
  it('Get page title', () => {
    var title = browser.getTitle();
    browser.saveScreenshot('./index.png');
    assert.equal(title, 'front-end-dev');
  });

  it('Open navigation when burger icon is clicked', () => {
    browser.click('.site-header__navigation');
    var navigation = $('.navigation__container');
    var navigtionViewState = navigation.getCssProperty('display')
    navigation.waitForVisible(1500);
    assert.equal(navigtionViewState.value, 'block');
  });
});