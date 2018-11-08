import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipeIsmah.model';
import { RecipeIsmahService } from '../../recipeIsmah.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-recipe-itemIsmah',
  templateUrl: './recipe-itemIsmah.component.html',
  styleUrls: ['./recipe-itemIsmah.component.css']
})
export class RecipeItemIsmahComponent implements OnInit {

  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeIsmahService: RecipeIsmahService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.recipeSelected.emit();
    this.recipeIsmahService.recipeSelected.emit(this.recipe);
  }

}
