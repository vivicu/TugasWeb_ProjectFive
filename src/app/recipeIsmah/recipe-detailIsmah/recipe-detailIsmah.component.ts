import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-listIsmah/recipeIsmah.model';
import { RecipeIsmahService } from '../recipeIsmah.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-recipe-detailIsmah',
  templateUrl: './recipe-detailIsmah.component.html',
  styleUrls: ['./recipe-detailIsmah.component.css']
})
export class RecipeDetailIsmahComponent implements OnInit {

  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeIsmahService: RecipeIsmahService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = + params['id'];
        this.recipe = this.recipeIsmahService.getRecipe(this.id);
      }
    );
  }

  onAddShoppingList() {
    this.recipeIsmahService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
