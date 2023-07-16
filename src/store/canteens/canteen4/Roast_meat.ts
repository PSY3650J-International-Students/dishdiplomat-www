import { Dish, Flavor, Side_Dish } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("烤鸭腿饭", "Roasted duck dumpstick 10￥"),new Side_Dish("烤鸭饭", "Roasted duck 12￥"),new Side_Dish("豉油鸡饭", "Soy sauce chicken 14￥"),
new Side_Dish("烧味双拼饭", "Roasted duck + Soy sauce chicken 15￥")]

const dish0_flavor_const: Flavor[] = [new Side_Dish("","no egg"),new Side_Dish("不要汁","no soy sauce"),new Side_Dish("加蛋","Add an egg +2￥")]

export const dishes_Roasted_meat: { [key: string]: Dish } = {
    dish1: {
      name: "Set meal",
      chinese_name:"",
      path: 'dish0',
      introduction:`The set meal includes rice, cabbage, and the Canton roasted meat you choose in "available dish"
      You can add an extra stew egg (Selected in "available flavor" column).
      Here is the list for side dish.`,
      cover_picture:'canteens/canteen4/Roasted_meat.jpg',
      Side_dish: dish0_const,
      flavor: dish0_flavor_const,
      available_spicy_level: [],
      religion_restriction: []
    },

};