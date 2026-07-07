# LiPo Facility Control

Statischer Prototyp fuer das technische Liegenschaftsmanagement einer Kommune.

## Start mit Docker

```powershell
docker compose up --build
```

Danach ist die Anwendung unter <http://localhost:8088> erreichbar.

## GitHub Pages

Die Anwendung ist eine reine statische Webseite. Fuer GitHub Pages werden diese Dateien deployed:

- `index.html`
- `style.css`
- `app.js`
- `.nojekyll`

Deployment: GitHub Actions Workflow `.github/workflows/pages.yml`.
Danach ist die App unter <https://toni2123a.github.io/LiPo/> erreichbar.

## Lokaler Start ohne Docker

`index.html` kann direkt im Browser geoeffnet werden. Daten werden im Browser per LocalStorage gespeichert.

## Datenquelle Gewerke

Die Datei `Gewerke_Liste.xlsx` wurde als fachlicher Katalog interpretiert:

- `Anlagentyp` = zentrales Gewerk
- `KGR DIN 276` = Kategorie
- `Anlagenbezeichnung / LV-Position` = Vorlage fuer Wartungsobjekte
