---
slug: /installation
sidebar_position: 1
---

# Installation

Docker ist die empfohlene Installationsmethode. Wenn Sie Entwickler sind, könnte der [Entwicklungsleitfaden](/self-hosting/development) für Sie interessant sein.


:::tip[Enterprise-Testversion]
Schalten Sie Enterprise-Funktionen wie Bases, SSO, AI, Audit-Protokolle und SCIM-Bereitstellung frei. Starten Sie eine Enterprise-Testversion auf [customers.docmost.com](https://customers.docmost.com/), um einen Lizenzschlüssel zu generieren.
:::

## Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Docker auf Ihrem Server installiert ist. Sehen Sie sich den [offiziellen Docker-Installationsleitfaden](https://docs.docker.com/engine/install/) für Ihr Betriebssystem an.

Wenn Sie Ubuntu verwenden, können Sie Docker mit den folgenden Befehlen installieren:

<details>
  <summary>Klicken Sie hier, um die Ubuntu-Docker-Installationsbefehle anzuzeigen</summary>

```shell
    # Add Docker's official GPG key:
    sudo apt-get update -qqy
    sudo apt-get install ca-certificates curl -qqy
    sudo install -m 0755 -d /etc/apt/keyrings
    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    sudo chmod a+r /etc/apt/keyrings/docker.asc
    
    # Add the repository to Apt sources:
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update -qqy
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -qqy
```

</details>

## Installationsschritte

### 1. Die Docker-Compose-Datei einrichten

Erstellen Sie ein neues Verzeichnis für Docmost und laden Sie die Docker-Compose-Datei mit den folgenden Befehlen herunter:

```shell
mkdir docmost
cd docmost
curl -O https://raw.githubusercontent.com/docmost/docmost/main/docker-compose.yml
```

Öffnen Sie als Nächstes die Datei docker-compose.yml. Unter Linux können Sie vim verwenden:

```shell
vi docker-compose.yml
```

Die heruntergeladene Datei `docker-compose.yml` sollte die folgende Vorlage mit den standardmäßigen Umgebungsvariablen enthalten.

:::info
`APP_URL` sollte die Domain sein, über die Sie auf Docmost zugreifen können. Z. B. `https://docmost.example.com`
:::

```yaml title="docmost/docker-compose.yml"
services:
  docmost:
    image: docmost/docmost:latest
    depends_on:
      - db
      - redis
    environment:
      APP_URL: "http://localhost:3000"
      APP_SECRET: "REPLACE_WITH_LONG_SECRET"
      DATABASE_URL: "postgresql://docmost:STRONG_DB_PASSWORD@db:5432/docmost"
      REDIS_URL: "redis://redis:6379"
    ports:
      - "3000:3000"
    restart: unless-stopped
    volumes:
      - docmost:/app/data/storage

  db:
    image: postgres:18
    environment:
      POSTGRES_DB: docmost
      POSTGRES_USER: docmost
      POSTGRES_PASSWORD: STRONG_DB_PASSWORD
    restart: unless-stopped
    volumes:
      - db_data:/var/lib/postgresql

  redis:
    image: redis:8
    command: ["redis-server", "--appendonly", "yes", "--maxmemory-policy", "noeviction"]
    restart: unless-stopped
    volumes:
      - redis_data:/data

volumes:
  docmost:
  db_data:
  redis_data:
```

Für die Statusüberprüfung steht ein dedizierter Endpunkt unter `YOUR_URL/api/health` zur Verfügung.

### Die Standardkonfigurationen ersetzen

Sie müssen die standardmäßigen Umgebungsvariablen in der Datei `docker-compose.yml` ersetzen.

Die `APP_URL` sollte durch Ihre gewählte Domain ersetzt werden. Z. B. `https://example.com` oder `https://docmost.example.com`.

Der Wert von `APP_SECRET` muss durch einen langen, zufälligen geheimen Schlüssel ersetzt werden (mindestens 32 Zeichen).  
Sie können den geheimen Schlüssel mit `openssl rand -hex 32` generieren. Wenn Sie den Standardwert belassen, startet die Anwendung nicht.

Ersetzen Sie `STRONG_DB_PASSWORD` in der Umgebungsvariablen `POSTGRES_PASSWORD` durch ein sicheres Passwort.

Aktualisieren Sie den Standardwert `STRONG_DB_PASSWORD` in `DATABASE_URL` mit Ihrem gewählten Postgres-Passwort.

Informationen zur Konfiguration von E-Mails oder des Dateispeicher-Treibers finden Sie im Dokument [Konfiguration](/self-hosting/configuration).  
Der standardmäßige Dateispeicher-Treiber ist `local storage`. Sie müssen nichts unternehmen, es sei denn, Sie möchten [S3](/self-hosting/configuration#using-s3-compatible-storage) oder [Azure Blob Storage](/self-hosting/configuration#using-azure-blob-storage) verwenden.

### Die Dienste starten

Stellen Sie sicher, dass Sie sich im Verzeichnis `docmost` befinden, das die Datei `docker-compose.yml` enthält.

Um die Dienste zu starten, führen Sie aus:

```shell
docker compose up -d
```

Sobald die Dienste laufen, überprüfen Sie die Installation, indem Sie Ihren Webbrowser öffnen und Folgendes aufrufen:
`http://localhost:3000` oder die Domain, die auf Ihren Server verweist.

Wenn alles eingerichtet ist, sollten Sie die Docmost-Setup-Seite sehen, über die Sie Ihren Arbeitsbereich und Ihr Konto einrichten können.

:::tip
Informationen zum Einrichten einer benutzerdefinierten Domain und SSL finden Sie in unserem [Reverse-Proxy-Leitfaden](/self-hosting/reverse-proxy)
:::

<p align="center">
<img src="/docs/img/setup.png" width="700"/>
</p>

Nach einem erfolgreichen Setup werden Sie zum Eigentümer des Arbeitsbereichs. Sie können dann andere Benutzer einladen, Ihrem Arbeitsbereich beizutreten.
Herzlichen Glückwunsch 🎉.

:::warning[Reverse Proxy / WebSockets]
Wenn Sie einen Reverse Proxy verwenden, stellen Sie sicher, dass WebSockets aktiviert ist. Der Echtzeit-Seiteneditor benötigt WebSockets, um zu funktionieren.
:::

Wenn Sie auf Probleme stoßen, können Sie gerne eine Diskussion im [GitHub-Repo](https://github.com/docmost/docmost/discussions) eröffnen.

## Aktualisierung

Um auf die neueste Docmost-Version zu aktualisieren, führen Sie die folgenden Befehle aus:

```shell
docker pull docmost/docmost:latest
docker compose up --force-recreate --build docmost -d
```

## Nützliche Docker-Befehle

Um die Dienste zu stoppen:

```shell
docker compose down
```

Um die Dienste neu zu starten:

```shell
docker compose restart
```
