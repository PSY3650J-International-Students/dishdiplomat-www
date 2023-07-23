import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const: Side_Dish[] = [new Side_Dish("秘制猪肉刀削面","Pork"),new Side_Dish("特色炸酱刀削面","fried bean sauce"),
new Side_Dish("红烧鸡块刀削面","Braised chicken chips"), new Side_Dish("番茄鸡蛋刀削面","Tomato and Eggs")]


  export const dishes_DaoxiaoNoodles: { [key: string]: Dish } = {
    dish1: {
      name: "Daoxiao Noodles",
      chinese_name: "刀削面",
      path: 'dish1',
      introduction: "Broad and chewy noodles are made by expertly slicing strips of dough directly into boiling water.Served with a flavorful broth and a variety of toppings.",
      cover_picture:'/canteens/canteen5/canteen6_Daoxiao_Noodles.jpg',
      Side_dish: dishs_const,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },
    
};