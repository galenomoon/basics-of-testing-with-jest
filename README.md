# Basics of Testing with Jest 🥾

This repository is designed to help you learn unit testing for TypeScript and Node.js using Jest.

## Getting Started

1. **Clone the Repository**: Start by cloning this repository to your local machine.

2. **Initialize Your Project**: Use the following commands to set up your project with TypeScript:

   ```bash
   npm init -y
   ```
---


3. **Install Dependencies**: Install the necessary dependencies for testing with Jest:

   ```bash
   npm i -D typescript jest ts-jest @types/ts-jest ts-node
   ```
---


4. **Configure Jest**:
   - Initiate the Jest configuration using the following command:

     ```bash
     npx ts-jest config:init
     ```

   - This will create a `jest.config.ts` file. Replace the contents of this file with the following settings:

     ```typescript
     import type { Config } from "@jest/types";

     const config: Config.InitialOptions = {
       preset: "ts-jest", // Interpret TypeScript files
       testEnvironment: "node", // Run tests in Node.js environment
       verbose: true, // Output more information
       collectCoverage: true, // Collect coverage information
       collectCoverageFrom: [
         "<rootDir>/src/app/**/*.ts", // Collect coverage from all .ts files in the src folder
       ],
     };

     export default config;
     ```

5. **Update `package.json`**:
   Add the following script to your `package.json` file to run tests using Jest:

   ```json
   "scripts": {
     "test": "jest"
   }
---


6. **Create a `tsconfig.json`**:
   Create a `tsconfig.json` file in your project's root directory with the following content:

   ```json
   {
     "compilerOptions": {
       "esModuleInterop": true
     }
   }
---

## Writing and Running Tests

With your project configured, you can now start developing and running your tests. Write your test files and place them in appropriate directories. To run tests, use the following command:

```bash
npm run test
```

---

Happy testing! 🧪🚀

---


