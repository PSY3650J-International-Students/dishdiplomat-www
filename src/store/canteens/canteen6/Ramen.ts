import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const: Side_Dish[] = [new Side_Dish("西红柿鸡蛋","Tomato and eggs "),new Side_Dish("青椒肉丝","Green Pepper Shredded Pork"),
new Side_Dish("小酥肉","Crispy Pork"),new Side_Dish("肉酱","Crispy Pork"),new Side_Dish("鸡腿", "Chicken Leg"), new Side_Dish("黑椒牛柳","Black Pepper Beef Fillet"),
new Side_Dish("金针菇肥牛","Enoki Mushroom with Fatty Beef"), new Side_Dish("辣椒小公鸡","Spicy Chili Chicken"), new Side_Dish("大盘鸡","Big Plate Chicken"),
new Side_Dish("番茄牛腩","Tomato Braised Beef Brisket"), new Side_Dish("麻辣鱼片","Spicy Fish Fillet"), new Side_Dish("红烧羊肉","Braised Lamb")]


  export const dishes_Ramen: { [key: string]: Dish } = {
    dish1: {
      name: "Ramen",
      chinese_name: "拉面",
      path: 'dish1',
      introduction: "a beloved noodle dish from China characterized by its hand-pulled noodles, delicious broth, and various toppings that create a delightful culinary experience.",
      cover_picture:'canteens/canteen6/001.jpg',
      Side_dish: dishs_const,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },
    
};
