import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-listIsmah',
  templateUrl: './shopping-listIsmah.component.html',
  styleUrls: ['./shopping-listIsmah.component.css']
})
export class ShoppingListIsmahComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 23),
    new Ingredient('Tomato', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
