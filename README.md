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
- `public/logo-full.png` — pun logo (ikonica + tekst), koristi se kao logo u JSON-LD
- `public/og-image.jpg` — slika koja se prikazuje kad se link podeli (Facebook, Viber, WhatsApp...)
- `public/o-nama.jpg` — tvoja terenska fotografija (Leica total stanica), prikazana u "O nama" sekciji

## Kako da sajt "iskače" na Google-u za geodeziju (SEO)

Već je podešeno u kodu, ali evo šta radi šta i šta možeš dodatno da uradiš:

1. **Ključne reči (`keywords` u `app/layout.tsx`)** — Google danas ne koristi meta-keywords tag direktno za rangiranje, ali je i dalje dobra praksa i neki manji pretraživači ga čitaju. Bitnije je da se te iste fraze prirodno pojavljuju **u samom tekstu sajta** (naslovi, opisi usluga) — to je već urađeno (npr. "Geodeta Prijepolje" u hero sekciji).
   - Ako želiš da dodaš/promeniš ključne reči, izmeni niz u `metadata.keywords` u `app/layout.tsx`, i po mogućstvu ubaci istu frazu i u vidljiv tekst neke sekcije (u `components/`).
   - Dobre dodatne fraze za razmišljanje: "geodetski snimak", "legalizacija objekta geodeta", "geodeta za građevinsku dozvolu", ime tvog mesta + "geodeta" (npr. "geodeta Sjenica").

2. **`title` i `description`** — ovo Google STVARNO koristi i prikazuje u rezultatima pretrage. Već sadrže "geodeta Prijepolje" i glavne usluge. Ako dodaš novu uslugu, ažuriraj `description` u `app/layout.tsx`.

3. **JSON-LD (`ProfessionalService` schema)** — ovo je "razgovor" sa Google-om iza scene: adresa, telefon, radno vreme, koordinate. Zahvaljujući ovome Google može da prikaže sajt u Google Maps/lokalnim rezultatima ("geodeta u blizini"). **Obavezno prijavi sajt na [Google Search Console](https://search.google.com/search-console)** i na [Google Business Profile](https://www.google.com/business/) (besplatno) — bez toga JSON-LD sam po sebi ne garantuje da će te Google indeksirati.

4. **`sitemap.xml` i `robots.txt`** — automatski se generišu na `/sitemap.xml` i `/robots.txt`. Kada objaviš sajt na pravom domenu, prijavi sitemap link u Google Search Console da Google brže indeksira stranicu.

5. **Domen** — adresa sajta se podešava jednim mestom: env promenljiva `NEXT_PUBLIC_SITE_URL` (podrazumevano `https://www.geomonting033.rs`, vidi `lib/site.ts`).

6. **Alt tekst na slikama** — svaka slika već ima opisan `alt` tekst sa ključnim rečima (npr. "Leica totalna stanica na terenu — geodetsko snimanje..."), što takođe pomaže Google Images pretrazi.

## Objavljivanje na Cloudflare Pages

Sajt se builduje kao **statički sajt** (`output: "export"` u `next.config.mjs`) u folder `out/`, pa mu ne treba server.

**Preko GitHub-a (preporučeno — svaki push automatski objavljuje novu verziju):**

1. Push-uj projekat na GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → izaberi repo.
3. Podešavanja builda:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NEXT_PUBLIC_SITE_URL` = pravi domen (npr. `https://www.geomonting033.rs`) — koristi se za sitemap, robots i Open Graph
4. **Save and Deploy.** Sajt će biti na `https://geomonting033.pages.dev`, a pod **Custom domains** možeš dodati svoj domen.

**Ako je Cloudflare napravio Worker projekat** (deploy komanda `npx wrangler deploy`): Build command `npm run build`, Deploy command `npx wrangler deploy`. Sve ostalo je podešeno u `wrangler.toml`.

Node verzija je zadata u `.node-version` (20).

**Ručno, iz terminala (Wrangler):**

```bash
npm run build
npx wrangler pages deploy out
```

`public/_headers` podešava keširanje slika i osnovna sigurnosna zaglavlja na Cloudflare-u.

## Slike

- `hero.jpg`, `ekspresnost.jpg`, `og-image.jpg` — fotografije sa starog sajta geomonting033.wordpress.com
- `profesionalnost.jpg` — geodeta sa Leica GNSS prijemnikom
- `o-nama.jpg` — vaša terenska fotografija (Leica TS10)
- `iskustvo.jpg` — vaša terenska fotografija (Leica, put u magli)

## Napomena o fontovima

Fontovi (Space Grotesk, Inter, JetBrains Mono) se učitavaju direktno iz Google Fonts preko `<link>` taga u `app/layout.tsx` — isto kao u originalnoj HTML verziji. Ovo je namerno (umesto `next/font/google`) da build ne zavisi od internet konekcije u trenutku kada praviš build, već se fontovi učitavaju normalno u browseru korisnika.
