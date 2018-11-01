import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-listIsmah/recipeIsmah.model';

@Component({
  selector: 'app-recipeIsmah',
  templateUrl: './recipeIsmah.component.html',
  styleUrls: ['./recipeIsmah.component.css']
})
export class RecipeIsmahComponent implements OnInit {

  selectedRecipe:Recipe;

  constructor() { }

  ngOnInit() {
  }

}
