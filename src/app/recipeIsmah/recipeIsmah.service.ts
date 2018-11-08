import { Injectable , EventEmitter } from '@angular/core';
import { Recipe } from './recipe-listIsmah/recipeIsmah.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListIsmahService } from '../shopping-listIsmah/shopping-listIsmah.service';

@Injectable()
export class RecipeIsmahService {
    recipeSelected = new EventEmitter<Recipe>();

    // property:class recipe
    private recipes: Recipe[] = [
    new Recipe('Burger', 'A hamburger with a rim of lettuce sitting on a black plate against a black background',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/250px-NCI_Visuals_Food_Hamburger.jpg',
    [new Ingredient('meal', 1), new Ingredient('tomato', 2)]
    ),
    new Recipe('special fried rice',
    // tslint:disable-next-line:max-line-length
    'Fried rice is a dish of cooked rice that has been stir-fried in a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.',
    '../src/app/img/resep1.jpg',
    [new Ingredient('rice', 1), new Ingredient('meal', 3), new Ingredient('egg', 1)]
    )
    ];

    getRecipes() {
      return this.recipes.slice();
    }

    addIngredientsShoppingList(ingredients: Ingredient[]) {
      this.slsService.addIngredients(ingredients);
    }

constructor(private slsService: ShoppingListIsmahService) { }

}
