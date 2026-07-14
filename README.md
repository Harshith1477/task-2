# Task 2 — Postgres + Docker

## Setup
1. Copy `.env.example` to `.env` and fill in your values
2. Run `docker compose up`
3. App runs on port 3000, Postgres on 5432

## Architecture
Swapped the in-memory store for a Postgres repository implementing the same interface. 
Service and route layers were NOT modified — only the repository implementation changed.

## Persistence proof
- Inserted rows via [psql / API — say which]
- Ran `docker compose stop` then `docker compose start`
- Re-queried the table, rows were still present — confirms the named volume works
