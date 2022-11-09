import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/navigation/top-menu/top-menu.component';
import { SideBarComponent } from './components/navigation/side-bar/side-bar.component';
import { LogoComponent } from './typography/logo/logo.component';
import { Body1BoldComponent } from './typography/body1-bold/body1-bold.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutLinksSectionComponent } from './components/about-links-section/about-links-section.component';
import { H1Component } from './typography/h1/h1.component';
import { Body1RegularComponent } from './typography/body1-regular/body1-regular.component';
import { Body2RegularComponent } from './typography/body2-regular/body2-regular.component';
import { Body2BoldComponent } from './typography/body2-bold/body2-bold.component';
import { Subheading1Component } from './typography/subheading1/subheading1.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideBarComponent,
    LogoComponent,
    Body1BoldComponent,
    HomeComponent,
    SidebarComponent,
    AboutLinksSectionComponent,
    H1Component,
    Body1RegularComponent,
    Body2RegularComponent,
    Body2BoldComponent,
    Subheading1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
