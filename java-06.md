# RideShare — Java 6 · PWA dhe puna offline

## Çfarë ndërtova
Në projektin ekzistues RideShare shtova manifestin, service worker dhe lexuesin publik offline sipas kodit A–F të ushtrimeve. Manifesti përcakton emrin RideShare AAB, ikonat dhe hapjen standalone. Pwa.tsx regjistron /sw.js dhe kërkon listën pasi worker-i kontrollon faqen. GET /api/udhetimet rishfrytëzon lexoUdhetimet() dhe kthen vetëm id, nisja, destinacioni, ora, vendtakimi dhe vende nga Neon.

Service worker përdor network-first: provon serverin, ruan përgjigjen e suksesshme me kohën dhe në dështim lexon kopjen e fundit. Cache rideshare-public-v1 përmban vetëm /offline.html, dy ikonat dhe /api/udhetimet. Paneli, hyrja dhe POST nuk ruhen. Lejet e Javës 5 mbeten në server. Dokumenti offline përmban stilet dhe skriptin brenda tij, pa varësi nga Next.js chunks.

## Provat që bëra
Provat më poshtë u kryen nga AI me automatizim real të Microsoft Edge, me viewport 375×812, më 22.10.2026. Nuk pretendoj se i kam kryer personalisht me dorë.

### Prova 1: Manifesti dhe vizita online
U hap http://localhost:3000 dhe u lexua http://localhost:3000/manifest.webmanifest. Emri ishte RideShare AAB, short_name RideShare dhe display standalone. Dy imazhet u ngarkuan dhe u verifikuan përmasat reale: /icons/icon-192.png = 192×192 dhe /icons/icon-512.png = 512×512.

Worker-i mori kontrollin e faqes dhe cache përmbante /offline.html, dy ikonat dhe /api/udhetimet. Në http://localhost:3000/offline.html u shfaqën tri karta nga Neon: Prishtinë 08:00, Fushë Kosovë 08:15 dhe Lipjan 07:45. Mesazhi ishte “Lista erdhi nga serveri. Lexo sërish para çdo veprimi.” Koha e ruajtjes në shfletues ishte 22.10.2026, 18:21:40. Instalimi nuk u provua, sepse Edge u përdor pa ndërfaqe grafike (headless), ku nuk u kontrollua oferta e instalimit.

### Prova 2: Pa internet dhe pas rifreskimit
Ndërprerja u simulua vetëm në kontekstin e shfletuesit RideShare me Playwright context.setOffline(true), që është ekuivalenti i provës Network → Offline. Lidhja e procesit me Neon mbeti aktive për provën pasuese.

U hap / dhe u rifreskua faqja pa rrjet. U shfaq dokumenti offline me tri kartat dhe orët 08:00, 08:15 dhe 07:45. Koha e kopjes mbeti 22.10.2026, 18:21:40. Mesazhi ishte “Lista e fundit e ruajtur · Mund të jetë vjetruar. Serveri nuk u arrit.” Butoni “Kërko vend · kërkon lidhje dhe server” ishte i çaktivizuar. Kjo provon leximin e kopjes pas rifreskimit. Nuk konfirmon rezervim: vendet dhe ora mund të kenë ndryshuar dhe serveri nuk ka verifikuar veprimin.

### Prova 3: Lidhja rikthehet
Ndërsa RideShare mbeti offline, ora e ID 2 u lexua drejtpërdrejt nga Neon: 08:15. AI ekzekutoi UPDATE për ta ndryshuar në 08:25. Rifreskimi i listës offline ende shfaqi 08:15 nga kopja.

Pas context.setOffline(false), karta vazhdoi të tregonte 08:15 para klikimit. Pas “Rifresko listën”, ID 2 tregoi 08:25, mesazhi tregoi burimin server dhe koha e ruajtjes u bë 22.10.2026, 18:21:41. Më pas AI riktheu orën fillestare 08:15 në Neon dhe klikoi sërish “Rifresko listën”; karta tregoi 08:15. Rikthimi u përfshi edhe në bllokun finally të provës për të ruajtur gjendjen fillestare në rast gabimi.

## Ku gjendet puna
Repository: https://github.com/kushtrim2raci-eng/rideshare-mobile

Raporti java-06.md ruhet pranë README, jashtë aplikacioni/.

Skedarët e shtuar:
- aplikacioni/src/app/manifest.ts
- aplikacioni/src/app/api/udhetimet/route.ts
- aplikacioni/public/sw.js
- aplikacioni/public/offline.html
- aplikacioni/public/icons/icon-192.png
- aplikacioni/public/icons/icon-512.png
- aplikacioni/src/components/Pwa.tsx

U ndryshua aplikacioni/src/app/layout.tsx për të përfshirë Pwa. Provat u kryen lokalisht në http://localhost:3000. Java 6 nuk është publikuar në Vercel.

## Çfarë mbetet për përmirësim
U provua edhe mungesa e kopjes: pas fshirjes vetëm të /api/udhetimet nga cache e kontekstit të testimit dhe rifreskimit offline, u shfaq “Ende nuk ka listë të ruajtur. Hape aplikacionin me internet dhe provo përsëri.” Nuk u shfaq asnjë kartë fiktive. Pas rikthimit online, lista u ngarkua përsëri.

Në vizitën e parë krejt pa internet nuk ka as service worker ose dokument offline të instaluar; shfletuesi mund të shfaqë gabimin e vet të rrjetit. Kopja ruhet vetëm në atë shfletues, mund të fshihet dhe nuk është backup i databazës. Leximi offline nuk garanton vende të lira ose orë aktuale dhe nuk lejon rezervim. Mbetet prova manuale e instalimit në telefon dhe publikimi në Vercel.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
AI lexoi ligjëratën, ushtrimet dhe modelin e raportit, mori kodin A–F dhe ikonat nga faqja e profesorit dhe i integroi në të njëjtin repository. AI ekzekutoi lint dhe build, të dyja me sukses, dhe kreu tri provat në Edge me Playwright, përfshirë ndryshimin e përkohshëm dhe rikthimin e orës në Neon. Ky raport përshkruan rezultatet e vëzhguara nga ato prova. Kredencialet mbeten lokalisht dhe nuk përfshihen në kodin e versionuar ose në raport.
