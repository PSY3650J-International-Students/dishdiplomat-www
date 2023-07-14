import { Dish, Side_Dish } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("肉末茄子", "Eggplant with pork 12￥"),new Side_Dish("手撕鸡", "shredded chicken 13￥"),new Side_Dish("可乐鸡", "Cola chicken 13￥"),
new Side_Dish("鱼香肉丝","fired shredded pork 14￥"),new Side_Dish("土豆酱肉","Pork with potato 14￥"),new Side_Dish("宫保鸡丁","Kung Pao Chicken 14￥")
,new Side_Dish("黑椒鸡排","Black pepper chicken steak 15￥"),new Side_Dish("巴西烤香鸡","Brazil roaste chicken 15￥"),new Side_Dish("上校鸡块","Colonel's chicken 15￥"),
new Side_Dish("海苔照烧鸡","Teriyaki chicken 16￥"),new Side_Dish("牛肉拼鸡丝","Beef & shredded chicken 17￥"),new Side_Dish("牛肉拼鸡扒","Beef & chicken steak 17￥"),new Side_Dish("牛肉饭","Beef 18￥")]


export const dishes_Fplus: { [key: string]: Dish } = {
    dish1: {
      name: "F+ beef rice",
      chinese_name:"",
      path: 'dish1',
      introduction:`The F+ set meal includes steamed eggs, vegetable, potato shreads, rice, cola and the side dish you choose.
      Here is the list for side dish.`,
      cover_picture:'canteens/canteen4/F+_chicken.jpeg',
      Side_dish: dish0_const,
      available_spicy_level: [],
      religion_restriction: []
    },

};