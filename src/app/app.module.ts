import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderIsmahComponent } from './headerIsmah/headerIsmah.component';
import { RecipeIsmahComponent } from './recipeIsmah/recipeIsmah.component';
import { ShoppingListIsmahComponent } from './shopping-listIsmah/shopping-listIsmah.component';

import { RecipeListIsmahComponent } from './recipeIsmah/recipe-listIsmah/recipe-listIsmah.component';
import { RecipeDetailIsmahComponent } from './recipeIsmah/recipe-detailIsmah/recipe-detailIsmah.component';

import { RecipeItemIsmahComponent } from './recipeIsmah/recipe-listIsmah/recipe-itemIsmah/recipe-itemIsmah.component';

import { ShoppingEditIsmahComponent } from './shopping-listIsmah/shopping-editIsmah/shopping-editIsmah.component';

import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
   declarations: [
      AppComponent,
      HeaderIsmahComponent,
      RecipeIsmahComponent,
      ShoppingListIsmahComponent,
      RecipeListIsmahComponent,
      RecipeDetailIsmahComponent,
      RecipeItemIsmahComponent,
      ShoppingEditIsmahComponent,
      DropdownDirective,
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
