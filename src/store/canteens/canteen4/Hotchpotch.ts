import { Dish, Flavor } from '@/types/Dish';

const flavor0_const: Flavor[] = [new Flavor("麻辣烫","Hotch potch"),new Flavor("麻辣拌","Spicy mix")]

export const dishes_hotch_potch: { [key: string]: Dish } = {
    dish1: {
      name: "Hotch potch & Spicy mix",
      chinese_name: "鑫龙福麻辣烫",
      path: 'dish1',
      introduction:`Hotch potch is a traditional snake. The ingredent you choose will be boiled and soaked in soup with 
      flavour. Spicy mix is relatively new, The ingredent will be boiled too, but they will be mixed up with sauce, chili and crushed peanuts.
      Just take a basin in the left of the window, and choose what you want to eat on the shelf nearby!
      All the ingredient has a uniform price: 21.9￥/500g. Rice is not provided. If you need, please go to the opposite side, there is 
      self-picking dish area, you can find rice near cashier.`,
      cover_picture:'canteens/canteen4/hotch_potch.jpeg',
      flavor: flavor0_const,
      available_spicy_level: [],
      religion_restriction: []
    },

};
