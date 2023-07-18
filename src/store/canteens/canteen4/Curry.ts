import { Dish, Side_Dish } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("小酥肉", "Fried pork 16￥"),new Side_Dish("脆骨肠+蛋", "Sausage + egg 16￥"),new Side_Dish("竹夹鱼", "Fired fish 17￥"),
new Side_Dish("香辣鸡排","Spicy chicken chop 16￥"),new Side_Dish("脆骨肠","Sausages 17￥"),new Side_Dish("菜蔬"," Vegetable 13￥")
,new Side_Dish("雪花鸡柳","Fried chicken fillet 15￥"),new Side_Dish("杏鲍菇","Mushrooms 16￥"),new Side_Dish("菜蔬+蛋"," Vegetable + egg 14￥"),
new Side_Dish("厚烧鸡肉","Thick chicken chop 18￥"),new Side_Dish("时蔬蛋包饭","Omurice 17￥"),new Side_Dish("鸡米花","Fired chicken 17￥"),new Side_Dish("禾烧牛肉","Beef 22 ￥")]


export const dishes_curry: { [key: string]: Dish } = {
    dish1: {
      name: "Curry rice",
      chinese_name:"",
      path: 'dish1',
      introduction:`This window open recently. Here is a menu. We have sorted it in the "available dish" column
      , with the order from left to right and from up to down.`,
      cover_picture:'canteens/canteen4/Curry_menu.jpg',
      Side_dish: dish0_const,
      available_spicy_level: [],
      religion_restriction: []
    },

};