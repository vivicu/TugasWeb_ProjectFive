import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipeIsmah.model';

@Component({
  selector: 'app-recipe-itemIsmah',
  templateUrl: './recipe-itemIsmah.component.html',
  styleUrls: ['./recipe-itemIsmah.component.css']
})
export class RecipeItemIsmahComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
