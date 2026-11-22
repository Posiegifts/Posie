/* =============================================================
   A TUDÁSTÁR ADATAI
   Ezt az egy fájlt kell szerkesztened, amikor új bejegyzést teszel fel.
   A főoldal (kezmuves-tudastar.html) mindent innen számol ki: a bejegyzések számát,
   a témaköröket, az olvasási időt és a keresést is.
   ============================================================= */

/* 1. TÉMAKÖRÖK
   Bármikor átnevezheted, törölheted vagy bővítheted őket.
   - id: rövid azonosító ékezet és szóköz nélkül (a bejegyzéseknél erre hivatkozol)
   - nev: ez jelenik meg az oldalon
   - ikon: egy Tabler ikon neve (https://tabler.io/icons), pl. "ti-flask"
   A főoldalon csak az a témakör látszik, amelyikben már van bejegyzés,
   így nem kell "hamarosan" feliratot kiírni. */
const TEMAKOROK = [
  { id: "bevezeto",    nev: "Bevezető",      ikon: "ti-flower" },
  { id: "termek",      nev: "Termék és alapanyagok", ikon: "ti-flask" },
  { id: "gyertya",     nev: "Gyertyakészítés", ikon: "ti-candle" },
  { id: "vallalkozas", nev: "Vállalkozás és szabályok", ikon: "ti-scale" },
  { id: "penzugyek",   nev: "Pénzügyek",     ikon: "ti-coin" },
  { id: "ertekesites", nev: "Értékesítés és webshop", ikon: "ti-shopping-cart" },
  { id: "szallitas",   nev: "Csomagolás és szállítás", ikon: "ti-package" },
  { id: "fotozas",     nev: "Fotózás",       ikon: "ti-camera" },
  { id: "marketing",   nev: "Marketing",     ikon: "ti-speakerphone" }
];

/* 2. TANULÁSI ÚTVONAL
   A kezdőknek ajánlott sorrend. Minden lépés egy témakörre mutat.
   Csak az a lépés jelenik meg, amelyik témakörben már van bejegyzés. */
const UTVONAL = [
  { cim: "Termék",       temakor: "termek" },
  { cim: "Vállalkozás",  temakor: "vallalkozas" },
  { cim: "Értékesítés",  temakor: "ertekesites" },
  { cim: "Szállítás",    temakor: "szallitas" },
  { cim: "Marketing",    temakor: "marketing" }
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
    cim: "Miért írom ezt a blogot?",
    link: "miert-irom-ezt-a-blogot.html",
    datum: "2026-11-22",
    temakor: "bevezeto",
    perc: 2,
    kivonat: "Hogyan lett a Posie gyertyamárkából egy kézműves tudástár, és mit találsz itt, ha a saját kézműves vállalkozásodba vágnál bele.",
    borito: "kepek/miert-irom-ezt-a-blogot.jpg",
    cimkek: ["bemutatkozás", "Posie", "kezdőknek"],
    kiemelt: true
  }
];

/* 4. BEÁLLÍTÁSOK
   A számláló (bejegyzések, témakörök, olvasnivaló) csak akkor jelenik meg,
   ha legalább ennyi bejegyzés van. Így az elején nem látszik az, hogy "1 bejegyzés". */
const SZAMLALO_EZTOL = 10;
