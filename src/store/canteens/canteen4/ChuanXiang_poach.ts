import { Dish, Flavor } from '@/types/Dish';

const flavors_const: Flavor[] = [new Flavor("菌菇", "Mushrooms"), new Flavor("金汤", "Sour & Spicy"), new Flavor("水煮", "Spicy"), new Flavor("藤椒", "Toungue-numbing Spicy")]

export const dishes_ChuanXiang: { [key: string]: Dish } = {
    dish1: {
      name: "Boiled dishes",
      chinese_name: "水煮",
      path: 'dish1',
      cover_picture:'canteens/canteen4/Tengjiao_chicken.jpeg',
      picture_title:'Tongue-numbing spicy chicken',
      flavor: flavors_const,
      Side_dish: ["Chicken 鸡肉片 13￥","Pork 肉片 15￥","Fried pork 小酥肉 15￥","Drumstick 油煌鸡 15￥","Fish 鱼 16￥"],
      available_spicy_level: [],
      religion_restriction: []
    },

};
