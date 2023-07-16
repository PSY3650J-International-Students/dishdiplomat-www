
import { Dish, Side_Dish } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("南京鸭血粉丝汤", "Classical duck blood vermicelli 15￥"),new Side_Dish("鸭肉豆皮粉丝汤", "Duck and fired beancurd skin vermicelli 14￥"),new Side_Dish("油豆腐鸭血粉丝汤", "Duck blood and fired beancurd vermicelli 8￥"),
new Side_Dish("牛肉粉丝汤", "Beef vermicelli 15￥"),new Side_Dish("三鲜粉丝汤", "Meatball vermicelli 15￥"),new Side_Dish("金针菇肥牛","Fried pork and beef rolls vermicelli 20￥")
,new Side_Dish("鸭胗豆皮粉丝汤", "Duck gizzard and fired beancurd skin vermicelli 14￥"),new Side_Dish("牛杂粉丝汤","Beef offal vermicelli 15￥")]


export const dishes_Duck_blood: { [key: string]: Dish } = {
    dish1: {
      name: "Vermicelli with soup",
      chinese_name:"",
      path: 'dish0',
      introduction:`Nanjing Duck blood Vermicelli with soup is a local popular snack. It contains duck bowels, duck gizzard, duck blood and Fired bean curd.
      Duck blood tastes like ielly with special flavor, you can try it! And if you don't like it, there are also other options. 
      This window also provide other dishes like fine rice noodle, spicy and sour rice noodles and so on, but I think 
      seldom people will order them. If you needed, you can translate the menu, or we will add them to website later.`,
      cover_picture:'canteens/canteen4/Duck_blood_soup.jpg',
      Side_dish: dish0_const,
      available_spicy_level: [],
      religion_restriction: []
    },

};