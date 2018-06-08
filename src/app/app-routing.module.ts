import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent }      from './landing-page/landing-page.component';
import { MyPlacesComponent }      from './routes-and-places/my-places/my-places.component';
import { MyRoutesComponent }      from './routes-and-places/my-routes/my-routes.component';
import { RouteMapComponent }      from './routes-and-places/route-map/route-map.component';
import { ToDoListComponent }      from './to-do-list/to-do-list.component';
import { RecipesComponent }      from './recipes/recipes.component';
import { LoginComponent }      from './login/login.component';
import { RecipeStartComponent }      from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent }      from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent }      from './recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'myPlaces', component: MyPlacesComponent, children: [
    { path: ':id', component: RouteMapComponent },
  ] },
  { path: 'myRoutes', component: MyRoutesComponent, children: [
    { path: ':id', component: RouteMapComponent },
  ] } ,
  { path: 'toDoList', component: ToDoListComponent },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}