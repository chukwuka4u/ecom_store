import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.AUTH_DATABASE_URL!,
  },
});