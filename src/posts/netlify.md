---
title: '5 Årsager, hvorfor du skal bruge netlify som webudvikler'
date: '2019-10-17'
test: true
---

![](../images/netlify.png)

Der var en tid, hvor hosting af et websted plejede at være kompliceret og dyrt. Heldigvis har vi nu forskellige tjenester som Netlify, hvilket gør implementering af nye hjemmesider nu er meget lettere.

## 1. Hosting & Pris

Det bedste ved Netlify er de forskellige planer og hvad de tilbyder med hensyn til frynsegoder. For eksempel har de en startplan, der tilbyder:

- Brugerdefinerede domæner & HTTPS
- Lynhurtig Git-integration
- Kontinuerlig implementering
- Se previews på din hjemmside

Og de samlede omkostninger for alt det, der kommer ned på nul. Hosting foregår via et CDN, der booster websteds ydeevne markant.

## 2. Brugervenligt dashboard

Dashboardet giver dig et godt overblik over alt fra deploys til previews, og det er bare generelt let at navigere, hvis du vil foretage nogle ændringer på dit websted.

![](../images/dashboard.png)

## 3. Fantastisk dokumentation

Netlifys dokumentation er meget omfattende og let at forstå. De har sektioner, der spænder fra konfigurering af builds til opsætning af dit brugerdefinerede domæne, som jeg fra starten havde nogle problemer med, men takket være dokumentationen kunne løse hurtigt.

Dokumentationen er også for nylig blevet opdateret, så den nu bliver endnu mere selvforklarende. Du kan tjekke det her:

<a href="https://docs.netlify.com/#get-started" target="_blank" rel="noopener noreferrer">https://docs.netlify.com/#get-started</a>

## 4. Formular

Opsætning af en formular ved hjælp af Netlify er en ligetil proces, der ikke indeholder andet end at tilføje dette stykke kode i begyndelsen af ​​dit formularmærke:

![](../images/carbon.png)

Hvis du tidligere ønskede at tilføje en formular til dit websted, var du nødt til at bruge serversiden kode som PHP eller JavaScript. Det leveres også med en standardsucceside, når formen er blevet sendt, eller du kan lave din egen.

All successful form submissions will show up in your dashboard, and you can even integrate it with your email using Zappier, which is an integration tool.

Med startplanen kan du oprette 100 formularindgivelser pr. Måned, hvilket skulle være nok, hvis det kun er dit porteføljewebsted. Hvis ikke, kan du altid opgradere til en niveau 1-konto, men det koster dog.

## 5. Kontinuerlig implementering

En anden stor funktion er dens kontinuerlige implementering, der linker til dit lager, og hver gang du skubber til din kode, kører Netlify et build-værktøj og udretter resultatet.

![](../images/github.png)

Der er stadig meget mere at dække, men i stedet for at sige det her, vil jeg meget hellere have dig til at gå ud og udforske det selv. Måske kan du starte med at offentliggøre dit portfolio-site på Netlify, som jeg gjorde første gang.

Med hensyn til mig selv føler jeg stadig, at jeg næsten ikke har ridset overfladen med hensyn til at prøve alle de funktioner, Netlify har at tilbyde.

En funktion, som jeg er specielt interesseret i at prøve, er split-testing, som lader mig teste forskellige designs af min porteføljens websted ved at betjene flere branches som findes på min Github.
