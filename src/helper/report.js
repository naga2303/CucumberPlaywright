const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Playwright Automation Report",
  pageTitle: "leafTaps App test report",
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Nagarajan - local",
    platform: {
        name: "Windows",
        version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Leaftaps project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});