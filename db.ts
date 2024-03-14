import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'

import { posts } from './schema.ts'

const sqlite = new Database('sqlite.db')
const db = drizzle(sqlite)

export const add = async (text: string) => {
  return await db.insert(posts).values({ text })
}
export const get = async () => {
  return await db.select().from(posts);
}

