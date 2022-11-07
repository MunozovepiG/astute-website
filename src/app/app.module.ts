import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/navigation/top-menu/top-menu.component';
import { SideBarComponent } from './components/navigation/side-bar/side-bar.component';
import { LogoComponent } from './typography/logo/logo.component';
import { Body1BoldComponent } from './typography/body1-bold/body1-bold.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideBarComponent,
    LogoComponent,
    Body1BoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
