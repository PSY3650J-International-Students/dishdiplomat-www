import { Dish, Flavor, Side_Dish, Religion, Spicy } from "@/types/Dish";


const dishs_const1: Side_Dish[] = [new Side_Dish("煎饺","Pan-Fried Dumplings"), new Side_Dish("葱油饼","Scallion Pancake"), new Side_Dish("糖饺","Sugar Dumplings"),
new Side_Dish("桃酥饼","Chinese walnut cookie"), new Side_Dish("糍粑","Sticky Rice Cakes"), new Side_Dish("千层饼","Layered Pancake"),new Side_Dish("酱五香饼","Sauce Spiced Pancake"), 
new Side_Dish("五香饼","Spiced Pancake"), new Side_Dish("紫薯饼","Purple Sweet Potato Pancake"), new Side_Dish("甜酥饼","Sweet Crisp Pancake"), new Side_Dish("蝴蝶酥","Butterfly Pastries"),
new Side_Dish("素菜小饼","Vegetable Pancake"), new Side_Dish("公婆饼","Gongpo bread"), new Side_Dish("牛肉煎包","Beef Pan-Fried Buns"), new Side_Dish("鸡蛋卷","Egg Rolls"),
new Side_Dish("蛋夹馍","Egg-stuffed Flatbread"),new Side_Dish("土家酱香饼","Tujia Sauce-Flavored Pancakes"),new Side_Dish("青椒蛋饼","Green Pepper Egg Pancakes"),
new Side_Dish("糍饭团","Rice Ball"), new Side_Dish("小馄饨","Mini Wontons"),new Side_Dish("小笼包","Xiao Long Bao"), new Side_Dish("生煎包","Pan-Fried Buns")]

const dishs_const2: Side_Dish[] = [
  new Side_Dish("白馒头","Steamed Buns"), 
  new Side_Dish("花卷馒头","Flower Roll Buns"), 
  new Side_Dish("菜包","Vegetable Buns"), 
  new Side_Dish("肉包","Meat Buns"), 
  new Side_Dish("南瓜发糕","Pumpkin Steamed Cake"), 
  new Side_Dish("红糖馒头","Brown Sugar Steamed Buns"), 
  new Side_Dish("南瓜馒头","Pumpkin Steamed Buns"), 
  new Side_Dish("杂粮馒头","Multigrain Steamed Buns"), 
  new Side_Dish("韭菜饼","Chive Pancakes"), 
  new Side_Dish("萝卜丝饼","Radish Pancakes"), 
  new Side_Dish("鸡蛋饼","Egg Pancakes"), 
  new Side_Dish("麻球","Sesame Balls"), 
  new Side_Dish("南瓜饼","Pumpkin Patties"), 
  new Side_Dish("南瓜粥","Pumpkin Porridge"), 
  new Side_Dish("黑米粥","Black Rice Porridge"), 
  new Side_Dish("白米粥","Rice Porridge"), 
  new Side_Dish("发糕","Steamed Cake"), 
]

  export const dishes_Appitizer: { [key: string]: Dish } = {
    dish1: {
      name: "Tea Eggs",
      chinese_name: "茶叶蛋",
      path: 'dish1',
      introduction: "A popular Chinese snack made by gently simmering boiled eggs in a flavorful mixture of tea, soy sauce, and spices. The eggs absorb the fragrant aroma of tea and develop a marbled pattern on the surface, resulting in a unique and delicious taste.",
      cover_picture:'canteens/canteen6/004.jpg',
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },

    dish2: {
      name: "Bread and Cakes",
      chinese_name: "西式点心",
      path: 'dish2',
      introduction: "Various types of bread and cakes",
      cover_picture:'canteens/canteen6/004.jpg',
      Side_dish: [new Side_Dish("面包圈","Donut"), new Side_Dish("面包土司","Toast"), new Side_Dish('蛋糕','Cake')],
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },

    dish3: {
        name: "Pancakes and Dumplings",
        chinese_name: "甜咸饼类和饺子类",
        path: 'dish3',
        introduction: "Various types of Tortilla Pancakes and Dumplings",
        cover_picture:'canteens/canteen6/004.jpg',
        Side_dish: dishs_const1,
        available_spicy_level: [ ],
        religion_restriction: [ ],
      },

    dish4: {
      name: "Buns",
      chinese_name: "馒头类",
      path: 'dish4',
      introduction: "Delicate and translucent wrappers are filled with a delectable mixture of minced meats, vegetables, and aromatic spices, then boiled or steamed to perfection.",
      cover_picture:'canteens/canteen6/005.jpg',
      Side_dish: dishs_const2,
      available_spicy_level: [ ],
      religion_restriction: [ ],
    },
    
};