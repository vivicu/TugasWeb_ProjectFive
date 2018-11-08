import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-listIsmah/recipeIsmah.model';
import { RecipeIsmahService } from '../recipeIsmah.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-recipe-detailIsmah',
  templateUrl: './recipe-detailIsmah.component.html',
  styleUrls: ['./recipe-detailIsmah.component.css']
})
export class RecipeDetailIsmahComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeIsmahService: RecipeIsmahService) { }

  ngOnInit() {
  }

  onAddShoppingList() {
    this.recipeIsmahService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
