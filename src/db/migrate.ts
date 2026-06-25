// Import the native PostgreSQL client network connection driver pool
import { Pool } from "pg";
// Import the specific Drizzle engine PostgreSQL Node database connector wrapper
import { drizzle } from "drizzle-orm/node-postgres";
// Import the built-in migration auto-execution loop runner tool
import { migrate } from "drizzle-orm/node-postgres/migrator";
// Import file system modules to detect our environment files automatically
import * as fs from "fs";
import * as path from "path";

/**
 * Custom ultra-lightweight environment loader fallback.
 * Simulates Next.js variable parsing for standalone CLI script executions.
 */
function lookForEnvironmentVariables() {
  // Define the common lookup paths relative to the current working apps execution folder
  const possiblePaths = [
    path.resolve(process.cwd(), ".env.local"),
    path.resolve(process.cwd(), ".env"),
    path.resolve(process.cwd(), "../.env.local"), // Check up one level if in a monorepo structure
  ];

  for (const envPath of possiblePaths) {
    if (fs.existsSync(envPath)) {
      console.log(`📡 Ingesting environment variables directly from: ${envPath}`);
      const fileContent = fs.readFileSync(envPath, "utf-8");
      
      // Basic key-value parser loops splitting strings by line endings
      fileContent.split(/\r?\n/).forEach((line) => {
        const trimmedLine = line.trim();
        // Skip comment notes or empty spaces
        if (!trimmedLine || trimmedLine.startsWith("#")) return;
        
        const [key, ...valueParts] = trimmedLine.split("=");
        if (key) {
          const value = valueParts.join("=").replace(/^["']|["']$/g, ""); // Strip wrapping quotes
          process.env[key.trim()] = value;
        }
      });
      break;
    }
  }
}

// Fire the configuration lookup scanner prior to initial connection loops
lookForEnvironmentVariables();

/**
 * Self-invoking database schema migration controller thread.
 */
async function runDatabaseMigrations() {
  // Terminate execution safely if your hidden local variable string is missing
  if (!process.env.DATABASE_URL) {
    throw new Error("Migration Failure: The DATABASE_URL secret parameter is not initialized in your environment files.");
  }

  console.log("🔄 Initializing secure connection pool to target database server...");

  // Open a new connection engine pool using your secure string URL parameter
  const migrationPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 1, // Pin connection counts to 1 to isolate migration transaction states safely
  });

  // Inject your connection pool directly into the Drizzle runtime framework compiler instance
  const databaseInstance = drizzle(migrationPool);

  try {
    console.log("⏳ Running your compiled SQL database migrations...");

    // Instruct the tool to locate your /drizzle scripts folder and apply changes to your live DB tables
    await migrate(databaseInstance, { 
      migrationsFolder: "./drizzle" 
    });

    console.log("✅ Success: Your database schemas are synchronized completely!");
  } catch (migrationError) {
    // Intercept database communication faults and print out compilation logs
    console.error("❌ Migration Error: Internal schema deployment failed!", migrationError);
    process.exit(1);
  } finally {
    // Force a clean connection shutdown to return resources back to the server cluster pool
    await migrationPool.end();
    console.log("🔌 Connection pool safely closed.");
  }
}

// Fire off the script execution sequence
runDatabaseMigrations();