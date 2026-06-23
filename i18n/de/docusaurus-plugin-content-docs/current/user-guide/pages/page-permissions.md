---
sidebar_position: 2
tags:
  - enterprise
---

# Berechtigungen auf Seitenebene

Berechtigungen auf Seitenebene ermöglichen es Ihnen zu steuern, wer einzelne Seiten innerhalb eines Bereichs anzeigen und bearbeiten kann. Standardmäßig sind alle Seiten in einem Bereich für jedes Bereichsmitglied entsprechend seiner Bereichsrolle zugänglich. Mit Berechtigungen auf Seitenebene können Sie bestimmte Seiten so einschränken, dass nur ausgewählte Benutzer und Gruppen Zugriff haben.

:::note
Berechtigungen auf Seitenebene sind eine kommerzielle Funktion. Eine aktive Business- oder Enterprise-Lizenz ist erforderlich.
:::

## Zugriffsebenen

Jede Seite hat eine von zwei Zugriffsebenen:

- **Offen** – Die Standardeinstellung. Alle Bereichsmitglieder können entsprechend ihrer Bereichsrolle auf die Seite zugreifen. Es gelten keine zusätzlichen Einschränkungen.
- **Eingeschränkt** – Nur Benutzer und Gruppen, denen ausdrücklich eine Berechtigung erteilt wurde, können auf die Seite zugreifen.

## Berechtigungsrollen

Wenn eine Seite eingeschränkt ist, wird jedem Benutzer bzw. jeder Gruppe eine von zwei Rollen zugewiesen:

| Rolle | Anzeigen | Bearbeiten |
|------|:----:|:----:|
| **Kann anzeigen** | Ja | Nein |
| **Kann bearbeiten** | Ja | Ja |

## Eine Seite einschränken

So schränken Sie den Zugriff auf eine Seite ein:

1. Öffnen Sie die Seite, die Sie einschränken möchten.
2. Klicken Sie auf die Schaltfläche **Teilen** in der Symbolleiste.
3. Klicken Sie auf der Registerkarte **Zugriff** auf das Dropdown-Menü für die Zugriffsebene und wählen Sie **Eingeschränkt**.
4. Sie werden automatisch mit dem Zugriff **Kann bearbeiten** zur Seite hinzugefügt.
5. Fügen Sie weitere Benutzer oder Gruppen hinzu, die Zugriff haben sollen (siehe unten).

Nach der Einschränkung können nur Benutzer mit ausdrücklichen Berechtigungen die Seite anzeigen oder bearbeiten.

## Mitglieder hinzufügen

So gewähren Sie Zugriff auf eine eingeschränkte Seite:

1. Klicken Sie auf **Teilen**, um das Berechtigungs-Modalfenster zu öffnen.
2. Verwenden Sie auf der Registerkarte **Zugriff** das Suchfeld, um Benutzer oder Gruppen zu finden.
3. Wählen Sie die Mitglieder aus, die Sie hinzufügen möchten.
4. Wählen Sie eine Rolle (**Kann anzeigen** oder **Kann bearbeiten**) aus dem Rollen-Dropdown-Menü.
5. Klicken Sie auf **Hinzufügen**.

## Zugriff ändern und entfernen

### Eine Rolle ändern

1. Suchen Sie auf der Registerkarte **Zugriff** den Benutzer oder die Gruppe in der Berechtigungsliste.
2. Klicken Sie auf das Rollen-Dropdown-Menü neben dem Namen.
3. Wählen Sie die neue Rolle (**Kann anzeigen** oder **Kann bearbeiten**).

Die Änderung wird sofort wirksam.

### Zugriff entfernen

1. Suchen Sie auf der Registerkarte **Zugriff** den Benutzer oder die Gruppe.
2. Klicken Sie auf das Rollen-Dropdown-Menü neben dem Namen.
3. Wählen Sie **Entfernen**.

:::warning
Mindestens ein Mitglied mit der Rolle **Kann bearbeiten** muss auf einer eingeschränkten Seite verbleiben. Sie können das letzte Mitglied mit der Rolle **Kann bearbeiten** nicht entfernen.
:::

## Einschränkungen entfernen

So machen Sie eine eingeschränkte Seite wieder offen:

1. Klicken Sie auf **Teilen**, um das Berechtigungs-Modalfenster zu öffnen.
2. Klicken Sie auf der Registerkarte **Zugriff** auf das Dropdown-Menü für die Zugriffsebene und wählen Sie **Offen**.

Alle bestehenden Berechtigungen werden entfernt und die Seite wird für alle Bereichsmitglieder entsprechend ihrer Bereichsrolle zugänglich.

## Vererbung von Berechtigungen

Berechtigungen auf Seitenebene werden über die Seitenhierarchie vererbt. Wenn eine übergeordnete Seite eingeschränkt ist, sind auch alle ihre untergeordneten Seiten eingeschränkt, selbst wenn die untergeordneten Seiten selbst auf Offen gesetzt sind.

Eine untergeordnete Seite unter einer eingeschränkten übergeordneten Seite:

- Kann nicht von Benutzern aufgerufen werden, denen die Berechtigung für die übergeordnete Seite fehlt.
- Zeigt auf der Registerkarte „Zugriff“ einen Hinweis **Geerbt von** an, der angibt, von welcher übergeordneten Seite die Einschränkung stammt. Durch Klicken auf den Link gelangen Sie zu dieser übergeordneten Seite.

Um auf eine untergeordnete Seite zuzugreifen, muss ein Benutzer die Berechtigung für **jede** eingeschränkte übergeordnete Seite in der Seitenhierarchie haben.

### Vererbte Berechtigungen außer Kraft setzen

Eine untergeordnete Seite kann zusätzlich zur geerbten Einschränkung eine eigene direkte Einschränkung haben. In diesem Fall:

- Die untergeordnete Seite hat sowohl eine direkte als auch eine geerbte Einschränkung.
- Benutzer benötigen die Berechtigung sowohl für die untergeordnete Seite **als auch** für alle eingeschränkten übergeordneten Seiten, um darauf zuzugreifen.

## Wie Berechtigungen auf Seitenebene mit Bereichsrollen zusammenwirken

Berechtigungen auf Seitenebene wirken zusammen mit Bereichsrollen. Der effektive Zugriff eines Benutzers hängt von beiden Ebenen ab:

| Bereichsrolle | Seitenrolle | Kann anzeigen | Kann bearbeiten |
|------------|-----------|:--------:|:--------:|
| Vollzugriff | Kann bearbeiten | ✅ | ✅ |
| Vollzugriff | Kann anzeigen | ✅ | ❌ |
| Vollzugriff | (Offene Seite) | ✅ | ✅ |
| Kann bearbeiten | Kann bearbeiten | ✅ | ✅ |
| Kann bearbeiten | Kann anzeigen | ✅ | ❌ |
| Kann bearbeiten | (Offene Seite) | ✅ | ✅ |
| Kann anzeigen | Kann bearbeiten | ✅ | ❌ |
| Kann anzeigen | Kann anzeigen | ✅ | ❌ |
| Kann anzeigen | (Offene Seite) | ✅ | ❌ |

Bereichsrolle und Seitenrolle werden kombiniert, und die restriktivere Berechtigung gilt. Ein Bereichsmitglied mit der Rolle **Kann anzeigen** kann Seiten auch mit einer Seitenrolle **Kann bearbeiten** nicht bearbeiten. Ein Bereichsmitglied mit der Rolle **Kann bearbeiten** und einer Seitenrolle **Kann anzeigen** kann die eingeschränkte Seite nur anzeigen.

### Wer kann Berechtigungen auf Seitenebene verwalten?

Das Verwalten von Berechtigungen auf Seitenebene umfasst das Einschränken einer Seite, das Entfernen von Einschränkungen, das Hinzufügen oder Entfernen von Mitgliedern und das Ändern von Rollen. Die Möglichkeit, Berechtigungen zu verwalten, erfordert sowohl eine Autorisierung auf Bereichsebene als auch auf Seitenebene:

| Bereichsrolle | Seitenrolle | Kann Berechtigungen auf Seitenebene verwalten? |
|------------|-----------|:----------------------------:|
| Vollzugriff | Kann bearbeiten |              ✅               |
| Vollzugriff | Kann anzeigen |              ✅               |
| Vollzugriff | (Offene Seite) |              ✅               |
| Kann bearbeiten | Kann bearbeiten |              ✅               |
| Kann bearbeiten | Kann anzeigen |              ❌               |
| Kann bearbeiten | (Offene Seite) |              ✅               |
| Kann anzeigen | Kann bearbeiten |              ❌               |
| Kann anzeigen | Kann anzeigen |              ❌               |
| Kann anzeigen | (Offene Seite) |              ❌               |

Bereichsmitglieder mit der Rolle **Kann anzeigen** können Berechtigungen auf Seitenebene unabhängig von ihrer Seitenrolle nicht verwalten. Bereichsmitglieder mit der Rolle **Kann bearbeiten** können Berechtigungen nur verwalten, wenn sie eine Seitenrolle **Kann bearbeiten** haben (oder wenn die Seite offen ist). Bereichsmitglieder mit der Rolle **Vollzugriff** können Berechtigungen auf jeder Seite verwalten, die sie anzeigen können.

## Verhalten der Seitenleiste

Berechtigungen auf Seitenebene beeinflussen, was Benutzer im Seitenbaum der Seitenleiste sehen:

- **Ausgeblendete Seiten** – Seiten, auf die ein Benutzer nicht zugreifen kann, werden vollständig aus der Seitenleiste ausgeblendet. Wenn eine eingeschränkte Seite keine zugänglichen untergeordneten Seiten hat, wird sie überhaupt nicht angezeigt.
- **Schreibgeschützte Seiten** – Seiten, auf die ein Benutzer mit der Rolle **Kann anzeigen** zugreifen kann, erscheinen in der Seitenleiste, können aber nicht gezogen oder umbenannt werden, und es können keine untergeordneten Seiten darunter erstellt werden. Die Kontextmenüoptionen zum Duplizieren, Verschieben und Löschen sind ebenfalls ausgeblendet.

## Suche

Eingeschränkte Seiten werden für Benutzer, die keinen Zugriff haben, aus den Suchergebnissen herausgefiltert. Ein Benutzer sieht niemals Inhalte von Seiten, die er nicht anzeigen kann, unabhängig davon, ob er innerhalb eines Bereichs oder im gesamten Arbeitsbereich sucht.

## Anzeigen der Schaltfläche „Teilen“

Die Schaltfläche **Teilen** in der Symbolleiste zeigt visuelle Indikatoren an, um den aktuellen Status einer Seite anzuzeigen:

- **Schloss-Symbol mit rotem Punkt** – Die Seite hat Einschränkungen (direkt oder geerbt). Nur berechtigte Benutzer können darauf zugreifen.
- **Globus-Symbol mit grünem Punkt** – Die Seite ist öffentlich über die Registerkarte „Veröffentlichen“ freigegeben.
- **Kein Symbol** – Die Seite ist offen, hat keine Einschränkungen und ist nicht öffentlich freigegeben.
