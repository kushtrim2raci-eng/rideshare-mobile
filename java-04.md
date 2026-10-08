# RideShare — Java 4 · Neon dhe PostgreSQL

## Çfarë ndërtova
Vazhdova aplikacionin e Javës 3 me kodin A–E të profesorit. Lista përdor await lexoUdhetimet(), ndërsa detajet dhe simulimi përdorin await gjejUdhetimin(id). Të gjitha lexojnë tabelën udhetimet përmes driver-it Neon në server. Faqet kanë force-dynamic për lexim të ri gjatë hapjes ose rifreskimit. schema.sql krijon tabelën dhe tri udhëtimet fiktive pa kopje gjatë ekzekutimit të përsëritur.

Krijova databazën rideshare-java4 në Neon Free përmes Vercel Marketplace dhe e lidha me projektin rideshare-mobile për Production dhe Development. Krijimi automatik i degëve për deployment dhe Neon Auth nuk janë aktivizuar. DATABASE_URL qëndron në aplikacioni/.env.local dhe përjashtohet nga Git.

## Provat që bëra
Provat më poshtë u kryen nga AI në shfletuesin lokal më 08.10.2026, me databazën reale Neon dhe të dhëna fiktive. Nuk paraqiten si provë personale e studentit ose si provë me kolegun.

### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
AI ndryshoi vetëm orën e ID 2 nga 08:15 në 08:25 në SQL Editor. Pas rifreskimit, lista shfaqi kartën e Fushë Kosovës me 08:25 dhe detajet /udhetimi/2 shfaqën po të njëjtën orë. Pastaj AI e riktheu në 08:15 dhe rifreskoi të dy ekranet: të dy shfaqën 08:15. ID 1 dhe ID 3 mbajtën orët e tyre fillestare.

### Prova 2: Lista bosh dhe rikthimi
AI shtoi WHERE false vetëm te pyetja e lexoUdhetimet. Pas rifreskimit u shfaq “Nuk ka udhëtime për momentin.” Kushti u hoq dhe pas rifreskimit u kthyen tri kartat. Nuk u fshi asnjë rresht nga databaza.

### Prova 3: Lidhja mungon, rikthimi dhe siguria
AI ndaloi serverin, riemërtoi DATABASE_URL në DATABASE_URL_PA_TEST në .env.local dhe e rinisi. Lista shfaqi “Nuk u lidhëm me databazën. Provo përsëri.” Pastaj AI e riktheu emrin DATABASE_URL dhe e rinisi serverin: u kthyen tri kartat me orët e sakta.
Kontrolli git check-ignore --no-index konfirmoi se aplikacioni/.env.local përjashtohet nga Git sipas rregullave ekzistuese. Para publikimit kontrollohen skedarët me Git; .env.local nuk përfshihet në commit. GitHub Desktop nuk është përdorur për këtë kontroll.

## Ku gjendet puna
Repository ekzistues: https://github.com/kushtrim2raci-eng/rideshare-mobile
Aplikacioni ekzistues në Vercel: https://rideshare-mobile-ruby.vercel.app
Kodi, schema.sql dhe raporti i Javës 4 ruhen në të njëjtin repository si javët e kaluara. Provat janë kryer në aplikacionin lokal me databazën e lidhur edhe me Production në Vercel.

Skedarët e kësaj jave:
- aplikacioni/schema.sql
- aplikacioni/src/lib/db.ts
- aplikacioni/src/lib/udhetimet.ts
- aplikacioni/src/app/page.tsx
- aplikacioni/src/app/udhetimi/[id]/page.tsx
- aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx
- aplikacioni/package.json dhe package-lock.json
- java-04.md dhe README.md

## Çfarë mbetet për përmirësim
Do ta provoj edhe personalisht dhe me një koleg në telefon, duke shtuar vëzhgimet reale. Do të shtoj përditësim automatik të pamjes pas ndryshimeve në databazë, sepse tani nevojitet hapje ose rifreskim i faqes.
Kërkesa “Në pritje” mbetet simulim; nuk ka rezervim real.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
AI lexoi faqen, ligjëratën dhe ushtrimet e profesorit, kontrolloi projektin e Javës 3 dhe përgatiti kodin SQL/Next.js sipas shembullit. AI krijoi dhe lidhi Neon përmes Vercel pas miratimit të studentit për integrimin, ruajti lidhjen lokalisht pa e publikuar dhe kreu tri provat në shfletues. Gjithashtu verifikoi ID 99 (“Udhëtimi nuk u gjet”), /udhetimi/3/kerkesa (“Nuk ka vende të lira.”) dhe /udhetimi/2/kerkesa (“Simulim: Në pritje”). npm run lint dhe npm run build përfunduan me sukses. Nuk është dokumentuar ende provë personale nga studenti ose nga kolegu.
