import { Data, Metadata, Chapter, Choice, Dialog, Character } from "./spec";

import win from "../assets/audio/win.mp3";
import loose from "../assets/audio/loose.mp3";

import RozprawaSądowaTło from "../assets/images/rozprawa_sądowa.jpg";
import RozprawaSądowaAudio from "../assets/audio/rozprawa_sądowa.mp3";

import Adwokat from "../assets/images/adwokat.png";
import Baronowa from "../assets/images/baronowa.png";
import Dziecko from "../assets/images/dziecko.png";
import Maruszewicz from "../assets/images/maruszewicz.png";
import Rzecki from "../assets/images/rzecki.png";
import Sędzia from "../assets/images/sędzia.png";
import Służąca from "../assets/images/służąca.png";
import Stawska from "../assets/images/stawska.png";
import Wokulski from "../assets/images/wokulski.png";

export const metadata: Metadata = {
  win,
  loose,
};

export const chapters: Chapter[] = [
  {
    id: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    index: 1,
    name: "Vivamus Sodales",
    slug: "vivamus-sodales",
    background: RozprawaSądowaTło,
    audio: RozprawaSądowaAudio,
  },
];

export const dialogs: Dialog[] = [
  {
    id: "94aed6f6-de51-4252-a4ce-09564f1309c8",
    index: 1,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    type: "default",
    characterId: 2,
    text: "Consectetur adipiscing elit. Duis ut erat justo.",
  },
  {
    id: "cb33629c-6917-45e1-8861-1dfa8bee4722",
    index: 2,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    type: "default",
    characterId: 5,
    text: "Fringilla dolor et, sagittis ante. Pellentesque finibus, purus sed tristique semper.",
  },
  {
    id: "84f2131e-e3bc-4b25-a61d-c7325cb28832",
    index: 3,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    type: "default",
    characterId: 1,
    text: "Felis id congue. Ut sapien lorem, euismod sed justo a, placerat luctus massa.",
  },
  {
    id: "fbafe2eb-1f96-4482-b68d-a54e8f6c29a1",
    index: 4,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    type: "default",
    characterId: 4,
    text: "Natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: "7e95d319-7580-487f-941d-634c911d6d73",
    index: 5,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    type: "default",
    characterId: 7,
    text: "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere",
  },
  {
    id: "64716deb-1251-4e55-a0fb-294b0969959c",
    index: 6,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    type: "failure",
    characterId: 8,
    text: "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere.",
  },
  {
    id: "bec1a3f9-456f-4a88-8086-c0cce0821f85",
    index: 7,
    chapterId: "73cf4f8a-00c9-4b8f-b66a-8f6a18d825cb",
    type: "success",
    characterId: 3,
    text: "Maecenas a accumsan sem. Integer lobortis erat ac fringilla posuere.",
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

export const characters: Character[] = [
  {
    id: 1,
    name: "Wokulski",
    image: Wokulski,
  },
  {
    id: 2,
    name: "Rzecki",
    image: Rzecki,
  },
  {
    id: 3,
    name: "Adwokat",
    image: Adwokat,
  },
  {
    id: 4,
    name: "Baronowa",
    image: Baronowa,
  },
  {
    id: 5,
    name: "Dziecko",
    image: Dziecko,
  },
  {
    id: 6,
    name: "Maruszewicz",
    image: Maruszewicz,
  },
  {
    id: 7,
    name: "Sędzia",
    image: Sędzia,
  },
  {
    id: 8,
    name: "Służąca",
    image: Służąca,
  },
  {
    id: 9,
    name: "Stawska",
    image: Stawska,
  },
];

const data: Data = {
  chapters,
  characters,
  choices,
  dialogs,
  metadata,
};

export default data;
