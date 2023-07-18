import { Dish, Flavor, Side_Dish, Spicy } from '@/types/Dish';

const dish0_const: Side_Dish[] = [new Side_Dish("金牌肘子饭","Pork shoulder 22￥"),new Side_Dish("金牌护心肉","Pork 18￥"),new Side_Dish("金牌护心肉","Pork 18￥"),new Side_Dish("金牌卤五花肉","Pork Belly 18￥")
,new Side_Dish("卤汁肉肠饭","Sausage 15￥"),new Side_Dish("卤汁鸭腿饭","Duck dumpsticks 15￥"),new Side_Dish("卤汁鸡腿饭","Chicken dumpsticks 13￥"),new Side_Dish("金牌牛腩","Brisket 22￥"),new Side_Dish("金牌脆骨","Gristle 16￥")]
const dish1_const: Side_Dish[] = [new Side_Dish("椒麻鸡心","Heart of chicken 18￥"),new Side_Dish("椒麻鸭胗","Duck gizzard 18￥"),new Side_Dish("椒麻香肉","Pork 15￥"),
new Side_Dish("椒麻莲藕","Lotus root 11￥"),new Side_Dish("椒麻鸭腿","Duck dumpsticks 16￥"),new Side_Dish("椒麻鸡块","Chicken 16￥"),new Side_Dish("椒麻腐竹","Bean curd sticks 11￥")]
const dish2_const: Side_Dish[] = [new Side_Dish("手撕排骨","Pork ribs 17￥"),new Side_Dish("可乐鸡块","Cola chicken 16￥")]
const dish3_const: Side_Dish[] = [new Side_Dish("卤五花肉+酱汁鸡腿","Pork Belly & Chicken dumpsticks 18￥"),new Side_Dish("椒麻鸭+可乐鸡块","Cola chicken & Toungue numbing duck 16￥"),new Side_Dish("卤汁鸭腿+滑嫩鸡丁","Duck dumpsticks & chicken 15￥"),
new Side_Dish("椒麻鸡+藤椒香肉","Toungue numbing chicken and pork")]



export const dishes_Shishanglu: { [key: string]: Dish } = {
    dish0: {
      name: "Braised_dishes",
      chinese_name: "",
      path: 'dish1',
      introduction:`A set meal of braised dishes = rice+ potato shreads+ vegatable+ half an egg + the braised_dishes you choose`,
      cover_picture:'canteens/canteen4/Pork.jpg',
      picture_title:'Tongue-numbing spicy chicken',
      Side_dish: dish0_const,
      available_spicy_level: [],
      religion_restriction: []
    },
    dish1: {
        name: "Toungue_numbing spicy braised dishes",
        chinese_name: "",
        path: 'dish1',
        introduction: `Here the braised dishes are toungue_numbing spicy`,
        cover_picture:'canteens/canteen4/.jpeg',
        picture_title:'Tongue-numbing spicy chicken',
        Side_dish: dish1_const,
        available_spicy_level: [Spicy.Medium],
        religion_restriction: []
      },
      dish2: {
        name: "Other",
        chinese_name: "",
        path: 'dish1',
        Side_dish: dish2_const,
        available_spicy_level: [],
        religion_restriction: []
      }, 
      dish3:{
        name: "Put_together",
        chinese_name: "双拼",
        introduction:"If you need other compostion, you can point the dish in front of you directly.",
        path: 'dish1',
        Side_dish: dish3_const,
        available_spicy_level: [],
        religion_restriction: []
      }
};
