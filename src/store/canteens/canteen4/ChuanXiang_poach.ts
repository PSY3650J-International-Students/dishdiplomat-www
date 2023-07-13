import { Dish, Flavor, Side_Dish } from '@/types/Dish';

const flavors_const: Flavor[] = [new Flavor("菌菇", "Mushrooms"), new Flavor("金汤", "Sour & Spicy"), new Flavor("水煮", "Spicy"), new Flavor("藤椒", "Toungue-numbing Spicy")]
const dishs_const: Side_Dish[] = [new Side_Dish("鸡肉片","Chicken 13￥"),new Side_Dish("肉片","Pork 15￥"),new Side_Dish("小酥肉","Fried pork 15￥"),new Side_Dish("油煌鸡","Drumstick 15￥"),new Side_Dish("鱼", "Fish 16￥")]

export const dishes_ChuanXiang: { [key: string]: Dish } = {
    dish1: {
      name: "Boiled dishes",
      chinese_name: "",
      path: 'dish1',
      introduction:'The vegetables in the boiled dish are Chinese cabbage and bean sprout',
      cover_picture:'canteens/canteen4/Tengjiao_chicken.jpeg',
      picture_title:'Tongue-numbing spicy chicken',
      flavor: flavors_const,
      Side_dish: dishs_const,
      available_spicy_level: [],
      religion_restriction: []
    },

};
