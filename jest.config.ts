// jest.config.ts
import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src"],
    testMatch: ["**/*.spec.ts", "**/__tests__/**/*.spec.ts"],
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
    clearMocks: true,
    resetMocks: true,
    verbose: true,
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1", // corresponde ao @/* -> * dentro da baseUrl "./src"
    },
    moduleDirectories: ["node_modules", "<rootDir>/src"],
};

export default config;
