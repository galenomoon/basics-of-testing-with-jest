import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest", // interpret TypeScript files
  testEnvironment: "node", // run tests in Node.js environment
  verbose: true, // output more information
}

export default config;