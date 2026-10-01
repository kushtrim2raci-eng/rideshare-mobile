# RideShare — Java 3

## Çfarë ndërtova
Ndërtova listën me tri udhëtime fiktive, faqen dinamike të detajeve dhe faqen e kërkesës së simuluar në Next.js me App Router. Shtova komponentin KartaUdhetimi, butonin e çaktivizuar kur vendet janë zero dhe faqen për ID të panjohur, sipas hapave A–G të profesorit.

## Provat që bëra
Provat më poshtë u kryen nga AI në shfletuesin lokal më 01.10.2026. Nuk paraqiten si provë personale e studentit ose si provë me kolegun.

### Prova 1: Lista në telefon
AI hapi faqen kryesore në gjerësi 375 px: priteshin tri karta pa lëvizje anash dhe u shfaqën saktësisht tri karta; gjerësia e përmbajtjes ishte 360 px, brenda pamjes 375 px, pa tejkalim horizontal.

### Prova 2: Detajet e udhëtimit të dytë
AI klikoi kartën 2: u hap /udhetimi/2 me vendtakimin “Te stacioni kryesor”, siç pritej. Karta 3 shfaqi zero vende dhe butonin “Nuk ka vende të lira” të çaktivizuar; /udhetimi/99 shfaqi “Udhëtimi nuk u gjet” dhe lidhja e kthimit hapi sërish listën me tri karta.

### Prova 3: Kërkesa në pritje
AI klikoi “Kërko vend” nga karta 2: u shfaq “Simulim: Në pritje” dhe sqarimi se kërkesa nuk është dërguar te shoferi; lidhjet e kthimit hapën detajet dhe pastaj listën. Hapja e drejtpërdrejtë e /udhetimi/3/kerkesa shfaqi “Nuk ka vende të lira.”, jo statusin në pritje.

## Çfarë do të përmirësoj
Do ta provoj personalisht dhe me një koleg në telefon për të kontrolluar qartësinë e teksteve dhe do të shtoj vëzhgimet reale në raport para dorëzimit.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
AI lexoi udhëzimin e profesorit, raportin dhe skicën e Javës 2, krijoi aplikacionin dhe shtoi skedarët sipas shembullit A–G. AI provoi rrjedhën në shfletues me pamje telefoni dhe ekzekutoi npm run lint dhe npm run build; të dy përfunduan me sukses. Në këtë bisedë nuk është dokumentuar provë nga studenti ose kolegu.
