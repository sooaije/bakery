import { Ingredient } from '../../ingredient';

export interface Recipe {
  name:string,
  description:string,
  image_path:string,
  ingredient: Ingredient[]

}
