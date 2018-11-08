import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Testability } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListIsmahService } from '../shopping-listIsmah.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-shopping-editIsmah',
  templateUrl: './shopping-editIsmah.component.html',
  styleUrls: ['./shopping-editIsmah.component.css']
})
export class ShoppingEditIsmahComponent implements OnInit {

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slsService: ShoppingListIsmahService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slsService.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
    // console.log(this.ingredientAdded);
    // Testability
  }

}
