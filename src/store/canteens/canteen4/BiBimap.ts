import { Dish, Flavor, Side_Dish, Spicy } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("火腿肠","Ham sausage 9￥"),new Side_Dish("芝士","Cheese 11￥"),new Side_Dish("泡菜","pickle 11￥"),new Side_Dish("鸡肉","Chicken 12￥"),
new Side_Dish("五花肉", "Pork 14￥"), new Side_Dish("黑椒牛柳","Beef with black pepper 14￥"), new Side_Dish("肥牛","Beef roll 15￥")]
const dish1_const: Side_Dish[] = [new Side_Dish("泡菜","pickle 13￥"),new Side_Dish("泡菜鸡肉","Pickle and Chicken 15￥"), new Side_Dish("泡菜肥牛","Pickle and Beef roll 16￥")]

const flavor2_const: Flavor[] = [new Flavor("原味","Normal 13￥"),new Flavor("番茄","Tomato soup 14￥"),new Flavor("麻辣","Extra spicy 15￥"),new Flavor("酸辣","Sour & spicy 15￥"),new Flavor("金汤","Golden soup(Mild spicy) 15￥"),
new Flavor("鸡肉","Chicken 15￥"),new Flavor("肥牛","Beef rool 16￥")]

export const dishes_BiBimap: { [key: string]: Dish } = {
    dish0: {
      name: "Bibimap",
      chinese_name: "韩式石锅拌饭",
      path: 'dish1',
      introduction:'Bibimap = rice + vegetable + scallion + an egg + sauce + the side dish you choose below !',
      cover_picture:'canteens/canteen4/Bibimap.jpeg',
      picture_title:'Tongue-numbing spicy chicken',
      Side_dish: dish0_const,
      available_spicy_level: [Spicy.Mild],
      religion_restriction: []
    },
    dish1: {
        name: "Korean Shin ramen",
        chinese_name: "辛拉面",
        path: 'dish1',
        introduction: 'Very similar to the same brand instant noodles.',
        picture_title:'Tongue-numbing spicy chicken',
        Side_dish: dish1_const,
        available_spicy_level: [Spicy.Medium],
        religion_restriction: []
      },
      dish2: {
        name: "Grain rice noodles",
        chinese_name: "杂粮粉",
        path: 'dish1',
        introduction: `The cover is for reference only. Except chicken and beef rool rice noodles(if you choose), this dish is made by rice noodles,
         vegetables, and fish. `,
        cover_picture:'canteens/canteen4/Fishricenoodles.jpg',
        picture_title:'Tongue-numbing spicy chicken',
        flavor: flavor2_const,
        available_spicy_level: [],
        religion_restriction: []
      },  
};
