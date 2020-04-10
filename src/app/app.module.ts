//import{UpperCasePipe} from '@angular/common'
//import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent, appmodule } from './app.component';
import { MenuComponent } from './menu/menu.component';
import 'hammerjs';
import { Dish } from './shared/dish';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
@NgModule({
  declarations: [AppComponent, MenuComponent, DishdetailComponent],
  imports: [  MatListModule,
    MatToolbarModule,
    MatCardModule,
     BrowserAnimationsModule,
    , FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule { }

