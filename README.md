---
name: Vercel Postgres + Drizzle ORM + pgvector Next.js Starter
slug: postgres-pgvector
description: A Next.js template that uses Vercel Postgres as the database, Drizzle ORM as the ORM with pgvector to enable vector similarity search, and OpenAI's text-embedding-ada-002 model for embeddings.
framework: Next.js
useCase: Starter
css: Tailwind
database: Vercel Postgres
deployUrl: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fstorage%2Fpostgres-pgvector&env=OPENAI_API_KEY&envDescription=Get+your+OpenAI+API+key+here%3A&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=postgres-pgvector&repository-name=postgres-pgvector&demo-title=Vercel+Postgres+%2B+Prisma+%2B+pgvector+Next.js+Starter&demo-description=A+Next.js+template+that+uses+Vercel+Postgres+as+the+database%2C+Prisma+as+the+ORM+with+pgvector+to+enable+vector+similarity+search%2C+and+OpenAI%E2%80%99s+models+for+text+embeddings.&demo-url=https%3A%2F%2Fpostgres-pgvector.vercel.app&demo-image=https%3A%2F%2Fpostgres-pgvector.vercel.app%2Fopengraph-image.png&stores=%5B%7B%22type%22%3A%22kv%22%7D%2C%7B%22type%22%3A%22postgres%22%7D%5D
demoUrl: https://postgres-pgvector.vercel.app/
relatedTemplates:
  - postgres-starter
  - postgres-kysely
  - postgres-drizzle
---

# Vercel Postgres + Drizzle ORM + pgvector Next.js Starter

A Next.js template that uses [Vercel Postgres](https://vercel.com/postgres) as the database, [Drizzle ORM](https://orm.drizzle.team/) as the ORM with [pgvector](https://github.com/pgvector/pgvector-node#drizzle-orm) to enable vector similarity search, and OpenAI's [`text-embedding-ada-002`](https://platform.openai.com/docs/guides/embeddings) model for embeddings.

## Demo

https://postgres-pgvector.vercel.app/

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fstorage%2Fpostgres-pgvector&env=OPENAI_API_KEY&envDescription=Get+your+OpenAI+API+key+here%3A&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=postgres-pgvector&repository-name=postgres-pgvector&demo-title=Vercel+Postgres+%2B+Prisma+%2B+pgvector+Next.js+Starter&demo-description=A+Next.js+template+that+uses+Vercel+Postgres+as+the+database%2C+Prisma+as+the+ORM+with+pgvector+to+enable+vector+similarity+search%2C+and+OpenAI%E2%80%99s+models+for+text+embeddings.&demo-url=https%3A%2F%2Fpostgres-pgvector.vercel.app&demo-image=https%3A%2F%2Fpostgres-pgvector.vercel.app%2Fopengraph-image.png&stores=%5B%7B%22type%22%3A%22kv%22%7D%2C%7B%22type%22%3A%22postgres%22%7D%5D)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/storage/postgres-pgvector
```

Once that's done, copy the .env.example file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.example .env
```

Then open `.env` and set the environment variables to match the ones in your Vercel Storage Dashboard.

Next, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples) ([Documentation](https://nextjs.org/docs/deployment)).

## Local Development with Docker

This project supports local development using Docker Compose to run PostgreSQL with pgvector extension.

### Prerequisites

- Docker and Docker Compose installed
- pnpm installed

### Setup

1. Start PostgreSQL with pgvector using Docker Compose:

```bash
docker-compose up -d
```

This will start PostgreSQL on port 15432 with the pgvector extension enabled.

2. Set up your environment variables in `.env.local`:

```bash
POSTGRES_URL=postgresql://postgres:postgres@localhost:15432/embeddings
OPENAI_API_KEY=your-openai-api-key
OPENAI_ORG_ID=your-openai-org-id
```

3. Push the database schema:

```bash
pnpm drizzle-kit push
```

4. Seed the database with Pokemon data:

```bash
pnpm db:seed
```

5. Start the development server:

```bash
pnpm dev
```

### Database Management

- **Start database**: `docker-compose up -d`
- **Stop database**: `docker-compose down`
- **View logs**: `docker-compose logs -f postgres`
- **Reset database**: `docker-compose down -v` (this will delete all data)

The application automatically detects whether it's running locally or on Vercel and uses the appropriate database driver.
