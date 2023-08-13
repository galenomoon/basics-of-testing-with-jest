import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest", // interpret TypeScript files
  testEnvironment: "node", // run tests in Node.js environment
  verbose: true, // output more information,
  collectCoverage: true, // collect coverage information
  collectCoverageFrom: [
    "<rootDir>/src/app/**/*.ts", // collect coverage from all .ts files in src folder
  ],
}

export default config;