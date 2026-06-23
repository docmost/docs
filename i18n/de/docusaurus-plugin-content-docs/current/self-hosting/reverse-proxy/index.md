import DocCardList from '@theme/DocCardList';

# Reverse Proxy

Wenn Sie Docmost in der Produktion bereitstellen, wird empfohlen, es hinter einem Reverse Proxy zu betreiben. Ein Reverse Proxy übernimmt die SSL/TLS termination, verwaltet eingehenden Datenverkehr und leitet Anfragen an die Docmost-Anwendung weiter.

## Warum einen Reverse Proxy verwenden?

- **SSL/TLS** — Stellen Sie Docmost über HTTPS bereit, mit automatischer oder manueller Zertifikatsverwaltung.
- **Sicherheit** — Fügen Sie eine zusätzliche Ebene zwischen dem Internet und Ihrer Anwendung hinzu.
- **Load Balancing** — Verteilen Sie den Datenverkehr bei Bedarf auf mehrere Instanzen.

## WebSocket-Unterstützung

Der Echtzeit-Editor für die kollaborative Zusammenarbeit von Docmost basiert auf WebSockets. Ihr Reverse Proxy **muss** so konfiguriert sein, dass er WebSocket-Verbindungen unterstützt, andernfalls befindet sich der Seiteneditor im schreibgeschützten Modus.

Stellen Sie sicher, dass Ihr Reverse Proxy die Header `Upgrade` und `Connection` weiterleitet, um WebSocket-Verbindungen zu ermöglichen.

## Wählen Sie Ihren Reverse Proxy

Wählen Sie eine Reverse-Proxy-Anleitung nach Ihren Vorlieben:


<DocCardList />
:::tip
Stellen Sie vor der Einrichtung eines Reverse Proxy sicher, dass der A-Record für Ihre Domain auf die IP-Adresse des Servers verweist, auf dem Docmost läuft. Ersetzen Sie docmost.example.com durch Ihre tatsächliche Domain.
:::
