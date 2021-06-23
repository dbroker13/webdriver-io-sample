exports.config = {

    hostname: 'uscloud.experitest.com',
    port: 443,
    path: '/wd/hub',
    protocol: 'https',

    specs: [
        './test/specs/**/test02.js'
    ],

    capabilities: [{
        'experitest:accessKey': '',

        /*
        Sample Mobile Browser Capabilities
        **/

        // deviceQuery: "@os='ios'",
        // platformName: 'iOS',
        // automationName: 'XCUITest',
        // browserName: 'safari',

        /*
        Sample Desktop Browser Capabilities
        **/

        browserName: 'chrome',
        platformName: 'mac',

        /*
        Required Capability to capture Network Transactions for Desktop Browsers
        **/

        useNV: true
    }],

    maxInstances: 10,
    bail: 0,
    // baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }

}
