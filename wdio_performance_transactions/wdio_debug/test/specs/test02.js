describe('debug_test', () => {

    it('performance_transaction_desktop_browser', () => {

      browser.execute("seetest:client.startPerformanceTransaction(\"1.0.1\")");

      browser.url("https://github.com/login");

      browser.execute("seetest:client.endPerformanceTransaction(\"GitHub_Navigation_Test\")");

      $("//*[@id='login_field']").waitForDisplayed(10000, false, "Could not find element", 2);

      browser.execute("seetest:client.startPerformanceTransaction(\"1.0.1\")");

      browser.$("//*[@id='login_field']").setValue("dummyuser");
      browser.$("//*[@id='password']").setValue("dummypassword");
      browser.$("//*[@name='commit']").click();

      $("//div[@class='container-lg px-2']").waitForDisplayed(10000, false, "Could not find element", 2);

      browser.execute("seetest:client.endPerformanceTransaction(\"GitHub_Login_Test\")");
    });

    it('performance_transaction_mobile_devices', () => {

      // Capture Performance Metrics for overall Mobile Device
      // browser.execute("seetest:client.startPerformanceTransaction(\"4G-average\")");

      // Capture Performance Metrics for specific Application
      browser.execute("seetest:client.startPerformanceTransactionForApplication(\"com.apple.mobilesafari\", \"4G-average\")");

      browser.url("https://github.com/login");

      browser.execute("seetest:client.endPerformanceTransaction(\"GitHub_Navigation_Test\")");

      $("//*[@id='login_field']").waitForDisplayed(10000, false, "Could not find element", 2);

      browser.execute("seetest:client.startPerformanceTransactionForApplication(\"com.apple.mobilesafari\", \"4G-average\")");

      browser.$("//*[@id='login_field']").setValue("dummyuser");
      browser.$("//*[@id='password']").setValue("dummypassword");
      browser.$("//*[@name='commit']").click();


      $("//div[@class='container-lg px-2']").waitForDisplayed(10000, false, "Could not find element", 2);

      browser.execute("seetest:client.endPerformanceTransaction(\"GitHub_Login_Test\")");
    });

  });
