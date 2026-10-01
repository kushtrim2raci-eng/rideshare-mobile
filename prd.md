# PRD — AAB RideShare

**Kursi:** Programimi për Pajisje Mobile (2026/2027), Kolegji AAB  
**Studenti:** Kushtrim Raçi · RE-89889/24  
**Data dhe versioni:** 1 tetor 2026 · 1.0, draft për MVP  
**Produkti:** PWA (aplikacion web progresiv) për bashkudhëtim të studentëve AAB.

## 1. Përdoruesi dhe problemi real

Studentët pa veturë që udhëtojnë nga qytetet e tjera drejt AAB-së në Prishtinë kanë vështirësi të gjejnë udhëtim në orarin e ligjëratave dhe të konfirmojnë një vend. Sot përdorin autobusë ose mesazhe në grupe WhatsApp. Studentët shoferë mund të kenë ulëse të lira, por kërkesat dhe konfirmimet nuk janë të strukturuara. Këto janë supozime fillestare, jo gjetje të verifikuara.

## 2. Evidenca — tri biseda të planifikuara

Intervistat nuk janë kryer ende; nuk paraqiten citime apo shifra si rezultate reale.

- **Student udhëtar:** Si e gjen udhëtimin dhe si e di që vendi është konfirmuar?
- **Student shofer:** Si e publikon orarin, i pranon kërkesat dhe numëron vendet e lira?
- **Student që përdor grupe mesazhesh:** Çfarë të pengon dhe a do të bashkudhëtoje me një koleg të verifikuar nga AAB?

Për secilën bisedë do të regjistroj datën, rolin dhe rastin konkret me pëlqimin e personit. Kontakti real dhe konteksti i shërbimit do të konfirmohen në Javën 2. Ligjërata kërkon biznes real: RideShare vazhdon projektin ekzistues, por lidhja me një biznes/operator ose miratimi i profesorit për këtë kontekst ende duhet konfirmuar.

## 3. Hipoteza e vlerës

Nëse studentët shohin udhëtime me orar, vendtakim dhe vende të lira dhe marrin konfirmim të qartë nga shoferi, atëherë mund ta organizojnë bashkudhëtimin pa kërkuar vazhdimisht në mesazhe. **Pragu i propozuar:** të paktën 4 nga 5 studentë pilot gjejnë udhëtimin, dërgojnë kërkesën dhe dallojnë statusin Në pritje nga Konfirmuar pa ndihmë. Ky është objektiv për testim, jo rezultat i arritur.

## 4. Rrjedha kryesore — maksimumi pesë hapa

1. Studenti kyçet dhe verifikon emailin zyrtar AAB.
2. Shoferi publikon udhëtimin; udhëtari shikon listën me destinacionin, orarin dhe vendet e lira.
3. Udhëtari hap detajet me vendtakimin dhe kërkon një vend.
4. Serveri ruan kërkesën si Në pritje; shoferi e konfirmon ose refuzon.
5. Udhëtari sheh rezultatin; vetëm konfirmimi rezervon një vend dhe ul numrin e vendeve të lira.

## 5. Kufijtë e MVP-së — produkti minimal i përdorshëm

**Brenda — maksimumi tri funksione:**

1. Autentikim dhe verifikim me email institucional AAB.
2. Publikim dhe shikim udhëtimesh me orar, vendtakim, vende të lira dhe kontribut të dakorduar.
3. Kërkesë për një vend dhe konfirmim/refuzim nga shoferi, me status dhe numërim të saktë të vendeve.

**Jashtë:** pagesa online me kartelë, GPS live, chat i brendshëm dhe vlerësime. Lista e fundit mund të lexohet offline me paralajmërim se mund të jetë e vjetruar; publikimi, kërkesa dhe konfirmimi kërkojnë lidhje me serverin.

## 6. Kriteret e pranimit — çfarë do të bëjë dhe si do ta provoj

| ID | Duke pasur / Kur / Atëherë | Prova e planifikuar |
| --- | --- | --- |
| AC-1 | Duke pasur një email jashtë domain-it AAB ose email të paverifikuar, kur tentohet hyrja në funksionet e rezervimit, atëherë sistemi refuzon qasjen. | Test autentikimi dhe kërkesë direkte API. |
| AC-2 | Duke pasur një shofer të verifikuar, kur publikon udhëtim me orë të ardhshme dhe 3 vende, atëherë ai shfaqet me të njëjtat të dhëna në listë dhe detaje; të dhënat e pavlefshme refuzohen. | Dy sesione dhe test validimi. |
| AC-3 | Duke pasur udhëtim me vende të lira, kur dërgohet një kërkesë, atëherë serveri ruan një kërkesë Në pritje; klikimi i dyfishtë/riprovimi nuk krijon kërkesë tjetër. | Dy dërgime identike, krahasim ID-je dhe numërim në databazë. |
| AC-4 | Duke pasur 3 vende dhe një kërkesë në pritje, kur shoferi e konfirmon, atëherë statusi bëhet Konfirmuar dhe vendet bëhen 2; refuzimi nuk ul vendet. | Test integrimi dhe kontroll pas rifreskimit. |
| AC-5 | Duke pasur vetëm 1 vend dhe dy kërkesa, kur konfirmohen njëkohësisht, atëherë vetëm njëra konfirmohet dhe vendet nuk bëhen negative. | Test me dy kërkesa paralele dhe kontroll në databazë. |
| AC-6 | Duke pasur 0 vende ose ID të panjohur, kur hapet udhëtimi apo dërgohet kërkesë drejtpërdrejt, atëherë nuk krijohet rezervim dhe shfaqet mesazh i qartë. | Provë në telefon dhe test API që anashkalon butonin. |
| AC-7 | Duke pasur udhëtar ose shofer tjetër, kur tenton të ndryshojë udhëtimin/konfirmojë kërkesën e një shoferi tjetër, atëherë serveri dhe RLS e refuzojnë. | Test negativ për autorizimin; fshehja e butonit nuk mjafton. |
| AC-8 | Duke pasur listë të ruajtur, kur humbet interneti, atëherë shfaqen offline dhe koha e ruajtjes; kërkesa nuk shfaqet si e ruajtur/konfirmuar pa përgjigje serveri. | Modalitet offline dhe ndërprerje rrjeti gjatë dërgimit; riprovim pa dublikatë. |

Ndërfaqja do të provohet në telefon me gjerësi 375 px, pa lëvizje horizontale. Për secilin test do të ruhen rezultati, hapat dhe prova përkatëse në repository; kriteret ende nuk janë shënuar si të kaluara.

## 7. Modeli minimal dhe kufijtë e besimit

**Teknologjitë e synuara:** Next.js, React, TypeScript; Supabase PostgreSQL, Auth dhe RLS; PWA me Service Worker.
```text
profiles (id, full_name, email, role)
rides (id, driver_id, origin, destination, meeting_point,
       departure_time, available_seats, contribution_eur, status)
bookings (id, ride_id, passenger_id, status, created_at)
```

Sesioni përcakton përdoruesin; serveri nuk i beson rolit ose ID-së së udhëtarit nga telefoni. Çifti `(ride_id, passenger_id)` është unik për të shmangur kërkesat e dyfishta. Konfirmimi dhe ulja e vendeve kryhen në një transaksion me kontroll të konkurrencës. Vetëm pronari i udhëtimit mund të vendosë për kërkesat; udhëtari sheh kërkesat e veta. RLS zbaton lejet dhe të dhënat personale nuk shfaqen në listën publike.

## 8. Rreziku kryesor dhe prova para ndërtimit

**Rreziku:** studentët nuk u besojnë kolegëve të panjohur, edhe kur emaili AAB është verifikuar. Në Javën 2 do të provoj prototipin me pesë studentë, përfshirë shoferë dhe udhëtarë, dhe do t'i pyes çfarë u nevojitet për të pranuar bashkudhëtimin. Do të mas përfundimin e rrjedhës dhe kuptimin e statusit. Nëse më pak se 4/5 e kuptojnë rrjedhën ose besimi mbetet pengesë, do të ndryshoj hipotezën dhe prototipin para implementimit.

**Gjendja aktuale:** Java 03 shfaq udhëtime fiktive dhe kërkesë të simuluar; nuk ka databazë dhe nuk dërgon kërkesë te shoferi. PRD-ja përshkruan synimin e MVP-së për semestrin.

**Burimi:** `ligjerata-01-aab-biznes-real-2026-v2.pptx`, slajdet 2–4, 11, 14–17 dhe 19–27; shablloni PRD dhe projekti ekzistues RideShare i Javës 03.
