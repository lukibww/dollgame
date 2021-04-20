import { Chapter, Choice, Dialog } from "./spec";

/**
 * Because its simple school project we do not care about
 * the fact that someone could look the to source code and
 * start cheating
 */

export const chapters: Chapter[] = [
  {
    id: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    name: "Vivamus sodales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas est consectetur ex vestibulum, nec dignissim justo congue.",
  },
];

export const dialogs: Dialog[] = [
  {
    id: 1,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Lorem ipsum dolor sit amet",
    type: "default",
    text:
      "Consectetur adipiscing elit. Duis ut erat justo. Praesent tempor in elit eu porta. Cras eu metus condimentum, facilisis leo et, sollicitudin ligula. Curabitur vitae bibendum dolor. Vestibulum quis ante pharetra, vulputate libero in, faucibus mi. Quisque sit amet nisi nec eros porta scelerisque. Quisque in sem sit amet justo cursus vestibulum non sed nisl. Maecenas ac eros magna. In sodales tincidunt ante, quis consectetur nunc ullamcorper eu. ",
  },
  {
    id: 2,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Praesent vitae metus porttitor",
    type: "default",
    text:
      "Fringilla dolor et, sagittis ante. Pellentesque finibus, purus sed tristique semper, felis ex tincidunt enim, in mollis mi erat at ipsum. Etiam egestas tellus in eros vulputate cursus. Vivamus at diam vel magna blandit imperdiet. Suspendisse quis leo nec ligula porttitor fermentum. Ut rhoncus hendrerit pharetra. Mauris dui libero, ultrices eu felis vitae, sodales ornare nibh. Morbi quis massa tellus. Nulla ut dolor non enim luctus semper sit amet vitae ligula. Duis a convallis lectus. Curabitur eget malesuada erat. Donec tempor orci erat, ut convallis urna commodo in. ",
  },
  {
    id: 3,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Pellentesque facilisis",
    type: "default",
    text:
      "Felis id congue. Ut sapien lorem, euismod sed justo a, placerat luctus massa. Maecenas condimentum augue sed nisi viverra ornare. Maecenas ac vulputate urna, sagittis facilisis ante. Duis at finibus magna, et aliquam enim. Vivamus vel nibh aliquam, luctus diam quis, venenatis odio. Suspendisse in dui a urna tempus vulputate. Nunc dui metus, mollis a tristique in, porta elementum turpis. Aenean augue purus, interdum sed diam nec, fringilla tincidunt arcu.",
  },
  {
    id: 4,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Orci varius",
    type: "default",
    text:
      "Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean venenatis tincidunt lorem eu ornare. Phasellus et pharetra erat. Vestibulum blandit auctor ex. Nunc cursus magna sit amet lacus dictum, nec volutpat eros scelerisque. Proin enim sem, fermentum eget cursus a, aliquam nec lacus. ",
  },
  {
    id: 5,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Donec sed dolor",
    type: "default",
    text:
      "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere. In hac habitasse platea dictumst. Sed venenatis, urna at pulvinar hendrerit, nisl libero condimentum augue, eget sagittis felis magna ut sapien. Curabitur ullamcorper, enim nec vulputate eleifend purus interdum turpis, in consequat nisl justo id metus.",
  },
  {
    id: 6,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Donec sed dolor",
    type: "failure",
    text:
      "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere. In hac habitasse platea dictumst. Sed venenatis, urna at pulvinar hendrerit, nisl libero condimentum augue, eget sagittis felis magna ut sapien. Curabitur ullamcorper, enim nec vulputate eleifend purus interdum turpis, in consequat nisl justo id metus.",
  },
  {
    id: 7,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Donec sed dolor",
    type: "success",
    text:
      "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere. In hac habitasse platea dictumst. Sed venenatis, urna at pulvinar hendrerit, nisl libero condimentum augue, eget sagittis felis magna ut sapien. Curabitur ullamcorper, enim nec vulputate eleifend purus interdum turpis, in consequat nisl justo id metus.",
  },
];

export const choices: Choice[] = [
  {
    id: 1,
    dialogId: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    next: 2,
  },
  {
    id: 2,
    dialogId: 1,
    text: "Nam egestas congue est",
    next: 3,
  },
  {
    id: 3,
    dialogId: 1,
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: 4,
  },
  {
    id: 5,
    dialogId: 2,
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: 6,
  },
  {
    id: 6,
    dialogId: 2,
    text: "Proin nunc elit, euismod nec posuere",
    next: 3,
  },
  {
    id: 7,
    dialogId: 2,
    text: "Proin nunc elit, euismod nec posuere",
    next: 6,
  },
  {
    id: 8,
    dialogId: 3,
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: 4,
  },
  {
    id: 9,
    dialogId: 3,
    text: "Proin nunc elit, euismod nec posuere",
    next: 2,
  },
  {
    id: 10,
    dialogId: 3,
    text: "Proin nunc elit, euismod nec posuere",
    next: 6,
  },
  {
    id: 11,
    dialogId: 4,
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: 6,
  },
  {
    id: 12,
    dialogId: 4,
    text: "Proin nunc elit, euismod nec posuere",
    next: 1,
  },
  {
    id: 13,
    dialogId: 4,
    text: "Proin nunc elit, euismod nec posuere",
    next: 3,
  },
  {
    id: 14,
    dialogId: 5,
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: 6,
  },
  {
    id: 15,
    dialogId: 5,
    text: "Proin nunc elit, euismod nec posuere",
    next: 7,
  },
  {
    id: 16,
    dialogId: 5,
    text: "Proin nunc elit, euismod nec posuere",
    next: 1,
  },
];
