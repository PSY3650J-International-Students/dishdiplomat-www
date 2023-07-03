import { Dish, Spicy, Religion } from '@/types/Dish';


export const dishes_Timo: { [key: string]: Dish } = {
    dish1: {
      name: "bread",
      chinese_name: "面包",
      path: 'dish1',
      cover_picture:'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      flavor: [],
      religion_restriction: [Religion.No_taboo],
      available_spicy_level: [Spicy.Not_Spicy]
    },
    dish2: {
      name: "cake",
      chinese_name: "蛋糕",
      path: 'dish2',
      cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      flavor: ["matcha"],
      available_spicy_level: [Spicy.Not_Spicy],
      religion_restriction: [ Religion.No_taboo],
    },
};
