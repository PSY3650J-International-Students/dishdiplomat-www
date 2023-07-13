import { Canteen } from '@/types/Canteen';
import { CanteenWindow } from '@/types/CanteenWindow';
import { dishes_ChuanXiang } from './canteen4/ChuanXiang_poach';
import { dishes_Spicy_pot } from './canteen4/Spicy_pot';
import { dishes_Timo } from './canteen4/Timo_bakery';



const Timo_Bakery: CanteenWindow = {
  name: 'Timo Bakery',
  path: 'Timo_Bakery',
  chinese_name: "甜魔烘焙",
  cover_picture: 'canteens/canteen4/Timo_bakery.jpg',
  dishes: Object.values(dishes_Timo),
}

const Spicy_Boiled_dishes: CanteenWindow = {
  name: 'Spicy Boiled dishes',
  path: 'Spicy_Boiled_dishes',
  chinese_name: "川湘水煮",
  cover_picture: 'canteens/canteen4/ChuanXiang_Poach.jpg',
  dishes:Object.values(dishes_ChuanXiang) ,
}

const Light_meal: CanteenWindow = {
  name: 'Light meal',
  path: 'Light_meal',
  chinese_name: "轻食五谷拌饭",
  cover_picture: 'canteens/canteen4/light_meal.jpg',
  dishes: [],
}

const Korean_fried_chicken: CanteenWindow = {
  name: 'Korean fried chicken',
  path: 'Korean_fried_chicken',
  chinese_name: "韩式鸟叔炸鸡",
  cover_picture: 'canteens/canteen4/fired_chicken.jpg',
  dishes: [],
}

const Braised_dishes: CanteenWindow = {
    name: 'Braised dishes',
    path: 'Braised_dishes',
    chinese_name: "食尚卤",
    cover_picture: 'canteens/canteen4/shishanglu.jpg',
    dishes: [],
}

const Bibimap_Grain_noodle: CanteenWindow = {
    name: 'Bibimap & Grain noodle',
    path: 'Bibimap_Grain_noodle',
    chinese_name: "石锅拌饭·杂粮粉",
    cover_picture: 'canteens/canteen4/Shiguo.jpg',
    dishes: [],
}

const Omurice: CanteenWindow = {
    name: 'Omurice & Earth pork chicken & Grilled fish',
    path: 'Omurice',
    chinese_name: "港式滑蛋饭",
    cover_picture: 'canteens/canteen4/Egg_rice.jpg',
    dishes: [],
}

const Maocai_Spicy_pot: CanteenWindow = {
    name: 'Maocai & Spicy pot',
    path: 'Maocai_Spicy_pot',
    chinese_name: "成都冒菜，麻辣香锅",
    cover_picture: 'canteens/canteen4/spicy_pot.jpg',
    dishes: Object.values(dishes_Spicy_pot),
}

const Steamed_dishes: CanteenWindow = {
    name: 'Steamed dishes',
    path: 'Steamed_dishes',
    chinese_name: "蒸功夫",
    cover_picture: 'canteens/canteen4/steam.jpg',
    dishes: [],
}

const Lanzhou_noodles: CanteenWindow = {
    name: 'Lanzhou noodles',
    path: 'Lanzhou_noodles',
    chinese_name: "兰州拉面",
    cover_picture: 'canteens/canteen4/Lazhou.jpg',
    dishes: [],
}

const Sliced_noodles: CanteenWindow = {
    name: 'Sliced noodles',
    path: 'Sliced_noodles',
    chinese_name: "河南烩面",
    cover_picture: 'canteens/canteen4/Huimian.jpg',
    dishes: [],
}

const Rice_noodles: CanteenWindow = {
    name: 'Rice noodles',
    path: 'Rice_noodles',
    chinese_name: "特色水饺",
    cover_picture: 'canteens/canteen4/Rice_noodles.jpg',
    dishes: [],
}

const Hot_and_Dry_noodles_dumplings: CanteenWindow = {
    name: 'Hot_and_Dry noodles & dumplings',
    path: 'Hot_and_Dry_noodles_dumplings',
    chinese_name: "武汉热干面",
    cover_picture: 'canteens/canteen4/Hot_dry_noodles.jpg',
    dishes: [],
}

const Beef_rice: CanteenWindow = {
    name: 'F+ Beef rice',
    path: 'Beef_rice',
    chinese_name: "F+牛肉饭",
    cover_picture: 'canteens/canteen4/F+.jpg',
    dishes: [],
}

const Chinese_pastry: CanteenWindow = {
    name: 'Chinese pastry',
    path: 'Chinese_pastry',
    chinese_name: "生煎苏式汤包",
    cover_picture: 'canteens/canteen4/shengjian.jpg',
    dishes: [],
}

const Rice_set: CanteenWindow = {
    name: 'Rice set',
    path: 'Rice_set',
    chinese_name: "脆皮鸡饭，土耳其烤肉饭",
    cover_picture: 'canteens/canteen4/Rice_set.jpg',
    dishes: [],
}

const Teppanyaki: CanteenWindow = {
    name: 'Teppanyaki',
    path: 'Teppanyaki',
    chinese_name: "铁板烧",
    cover_picture: 'canteens/canteen4/Tieban.jpg',
    dishes: [],
}
const Good_curry: CanteenWindow = {
    name: 'Good curry rice',
    path: 'Good_curry',
    chinese_name: "Good 咖喱饭",
    cover_picture: 'canteens/canteen4/Good_curry.jpg',
    dishes: [],
}

const Roast_meat: CanteenWindow = {
    name: 'Roast meat',
    path: 'Roast_meat',
    chinese_name: "港式烧腊",
    cover_picture: 'canteens/canteen4/Roast_meat.jpg',
    dishes: [],
}

const Superstar_hamburger: CanteenWindow = {
    name: 'Superstar hamburger',
    path: 'Superstar_hamburger',
    chinese_name: "巨星潮汉堡",
    cover_picture: 'canteens/canteen4/Hamburger.jpg',
    dishes: [],
}

const GIMLID_pizza: CanteenWindow = {
    name: 'GIMLID pizza',
    path: 'GIMLID_pizza',
    chinese_name: "吉姆利德（四餐）",
    cover_picture: 'canteens/canteen4/GMLD.jpg',
    dishes: [],
}

const Self_picking_dishes: CanteenWindow = {
    name: 'Self picking dishes',
    path: 'Self_picking_dishes',
    chinese_name: "农家菜（四餐）",
    cover_picture: 'canteens/canteen4/zixuan.jpg',
    dishes: [],
}

const Vermicelli_with_duck_blood_soup: CanteenWindow = {
    name: 'Vermicelli with duck blood soup',
    path: 'Vermicelli_with_duck_blood_soup',
    chinese_name: "鸭血粉丝汤",
    cover_picture: 'canteens/canteen4/FensiTang.jpg',
    dishes: [],
}

const Hotchpotch: CanteenWindow = {
    name: 'Hotchpotch',
    path: 'Hotchpotch',
    chinese_name: "鑫龙福麻辣烫",
    cover_picture: 'canteens/canteen4/hot_potch.jpg',
    dishes: [],
}

export const Canteen4: Canteen = {
  name: 'Canteen4',
  path: 'canteen4',
  window_list: [Timo_Bakery, Spicy_Boiled_dishes, Light_meal, Korean_fried_chicken
    ,Braised_dishes,Bibimap_Grain_noodle,Omurice,Maocai_Spicy_pot,Steamed_dishes
    ,Lanzhou_noodles,Sliced_noodles,Rice_noodles,Hot_and_Dry_noodles_dumplings
    ,Beef_rice,Chinese_pastry,Rice_set,Teppanyaki,Good_curry,Roast_meat,Superstar_hamburger
    ,GIMLID_pizza,Self_picking_dishes,Vermicelli_with_duck_blood_soup,Hotchpotch]
}
