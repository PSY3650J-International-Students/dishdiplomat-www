import { Dish, Side_Dish } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("黑椒鸡排套餐","Black pepper chicken stack 13￥"),new Side_Dish("金针菇肥牛","Fried needle mushroom and beef rolls 15￥"),new Side_Dish("黑椒肉排套餐","Black pepper beef stack 16￥"),new Side_Dish("香酥猪排套餐","Fried Pork stack 16￥")]
const dish1_const: Side_Dish[] = [new Side_Dish("","Fired rice only"),new Side_Dish("黑椒肉末","Black papper minced pork 13￥"),new Side_Dish("老干妈鸡肉","Spicy chicken 14￥"),
new Side_Dish("牛肉","Beef 14￥"),new Side_Dish("广式腊肠","Canton sausage 15￥")]
const dish2_const: Side_Dish[] = [new Side_Dish("牛肉炒面","Fired noodles with beef 15￥"),new Side_Dish("牛肉炒河粉","Fired rice noodles with beef 15￥"), new Side_Dish("牛肉炒细粉","Fired fine rice noodles with beef (specialty of Wenzhou) 15￥")]




export const dishes_Teppanyaki: { [key: string]: Dish } = {
    dish0: {
      name: "Set_meal",
      chinese_name: "",
      path: 'dish0',
      introduction:`A set meal contains rice, fired cabbage, an fired agg, black pepper sauce and the meat you choose.`,
      cover_picture:'canteens/canteen4/Tieban_1.jpg',
      picture_title:'Tongue-numbing spicy chicken',
      Side_dish: dish0_const,
      available_spicy_level: [],
      religion_restriction: []
    },
    dish1: {
        name: "Fried rice",
        chinese_name: "炒饭",
        path: 'dish1',
        introduction: `Very sorry, we will add a cover later.`,
        Side_dish: dish1_const,
        available_spicy_level: [],
        religion_restriction: []
      },
      dish2: {
        name: "Other",
        chinese_name: "",
        path: 'dish2',
        introduction: `Very sorry, we will add a cover later.`,
        Side_dish: dish2_const,
        available_spicy_level: [],
        religion_restriction: []
      }, 

};
