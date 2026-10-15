# RideShare — Java 5 · Hyrja dhe lejet

## Çfarë ndërtova
Shtova hyrjen me GitHub përmes NextAuth v4, panelin /panel dhe ndryshimin e orës në server. Identiteti vjen nga sesioni i verifikuar; roli lexohet nga tabela profilet në Neon; pronësia kontrollohet nga shofer_id. Profili i ri krijohet si udhetar. Formulari nuk cakton rolin ose pronarin. Serveri kontrollon sesionin, rolin, formatin e orës dhe pronarin para ndryshimit.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
Pa hyrje, /panel shfaqi Hyr me GitHub (verifikuar nga AI në faqen lokale). Hyra personalisht me GitHub; paneli shfaqi emrin kushtrim2raci-eng. Pas caktimit të rolit në Neon u shfaq shofer. Klikova Dil dhe u shfaq përsëri Hyr me GitHub. Hyra sërish dhe rifreskova; emri dhe roli shofer mbetën. Këta hapa i konfirmova në bisedë dhe dërgova pamjen e panelit pas rihyrjes.

### Prova 2: Shoferi ndryshon udhëtimin e vet
Si shofer/pronar i ID 2 e ruajta orën në 08:25. Paneli shfaqi Ora u ruajt me sukses. AI verifikoi drejtpërdrejt në Neon, listën lokale dhe detajet /udhetimi/2 që ora ishte 08:25. Pas provës së refuzimit e riktheva ID 2 në 08:15; AI e konfirmoi rikthimin në Neon. Fusha e formularit përdor vlerën fillestare 08:15 pas ridrejtimit, ndaj ruajtja u verifikua veçmas në databazë dhe në faqe.

### Prova 3: Veprimi pa leje refuzohet
Ndryshova ID-në e formularit nga 2 në 1 përmes Inspect dhe provova ruajtjen. Paneli shfaqi Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi. Dërgova pamjen e refuzimit. AI verifikoi në Neon që ID 1 mbeti 08:00 dhe pronari i saj mbeti DEMO-SHOFER-2. Pas provave ID 2 u rikthye në 08:15; ID 3 mbeti 07:45. Provat shtesë me heqjen e rolit dhe formularin pas daljes nuk janë kryer.

## Ku gjendet puna
Repository: https://github.com/kushtrim2raci-eng/rideshare-mobile
Raporti java-05.md ruhet pranë README.
Skedarët e javës 5:
- aplikacioni/schema-java05.sql
- aplikacioni/src/lib/auth.ts
- aplikacioni/src/lib/lejet.ts
- aplikacioni/src/components/Hyrja.tsx
- aplikacioni/src/app/api/auth/[...nextauth]/route.ts
- aplikacioni/src/app/panel/actions.ts
- aplikacioni/src/app/panel/page.tsx
- aplikacioni/src/app/page.tsx
- aplikacioni/package.json dhe package-lock.json

Java 5 u provua lokalisht në http://localhost:3000. Publikimi i javës 5 në Vercel nuk është kryer. Commit, Push dhe Issue e dorëzimit mbeten hapat pasues.

## Çfarë mbetet për përmirësim
Kërkesa për vend është ende simulim. Më pas do të shtoja rezervimin real me kontroll të vendeve të lira në databazë. Mbeten edhe sfidat opsionale të lejeve dhe konfigurimi i veçantë OAuth për publikim në Vercel.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
AI lexoi udhëzimet e profesorit, përshtati kodin A–G, instaloi NextAuth 4.24.15, përgatiti konfigurimin privat lokal dhe ekzekutoi migrimin SQL. Unë krijova OAuth App, vendosa kredencialet lokalisht dhe provova hyrjen/daljen, ruajtjen dhe refuzimin në shfletues. AI caktoi profilin tim si shofer/pronar të ID 2 në Neon, kontrolloi databazën, listën dhe detajet dhe përgatiti raportin nga provat e konfirmuara. Kredencialet nuk përfshihen në raport ose kodin e versionuar.

## Verifikimi teknik nga AI
Më 15.10.2026, npm run lint dhe npm run build kaluan. Faqja kryesore, /panel dhe /udhetimi/2 kthyen HTTP 200. npm audit --omit=dev raportoi zero dobësi në paketat e prodhimit. git check-ignore konfirmoi se aplikacioni/.env.local përjashtohet nga Git. Gjendja përfundimtare në Neon: ID 1 = 08:00, ID 2 = 08:15, ID 3 = 07:45.
