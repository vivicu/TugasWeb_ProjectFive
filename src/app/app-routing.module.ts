import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeIsmahComponent } from './recipeIsmah/recipeIsmah.component';
import { ShoppingListIsmahComponent } from './shopping-listIsmah/shopping-listIsmah.component';
import { RecipeStartIsmahComponent } from './recipeIsmah/recipe-startIsmah/recipe-startIsmah.component';
import { RecipeDetailIsmahComponent } from './recipeIsmah/recipe-detailIsmah/recipe-detailIsmah.component';
import { RecipeEditIsmahComponent } from './recipeIsmah/recipe-editIsmah/recipe-editIsmah.component';

const appRoutes: Routes = [
  { path : '', redirectTo: '/recipes', pathMatch: 'full'},
  { path : 'recipes', component: RecipeIsmahComponent, children: [
    { path: '', component: RecipeStartIsmahComponent},
    { path: 'new', component: RecipeEditIsmahComponent},
    { path: ':id', component: RecipeDetailIsmahComponent},
    { path: ':id/edit', component: RecipeEditIsmahComponent},
  ]},
  { path : 'shopping-listIsmah', component: ShoppingListIsmahComponent},
];

@NgModule({

   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]

})

export class AppRoutingModule { }
