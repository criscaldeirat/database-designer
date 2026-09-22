# Database Designer

> A visual workspace for designing PostgreSQL database schemas before writing the implementation.

Database Designer is a portfolio project focused on the practical engineering behind a modern developer tool: a clear interface, a typed domain model, visual schema editing, and a reliable path from an idea to executable SQL.

The product is intentionally being built in milestones. Each milestone delivers a useful, testable capability without prematurely introducing persistence, authentication, or collaboration complexity.

## Why this project?

Designing a relational schema often begins with scattered notes, diagrams, and SQL drafts. This application brings that early design work into one focused workspace where developers can create tables, inspect relationships, and eventually generate a PostgreSQL-ready starting point.

This project demonstrates:

- Product-minded frontend implementation for a developer audience
- Type-safe domain modelling with TypeScript
- Component design and state management in React
- Interactive graph/canvas work using React Flow
- A scalable foundation for future PostgreSQL and Prisma integration
- Testing strategy across units, interactions, and end-to-end workflows

## Current status

**Milestone 1 — Frontend foundation and visual canvas** is in progress.

- [x] Next.js and TypeScript project setup
- [x] Dark developer-tool application shell
- [x] React Flow visual canvas
- [x] Typed table and column models
- [x] Draggable table nodes
- [x] Create an in-memory table from the UI
- [ ] Add focused unit and end-to-end tests
- [ ] Refine responsive behaviour and accessibility

> The schema is currently in memory only. Reloading the page resets it by design.

## Product roadmap

### Milestone 1 — Visual schema designer

- [x] Application header, table sidebar, and canvas layout
- [x] Create and drag table nodes
- [x] Display columns, data types, and key indicators
- [ ] Rename tables and columns
- [ ] Add, edit, and remove columns
- [ ] Define relationships between tables
- [ ] Validate the core interaction with Vitest and Playwright

### Milestone 2 — SQL generation

- [ ] Represent relationships and constraints in the domain model
- [ ] Generate readable PostgreSQL `CREATE TABLE` statements
- [ ] Add a SQL preview and copy action
- [ ] Test SQL generation from representative schemas

### Milestone 3 — Persistence

- [ ] Introduce PostgreSQL and Prisma
- [ ] Persist schemas and their table layouts
- [ ] Add migrations and seed data
- [ ] Design error handling for failed saves and invalid schemas

### Milestone 4 — Accounts and projects

- [ ] Add authentication and user-owned projects
- [ ] Create, rename, duplicate, and archive projects
- [ ] Authorize access to stored schemas

### Future exploration

- [ ] Import an existing PostgreSQL schema
- [ ] Export SQL files and diagrams
- [ ] Schema version history
- [ ] Collaborative editing

## Technology

| Area | Choice | Purpose |
| --- | --- | --- |
| Framework | Next.js, React, TypeScript | Full-stack-ready web foundation and type safety |
| Styling | Tailwind CSS | Fast, consistent, maintainable UI composition |
| Canvas | React Flow | Interactive, draggable schema visualisation |
| Database | PostgreSQL + Prisma *(planned)* | Durable schema/project persistence |
| Quality | Vitest + Playwright *(planned)* | Unit, component, and end-to-end confidence |

## Architecture direction

The application will keep the database-design domain separate from UI components and infrastructure. This makes the canvas easier to evolve without tightly coupling it to persistence or SQL generation.

```text
app/                 Next.js routes and application composition
components/          Reusable UI and canvas components
types/               Core domain types: tables, columns, relationships
lib/                 Future pure domain logic, validation, and SQL generation
prisma/              Future Prisma schema and migrations
tests/               Future unit, integration, and end-to-end tests
```

### Core domain model

The initial model is deliberately small:

```ts
type DatabaseTable = {
  id: string;
  name: string;
  columns: DatabaseColumn[];
};

type DatabaseColumn = {
  id: string;
  name: string;
  type: string;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
};
```

Relationships, validation rules, and persistence will be added only when the visual editing experience is solid.

## Running locally

### Prerequisites

- Node.js 20 or later
- npm

### Commands

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful quality checks:

```bash
npm run lint
npm run build
```

## Engineering principles

- Build vertically: finish a small user-facing capability before expanding scope.
- Prefer explicit TypeScript types at domain boundaries.
- Keep UI components focused and reusable.
- Keep business rules independent from React where possible.
- Add tests around behaviour and failure cases, not implementation details.
- Avoid premature infrastructure: no database, authentication, or persistence until the product needs it.

## Progress log

Use this section as a lightweight development journal. It provides useful context for future contributors and makes decisions visible to recruiters.

| Date | Milestone | Decision / outcome |
| --- | --- | --- |
| 2026-09-22 | 1 | Started the frontend foundation and React Flow canvas. |

## License

This project is for portfolio and learning purposes.
