import { Dish } from "@/types/Dish";

  export const dishes_Ramen: { [key: string]: Dish } = {
    dish1: {
      name: "Tomato and Egg Ramen",
      chinese_name: "西红柿鸡蛋拉面",
      path: 'dish1',
      cover_picture:'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      introduction: "Tomatos, Eggs with Ramen",
      flavor: ["Sweet"],
      Side_dish: [],
      Ingredients: ["Tomatos", "Eggs", "Ramen"]
    },
    dish2: {
      name: "Stir-fried Pork with Green Bell Peppers",
      chinese_name: "青椒肉丝拉面",
      path: 'dish2',
      cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      flavor: ["a little bit Spicy"],
      introduction: "Ramen, Stir-fried Pork with Green Bell Peppers!",
      Side_dish: [],
      Ingredients: ["Pork","Green Bell Peppers","Ramen"]
    },
};
