import { Canteen } from '@/types/Canteen';
import { CanteenWindow } from '@/types/CanteenWindow';
import { dishes_Ramen } from './canteen6/Ramen'; 
import { dishes_DaoxiaoNoodles } from './canteen6/DaoxiaoNoodles';
import { dishes_RiceNoodles } from './canteen6/RiceNoodles';
import { dishes_Appitizer } from './canteen6/Appitizer';
import { dishes_Teppanyaki } from './canteen6/Teppanyaki';
import { dishes_Casserole } from './canteen6/Casserole';

const Ramen: CanteenWindow = {
  name: 'Ramen',
  path: 'Ramen',
  chinese_name: "拉面",
  cover_picture: 'canteens/canteen6/001.jpg',
  dishes: Object.values(dishes_Ramen),
};

const Rice_Noodles: CanteenWindow = {
  name: 'Guilin Rice Noodles',
  path: 'Rice_Noodles',
  chinese_name: "米粉",
  cover_picture: 'canteens/canteen6/002.jpg',
  dishes: Object.values(dishes_RiceNoodles),
};

const Daoxiao_Noodles: CanteenWindow = {
  name: 'Daoxiao Noodles',
  path: 'Daoxiao_Noodles',
  chinese_name: "刀削面",
  cover_picture: 'canteens/canteen6/003.jpg',
  dishes: Object.values(dishes_DaoxiaoNoodles),
};

const Appitizer: CanteenWindow = {
  name: 'Chinese Appitizer',
  path: 'Appitizer',
  chinese_name: "点心",
  cover_picture: 'canteens/canteen6/004.jpg',
  dishes: Object.values(dishes_Appitizer),
};

const Teppanyaki: CanteenWindow = {
  name: 'Teppan Grill',
  path: 'Teppanyaki',
  chinese_name: "铁板烧",
  cover_picture: 'canteens/canteen6/009.jpg',
  dishes: Object.values(dishes_Teppanyaki),
};

const Casserole: CanteenWindow = {
  name: 'Delicious Casserole',
  path: 'Casserole',
  chinese_name: "美味砂锅",
  cover_picture: 'canteens/canteen6/010.jpg',
  dishes: Object.values(dishes_Casserole),
};

export const Canteen6: Canteen = {
  name: 'Canteen6',
  path: 'canteen6',
  window_list: [Ramen, Rice_Noodles, Daoxiao_Noodles, Appitizer, Teppanyaki, Casserole],
};