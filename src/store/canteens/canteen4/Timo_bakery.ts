import { Dish, Spicy, Religion } from '@/types/Dish';


export const dishes_Timo: { [key: string]: Dish } = {
    dish1: {
      name: "bread",
      chinese_name: "面包",
      path: 'dish1',
      cover_picture:'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      religion_restriction: [],
      available_spicy_level: []
    },
    dish2: {
      name: "cake",
      chinese_name: "蛋糕",
      path: 'dish2',
      cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      flavor: ["matcha"],
      available_spicy_level: [Spicy.Not_Spicy, Spicy.Mild, Spicy.Medium, Spicy.Hot, Spicy.Extra_Hot],
      religion_restriction: [ Religion.Contains_Pork, Religion.Contains_Beef, Religion.Not_Vegetarian],
    },
};
