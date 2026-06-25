import type { Config } from 'drizzle-kit';

/**
 * Main schema compile config block directing migrations safely to your database target.
 */
export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;