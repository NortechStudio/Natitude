import { defineConfig } from 'drizzle-kit';

/**
 * Main schema compile config block directing migrations safely to your database target.
 */
export default defineConfig({
  schema: './src/db/schema.ts', // Targets the schema blueprints constructed in Step 5
  out: './drizzle',             // Sets the folder path for the compiled migration scripts
  dialect: 'postgresql',        // Selects the target query syntax translator profile
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Binds securely to the runtime variable defined in Step 2
  },
});