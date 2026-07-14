# Task 2 — Postgres + Docker

## Setup
1. Copy `.env.example` to `.env` and fill in your values
2. Run `docker compose up`
3. App runs on port 3000, Postgres on 5432

## Architecture
Swapped the in-memory store for a Postgres repository implementing the same interface.
Service and route layers were NOT modified — only the repository implementation changed.

## Persistence proof
- Inserted rows via API: `POST http://localhost:3000/items` with `{ "name": "harshith" }`, repeated for harshini, demo, alpha, beta
- Verified with `GET http://localhost:3000/items` — all 5 rows returned
- Ran `docker compose stop` then `docker compose start`
- Called `GET http://localhost:3000/items` again — all 5 rows still present, confirming the named volume persisted data across a full stack restart
