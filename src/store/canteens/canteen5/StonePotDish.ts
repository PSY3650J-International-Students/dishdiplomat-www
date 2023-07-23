import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const: Side_Dish[] = [new Side_Dish("石锅豆腐","tofu"),new Side_Dish("石锅鸡蛋","egg"),
new Side_Dish("石锅茄子","eggplant"), new Side_Dish("石锅鸡柳","chicken willow"), new Side_Dish("石锅鸡块","chicken nuggets")]


  export const dishes_StonePotDish: { [key: string]: Dish } = {
    dish1: {
      name: "Stone Pot Dish",
      chinese_name: "石锅菜",
      path: 'dish1',
      introduction: "heat up kinds of food with stone pot",
      cover_picture:'/canteens/canteen5/canteen6_Stone_pot_dishes.jpg',
      Side_dish: dishs_const,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },
    
};