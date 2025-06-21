import { sql } from '@vercel/postgres'
import { drizzle as drizzleVercel } from 'drizzle-orm/vercel-postgres'
import { drizzle as drizzlePostgres } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Use local PostgreSQL for development
const isLocal = process.env.NODE_ENV === 'development' || !process.env.POSTGRES_URL?.includes('-pooler.')

export const db = isLocal
  ? drizzlePostgres(postgres(process.env.POSTGRES_URL!), { schema })
  : drizzleVercel(sql, { schema })
