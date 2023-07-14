import { Dish, Side_Dish, Spicy } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("炸鸡盖饭", "Fried chicken with potato"),new Side_Dish("鸡排饭", "Big chicken chop"),new Side_Dish("鸡腿套餐", "Fried Drumstick"),
new Side_Dish("蝴蝶酥","butterfly cookie"),new Side_Dish("半只鸡套餐","Half chicken")]

const dish1_const: Side_Dish[] = [new Side_Dish("炸鸡", "Fried chicken"),new Side_Dish("鸡排", "Big chicken chop"),new Side_Dish("鸡腿", "Fried Drumstick"),
new Side_Dish("香酥鸡柳","Fried chicken fillet"),new Side_Dish("半只鸡","Half chicken"),new Side_Dish("首尔鸡块","Seoul chicken nuggets"),
new Side_Dish("盐酥鸡","Salty crisp chicken"),new Side_Dish("洋葱圈","Onion rings")]


export const dishes_Korean_fried_chicken: { [key: string]: Dish } = {
    dish0:{
      name: "Korean_fried_chicken set meal",
      chinese_name: "",
      introduction: `The set meal includes fried chicken, potatoes, Chinese cabbage and rice.
      The pictures are posted at the top of the window. You can choose the fired chicken you like in the 
      in the "available dish" column. If you only want to order fired chicken, please turn to next page`,
      path: 'dish0',
      cover_picture:"canteens/canteen4/fried_chicken.jpeg",
      Side_dish: dish0_const,
      religion_restriction: [],
      available_spicy_level: [Spicy.Not_Spicy,Spicy.Mild]
    },
    dish1: {
      name: "Fried_chicken",
      chinese_name: "单点",
      path: 'dish1',
      religion_restriction: [],
      available_spicy_level: [],
      Side_dish: dish1_const
    },
};