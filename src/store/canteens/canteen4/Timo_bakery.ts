import { Dish, Flavor, Religion, Spicy } from '@/types/Dish';


const flavors_const: Flavor[] = [new Flavor("抹茶", "Matcha")]


export const dishes_Timo: { [key: string]: Dish } = {
    dish0:{
      name: "Timo_bakery",
      chinese_name: "甜魔烘焙",
      introduction: `All the desserts are put in the cabinet with a label. You can see the price on it
      just point at what you want, the stuff will take one to you. Following pages are some recommendation.`,
      path: 'dish0',
      religion_restriction: [Religion.No_taboo],
      available_spicy_level: [Spicy.Not_Spicy]
    },
    dish1: {
      name: "bread",
      chinese_name: "面包",
      path: 'dish1',
      cover_picture:'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      flavor: [],
      religion_restriction: [Religion.No_taboo],
      available_spicy_level: [Spicy.Not_Spicy]
    },
    dish2: {
      name: "cake",
      chinese_name: "蛋糕",
      path: 'dish2',
      cover_picture: 'https://statics.sjtucanteen.com/windows/photo_2023-06-24_21-23-12.jpg',
      flavor: flavors_const,
      available_spicy_level: [Spicy.Not_Spicy],
      religion_restriction: [ Religion.No_taboo],
    },
};
