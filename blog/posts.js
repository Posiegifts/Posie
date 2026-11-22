/* =============================================================
   A TUDÁSTÁR ADATAI
   Ezt az egy fájlt kell szerkesztened, amikor új bejegyzést teszel fel.
   A főoldal (kezmuves-tudastar.html) mindent innen számol ki: a bejegyzések számát,
   a témaköröket, az olvasási időt és a keresést is.
   ============================================================= */

/* 1. TÉMAKÖRÖK: a Bevezető és a blog 9 sorozata
   Bármikor átnevezheted, törölheted vagy bővítheted őket.
   - id: rövid azonosító ékezet és szóköz nélkül (a bejegyzéseknél erre hivatkozol)
   - nev: ez jelenik meg az oldalon
   - ikon: egy Tabler ikon neve (https://tabler.io/icons), pl. "ti-flask"
   A főoldalon csak az a témakör látszik, amelyikben már van bejegyzés,
   így nem kell "hamarosan" feliratot kiírni. */
const TEMAKOROK = [
  { id: "bevezeto",    nev: "Bevezető",            ikon: "ti-flower" },
  { id: "indulas",     nev: "1. Indulás előtt",     ikon: "ti-rocket" },
  { id: "termek",      nev: "2. A termék",          ikon: "ti-candle" },
  { id: "biztonsag",   nev: "3. Biztonságos termék", ikon: "ti-shield-check" },
  { id: "hivatalos",   nev: "4. Hivatalos működés", ikon: "ti-file-certificate" },
  { id: "marka",       nev: "5. A márka",           ikon: "ti-sparkles" },
  { id: "ertekesites", nev: "6. Értékesítés",       ikon: "ti-shopping-bag" },
  { id: "kiszolgalas", nev: "7. Kiszolgálás",       ikon: "ti-truck" },
  { id: "marketing",   nev: "8. Marketing",         ikon: "ti-speakerphone" },
  { id: "novekedes",   nev: "9. Növekedés",         ikon: "ti-trending-up" }
];

/* 2. TANULÁSI ÚTVONAL
   A kezdőknek ajánlott sorrend. Minden lépés egy témakörre mutat.
   Csak az a lépés jelenik meg, amelyik témakörben már van bejegyzés. */
const UTVONAL = [
  { cim: "Indulás előtt",      temakor: "indulas" },
  { cim: "A termék",           temakor: "termek" },
  { cim: "Biztonságos termék", temakor: "biztonsag" },
  { cim: "Hivatalos működés",  temakor: "hivatalos" },
  { cim: "A márka",            temakor: "marka" },
  { cim: "Értékesítés",        temakor: "ertekesites" },
  { cim: "Kiszolgálás",        temakor: "kiszolgalas" },
  { cim: "Marketing",          temakor: "marketing" },
  { cim: "Növekedés",          temakor: "novekedes" }
];

/* 3. BEJEGYZÉSEK
   Új bejegyzésnél másold le az alábbi blokkot { ... }, és írd át az adatait.
   A sorrend nem számít, az oldal dátum szerint rendez (legújabb elöl).
   - cim: a bejegyzés címe
   - link: a bejegyzés HTML fájljának neve (ebben a mappában)
   - datum: megjelenés napja ÉÉÉÉ-HH-NN formában
   - temakor: egy id a fenti TEMAKOROK listából
   - perc: olvasási idő percben
   - kivonat: 1–2 mondat, ez látszik a kártyán, és a kereső is ebben keres
   - borito: a borítókép útvonala (a képeket a kepek mappába tedd)
   - cimkek: extra keresőszavak (nem kötelező)
   - kiemelt: true, ha ez legyen a "Kezdd itt" kártya (csak egynél legyen true) */
const BEJEGYZESEK = [
  {
    cim: "Amit szívesen tudtam volna az elején",
    link: "amit-szivesen-tudtam-volna-az-elejen.html",
    datum: "2026-11-22",
    temakor: "bevezeto",
    perc: 2,
    kivonat: "Miért gyűjtöttem össze a Posie gyertyamárka tapasztalatait, és mit találsz itt, ha kezdőként vágnál bele a saját kézműves vállalkozásodba.",
    borito: "kepek/amit-szivesen-tudtam-volna-az-elejen.jpg",
    cimkek: ["bemutatkozás", "Posie", "kezdőknek", "kézműves vállalkozás", "gyertyakészítés"],
    kiemelt: true
  },
  {
    cim: "Know your craft: az első gyertyáimtól a saját vállalkozásig",
    link: "know-your-craft.html",
    datum: "2026-11-22",
    temakor: "bevezeto",
    perc: 4,
    kivonat: "Mit tanultam a szójaviaszról, a kanócokról és a tégelyekről az első gyertyáim után, és hogyan olvasd a 9 sorozatból álló tudástárat.",
    borito: "kepek/know-your-craft.jpg",
    cimkek: ["Posie története", "hobbiból vállalkozás", "gyertyakészítés kezdőknek", "kézműves vállalkozás indítása", "sorozatok", "szójaviasz", "kanóc", "tégely", "kerámiapor"]
  }
];

/* 4. BEÁLLÍTÁSOK
   A számláló (bejegyzések, témakörök, olvasnivaló) csak akkor jelenik meg,
   ha legalább ennyi bejegyzés van. Így az elején nem látszik az, hogy "1 bejegyzés". */
const SZAMLALO_EZTOL = 10;
