import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipeIsmah.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-recipe-listIsmah',
  templateUrl: './recipe-listIsmah.component.html',
  styleUrls: ['./recipe-listIsmah.component.css']
})
export class RecipeListIsmahComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // property:class recipe

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recipe('A Test Recipe two', 'This is simply a test',
  '../src/app/img/resep1.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
