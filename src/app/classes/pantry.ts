import { Ingredient } from './ingredient';
import { PantryID } from './pantryID';
import { User } from './user';

export class Pantry {
    pantryID: PantryID;
    user: User;
    ingredient: Ingredient;
    quantity: number;
    units: string;
}