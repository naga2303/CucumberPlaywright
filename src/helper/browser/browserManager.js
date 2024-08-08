const {LaunchOptions, chromium, firefox, webkit } = require('@playwright/test')

const options=LaunchOptions = {
    headless : !true
}

export const invokeBrowser = ()=>{
    const browserType = process.env.npm_config_Browser || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!")
    }
}