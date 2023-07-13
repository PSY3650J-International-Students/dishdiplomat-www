import { Dish, Side_Dish, Spicy } from '@/types/Dish';

const rice_const: Side_Dish[] =[new Side_Dish("要饭","Need rice"), new Side_Dish("不要饭","No rice")]

export const dishes_Spicy_pot: { [key: string]: Dish } = {
    dish1: {
      name: "Spicy pot",
      chinese_name: "麻辣香锅",
      path: 'dish1',
      introduction:`Spicy pot is a dish, the ingredent you choose will be boiled and fired with 
      flavour. Please take a dish to put meat(including meatballs), and a basin for vegetable(including
        mushroom, bean products, noodles and rice noodles). The price: Vegetable: 14.9￥/500g, Meat: 29.9￥/500g
        You need to pay for rice.`,
      cover_picture:'canteens/canteen4/Spicy_pot1.jpeg',
      picture_title:'Spicy pot',
      available_spicy_level: [Spicy.Not_Spicy,Spicy.Mild,Spicy.Medium,Spicy.Extra_Hot],
      Side_dish: rice_const,
      religion_restriction: []
    },
    dish2:{
        name: "Maocai",
      chinese_name: "冒菜",
      path: 'dish1',
      introduction:`Maocai is a dish, the ingredent you choose will be boiled in soup with flavor.
       Please take a dish to put meat(including meatballs), and a basin for vegetable(including
        mushroom, bean products, noodles and rice noodles). The price: Vegetable: 14.9￥/500g, Meat: 29.9￥/500g
        The rice is free.`,
      cover_picture:'canteens/canteen4/Spicy_pot1.jpeg',
      picture_title:'Spicy pot',
      available_spicy_level: [Spicy.Not_Spicy,Spicy.Mild,Spicy.Medium,Spicy.Extra_Hot],
      religion_restriction: []
    }

};