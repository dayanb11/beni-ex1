import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent, MenuComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatToolbarModule, MatGridListModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule, AppRoutingModule,
    AppComponent, MenuComponent,
    FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule { }
export class menucomponent{ }
