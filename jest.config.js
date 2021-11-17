const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  rootDir: process.cwd(),
  displayName: {
    name: "jsdom",
    color: "blue",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  moduleFileExtensions: ["js", "json", "ts", "tsx", "vue"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  setupFilesAfterEnv: [path.resolve(__dirname, "./jest.preload.js")],
  testRegex: [`__tests__\\/[A-Za-z_0-9]*\\.(spec|test)\\.ts?$`],
};
