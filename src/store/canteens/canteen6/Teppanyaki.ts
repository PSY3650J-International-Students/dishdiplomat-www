import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const: Side_Dish[] = [
  new Side_Dish("杭椒牛柳","Hangzhou-style Sliced Beef with Chili Peppers"),
  new Side_Dish("鱿鱼","Squid"),
  new Side_Dish("酥肉肥肠","Crispy Pork Intestines"),
  new Side_Dish("豆腐","Tofu"),
  new Side_Dish("牛蛙", "Bullfrog"), 
  new Side_Dish("目鱼虾","Sea Cucumber and Shrimp"),
  new Side_Dish("小炒鸡杂","Stir-Fried Chicken Offal"), 
  new Side_Dish("黑椒鸡片","Black Pepper Chicken Slices"), 
  new Side_Dish("重庆烤鱼","Chongqing Grilled Fish"),
  ]


  export const dishes_Teppanyaki: { [key: string]: Dish } = {
    dish1: {
      name: "Teppan Grill",
      chinese_name: "铁板烧",
      path: 'dish1',
      introduction: "Skillful chefs showcase their talent as they stir-fry an array of fresh meats, seafood, and vegetables, creating a dynamic and interactive dining experience.  The aromatic spices and sauces used in Chinese Teppanyaki add depth and complexity to each dish, resulting in a tantalizing explosion of flavors.",
      cover_picture:'canteens/canteen6/009.jpg',
      Side_dish: dishs_const,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },
    
};
