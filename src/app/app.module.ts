import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomeComponent } from './landing-page/welcome/welcome.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { ContactFormComponent } from './landing-page/contact-form/contact-form.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { AppRoutingModule } from './/app-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { MyRoutesComponent } from './routes-and-places/my-routes/my-routes.component';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ListEditComponent } from './to-do-list/list-edit/list-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RouteItemComponent } from './routes-and-places/my-routes/route-item/route-item.component';
import { MyPlacesComponent } from './routes-and-places/my-places/my-places.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    WelcomeComponent,
    AboutUsComponent,
    ContactFormComponent,
    CarouselComponent,
    ToDoListComponent,
    MyRoutesComponent,
    LoginComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ListEditComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RouteItemComponent,
    MyPlacesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    SimpleSmoothScrollModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
