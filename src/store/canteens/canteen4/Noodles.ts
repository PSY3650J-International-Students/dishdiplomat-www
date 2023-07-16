import { Dish, Side_Dish } from '@/types/Dish';

const Add_egg: Side_Dish[] = [new Side_Dish("","No egg"),new Side_Dish("加蛋","Add an egg +2￥")]

export const dishes_Noodles: { [key: string]: Dish } = {
    dish0: {
      name: "Ramen",
      chinese_name: "拉面",
      path: 'dish0',
      introduction:`You can enjoy the cook stretchs the dough to noodles!
      For the side dish, if has a daily menu, you can take a photo to translate it, or just point at the dishes
      put on the desk in front of you.`,
      cover_picture:'canteens/canteen4/Lamian.jpg',
      Side_dish:Add_egg,
      available_spicy_level: [],
      religion_restriction: []
    },
    dish1: {
        name: "Sliced noodles",
        chinese_name: "刀削面",
        path: 'dish1',
        introduction:`Another kind of noodles which is sliced from a large dough. Side dish is the same as ramen`,
        cover_picture:'canteens/canteen4/Daoxiaomian.jpg',
        Side_dish:Add_egg,
        available_spicy_level: [],
        religion_restriction: []
      },

};