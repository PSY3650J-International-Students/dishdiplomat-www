import { Dish, Side_Dish, Spicy } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("原味米粉", "Rice noodles only 9￥"),new Side_Dish("笋尖米粉", "Bamboo shoots 10￥"),new Side_Dish("丸子米粉", "Meat ball 12￥"),
new Side_Dish("鸡腿米粉", "Chicken dumpstick 13￥"),new Side_Dish("鸭腿米粉", "Duck dumpstick 15￥"),new Side_Dish("金针菇肥牛","Fried needle mushroom and beef rolls 15￥")
,new Side_Dish("辣椒小公鸡米粉","Spicy chicken 16￥"),new Side_Dish("番茄牛腩","Tomato beef 18￥"),new Side_Dish("香辣牛杂","Spicy beef offal 18￥")]


export const dishes_Guilin_ricenoodles: { [key: string]: Dish } = {
    dish1: {
      name: "Guilin rice noodles",
      chinese_name:"",
      path: 'dish1',
      introduction:`The Guilin rice noodles = rice noodels + corn + lettuce + peanut + sour long bean + green bean + 
      the side dish you choose.`,
      cover_picture:'canteens/canteen4/Guilin_Rice_noodles.jpg',
      Side_dish: dish0_const,
      available_spicy_level: [Spicy.Medium],
      religion_restriction: []
    },

};
