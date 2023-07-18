import { Dish, Side_Dish } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("钜惠套餐A", "Discount package A 10.9￥"),new Side_Dish("钜惠套餐B", "Discount package B 12.9￥"),new Side_Dish("钜惠套餐C", "Discount package C 15.9￥"),
new Side_Dish("人气组合A","Popular set A 15.9￥"),new Side_Dish("人气组合B","Popular set B 16.9￥"),new Side_Dish("人气组合C","Popular set C 17.9￥")
,new Side_Dish("人气组合D","Popular set D 17.9￥"),new Side_Dish("推荐组合A","Recommend set A 21.9￥"),new Side_Dish("推荐组合B","Recommend set B 22.9￥"),
new Side_Dish("小吃桶A","Snack bucket A 20.9￥"),new Side_Dish("小吃桶B","Snack bucket B 22.9￥")]


export const dishes_Hamburger: { [key: string]: Dish } = {
    dish1: {
      name: "Hamburger set meal",
      chinese_name:"",
      path: 'dish1',
      introduction:`Just order it like McDonald's. We have translate this page of menu, the most 
      popular set meals （All of them are spicy chicken hamburgers）. If you need other sets, please use translator or ask help from students nearby.
      Cola is free.`,
      cover_picture:'canteens/canteen4/hamburger3.jpg',
      Side_dish: dish0_const,
      available_spicy_level: [],
      religion_restriction: []
    },

};