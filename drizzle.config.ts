import type { Config } from 'drizzle-kit';

/**
 * Legacy-compatible configuration block for Drizzle migrations.
 */
export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pg', // Legacy parameter for older versions of drizzle-kit
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // Uses standard cloud string key routing
  },
} satisfies Config;