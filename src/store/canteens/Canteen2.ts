import { Canteen } from '@/types/Canteen';
import { CanteenWindow } from '@/types/CanteenWindow';

const western_fast_food: CanteenWindow = {
  name: 'Western Fast Food',
  path: 'western_fast_food',
  chinese_name: "西式简餐",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
  dishes: [],
}

const korean_fried_rice: CanteenWindow = {
  name: 'Korean Fried Meat & Vegetables with Rice',
  path: 'korean_fried_rice',
  chinese_name: "韩式烤盘饭",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-14.jpg',
  dishes: [],
}

const korean_kitchen: CanteenWindow = {
  name: 'Korean Kitchen',
  path: 'korean_kitchen',
  chinese_name: "韩式料理",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-15.jpg',
  dishes: [],
}

const fried_rice: CanteenWindow = {
  name: 'Rice topped with Meat and Vegetables (Donburi)',
  path: 'fried_rice',
  chinese_name: "木桶饭",
  cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-16.jpg',
  dishes: [],
}

export const Canteen2: Canteen = {
  name: 'Canteen2',
  path: 'canteen2',
  window_list: [western_fast_food, korean_fried_rice, korean_kitchen, fried_rice]
}
