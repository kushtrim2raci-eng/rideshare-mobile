# RideShare · Java 7

Raporti i Javes 7. Kodi dhe raporti ruhen ne GitHub; Issue i dorezimit ende nuk eshte hapur.

## Rasti im
GitHub: kushtrim2raci-eng
Kodi: P7-951
Skenari i zgjedhur (numri dhe titulli, nga Rastet 1–5): Rasti 3 · Klikim apo rezervim
ID i udhetimit ne projektin tim: 1 dhe 2 per simulimin; 3 per rastin me 0 vende.
Te dhenat fiktive te rastit: Peje → AAB, 10:15, 1 vend. Ora per proven e re: 10:20.

Kodi personal u gjenerua me algoritmin e profesorit. Ne provat qe bera vete perdora udhetimet ekzistuese te projektit: Prishtine, Fushe Kosove dhe Lipjan. Te dhenat Peje / 10:15 / 1 vend u perdoren vetem ne provat e vecuara qe kreu AI, jo ne databazen Neon.

## Parashikimi
Nuk e shkrova parashikimin para korrigjimit. Fillimisht mendova se te “Ne pritje” kerkesa ishte ruajtur, por vendi nuk ishte rezervuar dhe shoferi nuk ishte njoftuar. Pas shpjegimit dhe provave kuptova se ne kete simulim as kerkesa nuk ruhet.

Tani e kuptoj se detajet duhet t'i perkasin udhetimit qe zgjedh. Nese ka 0 vende, butoni duhet te jete i caktivizuar. Kur ka vende dhe provoj kerkesen, mesazhi duhet ta tregoje qarte se eshte simulim. Kete po e shkruaj pas provave, jo si parashikim te regjistruar me heret.

## Dy probleme
1. Te detajet, butoni me pare quhej “Kerko vend”, pa treguar paraprakisht se veprimi ishte simulim. Kjo mund te krijonte pershtypjen se po dergohej nje kerkese reale. Sqarimi vinte vetem pasi hapej faqja tjeter. Ky ishte problemi qe zgjodhem per korrigjim.
2. Te faqja “Simulim: Ne pritje” shfaqet vetem qyteti i nisjes ne mesazh. Nuk shfaqen ora, destinacioni dhe ID-ja e udhetimit. E pashe kete te mesazhet per Prishtinen dhe Fushe Kosoven. Nese do te kishte disa udhetime nga i njejti qytet, do te ishte me e veshtire ta dalloja udhetimin. Kete e lashe per permiresim, sepse kete jave kerkohet vetem nje korrigjim.

## Korrigjimi
Skedari: aplikacioni/src/app/udhetimi/[id]/page.tsx

Ky skedar lexon udhetimin sipas ID-se dhe shfaq detajet e tij. Me ndihmen e AI u ndryshua teksti i lidhjes nga “Kerko vend” ne “Provo kerkesen · simulim”. U shtua edhe sqarimi: “Ky eshte simulim: kerkesa nuk ruhet, vendi nuk rezervohet dhe shoferi nuk njoftohet.”

Keshtu e kuptoj kufirin e veprimit para se te klikoj. Kushti vende > 0 lejon hapjen e simulimit vetem kur ka vende. Kur ka 0 vende, shfaqet butoni i caktivizuar “Nuk ka vende te lira”.

## Versionet
Para: https://github.com/kushtrim2raci-eng/rideshare-mobile/commit/6396e1dcc091988da7011676f9a1de2cbbf335b2
Pas: https://github.com/kushtrim2raci-eng/rideshare-mobile/commit/a70ff6ca2040f550e64a96cb9b4a1071188ea014

Versioni Para ruan kodin para korrigjimit; versioni Pas ruan ndryshimin ne faqen e detajeve. Raporti ruhet me nje commit pasues. Issue i Javes 7 ende nuk eshte hapur.

## Provat qe bera
Provat e meposhtme i bera ne aplikacionin tim lokal dhe dergova pamjet e rezultateve.

### Prova 1
Hapat: Hapa detajet e udhetimit Fushe Kosove → AAB dhe kontrollova oren, vendtakimin, vendet dhe butonin.
Pritshmeria: Te shfaqen detajet e ketij udhetimi dhe te jete e qarte se kerkesa eshte vetem simulim.
Vezhgimi: U shfaq ora 08:15, vendtakimi “Te stacioni kryesor” dhe 1 vend i lire. Poshte tyre u shfaq sqarimi se kerkesa nuk ruhet, vendi nuk rezervohet dhe shoferi nuk njoftohet. Butoni quhej “Provo kerkesen · simulim”. Pamja ime verteton detajet e shfaqura; nuk kam perfshire pamje te listes per krahasim ne kete prove.

### Prova 2
Hapat: Provova kerkesen per udhetimin nga Prishtina dhe pastaj per udhetimin nga Fushe Kosova.
Pritshmeria: Pas klikimit te shfaqet nje mesazh simulimi, pa u paraqitur si rezervim i konfirmuar.
Vezhgimi: Ne te dyja rastet u shfaq “Simulim: Ne pritje”. Mesazhi perkates tregonte se kerkesa per Prishtine ose Fushe Kosove nuk ishte derguar te shoferi. U shfaq edhe sqarimi se ruajtja dhe konfirmimi real do te shtohen me vone. Nga kjo kuptova se “Ne pritje” ketu eshte vetem mesazh ne ekran. Pamjet tregojne mesazhet; nuk jane kontroll i drejtperdrejte i databazes.

### Prova 3
Hapat: Hapa nje udhetim tjeter, Lipjan → AAB, te /udhetimi/3, i cili kishte 0 vende te lira.
Pritshmeria: Te shfaqet se nuk ka vende dhe te mos mund ta hap kerkesen permes butonit.
Vezhgimi: U shfaq ora 07:45, vendtakimi “Qendra e qytetit” dhe 0 vende te lira. Butoni ishte i caktivizuar me tekstin “Nuk ka vende te lira”. Kjo prove perdori nje udhetim tjeter ekzistues; nuk ndryshova numrin e vendeve te te njejtit udhetim ne databaze.

## Ndryshimi i ri
Ndryshova zgjedhjen nga nje udhetim qe kishte vende te udhetimi nga Lipjani qe kishte 0 vende. Te udhetimi me vende mund ta hapja simulimin, ndersa te Lipjani butoni ishte i caktivizuar. Sjellja perputhet me kushtin vende > 0 ne kod.

Provat i bera vete ne aplikacion dhe ndava pamjet. Demonstrimin para kolegut ende nuk e kam kryer. Ndryshimi i ores personale nga 10:15 ne 10:20 u provua vetem nga AI me te dhena ne memorie; nuk e kam kryer vete ne databaze.

## Ndihma nga AI
Perdora AI per te kuptuar kerkesat e javes, dallimin mes simulimit dhe rezervimit, si dhe per ndihme me korrigjimin. AI lexoi kodin, ndryshoi tekstin ne nje skedar dhe me ndihmoi ta shkruaj raportin duke u bazuar te rezultatet dhe pamjet e mia. Une hapa aplikacionin, provova udhetimet dhe dergova kater pamje nga rezultatet.

AI kreu vecmas kontrolle automatike: lista dhe detajet per ID 1, hapja e simulimit, nje ID qe nuk ekziston dhe provat e komponenteve me te dhenat personale P7-951. Ne ato prova u kontrollua edhe ndryshimi ne 10:20 / 0 vende, pa shkrime ne Neon. ESLint dhe TypeScript kaluan. Keto kontrolle automatike nuk po i paraqes si pune qe e kam kryer vete.
