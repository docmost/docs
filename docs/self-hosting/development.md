---
sidebar_position: 4
---

# Development
Docmost is a monorepo which uses pnpm workspace and nx. This will guide you on how to se

### Project structure
```
root
├── apps
│   ├── client  // React frontend 
│   └── server  // Nestjs backend
└── packages
    └── editor-ext // package for editor extensions
```

### Requirements
To run Docmost, you'll need the following:
- **Node.js**: >= 18
- **Postgres**: >= 13
- **Redis**

### Development setup
Make sure you have `pnpm` installed `npm install -g pnpm`.

```bash
$ git clone https://github.com/docmost/docmost
$ cd docmost
$ pnpm install
$ cp .env.exmaple .env
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
During development, you have to run the latest migrations manually. These are the usefully migration commands.

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

The project does not make use of any ORM. We use the [Kysely](https://github.com/kysely-org/kysely) query builder to build typesafe sql queries.

Ps: If you wish to make code contributions to Docmost, you will need to accept our Contributor License Agreement (CLA). 

