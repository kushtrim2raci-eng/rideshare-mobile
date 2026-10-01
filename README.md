# RideShare Mobile

Projekt mësimor për Programimin për Pajisje Mobile, AAB.

- `java-02.md` dhe `skica.png`: analiza dhe skica e Javës 2.
- `java-03.md`: raporti i Javës 3.
- `aplikacioni/`: Next.js me TypeScript dhe App Router.

## Nisja

Kërkohet Node.js 20.9 ose më i ri.

```powershell
cd aplikacioni
npm install
npm run dev
```

Hap adresën që shfaq terminali, zakonisht http://localhost:3000.

## Hapat e Javës 3

1. A: `src/lib/udhetimet.ts` — tri udhëtime fiktive dhe kërkimi sipas ID-së.
2. B: `src/components/KartaUdhetimi.tsx` — komponenti i ripërdorshëm.
3. C: `src/app/page.tsx` — lista e tri kartave.
4. F: `src/app/globals.css` — stilet për telefon.
5. D: `src/app/udhetimi/[id]/page.tsx` — detajet dhe kontrolli i vendeve.
6. E: `src/app/udhetimi/[id]/kerkesa/page.tsx` — kërkesa e simuluar.
7. G: `src/app/udhetimi/[id]/not-found.tsx` — ID e panjohur.

Rrugët janë brenda `aplikacioni/`. Kërkesa nuk ruhet dhe nuk dërgohet te shoferi; nuk ka databazë ose pagesa.

## Provat manuale

- Në Inspect zgjidh pamjen e telefonit me gjerësi 375 px: duhet të shfaqen tri karta pa lëvizje horizontale.
- Hap kartën 2: adresa `/udhetimi/2`, vendtakimi “Te stacioni kryesor”.
- Hap kartën 3: “Nuk ka vende të lira” është i çaktivizuar.
- Hap `/udhetimi/99`: shfaqet “Udhëtimi nuk u gjet”, me kthim te lista.
- Nga karta 2 kliko “Kërko vend”: shfaqet “Simulim: Në pritje”; kthehu te detajet dhe lista.
- Hap drejtpërdrejt `/udhetimi/3/kerkesa`: nuk duhet të shfaqet statusi në pritje.

## Kontrolli teknik

```powershell
cd aplikacioni
npm run lint
npm run build
```

## Dorëzimi

Ruaj raportin pranë këtij README. Pasi t’i provosh vetë ekranet me një koleg, përditëso raportin me rezultatet reale. Në repository-n ekzistues bëj Commit me përmbledhjen `Java 3: kartat dhe faqet`, pastaj Push origin. Mos ngarko `node_modules`, `.next` ose `.env`.

Te formulari i profesorit zgjidh Java 3 dhe vendos https://github.com/kushtrim2raci-eng/rideshare-mobile. Lexo komentin e kontrollit automatik. Nëse ka mangësi, korrigjoji dhe komento `rikontrollo` në të njëjtin dorëzim.
