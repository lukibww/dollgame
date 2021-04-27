# The Guide for story writers (PL)

Gra dzieli się poszczególne elementy:

- Wątki
- Dialogi
- Wybory

Dane można wysłać w dowolnym, czytelnym formacie np. plik tekstowy, word.

Do generowania identyfikatorów potrzebny jest [generator](https://www.uuidgenerator.net) (Bulk Version)

Na razie [gra](https://dollgame.netlify.app) działa na placeholderach, ale warto tam zajrzeć aby zobaczyć jak to działa.

## Wątki

Główny temat fabuły. Musi być przynajmniej jeden.

##### Schemat

```javascript
// Unikalny indentyfikatow wątku
id: string;

// Numer wątku używany do ustalenia kolejności
index: number;

// Nazwa wątku
name: string;

// Tekst wprowadzający do rozgrywki
description: string;
```

##### Przykład

```javascript
id: "7ca671bd-f13e-42ea-8e72-4e865bba3d38",
index: 1,
name: "Lorem Ipsum",
description: `
    Vestibulum malesuada dictum venenatis. In a sollicitudin est, sed euismod magna.
    Donec eleifend turpis nulla, vitae malesuada ante maximus et.
    Nunc eget augue id felis volutpat dignissim non sit amet est.
    Aliquam sit amet aliquet nulla, tempor tincidunt magna.
`

id: "268d5330-d416-490d-abbe-6492e7f0cd93",
index: 2,
name: "Nulla accumsan",
description: `
    Aenean porttitor purus quis tellus porta, commodo dignissim purus finibus. Etiam ut fringilla sapien, nec accumsan orci.
    Mauris ut ante ut lacus mattis mollis. Proin eget diam sit amet arcu porttitor facilisis nec sit amet arcu.
    Cras ullamcorper blandit orci, in fringilla erat rutrum at. Sed id sem ex.
`
```

## Dialogi

Część fabuły w której musi zostać dokonany wybór.

##### Schemat

```javascript
// Unikalny indentyfikatow dialogu
id: string;

// Numer dialogu używany do ustalenia kolejności
index: number;

// Nazwa dialogu
label: string;

// Treść dialogu
text: string;

// Nazwa postaci biorącej nawiększy udział w dialogu
character: string;

// Typ dialogu, jeśli `success` lub `failure`, wątek się kończy
type: "default" | "success" | "failure";

// Odniesienie do którego wątku należy ten dialog
chapterId: string;
```

##### Przykład

```javascript
id: "336a4f51-d0f5-4b94-b758-2b5a4abbbbc1",
index: 1,
label: "Ut at nulla lectus",
text: `
    Donec id felis elementum, aliquam eros ut, efficitur sapien. Phasellus leo est, posuere id finibus eget, condimentum nec nisi.
    Quisque et diam ante. Praesent ullamcorper urna eget lacus laoreet, dignissim iaculis diam finibus.
    Maecenas in ipsum ac odio semper pretium at vitae magna. Maecenas blandit elit quis dapibus venenatis.
`,
character: "Rzecki",
type: "default",
chapterId: "7ca671bd-f13e-42ea-8e72-4e865bba3d38"

id: "a1d1f40a-6029-48d4-a425-2928db23d4ef",
index: 2,
label: "Quisque tortor sem",
text: `
    Ut vitae lacus nec odio dictum condimentum ac vulputate enim. Phasellus sagittis quam eu erat efficitur vulputate.
    Phasellus dignissim orci eu nunc ultrices, non posuere ex tempus. Phasellus urna nibh, fringilla at risus non, vulputate scelerisque lacus.
    Nunc non nunc dolor. Nulla porttitor urna non porttitor egestas.
`,
character: "Wokulski",
type: "success",
chapterId: "7ca671bd-f13e-42ea-8e72-4e865bba3d38"
```

## Wybory

Możliwości wyboru w dialogach. Musi ich być od 2 do 5, z wyjątkiem w którym dialog jest przejściowy, wtedy musi być jeden wybór np. **Dalej**

##### Schemat

```javascript
// Unikalny indentyfikatow wyboru
id: string;

// Numer wyboru używany do ustalenia kolejności
index: number;

// Treść wyboru
text: string;

// Odniesienie do dialogu, do którego trzeba iść po tym wyborze
next: string;

// Odniesienie do którego dialogu należy ten wybór
dialogId: string;
```

##### Przykład

```javascript
id: "ab756638-fac4-4b9a-b42c-1609c09f5678",
index: 1,
dialogId: "336a4f51-d0f5-4b94-b758-2b5a4abbbbc1",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
next: "a1d1f40a-6029-48d4-a425-2928db23d4ef",

id: "e205e7d3-11ce-4960-98cc-4202306bf086",
index: 2,
dialogId: "336a4f51-d0f5-4b94-b758-2b5a4abbbbc1",
text: "Nam egestas congue est",
next: "a1d1f40a-6029-48d4-a425-2928db23d4ef",

id: "1ef6de28-0cf0-4857-a893-b240056941df",
index: 3,
dialogId: "a1d1f40a-6029-48d4-a425-2928db23d4ef",
text: "Donec fringilla sit amet lectus vehicula maximus",
next: "336a4f51-d0f5-4b94-b758-2b5a4abbbbc1",
```
