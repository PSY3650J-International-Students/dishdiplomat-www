import { Dish} from '@/types/Dish'

export interface CanteenWindow {
  name: string,
  chinese_name: string,
  path: string,
  cover_picture: string,
  dishes: Dish[]
}
