import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListIsmahService } from './shopping-listIsmah.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-shopping-listIsmah',
  templateUrl: './shopping-listIsmah.component.html',
  styleUrls: ['./shopping-listIsmah.component.css']
})
export class ShoppingListIsmahComponent implements OnInit {

  ingredients: Ingredient[];
  // = [
  //  new Ingredient('Apples', 23),
  //  new Ingredient('Tomato', 10),
  // ];

  constructor(private slsService: ShoppingListIsmahService) { }

  ngOnInit() {
    this.ingredients = this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient: Ingredient[]) => {
        this.ingredients = Ingredient;
      }
    );
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
