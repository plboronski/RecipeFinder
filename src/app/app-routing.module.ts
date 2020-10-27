import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantryPageComponent } from 'src/app/components/pantry-page/pantry-page.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

const routes: Routes = [
  {path: 'pantry-page', component: PantryPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: '', component: HomePageComponent},
  {path: 'recipe-form', component: RecipeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
