import { Nutrition } from './nutrition';

export class Recipe {
    recipeID: number;
    description: string;
    prepTime: number;
    cookTime: number;
    yield: number;
    nutrition: Nutrition;
}