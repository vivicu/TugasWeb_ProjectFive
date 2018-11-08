import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipeIsmah.model';
import { RecipeIsmahService } from '../recipeIsmah.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-recipe-listIsmah',
  templateUrl: './recipe-listIsmah.component.html',
  styleUrls: ['./recipe-listIsmah.component.css']
})
export class RecipeListIsmahComponent implements OnInit {

 //  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeIsmahService: RecipeIsmahService) { }

  ngOnInit() {
    this.recipes = this.recipeIsmahService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
