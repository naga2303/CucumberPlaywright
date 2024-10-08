const { Before, After, BeforeAll, AfterAll} = require('@cucumber/cucumber')
const {chromium, Browser, Page} = require('@playwright/test')
const {pageFixture} = require('./pageFixture');
const path = require('path');
const { type } = require('os');
const { invokeBrowser } = require('../helper/browser/browserManager');
const { getEnv } = require('../helper/env/env');
let browser;
let page;
let context;

BeforeAll(async function  () {
    getEnv();
    console.log("in hooks")
    browser = await invokeBrowser();
    
    
})
Before(async function(){
        context = await browser.newContext();
        page = await context.newPage();
        pageFixture.page=page;
})
After(async function({pickle}){
    const img=await pageFixture.page.screenshot({path: `./test-results/screenshot/${pickle.name}.png`,type:"png"});
    await this.attach(img,"image/png");
    await pageFixture.page.close();
    await context.close();
})
AfterAll(async function () {
    await browser.close()
})