import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const: Side_Dish[] = [new Side_Dish("原味","Original"), new Side_Dish("笋尖","Bamboo Shoots"), new Side_Dish("黑椒牛柳","Black Pepper Beef Fillet"),
new Side_Dish("金针菇肥牛","Enoki Mushroom with Fatty Beef"), new Side_Dish("贡丸","Meatball"), new Side_Dish("鸡腿","Chicken"),
new Side_Dish("番茄牛腩","Tomato Braised Beef Brisket"), new Side_Dish("麻辣鱼片","Spicy Fish Fillet")]


  export const dishes_RiceNoodles: { [key: string]: Dish } = {
    dish1: {
      name: "Guilin Rice Noodles",
      chinese_name: "桂林米粉",
      path: 'dish1',
      introduction: "A delicious and iconic dish featuring rice noodles in a savory broth, topped with various ingredients.",
      cover_picture:'canteens/canteen6/002.jpg',
      Side_dish: dishs_const,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },

    dish2: {
        name: "Dumplings",
        chinese_name: "水饺",
        path: 'dish2',
        introduction: "Delicate and translucent wrappers are filled with a delectable mixture of minced meats, vegetables, and aromatic spices, then boiled or steamed to perfection.",
        cover_picture:'canteens/canteen6/002.jpg',
        available_spicy_level: [ ],
        religion_restriction: [ ],
      },
    
};