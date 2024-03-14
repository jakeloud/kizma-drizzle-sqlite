import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core"

export const posts = sqliteTable('posts', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  text: text('text_modifiers').notNull(),
})


