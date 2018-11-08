import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-listIsmah/recipeIsmah.model';
import { RecipeIsmahService } from './recipeIsmah.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-recipeIsmah',
  templateUrl: './recipeIsmah.component.html',
  styleUrls: ['./recipeIsmah.component.css'],
  providers: [RecipeIsmahService],
})
export class RecipeIsmahComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeIsmahService: RecipeIsmahService) { }

  ngOnInit() {
    this.recipeIsmahService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
