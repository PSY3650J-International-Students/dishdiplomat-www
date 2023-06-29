import { Canteen } from '@/types/Canteen';
import { CanteenWindow } from '@/types/CanteenWindow';
import { dishes_Ramen } from './canteen6/Ramen'; 

const Ramen: CanteenWindow = {
  name: 'Ramen',
  path: 'Ramen',
  chinese_name: "拉面",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-14.jpg',
  dishes: Object.values(dishes_Ramen),
};

const Rice_Noodles: CanteenWindow = {
  name: 'Guilin Rice Noodles',
  path: 'Rice_Noodles',
  chinese_name: "米粉",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-14.jpg',
  dishes: [],
};

const Daoxiao_Noodles: CanteenWindow = {
  name: 'Daoxiao Noodles',
  path: 'Daoxiao_Noodles',
  chinese_name: "刀削面",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-15.jpg',
  dishes: [],
};

const Appitizer: CanteenWindow = {
  name: 'Chinese Appitizer',
  path: 'Appitizer',
  chinese_name: "点心",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-16.jpg',
  dishes: [],
};

const Teppanyaki: CanteenWindow = {
  name: 'Teppan Grill',
  path: 'Teppanyaki',
  chinese_name: "铁板烧",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-16.jpg',
  dishes: [],
};

const Casserole: CanteenWindow = {
  name: 'Delicious Casserole',
  path: 'Casserole',
  chinese_name: "美味砂锅",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-16.jpg',
  dishes: [],
};

export const Canteen6: Canteen = {
  name: 'Canteen6',
  path: 'canteen6',
  window_list: [Ramen, Rice_Noodles, Daoxiao_Noodles, Appitizer, Teppanyaki, Casserole],
};