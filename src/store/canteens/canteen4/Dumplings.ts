import { Dish, Flavor, Side_Dish, Spicy } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("原味","Normal 7￥"),new Side_Dish("红油","Spicy 7￥"),new Side_Dish("肉酱","Spicy pork sauce 10￥")
,new Side_Dish("香辣牛杂","Spicy beef offals 18￥"),new Side_Dish("鸭腿","Duck dumpsticks 15￥"),new Side_Dish("鸡腿","Chicken dumpsticks 13￥"),new Side_Dish("番茄牛腩","Tomato Brisket 16￥")]
const dish1_const: Side_Dish[] = [new Side_Dish("原味","Normal 7￥"),new Side_Dish("肉酱","Spicy pork sauce 10￥")
,new Side_Dish("香辣牛杂","Spicy beef offals 18￥"),new Side_Dish("鸭腿","Duck dumpsticks 15￥"),new Side_Dish("鸡腿","Chicken dumpsticks 13￥"),new Side_Dish("番茄牛腩","Tomato Brisket 16￥")]
const dish2_const: Side_Dish[] = [new Side_Dish("荠菜水饺","Shepherd's purse + pork"),new Side_Dish("白菜水饺","Cabbage + pork"),new Side_Dish("芹菜水饺","Celery + pork")]

const flavor2_const: Flavor[] = [new Flavor("","No sesame paste"),new Flavor("加麻酱","sesame paste +2￥")]

export const dishes_Dumplings: { [key: string]: Dish } = {
    dish0: {
      name: "Hot_and_dry noodles",
      chinese_name: "热干面",
      path: 'dish0',
      introduction:`Wuhan Hot_and_dry noodle is a traditional snack. It's a noodles with sesame paste, green onion, pickel 
      white radish, bean, and peanut. Actually it's not so hot, but very "dry" (salty). Please take some water. You can add some 
      spicy oil, vinagar and garlic in the left`,
      cover_picture:'canteens/canteen4/Reganmian.jpg',
      picture_title:'Tongue-numbing spicy chicken',
      Side_dish: dish0_const,
      available_spicy_level: [],
      religion_restriction: []
    },
    dish1: {
        name: "Cold noodles",
        chinese_name: "凉皮",
        path: 'dish1',
        introduction: `Cold noodles is a snack made by wide rice noodles. Seasoning is the same as Hot_and_dry noodles.`,
        cover_picture:'canteens/canteen4/liangpi.jpg',
        Side_dish: dish1_const,
        available_spicy_level: [Spicy.Not_Spicy, Spicy.Medium],
        religion_restriction: []
      },
      dish2: {
        name: "Dumplings",
        chinese_name: "",
        cover_picture: 'canteens/canteen4/dumpling.jpg',
        path: 'dish2',
        introduction:`Just enjoy dumplings! Choose dumpling stuffing in "available dishes"
        column, and whether to add sesame paste. Price: 10￥/ 18 dumplings.`,
        Side_dish: dish2_const,
        flavor: flavor2_const,
        available_spicy_level: [],
        religion_restriction: []
      }, 
};
