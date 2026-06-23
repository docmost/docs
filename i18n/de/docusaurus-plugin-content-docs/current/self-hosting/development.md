---
sidebar_position: 6
---

# Entwicklung
Docmost ist ein Monorepo, das pnpm workspace und nx verwendet. Dies ist eine Anleitung, wie Sie es für die lokale Entwicklung einrichten.

### Projektstruktur
```
root
├── apps
│   ├── client  // React frontend 
│   └── server  // Nestjs backend
└── packages
    └── editor-ext // package for editor extensions
```

Der Frontend-Client wird mit Vite und React entwickelt, wobei die Benutzeroberfläche von der UI-Bibliothek [Mantine](https://mantine.dev/) bereitgestellt wird.
Der Backend-Server wird mit dem [Nest.js](https://nestjs.com/)-Framework erstellt.

### Voraussetzungen
Um Docmost auszuführen, benötigen Sie Folgendes:
- **Node.js**: >= 22
- **Postgres**: >= 16
- **Redis/Valkey** >=7

### Entwicklungs-Setup
Stellen Sie sicher, dass Sie `pnpm` installiert haben `npm install -g pnpm`.

```bash
$ git clone https://github.com/docmost/docmost
$ cd docmost
$ pnpm install
$ cp .env.example .env
```

Stellen Sie sicher, dass Sie die Datei .env aktualisieren.  

#### Zuerst das Editor-Paket erstellen
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

#### Projekt erstellen
```bash
$ pnpm build
````

Dadurch werden alle erforderlichen Pakete erstellt.
Sie können den erstellten Server und Client mit `pnpm nx run server:start` ausführen. Das Projekt wird unter `http://localhost:3000` ausgeführt.  
Sehen Sie sich die `package.json` jeder App an, um mehr über alle verfügbaren Befehle zu erfahren.

#### Migrationen

Im Entwicklungsmodus müssen Sie die neuesten Migrationen manuell ausführen. Dies sind die nützlichen Migrationsbefehle.

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

Migrationen werden im Verzeichnis `apps/server/src/database/migrations` gespeichert.  

Wenn Sie Änderungen an der Datenbank vornehmen, z. B. eine neue Tabelle oder Spalte erstellen, müssen Sie die DB-Typen neu generieren mit
```bash
pnpm nx run server:migration:codegen
```

Das Projekt verwendet kein ORM. Wir nutzen den Query Builder [Kysely](https://github.com/kysely-org/kysely), um typsichere SQL-Abfragen zu erstellen.

**Ps:** Wenn Sie Code-Beiträge zu Docmost leisten möchten, müssen Sie unsere Contributor License Agreement (CLA) akzeptieren, bevor Ihr PR angenommen werden kann. 

