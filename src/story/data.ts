import { Chapter, Choice, Dialog } from "./spec";

/**
 * Because its simple school project we do not care about
 * the fact that someone could look the to source code and
 * start cheating
 */

export const chapters: Chapter[] = [
  {
    id: 1,
    name: "Vivamus sodales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas est consectetur ex vestibulum, nec dignissim justo congue.",
  },
  {
    id: 2,
    name: "Curabitur dignissim",
    description:
      "Proin risus augue, fringilla ac molestie at, molestie ut nisl. Donec nulla mi, scelerisque vitae interdum vel, blandit at diam.",
  },
  {
    id: 3,
    name: "Nam feugiat",
    description:
      "Etiam eleifend diam leo, sed consectetur orci consequat rhoncus. Curabitur sodales ante vel purus pellentesque, in varius leo pharetra.",
  },
  {
    id: 4,
    name: "Mauris vestibulum",
    description:
      "Donec eget massa dictum, fringilla nunc quis, dapibus orci. Orci varius natoque penatibus et magnis dis parturient montes.",
  },
];

export const dialogs: Dialog[] = [
  {
    id: 1,
    chapterId: 1,
    label: "Lorem ipsum dolor sit amet",
    text:
      "Consectetur adipiscing elit. Duis ut erat justo. Praesent tempor in elit eu porta. Cras eu metus condimentum, facilisis leo et, sollicitudin ligula. Curabitur vitae bibendum dolor. Vestibulum quis ante pharetra, vulputate libero in, faucibus mi. Quisque sit amet nisi nec eros porta scelerisque. Quisque in sem sit amet justo cursus vestibulum non sed nisl. Maecenas ac eros magna. In sodales tincidunt ante, quis consectetur nunc ullamcorper eu. ",
  },
  {
    id: 2,
    chapterId: 1,
    label: "Praesent vitae metus porttitor",
    text:
      "Fringilla dolor et, sagittis ante. Pellentesque finibus, purus sed tristique semper, felis ex tincidunt enim, in mollis mi erat at ipsum. Etiam egestas tellus in eros vulputate cursus. Vivamus at diam vel magna blandit imperdiet. Suspendisse quis leo nec ligula porttitor fermentum. Ut rhoncus hendrerit pharetra. Mauris dui libero, ultrices eu felis vitae, sodales ornare nibh. Morbi quis massa tellus. Nulla ut dolor non enim luctus semper sit amet vitae ligula. Duis a convallis lectus. Curabitur eget malesuada erat. Donec tempor orci erat, ut convallis urna commodo in. ",
  },
  {
    id: 3,
    chapterId: 1,
    label: "Pellentesque facilisis",
    text:
      "Felis id congue. Ut sapien lorem, euismod sed justo a, placerat luctus massa. Maecenas condimentum augue sed nisi viverra ornare. Maecenas ac vulputate urna, sagittis facilisis ante. Duis at finibus magna, et aliquam enim. Vivamus vel nibh aliquam, luctus diam quis, venenatis odio. Suspendisse in dui a urna tempus vulputate. Nunc dui metus, mollis a tristique in, porta elementum turpis. Aenean augue purus, interdum sed diam nec, fringilla tincidunt arcu.",
  },
  {
    id: 4,
    chapterId: 1,
    label: "Orci varius",
    text:
      "Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean venenatis tincidunt lorem eu ornare. Phasellus et pharetra erat. Vestibulum blandit auctor ex. Nunc cursus magna sit amet lacus dictum, nec volutpat eros scelerisque. Proin enim sem, fermentum eget cursus a, aliquam nec lacus. ",
  },
];

export const choices: Choice[] = [];
