import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-listIsmah/recipeIsmah.model';

@Component({
  selector: 'app-recipe-detailIsmah',
  templateUrl: './recipe-detailIsmah.component.html',
  styleUrls: ['./recipe-detailIsmah.component.css']
})
export class RecipeDetailIsmahComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
