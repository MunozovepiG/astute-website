import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/navigation/top-menu/top-menu.component';
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
import { InternalPageLinkComponent } from './components/internal-page-link/internal-page-link.component';
import { BtMComponent } from './typography/bt-m/bt-m.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { FundRaisingComponent } from './pages/fund-raising/fund-raising.component';
import { CareersComponent } from './pages/careers/careers.component';
import { FounderUpdatesComponent } from './pages/founder-updates/founder-updates.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { KeepComponent } from './pages/keep/keep.component';
import { GrowComponent } from './pages/grow/grow.component';
import { Body3RegularComponent } from './typography/body3-regular/body3-regular.component';
import { BlogpostsSectionComponent } from './components/blogposts-section/blogposts-section.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LogoComponent,
    Body1BoldComponent,
    HomeComponent,
    SidebarComponent,
    AboutLinksSectionComponent,
    H1Component,
    Body1RegularComponent,
    Body2RegularComponent,
    Body2BoldComponent,
    Subheading1Component,
    InternalPageLinkComponent,
    BtMComponent,
    RoadmapComponent,
    FundRaisingComponent,
    CareersComponent,
    FounderUpdatesComponent,
    LegalsComponent,
    KeepComponent,
    GrowComponent,
    Body3RegularComponent,
    BlogpostsSectionComponent,
    BlogPostComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
