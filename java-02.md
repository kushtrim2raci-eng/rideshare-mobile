# RideShare — Java 2

**Shkurtesat:** MVP (Minimum Viable Product – produkti minimal i përdorshëm); AI (Artificial Intelligence – inteligjencë artificiale).

## 1. Problemi
Çfarë vështirësie kanë studentët që udhëtojnë për në AAB?

Në skenarin e ligjëratës, studentët nuk e gjejnë lehtë njëri-tjetrin për të udhëtuar për në AAB, sepse informacioni është i shpërndarë në biseda. Arta nuk di kush niset në orën që i duhet dhe pret përgjigje në disa biseda. Dreni ka dy vende të lira, por nuk di kush ka nevojë për to.

## 2. Përdoruesit
Çfarë dëshiron shoferi? Çfarë dëshiron udhëtari?

Shoferi, Dreni, dëshiron të publikojë nisjen dhe vendet e lira, të shqyrtojë kërkesat dhe t'i konfirmojë ose refuzojë ato. Udhëtarja, Arta, dëshiron të gjejë një udhëtim të përshtatshëm, të kërkojë një vend dhe të marrë përgjigjen e shoferit. Të dy duhet të shohin të njëjtin konfirmim dhe numri i vendeve të lira duhet të mbetet i saktë.

## 3. Tri ekranet
1. Lista e udhëtimeve: Shfaq udhëtimet, ku secili përmban orën e nisjes dhe vendet e lira. Udhëtari zgjedh udhëtimin që i përshtatet dhe hap detajet.
2. Detajet e udhëtimit: Shfaq orën dhe vendtakimin, që udhëtari ta kuptojë udhëtimin para se të kërkojë një vend. Butoni për kërkesën vendoset pas detajeve.
3. Kërkesa në pritje: Shfaq statusin “Në pritje”, që do të thotë se shoferi ende nuk është përgjigjur. Kërkesa bëhet “E konfirmuar” pas pranimit nga shoferi ose “E refuzuar” nëse ai e refuzon. Në rast refuzimi, udhëtari duhet të kërkojë një udhëtim tjetër.

## 4. MVP — vetëm tri veçori
Cilat tri veprime duhet të funksionojnë në versionin e parë?

1. Shoferi publikon udhëtimin.
2. Udhëtari kërkon një vend.
3. Shoferi përgjigjet duke e pranuar ose refuzuar kërkesën dhe sistemi ruan statusin.

## 5. Çfarë e lëmë për më vonë?
Shëno dy gjëra që nuk na duhen ende.

1. Harta me lëvizje live.
2. Pagesat në aplikacion.

## 6. Si e provoj?
Çfarë duhet të ndodhë kur kërkoj një vend?

Kërkesa e re duhet të shfaqet me statusin “Në pritje” dhe shoferi duhet ta marrë për shqyrtim. Konfirmimi shfaqet vetëm pasi shoferi ta pranojë kërkesën. Pas pranimit, të dy përdoruesit duhet të shohin të njëjtin konfirmim dhe vendet e lira duhet të mbeten të sakta. Nëse shoferi e refuzon, statusi duhet të jetë “E refuzuar”. Nëse klikoj dy herë, kërkesa nuk duhet të krijohet dy herë. Nëse lidhja ndërpritet, duhet të mund ta verifikoj statusin e kërkesës.

Çfarë ndodh nëse nuk ka vende të lira?

Sistemi nuk duhet të konfirmojë një vend tjetër. Teksti në ekran duhet të përputhet me të dhënat dhe numri i vendeve të lira duhet të mbetet i saktë.

## 7. Prova me kolegun
Ku u hutua kolegu dhe çfarë ndryshova në skicë?

**Shembull hipotetik, jo rezultat i një prove reale:** Ligjërata nuk jep rezultate reale të provës me kolegun. Në një provë të mundshme, kolegut i jepet detyra të gjejë një udhëtim dhe të kërkojë një vend. Ai mund të hutohet pas dërgimit të kërkesës dhe të mendojë se vendi është konfirmuar menjëherë. Për ta sqaruar, në skicë do të shtoja pranë statusit “Në pritje” tekstin “Shoferi ende nuk është përgjigjur”. Pastaj do ta përsërisja të njëjtën detyrë për të parë nëse kolegu e kupton se konfirmimi vjen vetëm pas pranimit nga shoferi.

## 8. Ndihma nga AI
Shëno çfarë ndihme more dhe çfarë kontrollove vetë, ose shkruaj: Nuk përdora AI.

Për këtë plotësim u përdor AI për të lexuar ligjëratën dhe për të hartuar përgjigjet në shqip duke ruajtur strukturën e dokumentit. Përgjigjet u krahasuan nga AI me përmbajtjen e ligjëratës, veçanërisht tri veprimet e MVP-së, kuptimin e statuseve dhe rastet e testimit. Prova me kolegun u shënua si shembull hipotetik. Kontrolli personal nga studenti nuk është dokumentuar në këtë bisedë dhe nuk pretendohet se është kryer.

Hiqi shenjat e plotësimit pasi t'i zëvendësosh me përgjigjet e tua.
