import { Chapter, Choice, Dialog } from "./spec";

import Adwokat from "../assets/images/adwokat.png";
import Baronowa from "../assets/images/baronowa.png";
import Dziecko from "../assets/images/dziecko.png";
import Maruszewicz from "../assets/images/maruszewicz.png";
import RozprawaSądowa from "../assets/images/rozprawa_sądowa.jpg";
import Rzecki from "../assets/images/rzecki.png";
import Sędzia from "../assets/images/sędzia.png";
import Służąca from "../assets/images/służąca.png";

// import Stawska from "../assets/images/stawska.png";
// import Wokulski from "../assets/images/wokulski.png";

/**
 * Because its simple school project we do not care about
 * the fact that someone could look the to source code and
 * start cheating
 */

/**
 * Plase update this value every time you change anything
 */
export const version = 1;

export const chapters: Chapter[] = [
  {
    id: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    index: 1,
    name: "Vivamus sodales",
    slug: "vivamus-sodales",
    background: RozprawaSądowa,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas est consectetur ex vestibulum, nec dignissim justo congue.",
  },
];

export const dialogs: Dialog[] = [
  {
    id: "94aed6f6-de51-4252-a4ce-09564f1309c8",
    index: 1,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Lorem ipsum dolor sit amet",
    type: "default",
    character: Adwokat,
    text:
      "Consectetur adipiscing elit. Duis ut erat justo. Praesent tempor in elit eu porta. Cras eu metus condimentum, facilisis leo et, sollicitudin ligula. Curabitur vitae bibendum dolor. Vestibulum quis ante pharetra, vulputate libero in, faucibus mi. Quisque sit amet nisi nec eros porta scelerisque. Quisque in sem sit amet justo cursus vestibulum non sed nisl. Maecenas ac eros magna. In sodales tincidunt ante, quis consectetur nunc ullamcorper eu. ",
  },
  {
    id: "cb33629c-6917-45e1-8861-1dfa8bee4722",
    index: 2,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Praesent vitae metus porttitor",
    type: "default",
    character: Baronowa,
    text:
      "Fringilla dolor et, sagittis ante. Pellentesque finibus, purus sed tristique semper, felis ex tincidunt enim, in mollis mi erat at ipsum. Etiam egestas tellus in eros vulputate cursus. Vivamus at diam vel magna blandit imperdiet. Suspendisse quis leo nec ligula porttitor fermentum. Ut rhoncus hendrerit pharetra. Mauris dui libero, ultrices eu felis vitae, sodales ornare nibh. Morbi quis massa tellus. Nulla ut dolor non enim luctus semper sit amet vitae ligula. Duis a convallis lectus. Curabitur eget malesuada erat. Donec tempor orci erat, ut convallis urna commodo in. ",
  },
  {
    id: "84f2131e-e3bc-4b25-a61d-c7325cb28832",
    index: 3,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Pellentesque facilisis",
    type: "default",
    character: Dziecko,
    text:
      "Felis id congue. Ut sapien lorem, euismod sed justo a, placerat luctus massa. Maecenas condimentum augue sed nisi viverra ornare. Maecenas ac vulputate urna, sagittis facilisis ante. Duis at finibus magna, et aliquam enim. Vivamus vel nibh aliquam, luctus diam quis, venenatis odio. Suspendisse in dui a urna tempus vulputate. Nunc dui metus, mollis a tristique in, porta elementum turpis. Aenean augue purus, interdum sed diam nec, fringilla tincidunt arcu.",
  },
  {
    id: "fbafe2eb-1f96-4482-b68d-a54e8f6c29a1",
    index: 4,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Orci varius",
    type: "default",
    character: Maruszewicz,
    text:
      "Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean venenatis tincidunt lorem eu ornare. Phasellus et pharetra erat. Vestibulum blandit auctor ex. Nunc cursus magna sit amet lacus dictum, nec volutpat eros scelerisque. Proin enim sem, fermentum eget cursus a, aliquam nec lacus. ",
  },
  {
    id: "7e95d319-7580-487f-941d-634c911d6d73",
    index: 5,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Donec sed dolor",
    type: "default",
    character: Rzecki,
    text:
      "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere. In hac habitasse platea dictumst. Sed venenatis, urna at pulvinar hendrerit, nisl libero condimentum augue, eget sagittis felis magna ut sapien. Curabitur ullamcorper, enim nec vulputate eleifend purus interdum turpis, in consequat nisl justo id metus.",
  },
  {
    id: "64716deb-1251-4e55-a0fb-294b0969959c",
    index: 6,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Donec sed dolor",
    type: "failure",
    character: Sędzia,
    text:
      "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere. In hac habitasse platea dictumst. Sed venenatis, urna at pulvinar hendrerit, nisl libero condimentum augue, eget sagittis felis magna ut sapien. Curabitur ullamcorper, enim nec vulputate eleifend purus interdum turpis, in consequat nisl justo id metus.",
  },
  {
    id: "bec1a3f9-456f-4a88-8086-c0cce0821f85",
    index: 7,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    label: "Donec sed dolor",
    type: "success",
    character: Służąca,
    text:
      "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere. In hac habitasse platea dictumst. Sed venenatis, urna at pulvinar hendrerit, nisl libero condimentum augue, eget sagittis felis magna ut sapien. Curabitur ullamcorper, enim nec vulputate eleifend purus interdum turpis, in consequat nisl justo id metus.",
  },
];

export const choices: Choice[] = [
  {
    id: "ab756638-fac4-4b9a-b42c-1609c09f5678",
    index: 1,
    dialogId: "94aed6f6-de51-4252-a4ce-09564f1309c8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    next: "cb33629c-6917-45e1-8861-1dfa8bee4722",
  },
  {
    id: "e205e7d3-11ce-4960-98cc-4202306bf086",
    index: 2,
    dialogId: "94aed6f6-de51-4252-a4ce-09564f1309c8",
    text: "Nam egestas congue est",
    next: "84f2131e-e3bc-4b25-a61d-c7325cb28832",
  },
  {
    id: "1ef6de28-0cf0-4857-a893-b240056941df",
    index: 3,
    dialogId: "94aed6f6-de51-4252-a4ce-09564f1309c8",
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: "fbafe2eb-1f96-4482-b68d-a54e8f6c29a1",
  },
  {
    id: "4e95d6b1-c01e-4431-bbf7-7d55538711c3",
    index: 1,
    dialogId: "cb33629c-6917-45e1-8861-1dfa8bee4722",
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: "64716deb-1251-4e55-a0fb-294b0969959c",
  },
  {
    id: "67af9a91-58ab-4f3d-992f-d7987fb056fe",
    index: 2,
    dialogId: "cb33629c-6917-45e1-8861-1dfa8bee4722",
    text: "Proin nunc elit, euismod nec posuere",
    next: "84f2131e-e3bc-4b25-a61d-c7325cb28832",
  },
  {
    id: "0ecc1772-c279-46bd-bdaf-ac8ba374a17f",
    index: 3,
    dialogId: "cb33629c-6917-45e1-8861-1dfa8bee4722",
    text: "Proin nunc elit, euismod nec posuere",
    next: "64716deb-1251-4e55-a0fb-294b0969959c",
  },
  {
    id: "b3baeac4-655b-4091-85bb-9a0c216d9bf0",
    index: 1,
    dialogId: "84f2131e-e3bc-4b25-a61d-c7325cb28832",
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: "fbafe2eb-1f96-4482-b68d-a54e8f6c29a1",
  },
  {
    id: "db45f4c1-3dc6-494d-9358-7c7f4abd623e",
    index: 2,
    dialogId: "84f2131e-e3bc-4b25-a61d-c7325cb28832",
    text: "Proin nunc elit, euismod nec posuere",
    next: "cb33629c-6917-45e1-8861-1dfa8bee4722",
  },
  {
    id: "a77f03fc-4baa-49cf-9eae-b4e4f41d9391",
    index: 3,
    dialogId: "84f2131e-e3bc-4b25-a61d-c7325cb28832",
    text: "Proin nunc elit, euismod nec posuere",
    next: "64716deb-1251-4e55-a0fb-294b0969959c",
  },
  {
    id: "0e7a3951-6350-4f13-84b9-0b5744e2f51b",
    index: 1,
    dialogId: "fbafe2eb-1f96-4482-b68d-a54e8f6c29a1",
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: "64716deb-1251-4e55-a0fb-294b0969959c",
  },
  {
    id: "f0ebff80-a8b3-4263-9f59-de717d528abf",
    index: 2,
    dialogId: "fbafe2eb-1f96-4482-b68d-a54e8f6c29a1",
    text: "Proin nunc elit, euismod nec posuere",
    next: "94aed6f6-de51-4252-a4ce-09564f1309c8",
  },
  {
    id: "d02e96d2-bfd2-45d7-8a7f-8c5707084142",
    index: 3,
    dialogId: "fbafe2eb-1f96-4482-b68d-a54e8f6c29a1",
    text: "Proin nunc elit, euismod nec posuere",
    next: "84f2131e-e3bc-4b25-a61d-c7325cb28832",
  },
  {
    id: "77f996ae-ef45-47f7-8e63-217775c43f7b",
    index: 1,
    dialogId: "7e95d319-7580-487f-941d-634c911d6d73",
    text: "Donec fringilla sit amet lectus vehicula maximus",
    next: "64716deb-1251-4e55-a0fb-294b0969959c",
  },
  {
    id: "e3d31f45-2821-47ec-8c2a-9660e5ced484",
    index: 2,
    dialogId: "7e95d319-7580-487f-941d-634c911d6d73",
    text: "Proin nunc elit, euismod nec posuere",
    next: "bec1a3f9-456f-4a88-8086-c0cce0821f85",
  },
  {
    id: "e4bf29a1-8f33-48d5-83b4-bf02cb04150d",
    index: 3,
    dialogId: "7e95d319-7580-487f-941d-634c911d6d73",
    text: "Proin nunc elit, euismod nec posuere",
    next: "94aed6f6-de51-4252-a4ce-09564f1309c8",
  },
];
