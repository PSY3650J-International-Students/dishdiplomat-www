import { Dish, Flavor, Side_Dish } from '@/types/Dish';


const dish1_const: Side_Dish[] = [new Side_Dish("香煎鸡肉", "fired chicken 15￥"),new Side_Dish("金枪鱼", "Tunny 18￥"),new Side_Dish("嫩烤鸡排", "Roasted chicken 16￥"),
new Side_Dish("鲜虾鱼丸","shrimp & fish balls 19￥"),new Side_Dish("牛肉","beef 22￥"),new Side_Dish("藤椒鸡块","Toungue-numbing Spicy chicken 16￥"),new Side_Dish("双拼","Beef & chicken 22￥"),
new Side_Dish("素食套餐","Vegetarian diet")]

const light_meal_flavor_const: Flavor[] = [new Flavor("沙拉酱","mayonnaise"),new Flavor("油醋汁","vinaigrette")]

export const dishes_light_meal: { [key: string]: Dish } = {
    dish0:{
      name: "Buck wheat noodle",
      chinese_name: "荞麦面",
      introduction: `The noodles includs green beans, corn, vegatable, carrot, broccoli, black fungus, and the meat you choose (In available dish column).`,
      path: 'dish0',
      cover_picture:'canteens/canteen4/QiaomaiNoodle.jpg',
      religion_restriction: [],
      available_spicy_level: [],
      flavor : light_meal_flavor_const,
      Side_dish : dish1_const
    },
    dish1: {
      name: "Rice",
      chinese_name: "五谷拌饭",
      introduction: `All the same as noodles, but replacing the noodles with whole grain rice.`,
      path: 'dish1',
      cover_picture:'canteens/canteen4/banfan.jpg',
      religion_restriction: [],
      available_spicy_level: [],
      flavor : light_meal_flavor_const,
      Side_dish: dish1_const
    },
};