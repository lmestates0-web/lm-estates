# Anleitung: Bilder auf der LM Estates Website anpassen

Diese Anleitung erklärt, wie Sie die Bilder auf der Website anpassen können.

---

## Übersicht aller Bilder auf der Website

### 1. Startseite (index.html)

| Bild | Zeile | Aktuelle URL |
|------|-------|--------------|
| Hero-Hintergrundbild | Zeile 149-150 | `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600` |

**So ändern Sie das Bild:**
1. Öffnen Sie `index.html`
2. Suchen Sie nach Zeile 149-150 (im `.hero` CSS-Block)
3. Ersetzen Sie die URL im `background:` Attribut

```css
/* Vorher: */
background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
            url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600') center/cover;

/* Nachher (Beispiel): */
background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
            url('IHRE-NEUE-BILD-URL') center/cover;
```

---

### 2. Über uns Seite (about.html)

| Bild | Zeile | Aktuelle URL |
|------|-------|--------------|
| Hero-Hintergrundbild | Zeile 149-150 | `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600` |

**So ändern Sie das Bild:**
1. Öffnen Sie `about.html`
2. Suchen Sie nach dem `.about-hero` CSS-Block (ca. Zeile 146)
3. Ersetzen Sie die URL im `background:` Attribut (Zeile 149-150)

---

### 3. Dienstleistungen Seite (services.html)

| Bild | Zeile | Beschreibung | Aktuelle URL |
|------|-------|--------------|--------------|
| Immobilienverkauf | Zeile 460 | Service-Bild 1 | `https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800` |
| Immobilienvermietung | Zeile 478 | Service-Bild 2 | `https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800` |
| Beratung & Bewertung | Zeile 496 | Service-Bild 3 | `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800` |

**So ändern Sie die Bilder:**
1. Öffnen Sie `services.html`
2. Suchen Sie nach den `<img>` Tags mit der Klasse `service-image`
3. Ersetzen Sie die `src` URL

```html
<!-- Vorher: -->
<img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" alt="Immobilienverkauf" class="service-image">

<!-- Nachher: -->
<img src="IHRE-NEUE-BILD-URL" alt="Immobilienverkauf" class="service-image">
```

---

### 4. Immobilien-Übersicht (properties.html)

| Bild | Zeile | Beschreibung | Aktuelle URL |
|------|-------|--------------|--------------|
| Motorrad-Parkplatz | Zeile 567 | Property-Bild | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800` |

**So ändern Sie das Bild:**
1. Öffnen Sie `properties.html`
2. Suchen Sie nach dem `<img>` Tag im `.carousel-slide` Container
3. Ersetzen Sie die `src` URL

---

### 5. Immobilien-Detailseite (property-detail.html)

| Bild | Zeile | Beschreibung | Aktuelle URL |
|------|-------|--------------|--------------|
| Hauptbild | Zeile 921 | Hero-Galerie | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920` |
| Thumbnail | Zeile 943 | Vorschaubild | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200` |
| JavaScript Array | Zeile 1117-1118 | Galerie-Array | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920` |

**So ändern Sie die Bilder:**
1. Öffnen Sie `property-detail.html`
2. Ersetzen Sie die URLs an allen drei Stellen

**Wichtig:** Um mehrere Bilder in der Galerie anzuzeigen, müssen Sie auch das JavaScript-Array erweitern:

```javascript
// Vorher (ein Bild):
const images = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920'
];

// Nachher (mehrere Bilder):
const images = [
    'BILD-URL-1',
    'BILD-URL-2',
    'BILD-URL-3'
];
```

---

## Woher bekommen Sie neue Bilder?

### Option 1: Unsplash (kostenlos)
1. Besuchen Sie [unsplash.com](https://unsplash.com)
2. Suchen Sie nach passenden Bildern (z.B. "real estate", "house", "apartment")
3. Klicken Sie auf ein Bild und dann auf "Download"
4. Kopieren Sie die Bild-URL oder laden Sie das Bild herunter

**Unsplash URL-Format:**
```
https://images.unsplash.com/photo-XXXXXXXXX?w=1600
```
- `w=1600` = Breite von 1600 Pixeln (anpassen nach Bedarf)
- Für Hero-Bilder: `w=1600` oder `w=1920`
- Für Kartenbilder: `w=800`
- Für Thumbnails: `w=200`

### Option 2: Eigene Bilder hochladen
1. Laden Sie Ihre Bilder auf einen Hosting-Service hoch:
   - [Imgur](https://imgur.com) (kostenlos)
   - [Cloudinary](https://cloudinary.com) (kostenlos mit Limit)
   - Eigener Server
2. Kopieren Sie die direkte Bild-URL
3. Fügen Sie die URL in die HTML-Dateien ein

### Option 3: Bilder im Repository speichern
1. Erstellen Sie einen `images` Ordner im Repository
2. Laden Sie Ihre Bilder dort hoch
3. Verwenden Sie relative Pfade:

```html
<!-- Beispiel: -->
<img src="images/mein-bild.jpg" alt="Beschreibung">
```

---

## Empfohlene Bildgrößen

| Verwendung | Empfohlene Breite | Empfohlenes Seitenverhältnis |
|------------|-------------------|------------------------------|
| Hero-Bilder | 1600-1920px | 16:9 oder 3:2 |
| Service-Bilder | 800px | 4:3 oder 3:2 |
| Property-Karten | 800px | 4:3 |
| Thumbnails | 200px | 4:3 |
| Galerie-Bilder | 1920px | 16:9 oder 4:3 |

---

## Tipps für gute Bilder

1. **Hohe Qualität**: Verwenden Sie hochauflösende Bilder
2. **Professionell**: Immobilienbilder sollten gut beleuchtet sein
3. **Konsistenz**: Verwenden Sie ähnliche Stile für alle Bilder
4. **Optimierung**: Große Bilder verlangsamen die Website - komprimieren Sie sie

---

## Schritt-für-Schritt Beispiel

### Das Hero-Bild auf der Startseite ändern:

1. **Neues Bild finden** auf Unsplash:
   - Suchen Sie z.B. nach "luxury villa zurich"
   - Wählen Sie ein passendes Bild aus
   - Kopieren Sie die Bild-ID (z.B. `photo-1234567890`)

2. **index.html öffnen** in einem Text-Editor

3. **Die richtige Zeile finden** (ca. Zeile 146-150):
   ```css
   .hero {
       margin-top: 70px;
       height: 85vh;
       background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                   url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600') center/cover;
   ```

4. **URL ersetzen**:
   ```css
   background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
               url('https://images.unsplash.com/photo-IHRE-NEUE-ID?w=1600') center/cover;
   ```

5. **Datei speichern** und die Änderungen committen

---

## Hilfe benötigt?

Bei Fragen zur Bildanpassung können Sie:
- Ein GitHub Issue erstellen
- Die Dokumentation konsultieren
- Einen Web-Entwickler kontaktieren

---

*Letzte Aktualisierung: November 2024*
