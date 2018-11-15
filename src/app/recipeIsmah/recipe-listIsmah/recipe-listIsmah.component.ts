import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipeIsmah.model';
import { RecipeIsmahService } from '../recipeIsmah.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-recipe-listIsmah',
  templateUrl: './recipe-listIsmah.component.html',
  styleUrls: ['./recipe-listIsmah.component.css']
})
export class RecipeListIsmahComponent implements OnInit {
 //  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeIsmahService: RecipeIsmahService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeIsmahService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
