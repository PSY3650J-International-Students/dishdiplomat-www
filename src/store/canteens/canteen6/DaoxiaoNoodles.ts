import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const: Side_Dish[] = [new Side_Dish("肉酱","Crispy Pork"),new Side_Dish("黑椒牛柳","Black Pepper Beef Fillet"),
new Side_Dish("金针菇肥牛","Enoki Mushroom with Fatty Beef"), new Side_Dish("辣椒小公鸡","Spicy Chili Chicken"), new Side_Dish("大盘鸡","Big Plate Chicken"),
new Side_Dish("番茄牛腩","Tomato Braised Beef Brisket"), new Side_Dish("麻辣鱼片","Spicy Fish Fillet")]


  export const dishes_DaoxiaoNoodles: { [key: string]: Dish } = {
    dish1: {
      name: "Daoxiao Noodles",
      chinese_name: "刀削面",
      path: 'dish1',
      introduction: "Broad and chewy noodles are made by expertly slicing strips of dough directly into boiling water.Served with a flavorful broth and a variety of toppings.",
      cover_picture:'canteens/canteen6/003.jpg',
      Side_dish: dishs_const,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },
    
};
