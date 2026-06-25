import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core';

/**
 * User Table Model: Syncs accounts directly with our identity routing modules.
 */
export const users = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/**
 * Stripe Subscriptions Table: Drives the conditional logic mapping client statuses.
 */
export const subscriptions = pgTable('subscription', {
  id: text('id').notNull().primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  status: text('status').notNull(), // Active validation flags include 'active', 'past_due'
  priceId: text('price_id').notNull(),
  stripeCustomerId: text('stripe_customer_id').notNull(),
  currentPeriodEnd: timestamp('current_period_end').notNull(),
  isActive: boolean('is_active').default(false).notNull(), // Triggers permissions changes across paths
});

/**
 * Dynamic Content Feed Table: Stores layout records to populate Tab 1 and Tab 2 feeds.
 */
export const contentPosts = pgTable('content_post', {
  id: text('id').notNull().primaryKey(),
  contentType: text('content_type').notNull(), // Layout models: 'SPOTLIGHT', 'ARTICLE', 'QUICK_SHOUT'
  mediaUrl: text('media_url'), // Target file path for media elements
  title: text('title'),
  captionText: text('caption_text'),
  tag: text('tag').notNull(), // Search reference handle utilized by Tab 2 category sorting
  isTribeOnly: boolean('is_tribe_only').default(false).notNull(), // Intercepts requests to apply blur states
  createdAt: timestamp('created_at').defaultNow().notNull(),
});