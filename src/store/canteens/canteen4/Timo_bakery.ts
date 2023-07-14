import { Dish, Side_Dish } from '@/types/Dish';


const dish1_const: Side_Dish[] = [new Side_Dish("黄金乳酪", "Golden cheese bread"),new Side_Dish("巧克力曲奇", "Chocolate cookie"),new Side_Dish("蟹黄锅巴", "crab flavor rice crust"),
new Side_Dish("蝴蝶酥","butterfly cookie"),new Side_Dish("抹茶碱水","matcha pretzel"),new Side_Dish("碱水面包","pretzel")]


export const dishes_Timo: { [key: string]: Dish } = {
    dish0:{
      name: "Timo_bakery",
      chinese_name: "甜魔烘焙",
      introduction: `All the desserts, including breads, cakes, hot dogs and cookies are put in the cabinet with a label. You can see the price on it
      just point at what you want, the stuff will take one to you. Following pages are some recommendations.`,
      path: 'dish0',
      religion_restriction: [],
      available_spicy_level: []
    },
    dish1: {
      name: "golden cheese bread",
      chinese_name: "",
      path: 'dish1',
      cover_picture:'canteens/canteen4/Timo1.jpg',
      introduction:`From left to right and up to down, is Chocolate cookie, crab flavor rice crust, butterfly cookie 
      golden cheese bread, matcha pretzel(not recommended) and pretzel. Just pick what you like in the available dish column`,
      flavor: [],
      religion_restriction: [],
      available_spicy_level: [],
      Side_dish: dish1_const
    },
    dish2: {
      name: "Walnut brownie",
      chinese_name: "核桃布朗尼",
      path: 'dish2',
      cover_picture: 'canteens/canteen4/Timo2.jpg',
      available_spicy_level: [],
      religion_restriction: [],
    },
};
