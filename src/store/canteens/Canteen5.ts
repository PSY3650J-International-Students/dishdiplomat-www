import { Canteen } from '@/types/Canteen';
import { CanteenWindow } from '@/types/CanteenWindow';
import { dishes_DaoxiaoNoodles } from './canteen5/DaoxiaoNoodles';
import { dishes_PorkStomachChiken } from './canteen5/PorkStomachChicken';
import { dishes_StonePotDish } from './canteen5/StonePotDish';

const Pork_Stomach_Chiken: CanteenWindow = {
    name: 'Pork Stomach and Chicken',
    path: 'Pork Stomach and Chicken',
    chinese_name: "猪肚鸡",
    cover_picture: '/canteens/canteen5/canteen6_Steamed_pork_stomach_and_chicken.jpg',
    dishes: Object.values(dishes_PorkStomachChiken),
  };


  const Stone_Pot_DiSh: CanteenWindow = {
    name: 'Stone Pot Dish',
    path: 'Stone Pot Dish',
    chinese_name: "石锅菜",
    cover_picture: '/canteens/canteen5/canteen6_Stone_pot_dishes.jpg',
    dishes: Object.values(dishes_StonePotDish),
  };

const Daoxiao_Noodles: CanteenWindow = {
  name: 'Daoxiao Noodles',
  path: 'Daoxiao_Noodles',
  chinese_name: "刀削面",
  cover_picture: '/canteens/canteen5/canteen6_Daoxiao_Noodles.jpg',
  dishes: Object.values(dishes_DaoxiaoNoodles),
};



export const Canteen5: Canteen = {
  name: 'Canteen5',
  path: 'canteen5',
  window_list: [Pork_Stomach_Chiken, Daoxiao_Noodles, Stone_Pot_DiSh],
};