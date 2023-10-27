describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should crash at some point', async () => {

    while(true) {
      await element(by.id("detox-drawer-open-button")).tap()
      await element(by.id("detox-drawer-close-button")).tap()
    }
  
  });

});
