import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import 'hammerjs';
import { Dish } from './shared/dish';
@NgModule({
  declarations: [AppComponent, MenuComponent,Dish],
  imports: [  MatListModule,MatToolbarModule,MatButtonModule,
    MatCardModule, BrowserAnimationsModule,
    , FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule { }

