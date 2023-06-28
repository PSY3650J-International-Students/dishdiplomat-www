export interface Dish{
    name: string,
    chinese_name: string,
    path: string,
    cover_picture: string | null,
    flavor? :string[],
    Side_dish? : string[],
    Ingredients ?: string[],
    introduction: string,
}