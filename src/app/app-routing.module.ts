import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantryPageComponent } from 'src/app/components/pantry-page/pantry-page.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';

const routes: Routes = [
  {path: 'pantry-page', component: PantryPageComponent},
  {path: 'home-page', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
