
const {Given, When, Then} = require('@cucumber/cucumber');
const {chromium,Page, Browser, expect} = require('@playwright/test');
const {pageFixture} = require('../../hooks/pageFixture');

  Given('User navigates to the application', async function () {
    // Write code here that turns the phrase above into concrete actions
       
    console.log('BASEURL:', process.env.BASEURL);

        await pageFixture.page.goto(process.env.BASEURL);
  });




  Given('User enter the username as {string}', async function (username) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.locator("#username").type(username)
  });




  Given('User enter the password as {string}', async function (password) {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.locator("#password").type(password)
  });




  When('User click on the login button', async function () {
    // Write code here that turns the phrase above into concrete actions
    await pageFixture.page.locator("//input[@type='submit']").click();
  });




  Then('login should be success', async function () {
    // Write code here that turns the phrase above into concrete actions
    let textWelcome = await pageFixture.page.locator("//div[@id='form']/h2").innerText();
    expect(textWelcome).toContain("Welcome")
  });