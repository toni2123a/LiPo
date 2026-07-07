const STORAGE_KEY = "liegenschaften-netphen-v1";

const menu = [
  ["dashboard", "Dashboard"],
  ["liegenschaften", "Liegenschaften"],
  ["gewerke", "Gewerke"],
  ["wartungsobjekte", "Wartungsobjekte"],
  ["wartungsplan", "Wartungsplan"],
  ["wartungsauftraege", "Wartungsaufträge"],
  ["lieferanten", "Lieferanten"],
  ["bewertungen", "Lieferantenbewertung"],
  ["ausschreibungen", "Ausschreibungen / Tender"],
  ["berichte", "Berichte / Auswertungen"],
  ["einstellungen", "Einstellungen"]
];

const criteria = [
  "Qualität", "Termintreue", "Preis-Leistung", "Reaktionszeit", "Erreichbarkeit",
  "Fachliche Kompetenz", "Dokumentationsqualität", "Sicherheitsanforderungen",
  "Vorgaben/Normen", "Reklamationsverhalten", "Notfallzuverlässigkeit",
  "Nachhaltigkeit/Region", "Kommunale Erfahrung", "Angebotsvollständigkeit", "Preistransparenz"
];

const defaultWeights = {
  "Qualität": 20,
  "Termintreue": 15,
  "Preis-Leistung": 15,
  "Reaktionszeit": 10,
  "Fachliche Kompetenz": 15,
  "Dokumentationsqualität": 10,
  "Sicherheitsanforderungen": 10,
  "Reklamationsverhalten": 5
};

const excelGewerke = [
  ["Abläufe", "411 Abwasseranlagen", 3], ["Abläufe AUB", "411 Abwasseranlagen", 1],
  ["Abläufe DAF", "411 Abwasseranlagen", 1], ["Armaturen, Filter, Entnahmearmaturen", "412 Wasseranlagen", 7],
  ["Automatikschiebetür", "300 Bauwerk Baukonstruktion", 1], ["Automationsmanagement", "483 Automationsmanagement", 1],
  ["BOS-Anlage", "457 Übertragungsnetze", 1], ["BS-Tor", "300 Bauwerk Baukonstruktion", 4],
  ["Beleuchtungen", "445 Beleuchtungsanlagen", 5], ["Beleuchtungsanlagen", "445 Beleuchtungsanlagen", 1],
  ["Blindstromkompensationsanlage", "443 Niederspannungsschaltanlagen", 3], ["Blitzschutzanlage", "446 Blitzschutz Erdungsanlagen", 8],
  ["Brandmeldeanlage", "456 Gefahrenmelde Alarmanlagen", 6], ["Brandschutzelement /-ventil", "439 Lufttechnische Anlagen", 1],
  ["Brandschutzklappe", "439 Lufttechnische Anlagen", 3], ["CO-Warnanlage/ Gas-Warnanlage", "456 Gefahrenmelde Alarmanlagen", 1],
  ["Dezentrale Wassererwärmung", "429 Heizungsanlagen sonstiges", 9], ["Drehtür", "300 Bauwerk Baukonstruktion", 1],
  ["Druckerhöhung, Druckminderung, Druckbehälter", "412 Wasseranlagen", 9], ["Druckluftanlage", "473 Medienversorgungsanlagen", 2],
  ["Durchlauferhitzer", "429 Heizungsanlagen sonstiges", 2], ["Einbruchmeldeanlage", "456 Gefahrenmelde Alarmanlagen", 2],
  ["Enthärtung", "412 Wasseranlagen", 2], ["Ersatzstromaggregat", "442 Eigenstromversorgungsanlagen", 1],
  ["Flucht- bzw. Notausgangstüren", "300 Bauwerk Baukonstruktion", 10], ["Gaslöschanlagen", "474 Feuerlöschanlagen", 1],
  ["Gasversorgungsanlagen- und einrichtungen", "413 Gasanlagen", 5], ["Handfeuerlöscher", "474 Feuerlöschanlagen", 5],
  ["Hebeanlage geschlossen", "411 Abwasseranlagen", 2], ["Hebeanlage, offen", "411 Abwasseranlagen", 4],
  ["Hebebühne", "469 Förderanlagen sonstiges", 10], ["Hydraulikanlagen", "466 Hydraulikanlagen", 1],
  ["Innenwandöffnungen", "344 Innenwandöffnungen", 1], ["Kleinkälte", "434 Kälteanlagen", 3],
  ["Kleinlüfter (Abluft)", "430 Raumlufttechnik", 13], ["Klimaanlage", "430 Raumlufttechnik", 1],
  ["Kontroll-, Reinigungs- und Sammelschächte", "411 Abwasseranlagen", 1], ["Kältemaschine", "434 Kälteanlagen", 1],
  ["Leichtflüssigkeitsabscheider", "411 Abwasseranlagen", 2], ["Leiteranlagen", "479 Nutzungsspezifische Anlagen", 5],
  ["Lüftungsanlage", "430 Raumlufttechnik", 12], ["MSR", "482 Schaltschränke", 18],
  ["Mittelspannungsanlage/ Trafoanlage", "441 Hoch-/Mittelspannungsanlagen", 8], ["NSHV", "443 Niederspannungsschaltanlagen", 10],
  ["Nutzungsspezifische Anlagen", "500 Außenanlagen", 3], ["Personenaufzug", "461 Aufzugsanlagen", 1],
  ["RS-,BS-Tür mech.", "300 Bauwerk Baukonstruktion", 9], ["RS-,BS-Tür mech. Mit FSA", "300 Bauwerk Baukonstruktion", 2],
  ["RS-,BS-Tür mech. mit FSA", "300 Bauwerk Baukonstruktion", 4], ["Rauchabzuganlage, maschinell (MRA)", "439 Lufttechnische Anlagen", 1],
  ["Rauchabzuganlage, natürlich (NRA)", "439 Lufttechnische Anlagen", 9], ["Rauchabzugsanlage, maschinell (MRA)", "430 Raumlufttechnik", 1],
  ["Rohrbegleitheizung", "429 Heizungsanlagen sonstiges", 2], ["Rohrleitungen", "412 Wasseranlagen", 1],
  ["Rolltor", "300 Bauwerk Baukonstruktion", 8], ["Schiebetor", "300 Bauwerk Baukonstruktion", 9],
  ["Schrankenanlage", "479 Nutzungsspezifische Anlagen", 5], ["Schwingtor", "300 Bauwerk Baukonstruktion", 1],
  ["Sektionaltor", "300 Bauwerk Baukonstruktion", 12], ["Sektionaltor handbetrieben", "300 Bauwerk Baukonstruktion", 1],
  ["Sektionaltor kraftebetrieben", "300 Bauwerk Baukonstruktion", 1], ["Sekuranten", "300 Bauwerk Baukonstruktion", 3],
  ["Sicherheitsbeleuchtung", "445 Beleuchtungsanlagen", 9], ["Sonnenschutz", "300 Bauwerk Baukonstruktion", 6],
  ["Sonstige Anlagen", "421 Wärmeerzeugungsanlagen", 88], ["Splitgerät", "434 Kälteanlagen", 16],
  ["Sprinkleranlage", "474 Feuerlöschanlagen", 3], ["Teilklimaanlage", "430 Raumlufttechnik", 1],
  ["Trinkwassererwärmungsanlage zentral", "421 Wärmeerzeugungsanlagen", 2], ["Tür und Tor, handbetätigt", "300 Bauwerk Baukonstruktion", 1],
  ["Tür und Tor, kraftbetätigt", "300 Bauwerk Baukonstruktion", 1], ["USV Anlage (dynamisch oder statisch) / Batterieanlage", "442 Eigenstromversorgungsanlagen", 8],
  ["Unterverteilung mit FI", "444 Elektroverteilung", 23], ["Unterverteilung ohne FI", "444 Elektroverteilung", 14],
  ["Wandhydrant", "474 Feuerlöschanlagen", 6], ["Wärmeerzeuger", "421 Wärmeerzeugungsanlagen", 11],
  ["Wärmeverteilnetze", "422 Wärmeverteilnetze", 11], ["Zutrittskontrollanlage", "456 Gefahrenmelde Alarmanlagen", 1]
];

const state = loadState();
let currentView = "dashboard";
let currentQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  bindChrome();
  render();
});

function createSeedData() {
  const gewerke = excelGewerke.map(([name, kategorie, anzahl], index) => ({
    id: `GEW-${String(index + 1).padStart(3, "0")}`,
    name,
    kategorie,
    beschreibung: `${anzahl} Anlagenpositionen aus Gewerke_Liste.xlsx`,
    pruefpflicht: /Brand|Blitz|Sicher|Aufzug|Gas|Sprinkler|Feuer|Flucht|Rauch|USV|Mittel|NSHV|Wandhydrant/.test(name),
    standardIntervall: /Feuer|Brand|Blitz|Sicher|Gas|Aufzug/.test(name) ? "jährlich" : "alle 2 Jahre",
    risikoklasse: /Brand|Sprinkler|Gas|Aufzug|Sicher|Blitz/.test(name) ? "hoch" : /Tor|Tür|Lüftung|Wärme|Elektro|NSHV/.test(name) ? "mittel" : "niedrig",
    qualifikation: /Elektro|NSHV|USV|Mittel|Blitz|Brandmelde/.test(name) ? "Elektrofachkraft / zertifizierter Fachbetrieb" : "Fachbetrieb mit dokumentierter Sachkunde",
    bemerkung: "Aus Excel-Katalog übernommen"
  }));

  const findGewerk = (name) => gewerke.find((g) => g.name === name)?.id || gewerke[0].id;
  const liegenschaften = [
    ["LIEG-001", "Rathaus Netphen", "Rathaus", "Amtsstraße", "2", "Netphen", "Netphen-Mitte", "aktiv", "hoch", 1978, 5200],
    ["LIEG-002", "Grundschule Netphen", "Schule", "Schulstraße", "12", "Netphen", "Netphen-Mitte", "aktiv", "mittel", 1992, 4100],
    ["LIEG-003", "Feuerwehrgerätehaus Netphen", "Feuerwehr", "Siegstraße", "28", "Netphen", "Netphen-Mitte", "aktiv", "hoch", 2004, 1600],
    ["LIEG-004", "Sporthalle Netphen", "Sporthalle", "Jahnstraße", "9", "Netphen", "Netphen-Mitte", "in Sanierung", "mittel", 1988, 2800],
    ["LIEG-005", "Bauhof Netphen", "Bauhof", "Industriestraße", "11", "Netphen", "Deuz", "aktiv", "mittel", 1999, 3600],
    ["LIEG-006", "Kindertagesstätte Dreis-Tiefenbach", "Kindergarten", "Wiesenweg", "4", "Netphen", "Dreis-Tiefenbach", "aktiv", "mittel", 2011, 1100],
    ["LIEG-007", "Bürgerhaus Netphen", "Bürgerhaus", "Marktplatz", "1", "Netphen", "Netphen-Mitte", "aktiv", "niedrig", 1971, 1900],
    ["LIEG-008", "Turnhalle Deuz", "Sporthalle", "Schützenstraße", "5", "Netphen", "Deuz", "aktiv", "mittel", 1982, 1450],
    ["LIEG-009", "Feuerwehrgerätehaus Grissenbach", "Feuerwehr", "Talstraße", "36", "Netphen", "Grissenbach", "aktiv", "hoch", 1997, 820],
    ["LIEG-010", "Dorfgemeinschaftshaus Hainchen", "Bürgerhaus", "Haincher Straße", "22", "Netphen", "Hainchen", "aktiv", "niedrig", 1968, 760]
  ].map(([id, name, typ, strasse, hausnummer, ort, stadtteil, status, risikoklasse, baujahr, flaeche]) => ({
    id, name, typ, strasse, hausnummer, plz: "57250", ort, stadtteil,
    ansprechpartner: "Technisches Gebäudemanagement",
    telefon: "02738 603-0",
    email: "liegenschaften@netphen.de",
    nutzungsart: typ,
    baujahr,
    flaeche,
    status,
    risikoklasse,
    bemerkung: "Beispieldatensatz für den Prototyp"
  }));

  const lieferanten = [
    ["LIEF-001", "Elektro Schneider Siegerland GmbH", "GmbH", "Netphen", ["Unterverteilung mit FI", "NSHV", "Sicherheitsbeleuchtung", "Brandmeldeanlage"], true, "4 Stunden", "aktiv"],
    ["LIEF-002", "Brandschutz Weber & Partner", "GmbH", "Siegen", ["Handfeuerlöscher", "Wandhydrant", "Sprinkleranlage", "Brandschutzklappe"], true, "24 Stunden", "aktiv"],
    ["LIEF-003", "Haustechnik Roth Netphen", "e.K.", "Netphen", ["Wärmeerzeuger", "Wärmeverteilnetze", "Dezentrale Wassererwärmung"], true, "8 Stunden", "aktiv"],
    ["LIEF-004", "Luft & Klima Südwestfalen", "GmbH", "Kreuztal", ["Lüftungsanlage", "Kleinlüfter (Abluft)", "Splitgerät"], false, "2 Werktage", "aktiv"],
    ["LIEF-005", "Tortechnik Hellmann", "GmbH", "Netphen", ["Rolltor", "Sektionaltor", "Schiebetor", "BS-Tor"], true, "6 Stunden", "in Prüfung"],
    ["LIEF-006", "Aufzugservice Lahn-Sieg", "GmbH", "Siegen", ["Personenaufzug"], true, "2 Stunden", "aktiv"],
    ["LIEF-007", "Dach & Fassade Jung", "GmbH", "Netphen", ["Sonstige Anlagen", "Sekuranten"], false, "3 Werktage", "aktiv"]
  ].map(([id, name, rechtsform, ort, gewNames, notdienst, reaktionszeit, status]) => ({
    id, name, rechtsform, strasse: "Gewerbestraße", hausnummer: String(10 + Number(id.slice(-1))),
    plz: ort === "Netphen" ? "57250" : "57072", ort,
    ansprechpartner: "Serviceleitung", telefon: "0271 555-100", email: `kontakt@${name.toLowerCase().replaceAll(" ", "-").replaceAll("&", "und")}.de`,
    website: "https://example.org", gewerkeIds: gewNames.map(findGewerk), regionaleVerfuegbarkeit: "Netphen und Umgebung",
    notdienst, reaktionszeit, qualifikationen: "Sachkundenachweis, DGUV-/VDE-konforme Dokumentation",
    rahmenvertrag: status === "aktiv", vertragsbeginn: "2025-01-01", vertragsende: "2027-12-31",
    status, bemerkung: "Beispiel-Lieferant"
  }));

  const wartungsobjekte = [
    ["WO-001", "Brandmeldeanlage Rathaus", "Brandmeldeanlage", "LIEG-001", "Rathaus EG / Technik", "jährlich", "2025-07-18", "2026-07-18", true, "DIN 14675", "hoch", "LIEF-001", "aktiv"],
    ["WO-002", "Gas-Brennwertkessel Rathaus", "Wärmeerzeuger", "LIEG-001", "Heizzentrale UG", "jährlich", "2025-10-05", "2026-10-05", true, "GEG / BetrSichV", "mittel", "LIEF-003", "aktiv"],
    ["WO-003", "Sicherheitsbeleuchtung Grundschule", "Sicherheitsbeleuchtung", "LIEG-002", "Flure und Aula", "jährlich", "2025-06-02", "2026-06-02", true, "DIN VDE 0108", "hoch", "LIEF-001", "aktiv"],
    ["WO-004", "Handfeuerlöscher Sporthalle", "Handfeuerlöscher", "LIEG-004", "Halle / Umkleiden", "alle 2 Jahre", "2024-08-12", "2026-08-12", true, "ASR A2.2", "mittel", "LIEF-002", "aktiv"],
    ["WO-005", "Rolltor Bauhof Werkstatt", "Rolltor", "LIEG-005", "Werkstattzufahrt", "jährlich", "2025-05-15", "2026-05-15", true, "ASR A1.7", "mittel", "LIEF-005", "aktiv"],
    ["WO-006", "Lüftungsanlage Kita", "Lüftungsanlage", "LIEG-006", "Dachzentrale", "jährlich", "2025-09-01", "2026-09-01", false, "VDI 6022", "mittel", "LIEF-004", "aktiv"],
    ["WO-007", "Personenaufzug Rathaus", "Personenaufzug", "LIEG-001", "Haupttreppenhaus", "jährlich", "2025-11-20", "2026-11-20", true, "BetrSichV", "hoch", "LIEF-006", "aktiv"],
    ["WO-008", "Blitzschutzanlage Feuerwehr Netphen", "Blitzschutzanlage", "LIEG-003", "Gebäudehülle", "alle 4 Jahre", "2022-04-30", "2026-04-30", true, "DIN EN 62305", "hoch", "LIEF-001", "aktiv"],
    ["WO-009", "Sektionaltor Feuerwehr Grissenbach", "Sektionaltor", "LIEG-009", "Fahrzeughalle", "jährlich", "2025-07-02", "2026-07-02", true, "ASR A1.7", "hoch", "LIEF-005", "defekt"],
    ["WO-010", "Klimasplitgerät Serverraum", "Splitgerät", "LIEG-001", "Serverraum 2. OG", "halbjährlich", "2026-01-15", "2026-07-15", false, "Herstellervorgabe", "mittel", "LIEF-004", "aktiv"],
    ["WO-011", "Wandhydrant Grundschule", "Wandhydrant", "LIEG-002", "Treppenraum Nord", "jährlich", "2025-12-04", "2026-12-04", true, "DIN 14462", "hoch", "LIEF-002", "aktiv"],
    ["WO-012", "Unterverteilung Bauhof", "Unterverteilung mit FI", "LIEG-005", "Elektroverteilung Werkstatt", "alle 4 Jahre", "2023-02-10", "2027-02-10", true, "DGUV V3", "mittel", "LIEF-001", "aktiv"]
  ].map(([id, name, gewerk, liegenschaftId, standort, intervall, letzteWartung, naechsteWartung, pruefpflicht, norm, risikoklasse, lieferantId, status]) => ({
    id, name, gewerkId: findGewerk(gewerk), liegenschaftId, hersteller: "Diverse", modell: "Bestand",
    seriennummer: `${id}-SN`, standort, intervall, letzteWartung, naechsteWartung, pruefpflicht, norm, risikoklasse, lieferantId, status,
    dokumente: "Prüfbericht im Objektordner", bemerkung: "Aus Katalogvorlage angelegt"
  }));

  const wartungstermine = wartungsobjekte.map((obj, index) => ({
    id: `WT-${String(index + 1).padStart(3, "0")}`,
    wartungsobjektId: obj.id,
    liegenschaftId: obj.liegenschaftId,
    gewerkId: obj.gewerkId,
    lieferantId: obj.lieferantId,
    geplantesDatum: obj.naechsteWartung,
    status: new Date(obj.naechsteWartung) < todayStart() ? "überfällig" : index % 4 === 0 ? "beauftragt" : "geplant",
    prioritaet: obj.risikoklasse === "hoch" ? "hoch" : "normal",
    pruefpflicht: obj.pruefpflicht,
    kostenstelle: obj.liegenschaftId,
    kostenGeschaetzt: obj.risikoklasse === "hoch" ? 950 : 420,
    kostenIst: 0,
    dokumentation: "",
    bemerkung: obj.pruefpflicht ? "Prüfnachweis erforderlich" : ""
  }));

  const wartungsauftraege = [
    ["WA-001", "WT-001", "WA-2026-0001", "Jahreswartung Brandmeldeanlage Rathaus", "beauftragt", "hoch", "2026-07-18", 1200, 0, false, false],
    ["WA-002", "WT-005", "WA-2026-0002", "Prüfung Rolltor Bauhof nach ASR A1.7", "offen", "normal", "2026-05-15", 480, 0, true, true],
    ["WA-003", "WT-009", "WA-2026-0003", "Störung Sektionaltor Feuerwehr Grissenbach", "in Arbeit", "hoch", "2026-07-02", 850, 0, true, true]
  ].map(([id, wartungsterminId, auftragsnummer, beschreibung, status, prioritaet, ausfuehrungsdatum, kostenGeschaetzt, kostenIst, maengel, folgeauftrag]) => ({
    id, wartungsterminId, auftragsnummer, beschreibung, status, prioritaet,
    ausfuehrungsdatum, kostenGeschaetzt, kostenIst, maengel, folgeauftrag, bemerkung: "Beispielauftrag"
  }));

  const lieferantenbewertungen = [
    makeBewertung("BEW-001", "LIEF-001", findGewerk("Brandmeldeanlage"), "LIEG-001", "WA-001", "2026-06-24", [5, 4, 4, 5, 4, 5, 4, 5, 5, 4, 5, 4, 5, 4, 4], "freigegeben", "Zuverlässige Dokumentation und schnelle Reaktion."),
    makeBewertung("BEW-002", "LIEF-005", findGewerk("Sektionaltor"), "LIEG-009", "WA-003", "2026-06-28", [3, 2, 3, 2, 3, 4, 2, 3, 3, 2, 3, 4, 3, 3, 2], "geprüft", "Mehrfach verspätete Rückmeldung bei Störung."),
    makeBewertung("BEW-003", "LIEF-003", findGewerk("Wärmeerzeuger"), "LIEG-001", "", "2026-05-18", [4, 5, 4, 4, 5, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4], "freigegeben", "Solide Leistung im Rahmenvertrag.")
  ];

  const ausschreibungen = [
    {
      id: "AUS-001", titel: "Rahmenvertrag Brandschutzwartung 2027-2029", beschreibung: "Wartung Feuerlöscher, Wandhydranten und Brandschutzklappen",
      gewerkId: findGewerk("Handfeuerlöscher"), liegenschaftIds: ["LIEG-001", "LIEG-002", "LIEG-004"], wartungsobjektIds: ["WO-004", "WO-011"],
      leistungsbeschreibung: "Wiederkehrende Prüfung, Dokumentation und Mängelbericht", auftragsvolumen: 48000, laufzeit: "36 Monate",
      startdatum: "2026-08-01", angebotsfrist: "2026-09-15", leistungsbeginn: "2027-01-01", zustaendigeStelle: "Zentrale Vergabestelle",
      status: "in Vorbereitung", lieferantenIds: ["LIEF-002"], angebote: [],
      technischeBewertung: "Nachweis Sachkunde und normgerechte Dokumentation erforderlich.", wirtschaftlicheBewertung: "Preis wird mit Qualität und Reaktionszeit bewertet.",
      empfehlung: "Einladung regional verfügbarer Fachbetriebe mit belastbarer Dokumentationsqualität.", begruendung: "Prüfpflichtige Anlagen mit hoher Betreiberverantwortung."
    },
    {
      id: "AUS-002", titel: "Wartung Tore und kraftbetätigte Abschlüsse", beschreibung: "Jährliche Prüfung und Instandsetzung an Feuerwehr- und Bauhofstandorten",
      gewerkId: findGewerk("Sektionaltor"), liegenschaftIds: ["LIEG-003", "LIEG-005", "LIEG-009"], wartungsobjektIds: ["WO-005", "WO-009"],
      leistungsbeschreibung: "Prüfung nach ASR A1.7, Störungsdienst, Ersatzteilmanagement", auftragsvolumen: 36000, laufzeit: "24 Monate",
      startdatum: "2026-07-20", angebotsfrist: "2026-08-22", leistungsbeginn: "2026-10-01", zustaendigeStelle: "Vergabestelle",
      status: "Entwurf", lieferantenIds: ["LIEF-005"], angebote: [{ lieferantId: "LIEF-005", preis: 33700, eignung: 72, risiko: "Terminverzug beobachten", empfehlung: "kritisch prüfen" }],
      technischeBewertung: "Notdienst und Reaktionszeit wegen Feuerwehrstandorten hoch zu gewichten.", wirtschaftlicheBewertung: "Billigster Preis allein nicht ausreichend.",
      empfehlung: "Weitere Anbieter in Angebotsvergleich aufnehmen.", begruendung: "Betriebssicherheit kritischer Tore muss nachvollziehbar gesichert werden."
    }
  ];

  return {
    gewerke,
    liegenschaften,
    lieferanten,
    wartungsobjekte,
    wartungstermine,
    wartungsauftraege,
    lieferantenbewertungen,
    ausschreibungen
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (error) {
    console.warn("LocalStorage konnte nicht gelesen werden", error);
  }
  return createSeedData();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderNav() {
  const nav = document.querySelector("#mainNav");
  nav.innerHTML = menu.map(([id, label]) => `<button class="nav-button ${id === currentView ? "active" : ""}" data-view="${id}"><span>${label}</span><span>›</span></button>`).join("");
  nav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      currentView = button.dataset.view;
      currentQuery = "";
      document.body.classList.remove("nav-open");
      render();
    });
  });
}

function bindChrome() {
  document.querySelector("#menuToggle").addEventListener("click", () => document.body.classList.toggle("nav-open"));
  document.querySelector("#resetData").addEventListener("click", () => {
    if (!confirm("Beispieldaten wirklich neu laden? Lokale Änderungen werden überschrieben.")) return;
    Object.assign(state, createSeedData());
    saveState();
    render();
  });
}

function render() {
  renderNav();
  const [, title] = menu.find(([id]) => id === currentView);
  document.querySelector("#pageTitle").textContent = title;
  const view = document.querySelector("#appView");
  const renderers = {
    dashboard: renderDashboard,
    liegenschaften: () => renderEntity("liegenschaften"),
    gewerke: renderGewerke,
    wartungsobjekte: () => renderEntity("wartungsobjekte"),
    wartungsplan: renderWartungsplan,
    wartungsauftraege: () => renderEntity("wartungsauftraege"),
    lieferanten: () => renderEntity("lieferanten"),
    bewertungen: renderBewertungen,
    ausschreibungen: renderAusschreibungen,
    berichte: renderBerichte,
    einstellungen: renderSettings
  };
  view.innerHTML = renderers[currentView]();
  bindViewActions(view);
}

function renderDashboard() {
  const kpis = getKpis();
  const next = state.wartungstermine.filter((t) => new Date(t.geplantesDatum) >= todayStart()).sort(byDate("geplantesDatum")).slice(0, 6);
  const overdue = state.wartungstermine.filter((t) => isOverdue(t)).sort(byDate("geplantesDatum"));
  const byTrade = groupCount(state.wartungsobjekte, (o) => getById("gewerke", o.gewerkId)?.name || "Unbekannt");
  const critical = state.wartungsobjekte.filter((o) => o.risikoklasse === "hoch" || o.status === "defekt").slice(0, 5);
  return `
    <div class="grid kpi-grid">
      ${kpiCard(kpis.liegenschaften, "Liegenschaften")}
      ${kpiCard(kpis.aktiveObjekte, "aktive Wartungsobjekte")}
      ${kpiCard(kpis.faelligMonat, "fällige Wartungen diesen Monat")}
      ${kpiCard(kpis.ueberfaellig, "überfällige Wartungen")}
      ${kpiCard(kpis.offeneAuftraege, "offene Wartungsaufträge")}
      ${kpiCard(kpis.aktiveLieferanten, "aktive Lieferanten")}
      ${kpiCard(kpis.kritischeBewertungen, "kritische Lieferantenbewertungen")}
      ${kpiCard(kpis.laufendeAusschreibungen, "laufende Ausschreibungen")}
    </div>
    <div class="grid two-col" style="margin-top:16px">
      <section class="panel">
        <div class="panel-header"><div><h2>Nächste Wartungstermine</h2><p class="muted">Automatisch aus zugeordneten Wartungsobjekten abgeleitet.</p></div></div>
        ${timeline(next)}
      </section>
      <section class="panel">
        <h2>Überfällige Wartungen</h2>
        ${overdue.length ? timeline(overdue) : `<p class="muted">Keine überfälligen Termine.</p>`}
      </section>
      <section class="panel">
        <h2>Wartungen nach Gewerk</h2>
        ${barChart(byTrade.slice(0, 8))}
      </section>
      <section class="panel">
        <h2>Kritische Objekte</h2>
        ${critical.map((o) => `<div class="timeline-item"><strong>${o.name}</strong><br><span class="mini">${lookup("liegenschaften", o.liegenschaftId)} · ${lookup("gewerke", o.gewerkId)} · ${status(o.status || o.risikoklasse)}</span></div>`).join("")}
      </section>
    </div>
    <div class="notice" style="margin-top:16px">
      <strong>Fachlicher Hinweis:</strong> Lieferantenbewertungen sind technische Entscheidungsgrundlagen. Die finale Vergabeentscheidung bleibt bei der zuständigen Vergabestelle; Preis ist nicht das alleinige Kriterium.
    </div>`;
}

function renderEntity(type) {
  const configs = {
    liegenschaften: {
      title: "Liegenschaften",
      add: "Liegenschaft anlegen",
      columns: ["ID", "Name", "Typ", "Ortsteil", "Status", "Risiko", "Fläche"],
      row: (x) => [x.id, x.name, x.typ, x.stadtteil, status(x.status), status(x.risikoklasse), `${x.flaeche} m²`],
      fields: ["name", "typ", "strasse", "hausnummer", "plz", "ort", "stadtteil", "ansprechpartner", "telefon", "email", "baujahr", "flaeche", "status", "risikoklasse", "bemerkung"]
    },
    wartungsobjekte: {
      title: "Wartungsobjekte",
      add: "Wartungsobjekt anlegen",
      columns: ["ID", "Objekt", "Liegenschaft", "Gewerk", "Nächste Wartung", "Prüfpflicht", "Status"],
      row: (x) => [x.id, x.name, lookup("liegenschaften", x.liegenschaftId), lookup("gewerke", x.gewerkId), date(x.naechsteWartung), yesNo(x.pruefpflicht), status(x.status)],
      fields: ["name", "gewerkId", "liegenschaftId", "hersteller", "modell", "seriennummer", "standort", "intervall", "letzteWartung", "naechsteWartung", "pruefpflicht", "norm", "risikoklasse", "lieferantId", "status", "bemerkung"]
    },
    wartungsauftraege: {
      title: "Wartungsaufträge",
      add: "Auftrag anlegen",
      columns: ["ID", "Auftragsnummer", "Beschreibung", "Status", "Priorität", "Ausführung", "Mängel"],
      row: (x) => [x.id, x.auftragsnummer, x.beschreibung, status(x.status), status(x.prioritaet), date(x.ausfuehrungsdatum), yesNo(x.maengel)],
      fields: ["wartungsterminId", "auftragsnummer", "beschreibung", "status", "prioritaet", "ausfuehrungsdatum", "kostenGeschaetzt", "kostenIst", "maengel", "folgeauftrag", "bemerkung"]
    },
    lieferanten: {
      title: "Lieferanten",
      add: "Lieferant anlegen",
      columns: ["ID", "Firma", "Ort", "Gewerke", "Notdienst", "Reaktionszeit", "Status"],
      row: (x) => [x.id, x.name, x.ort, x.gewerkeIds.map((id) => lookup("gewerke", id)).slice(0, 3).join(", "), yesNo(x.notdienst), x.reaktionszeit, status(x.status)],
      fields: ["name", "rechtsform", "strasse", "hausnummer", "plz", "ort", "ansprechpartner", "telefon", "email", "website", "notdienst", "reaktionszeit", "qualifikationen", "rahmenvertrag", "vertragsbeginn", "vertragsende", "status", "bemerkung"]
    }
  };
  const config = configs[type];
  const rows = filterRows(state[type]);
  return `
    ${toolbar(config.title, config.add, type)}
    <section class="panel">
      ${table(config.columns, rows.map((x) => [...config.row(x), rowActions(type, x.id)]), true)}
    </section>`;
}

function renderGewerke() {
  const rows = filterRows(state.gewerke);
  const columns = ["ID", "Gewerk", "Kategorie DIN 276", "Prüfpflicht", "Intervall", "Risiko", "Quelle"];
  return `
    ${toolbar("Zentrale Gewerke-Datenbank", "Gewerk anlegen", "gewerke")}
    <section class="panel">
      <p class="muted">78 Gewerke wurden aus <strong>Gewerke_Liste.xlsx</strong> über die Spalte <strong>Anlagentyp</strong> abgeleitet. Die Kategorie stammt aus <strong>KGR DIN 276</strong>.</p>
      ${table(columns, rows.map((x) => [x.id, x.name, x.kategorie, yesNo(x.pruefpflicht), x.standardIntervall, status(x.risikoklasse), x.beschreibung, rowActions("gewerke", x.id)]), true)}
    </section>`;
}

function renderWartungsplan() {
  const rows = filterRows(state.wartungstermine).sort(byDate("geplantesDatum"));
  return `
    ${toolbar("Wartungsplan", "Wartung manuell hinzufügen", "wartungstermine")}
    <div class="grid two-col">
      <section class="panel">
        <h2>Tabellenansicht</h2>
        ${table(["Datum", "Liegenschaft", "Objekt", "Gewerk", "Lieferant", "Status", "Kosten", ""], rows.map((x) => [
          date(x.geplantesDatum), lookup("liegenschaften", x.liegenschaftId), lookup("wartungsobjekte", x.wartungsobjektId),
          lookup("gewerke", x.gewerkId), lookup("lieferanten", x.lieferantId), status(isOverdue(x) ? "überfällig" : x.status),
          euro(x.kostenGeschaetzt), rowActions("wartungstermine", x.id)
        ]))}
      </section>
      <section class="panel">
        <h2>Monatsübersicht</h2>
        ${barChart(groupCount(rows, (x) => monthLabel(x.geplantesDatum)))}
      </section>
    </div>`;
}

function renderBewertungen() {
  const rows = filterRows(state.lieferantenbewertungen);
  return `
    ${toolbar("Lieferantenbewertung", "Bewertung erfassen", "lieferantenbewertungen")}
    <div class="grid two-col">
      <section class="panel">
        <h2>Bewertungen</h2>
        ${table(["ID", "Lieferant", "Gewerk", "Datum", "Score", "Ergebnis", "Status", ""], rows.map((x) => [
          x.id, lookup("lieferanten", x.lieferantId), lookup("gewerke", x.gewerkId), date(x.datum),
          `${x.gesamtscore}%`, status(x.ergebnis), status(x.status), rowActions("lieferantenbewertungen", x.id)
        ]))}
      </section>
      <section class="panel">
        <h2>Ranking nach Score</h2>
        ${barChart([...state.lieferantenbewertungen].sort((a, b) => b.gesamtscore - a.gesamtscore).map((x) => [lookup("lieferanten", x.lieferantId), x.gesamtscore]))}
        <div class="notice" style="margin-top:16px">Die Bewertung ist eine fachliche Empfehlung und ersetzt keine Vergabeentscheidung.</div>
      </section>
    </div>`;
}

function renderAusschreibungen() {
  const rows = filterRows(state.ausschreibungen);
  return `
    ${toolbar("Ausschreibungen / Tender", "Ausschreibung anlegen", "ausschreibungen")}
    <section class="panel">
      ${table(["ID", "Titel", "Gewerk", "Frist", "Volumen", "Status", "Empfehlung", ""], rows.map((x) => [
        x.id, x.titel, lookup("gewerke", x.gewerkId), date(x.angebotsfrist), euro(x.auftragsvolumen), status(x.status), x.empfehlung, rowActions("ausschreibungen", x.id)
      ]))}
    </section>
    <section class="panel" style="margin-top:16px">
      <h2>Angebotsvergleich</h2>
      ${table(["Ausschreibung", "Lieferant", "Preis", "technische Eignung", "Risiko", "Empfehlung"], state.ausschreibungen.flatMap((a) => (a.angebote || []).map((o) => [
        a.titel, lookup("lieferanten", o.lieferantId), euro(o.preis), `${o.eignung}%`, o.risiko, status(o.empfehlung)
      ])))}
    </section>`;
}

function renderBerichte() {
  const overdue = state.wartungstermine.filter(isOverdue);
  const costsBySite = groupSum(state.wartungstermine, (x) => lookup("liegenschaften", x.liegenschaftId), (x) => Number(x.kostenGeschaetzt || 0));
  const poorSuppliers = state.lieferantenbewertungen.filter((x) => x.gesamtscore < 60);
  return `
    <div class="grid three-col">
      <section class="panel"><h2>Wartungen nach Monat</h2>${barChart(groupCount(state.wartungstermine, (x) => monthLabel(x.geplantesDatum)))}</section>
      <section class="panel"><h2>Kosten nach Liegenschaft</h2>${barChart(costsBySite, true)}</section>
      <section class="panel"><h2>Risikobericht</h2>
        <p><strong>${overdue.length}</strong> überfällige Wartungen</p>
        <p><strong>${state.wartungsobjekte.filter((o) => o.pruefpflicht).length}</strong> prüfpflichtige Anlagen</p>
        <p><strong>${poorSuppliers.length}</strong> kritisch bewertete Lieferanten</p>
      </section>
    </div>
    <section class="panel" style="margin-top:16px">
      <h2>Prüfpflichtige Anlagen ohne aktuellen Nachweis</h2>
      ${table(["Objekt", "Liegenschaft", "Norm", "Nächste Wartung", "Status"], state.wartungsobjekte.filter((o) => o.pruefpflicht && new Date(o.naechsteWartung) < todayStart()).map((o) => [
        o.name, lookup("liegenschaften", o.liegenschaftId), o.norm, date(o.naechsteWartung), status("überfällig")
      ]))}
    </section>`;
}

function renderSettings() {
  return `
    <div class="grid two-col">
      <section class="panel">
        <h2>Datenhaltung</h2>
        <p>Der Prototyp speichert Änderungen lokal im Browser. Die Struktur ist nach Stammdaten, Bewegungsdaten und Auswertungen getrennt und kann später an eine SQL-Datenbank angebunden werden.</p>
        <button class="danger-button" data-reset-local>LocalStorage löschen</button>
      </section>
      <section class="panel">
        <h2>Vorbereitete Erweiterungen</h2>
        <div class="tag-list">
          <span class="tag">SQL-Datenbank</span><span class="tag">Benutzerrollen</span><span class="tag">CSV-Import</span><span class="tag">Excel/PDF-Export</span><span class="tag">Audit-Historie</span>
        </div>
      </section>
    </div>`;
}

function toolbar(title, addLabel, type) {
  return `
    <div class="toolbar">
      <input data-search placeholder="${title} durchsuchen" value="${escapeHtml(currentQuery)}">
      <button class="primary-button" data-add="${type}" type="button">${addLabel}</button>
    </div>`;
}

function bindViewActions(root) {
  root.querySelector("[data-search]")?.addEventListener("input", (event) => {
    currentQuery = event.target.value;
    render();
  });
  root.querySelectorAll("[data-add]").forEach((button) => button.addEventListener("click", () => openEditor(button.dataset.add)));
  root.querySelectorAll("[data-edit]").forEach((button) => button.addEventListener("click", () => openEditor(button.dataset.type, button.dataset.edit)));
  root.querySelectorAll("[data-delete]").forEach((button) => button.addEventListener("click", () => deleteRecord(button.dataset.type, button.dataset.delete)));
  root.querySelector("[data-reset-local]")?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(state, createSeedData());
    render();
  });
}

function openEditor(type, id = null) {
  const collection = state[type];
  const existing = id ? collection.find((x) => x.id === id) : null;
  const record = existing ? structuredClone(existing) : blankRecord(type);
  const dialog = document.querySelector("#editDialog");
  document.querySelector("#dialogTitle").textContent = `${labelFor(type)} ${id ? "bearbeiten" : "anlegen"}`;
  document.querySelector("#dialogBody").innerHTML = formFor(type, record);
  document.querySelector("#dialogSave").onclick = () => {
    const data = readForm(type, record.id);
    if (type === "lieferantenbewertungen") applyScore(data);
    if (existing) Object.assign(existing, data);
    else collection.push(data);
    saveState();
    dialog.close();
    render();
  };
  dialog.showModal();
}

function formFor(type, record) {
  const fields = Object.keys(record).filter((key) => key !== "id" && !Array.isArray(record[key]) && typeof record[key] !== "object");
  return `<div class="form-grid"><div class="field"><label>ID</label><input name="id" value="${record.id}" disabled></div>${fields.map((key) => fieldHtml(type, key, record[key])).join("")}</div>`;
}

function fieldHtml(type, key, value) {
  const label = key.replace(/Id$/, "").replace(/([A-Z])/g, " $1");
  if (key.endsWith("Id")) {
    const ref = key.replace("Id", "") + "en";
    const map = { liegenschaft: "liegenschaften", gewerk: "gewerke", lieferant: "lieferanten", wartungsobjekt: "wartungsobjekte", wartungstermin: "wartungstermine", auftrag: "wartungsauftraege" };
    const options = state[map[key.replace("Id", "")] || ref] || [];
    return `<div class="field"><label>${label}</label><select name="${key}">${options.map((o) => `<option value="${o.id}" ${o.id === value ? "selected" : ""}>${escapeHtml(o.name || o.titel || o.auftragsnummer || o.id)}</option>`).join("")}</select></div>`;
  }
  if (typeof value === "boolean") {
    return `<div class="field"><label>${label}</label><select name="${key}"><option value="true" ${value ? "selected" : ""}>ja</option><option value="false" ${!value ? "selected" : ""}>nein</option></select></div>`;
  }
  if (/datum|beginn|ende|frist|Wartung/.test(key)) {
    return `<div class="field"><label>${label}</label><input type="date" name="${key}" value="${escapeHtml(value || "")}"></div>`;
  }
  if (/bemerkung|beschreibung|begruendung|empfehlung|dokumentation|qualifikationen|leistungsbeschreibung/i.test(key)) {
    return `<div class="field full"><label>${label}</label><textarea name="${key}" rows="3">${escapeHtml(value || "")}</textarea></div>`;
  }
  return `<div class="field"><label>${label}</label><input name="${key}" value="${escapeHtml(value ?? "")}"></div>`;
}

function readForm(type, id) {
  const form = document.querySelector("#dialogBody");
  const data = { id };
  form.querySelectorAll("[name]").forEach((input) => {
    if (input.disabled) return;
    data[input.name] = input.value === "true" ? true : input.value === "false" ? false : input.value;
  });
  if (type === "wartungsobjekte" && data.letzteWartung && !data.naechsteWartung) data.naechsteWartung = addInterval(data.letzteWartung, data.intervall);
  return data;
}

function blankRecord(type) {
  const next = (prefix) => `${prefix}-${String((state[type]?.length || 0) + 1).padStart(3, "0")}`;
  const map = {
    liegenschaften: { id: next("LIEG"), name: "", typ: "", strasse: "", hausnummer: "", plz: "57250", ort: "Netphen", stadtteil: "", ansprechpartner: "", telefon: "", email: "", baujahr: "", flaeche: "", status: "aktiv", risikoklasse: "mittel", bemerkung: "" },
    gewerke: { id: next("GEW"), name: "", kategorie: "", beschreibung: "", pruefpflicht: false, standardIntervall: "jährlich", risikoklasse: "mittel", qualifikation: "", bemerkung: "" },
    wartungsobjekte: { id: next("WO"), name: "", gewerkId: state.gewerke[0].id, liegenschaftId: state.liegenschaften[0].id, hersteller: "", modell: "", seriennummer: "", standort: "", intervall: "jährlich", letzteWartung: "", naechsteWartung: "", pruefpflicht: false, norm: "", risikoklasse: "mittel", lieferantId: state.lieferanten[0].id, status: "aktiv", bemerkung: "" },
    wartungstermine: { id: next("WT"), wartungsobjektId: state.wartungsobjekte[0].id, liegenschaftId: state.liegenschaften[0].id, gewerkId: state.gewerke[0].id, lieferantId: state.lieferanten[0].id, geplantesDatum: "", status: "geplant", prioritaet: "normal", kostenGeschaetzt: 0, kostenIst: 0, dokumentation: "", bemerkung: "" },
    wartungsauftraege: { id: next("WA"), wartungsterminId: state.wartungstermine[0].id, auftragsnummer: `WA-2026-${String(state.wartungsauftraege.length + 1).padStart(4, "0")}`, beschreibung: "", status: "offen", prioritaet: "normal", ausfuehrungsdatum: "", kostenGeschaetzt: 0, kostenIst: 0, maengel: false, folgeauftrag: false, bemerkung: "" },
    lieferanten: { id: next("LIEF"), name: "", rechtsform: "", strasse: "", hausnummer: "", plz: "57250", ort: "Netphen", ansprechpartner: "", telefon: "", email: "", website: "", notdienst: false, reaktionszeit: "", qualifikationen: "", rahmenvertrag: false, vertragsbeginn: "", vertragsende: "", status: "aktiv", bemerkung: "" },
    lieferantenbewertungen: makeBewertung(next("BEW"), state.lieferanten[0].id, state.gewerke[0].id, state.liegenschaften[0].id, "", new Date().toISOString().slice(0, 10), Array(15).fill(3), "Entwurf", ""),
    ausschreibungen: { id: next("AUS"), titel: "", beschreibung: "", gewerkId: state.gewerke[0].id, leistungsbeschreibung: "", auftragsvolumen: 0, laufzeit: "", startdatum: "", angebotsfrist: "", leistungsbeginn: "", status: "Entwurf", technischeBewertung: "", wirtschaftlicheBewertung: "", empfehlung: "", begruendung: "" }
  };
  return map[type];
}

function deleteRecord(type, id) {
  if (!confirm("Datensatz löschen?")) return;
  const index = state[type].findIndex((x) => x.id === id);
  if (index >= 0) state[type].splice(index, 1);
  saveState();
  render();
}

function makeBewertung(id, lieferantId, gewerkId, liegenschaftId, auftragId, datum, values, statusValue, begruendung) {
  const bewertungskriterien = Object.fromEntries(criteria.map((criterion, index) => [criterion, values[index] || 3]));
  const record = {
    id, lieferantId, gewerkId, liegenschaftId, auftragId, datum, bewertender: "Technische Leitung",
    bewertungskriterien, gewichtung: defaultWeights, gesamtscore: 0, ergebnis: "", begruendung,
    maengel: "", positiveErfahrungen: "", empfehlung: "Für zukünftige Beauftragungen fachlich berücksichtigen.", status: statusValue
  };
  return applyScore(record);
}

function applyScore(record) {
  const values = record.bewertungskriterien || Object.fromEntries(criteria.map((c) => [c, 3]));
  const weights = record.gewichtung || defaultWeights;
  let weighted = 0;
  let totalWeight = 0;
  Object.entries(values).forEach(([key, value]) => {
    const weight = Number(weights[key] || 1);
    weighted += Number(value) * weight;
    totalWeight += weight;
  });
  record.gesamtscore = Math.round((weighted / (totalWeight * 5)) * 100);
  record.ergebnis = scoreLabel(record.gesamtscore);
  return record;
}

function getKpis() {
  return {
    liegenschaften: state.liegenschaften.length,
    aktiveObjekte: state.wartungsobjekte.filter((x) => x.status === "aktiv").length,
    faelligMonat: state.wartungstermine.filter((x) => sameMonth(x.geplantesDatum, new Date())).length,
    ueberfaellig: state.wartungstermine.filter(isOverdue).length,
    offeneAuftraege: state.wartungsauftraege.filter((x) => !["erledigt", "geprüft", "abgerechnet"].includes(x.status)).length,
    aktiveLieferanten: state.lieferanten.filter((x) => x.status === "aktiv").length,
    kritischeBewertungen: state.lieferantenbewertungen.filter((x) => x.gesamtscore < 60).length,
    laufendeAusschreibungen: state.ausschreibungen.filter((x) => !["abgeschlossen", "aufgehoben"].includes(x.status)).length
  };
}

function table(headers, rows, hasActions = false) {
  if (!rows.length) return `<p class="muted">Keine Datensätze vorhanden.</p>`;
  const actionHead = hasActions ? "<th>Aktionen</th>" : "";
  return `<div class="table-wrap"><table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}${actionHead}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell ?? ""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function rowActions(type, id) {
  return `<button class="ghost-button" data-type="${type}" data-edit="${id}" type="button">Bearbeiten</button> <button class="ghost-button" data-type="${type}" data-delete="${id}" type="button">Löschen</button>`;
}

function kpiCard(value, label) {
  return `<div class="kpi-card"><strong>${value}</strong><span>${label}</span></div>`;
}

function timeline(items) {
  return `<div class="timeline">${items.map((x) => `<div class="timeline-item"><strong>${date(x.geplantesDatum)}</strong> · ${lookup("wartungsobjekte", x.wartungsobjektId)}<br><span class="mini">${lookup("liegenschaften", x.liegenschaftId)} · ${lookup("gewerke", x.gewerkId)} · ${status(isOverdue(x) ? "überfällig" : x.status)}</span></div>`).join("")}</div>`;
}

function barChart(items, currency = false) {
  if (!items.length) return `<p class="muted">Keine Daten vorhanden.</p>`;
  const max = Math.max(...items.map(([, value]) => value), 1);
  return items.map(([label, value]) => `<div class="bar-row"><span>${escapeHtml(label)}</span><div class="bar"><span style="width:${Math.max(4, (value / max) * 100)}%"></span></div><strong>${currency ? euro(value) : value}</strong></div>`).join("");
}

function filterRows(rows) {
  if (!currentQuery) return rows;
  const query = currentQuery.toLowerCase();
  return rows.filter((row) => JSON.stringify(row).toLowerCase().includes(query));
}

function groupCount(rows, keyFn) {
  const map = new Map();
  rows.forEach((row) => map.set(keyFn(row), (map.get(keyFn(row)) || 0) + 1));
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function groupSum(rows, keyFn, valueFn) {
  const map = new Map();
  rows.forEach((row) => map.set(keyFn(row), (map.get(keyFn(row)) || 0) + valueFn(row)));
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function getById(type, id) {
  return state[type]?.find((x) => x.id === id);
}

function lookup(type, id) {
  const found = getById(type, id);
  return found?.name || found?.titel || found?.auftragsnummer || id || "-";
}

function status(value) {
  const v = String(value || "-");
  const css = /hoch|überfällig|defekt|kritisch|nicht empfohlen|gesperrt/.test(v) ? "status-danger" : /mittel|in Prüfung|beauftragt|eingeschränkt|Entwurf|offen|in Arbeit/.test(v) ? "status-warn" : "status-ok";
  return `<span class="status-pill ${css}">${escapeHtml(v)}</span>`;
}

function yesNo(value) {
  return value ? `<span class="status-pill status-ok">ja</span>` : `<span class="status-pill">nein</span>`;
}

function date(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("de-DE").format(new Date(value));
}

function euro(value) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(Number(value || 0));
}

function todayStart() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function sameMonth(dateValue, compare) {
  const d = new Date(dateValue);
  return d.getFullYear() === compare.getFullYear() && d.getMonth() === compare.getMonth();
}

function isOverdue(term) {
  return new Date(term.geplantesDatum) < todayStart() && !["erledigt", "storniert"].includes(term.status);
}

function byDate(key) {
  return (a, b) => new Date(a[key]) - new Date(b[key]);
}

function monthLabel(value) {
  return new Intl.DateTimeFormat("de-DE", { month: "short", year: "numeric" }).format(new Date(value));
}

function scoreLabel(score) {
  if (score >= 90) return "sehr empfehlenswert";
  if (score >= 75) return "empfehlenswert";
  if (score >= 60) return "eingeschränkt empfehlenswert";
  if (score >= 40) return "kritisch prüfen";
  return "nicht empfohlen";
}

function addInterval(dateValue, interval) {
  const date = new Date(dateValue);
  const months = { "monatlich": 1, "quartalsweise": 3, "halbjährlich": 6, "jährlich": 12, "alle 2 Jahre": 24, "alle 4 Jahre": 48 }[interval] || 12;
  date.setMonth(date.getMonth() + months);
  return date.toISOString().slice(0, 10);
}

function labelFor(type) {
  return {
    liegenschaften: "Liegenschaft", gewerke: "Gewerk", wartungsobjekte: "Wartungsobjekt", wartungstermine: "Wartungstermin",
    wartungsauftraege: "Wartungsauftrag", lieferanten: "Lieferant", lieferantenbewertungen: "Bewertung", ausschreibungen: "Ausschreibung"
  }[type] || "Datensatz";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}
