import { Canteen } from '@/types/Canteen';
import { CanteenWindow } from '@/types/CanteenWindow';

const western_fast_food: CanteenWindow = {
  name: 'Western Fast Food',
  path: 'western_fast_food',
  chinese_name: "西式简餐",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
}

const korean_fried_rice: CanteenWindow = {
  name: 'Korean Fried Rice',
  path: 'korean_fried_rice',
  chinese_name: "韩式烤盘饭",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-14.jpg',
}

const korean_kitchen: CanteenWindow = {
  name: 'Korean Kitchen',
  path: 'korean_kitchen',
  chinese_name: "韩式料理",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-15.jpg',
}

const fried_rice: CanteenWindow = {
  name: 'Fried Rice',
  path: 'fried_rice',
  chinese_name: "木桶饭",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-16.jpg',
}

export const Canteen2: Canteen = {
  name: 'Canteen2',
  path: 'canteen2',
  window_list: [western_fast_food, korean_fried_rice, korean_kitchen, fried_rice]
}
