export enum Spicy{
  Not_Spicy = 0,
  Mild = 1,
  Medium = 2,
  Hot = 3,
  Extra_Hot = 4,
}

export enum Religion {
  Contains_Pork = 0,
  Contains_Beef = 1,
  Not_Vegetarian = 2,
  No_taboo = 3,
}

export interface Dish{
    name: string,
    chinese_name: string,
    path: string,
    cover_picture?: string | undefined,
    picture_title?: string | undefined,
    available_spicy_level : Spicy[],
    religion_restriction : Religion[],
    Side_dish? : string[],
    flavor? : string[],
    extra? : string,
}
