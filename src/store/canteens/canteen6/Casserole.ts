import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const: Side_Dish[] = [
  new Side_Dish("韩国部队锅","Korean Army Stew"),
  new Side_Dish("美蛙鱼头","Bullfrog and Fish"),
  new Side_Dish("牛肉粉丝","Beef Vermicelli"),
  new Side_Dish("老鸭粉丝","Duck Vermicelli"),
  new Side_Dish("牛杂", "Beef Offal"), 
  new Side_Dish("猪肉炖粉条","Pork Stew with Vermicelli"),
  new Side_Dish("三鲜","Three Fresh Delicacies"), 
  new Side_Dish("蚌肉老豆腐","Clam Meat with Old Tofu"), 
  ]


  export const dishes_Casserole: { [key: string]: Dish } = {
    dish1: {
      name: "Delicious Casserole",
      chinese_name: "砂锅",
      path: 'dish1',
      introduction: "Known as a 'hot pot' in Asia, where various ingredients are simmered together in a flavorful broth.",
      cover_picture:'canteens/canteen6/010.jpg',
      Side_dish: dishs_const,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },
    
};
