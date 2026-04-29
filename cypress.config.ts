import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    supportFile: "cypress/support/e2e.ts",
  },
});
