# GEO MONTING 033 — Next.js sajt

Next.js (App Router) verzija sajta, sa pravim logoom i terenskom fotografijom, i sa SEO podešavanjima za lokalnu pretragu (geodeta u Prijepolju i okolini).

## Pokretanje lokalno

Potreban je Node.js 18+. U folderu projekta:

```bash
npm install
npm run dev
```

Sajt je na `http://localhost:3000`. Za produkcioni build:

```bash
npm run build
npm run start
```

## Struktura

- `app/layout.tsx` — meta podaci (title, description, keywords, Open Graph, Twitter card) i JSON-LD struktuirani podaci (schema.org `ProfessionalService`) za Google
- `app/page.tsx` — spaja sve sekcije
- `app/robots.ts` i `app/sitemap.ts` — automatski generišu `/robots.txt` i `/sitemap.xml`
- `app/globals.css` — sav CSS (boje, tipografija, layout)
- `components/` — svaka sekcija je posebna komponenta
- `public/logo-icon.png` — ikonica loga (header, footer, favicon)
- `public/logo-full.png` — pun logo (ikonica + tekst), koristi se za Open Graph/deljenje linkova
- `public/o-nama.jpg` — tvoja terenska fotografija (Leica total stanica), prikazana u "O nama" sekciji

## Kako da sajt "iskače" na Google-u za geodeziju (SEO)

Već je podešeno u kodu, ali evo šta radi šta i šta možeš dodatno da uradiš:

1. **Ključne reči (`keywords` u `app/layout.tsx`)** — Google danas ne koristi meta-keywords tag direktno za rangiranje, ali je i dalje dobra praksa i neki manji pretraživači ga čitaju. Bitnije je da se te iste fraze prirodno pojavljuju **u samom tekstu sajta** (naslovi, opisi usluga) — to je već urađeno (npr. "Geodeta Prijepolje" u hero sekciji).
   - Ako želiš da dodaš/promeniš ključne reči, izmeni niz u `metadata.keywords` u `app/layout.tsx`, i po mogućstvu ubaci istu frazu i u vidljiv tekst neke sekcije (u `components/`).
   - Dobre dodatne fraze za razmišljanje: "geodetski snimak", "legalizacija objekta geodeta", "geodeta za građevinsku dozvolu", ime tvog mesta + "geodeta" (npr. "geodeta Sjenica").

2. **`title` i `description`** — ovo Google STVARNO koristi i prikazuje u rezultatima pretrage. Već sadrže "geodeta Prijepolje" i glavne usluge. Ako dodaš novu uslugu, ažuriraj `description` u `app/layout.tsx`.

3. **JSON-LD (`ProfessionalService` schema)** — ovo je "razgovor" sa Google-om iza scene: adresa, telefon, radno vreme, koordinate. Zahvaljujući ovome Google može da prikaže sajt u Google Maps/lokalnim rezultatima ("geodeta u blizini"). **Obavezno prijavi sajt na [Google Search Console](https://search.google.com/search-console)** i na [Google Business Profile](https://www.google.com/business/) (besplatno) — bez toga JSON-LD sam po sebi ne garantuje da će te Google indeksirati.

4. **`sitemap.xml` i `robots.txt`** — automatski se generišu na `/sitemap.xml` i `/robots.txt`. Kada objaviš sajt na pravom domenu, prijavi sitemap link u Google Search Console da Google brže indeksira stranicu.

5. **Zameni `https://www.geomonting033.rs`** — ovo je privremeni/placeholder domen ubačen u `app/layout.tsx`, `app/sitemap.ts` i `app/robots.ts`. Čim registruješ pravi domen, zameni ga svuda (traži `geomonting033.rs` kroz projekat).

6. **Alt tekst na slikama** — svaka slika već ima opisan `alt` tekst sa ključnim rečima (npr. "Leica totalna stanica na terenu — geodetsko snimanje..."), što takođe pomaže Google Images pretrazi.

## Objavljivanje (deploy)

Najjednostavnije je preko [Vercel](https://vercel.com) — poveži GitHub repo i sajt se automatski builduje i objavljuje pri svakom push-u. Alternativa: bilo koji hosting koji podržava Node.js (`npm run build` pa `npm run start`).

## Napomena o fontovima

Fontovi (Space Grotesk, Inter, JetBrains Mono) se učitavaju direktno iz Google Fonts preko `<link>` taga u `app/layout.tsx` — isto kao u originalnoj HTML verziji. Ovo je namerno (umesto `next/font/google`) da build ne zavisi od internet konekcije u trenutku kada praviš build, već se fontovi učitavaju normalno u browseru korisnika.
