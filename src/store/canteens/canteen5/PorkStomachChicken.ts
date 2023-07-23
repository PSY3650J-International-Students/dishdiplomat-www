import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const: Side_Dish[] = [new Side_Dish("招牌原味猪肚鸡","Orignal"),new Side_Dish("爽口藤椒猪肚鸡","ratten pepper"),
new Side_Dish("爆款酸辣猪肚鸡","sour and hot"), new Side_Dish("清新柠檬猪肚鸡","lemon"), new Side_Dish("可爱番茄猪肚鸡","tomato"),new Side_Dish("川湘麻辣猪肚鸡","spicy")]


  export const dishes_PorkStomachChiken: { [key: string]: Dish } = {
    dish1: {
      name: "Pork Stomach and Chicken",
      chinese_name: "猪肚鸡",
      path: 'dish1',
      introduction: "Soup with pork stomach and chicken",
      cover_picture:'/canteens/canteen5/canteen6_Steamed_pork_stomach_and_chicken.jpg',
      Side_dish: dishs_const,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },
    
};