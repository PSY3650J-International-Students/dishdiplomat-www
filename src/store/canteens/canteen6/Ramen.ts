import { Dish, Spicy, Religion } from "@/types/Dish";

  export const dishes_Ramen: { [key: string]: Dish } = {
    dish1: {
      name: "Tomato and Egg Ramen",
      chinese_name: "西红柿鸡蛋拉面",
      path: 'dish1',
      cover_picture:'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      flavor: ["Sweet"],
      available_spicy_level: [Spicy.Not_Spicy],
      religion_restriction: [Religion.Not_Vegetarian],
      Side_dish: [],
    },
    dish2: {
      name: "Stir-fried Pork with Green Bell Peppers",
      chinese_name: "青椒肉丝拉面",
      path: 'dish2',
      available_spicy_level: [Spicy.Not_Spicy],
      religion_restriction: [Religion.Contains_Pork, Religion.Not_Vegetarian],
      cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      flavor: ["a little bit Spicy"],
      Side_dish: [],
    },
};
