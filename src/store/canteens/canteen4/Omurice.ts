import { Dish, Flavor, Side_Dish, Spicy } from '@/types/Dish';

const dish1_const: Side_Dish[] = [new Side_Dish("啤酒鸭","Beer duck 13￥"),new Side_Dish("地锅鸡","Pot Chicken 15￥")]

const flavor2_const: Flavor[] = [new Flavor("香辣","Extra spicy 18￥"),new Flavor("蒜香","Garlicky(Medium spicy) 18￥")]

export const dishes_Omurice: { [key: string]: Dish } = {
    dish0: {
      name: "Omurice",
      chinese_name: "蛋包饭",
      path: 'dish1',
      introduction:`A set meal of Omurice includes rice cover with fired egg, vegetable, and side dishes varying frequently.
      We can't provide a stable list of side dish, you can see them on the desk of the window, and choose one when ordering.`,
      cover_picture:'canteens/canteen4/Danbaofan.jpg',
      picture_title:'Tongue-numbing spicy chicken',
      available_spicy_level: [],
      religion_restriction: []
    },
    dish1: {
        name: "Pot chicken",
        chinese_name: "",
        path: 'dish1',
        introduction: 'Pot chicken is a dish with chicken in the middle, thin bread in the side of pot. Beer duck is also in the same form.',
        cover_picture:'canteens/canteen4/Pot_chicken.jpeg',
        picture_title:'Tongue-numbing spicy chicken',
        Side_dish: dish1_const,
        available_spicy_level: [Spicy.Mild],
        religion_restriction: []
      },
      dish2: {
        name: "Grilled fish",
        chinese_name: "烤鱼",
        path: 'dish1',
        introduction: `Although it was called "Grilled fish", but actually it's a fried fish boiled in sauce.
        Besides fish, there are also some vegatables like Chinese cabbage, bean sprout and tofu skins.
        WATCH OUT for the slight bones in fish! If you are not confident to debone the fish, don't order it. `,
        cover_picture:'canteens/canteen4/Roast_fish.jpg',
        picture_title:'Tongue-numbing spicy chicken',
        flavor: flavor2_const,
        available_spicy_level: [],
        religion_restriction: []
      },  
};
