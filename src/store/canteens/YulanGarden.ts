import { Canteen } from '@/types/Canteen';
import { Window } from '@/types/Window';

const DumplingWindow: Window = {
  name: 'Dumplings',
  path: 'dumplings',
  cover_picture: 'https://i.imgur.com/2Z3QJ5v.jpg',
}

export const YulanGarden: Canteen = {
  name: 'Yulan Garden',
  path: 'yulan-garden',
  window_list: [DumplingWindow]
}
