import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderIsmahComponent } from './headerIsmah/headerIsmah.component';
import { RecipeIsmahComponent } from './recipeIsmah/recipeIsmah.component';
import { ShoppingListIsmahComponent } from './shopping-listIsmah/shopping-listIsmah.component';

import { RecipeListIsmahComponent } from './recipeIsmah/recipe-listIsmah/recipe-listIsmah.component';
import { RecipeDetailIsmahComponent } from './recipeIsmah/recipe-detailIsmah/recipe-detailIsmah.component';

import { RecipeItemIsmahComponent } from './recipeIsmah/recipe-listIsmah/recipe-itemIsmah/recipe-itemIsmah.component';

import { ShoppingEditIsmahComponent } from './shopping-listIsmah/shopping-editIsmah/shopping-editIsmah.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListIsmahService } from './shopping-listIsmah/shopping-listIsmah.service';

import { RecipeStartIsmahComponent } from './recipeIsmah/recipe-startIsmah/recipe-startIsmah.component';
import { RecipeEditIsmahComponent } from './recipeIsmah/recipe-editIsmah/recipe-editIsmah.component';

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
      RecipeStartIsmahComponent,
      RecipeEditIsmahComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
   ],
   providers: [ShoppingListIsmahService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
