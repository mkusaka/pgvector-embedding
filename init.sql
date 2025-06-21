-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create the table for Pokemon embeddings if it doesn't exist
-- This will be handled by the drizzle schema, but we ensure the extension is available