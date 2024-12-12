---
sidebar_position: 4
---

# Development
Docmost is a monorepo which uses pnpm workspace and nx. This is a guide on how to set it up for local development.

### Project structure
```
root
├── apps
│   ├── client  // React frontend 
│   └── server  // Nestjs backend
└── packages
    └── editor-ext // package for editor extensions
```

The frontend client is developed using Vite and React, with the user interface powered by the [Mantine](https://mantine.dev/) UI library.
The backend server is built using the [Nest.js](https://nestjs.com/) framework.

### Requirements
To run Docmost, you'll need the following:
- **Node.js**: >= 20
- **Postgres**: >= 14
- **Redis/Valkey**

### Development setup
Make sure you have `pnpm` installed `npm install -g pnpm`.

```bash
$ git clone https://github.com/docmost/docmost
$ cd docmost
$ pnpm install
$ cp .env.example .env
```

Make sure to update the .env file.  

#### Build the editor package first
```bash
$ pnpm nx run @docmost/editor-ext:build
```

#### Frontend
```bash
# run in development watch mode
$ pnpm nx run client:dev
```

#### Backend
```bash
# run in watch mode
$ pnpm nx run server:start:dev

# development
$ pnpm nx run server:start
```

#### Build project
```bash
$ pnpm build
````

This will build all the necessary packages.
You can run the built server and client using `pnpm nx run server:start`. The project will run on `http://localhost:3000`.  
Check the `package.json` of each app to learn more about all the available commands.

#### Migrations

In development mode, you have to run the latest migrations manually. These are the useful migration commands.

```bash
# To run all pending database migrations
$ pnpm nx run server:migration:latest

# To run one migration up
$ pnpm nx run server:migration:up

# To run one migration down
$ pnpm nx run server:migration:down

# To drop all migrations
$ pnpm nx run server:migration:reset

# To create new empty migration file. 
$ pnpm nx run server:migration:create migration_name_here
```

Migrations are stored inside the `apps/server/src/database/migrations` directory.  

If you make changes to the database, e.g.creating a new table or column, you will have to regenerate the db types with
```bash
pnpm nx run server:migration:codegen
```

The project does not make use of any ORM. We use the [Kysely](https://github.com/kysely-org/kysely) query builder to build typesafe sql queries.

**Ps:** If you wish to make code contributions to Docmost, you will need to accept our Contributor License Agreement (CLA) before your PR can be accepted. 

