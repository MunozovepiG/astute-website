import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakePageComponent } from './components/make-page/make-page.component';
import { YourMoneyComponent } from './page/your-money/your-money.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { CareersComponent } from './pages/careers/careers.component';
import { FounderUpdatesComponent } from './pages/founder-updates/founder-updates.component';
import { FundRaisingComponent } from './pages/fund-raising/fund-raising.component';
import { GrowComponent } from './pages/grow/grow.component';
import { HomeComponent } from './pages/home/home.component';
import { JobPostComponent } from './pages/job-post/job-post.component';
import { KeepComponent } from './pages/keep/keep.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: 'seed-rounds', component: FundRaisingComponent},
  {path: 'founder-updates', component: FounderUpdatesComponent},
  {path: 'legals', component: LegalsComponent},
  {path: 'roadmap', component: RoadmapComponent},
  {path: 'careers', component: CareersComponent},
  {path:'blog/:id/:postTitle', component: BlogPostComponent },
  {path:'careers/:id/:postTitle', component: JobPostComponent },
  {path: 'make', component:MakePageComponent},
  {path: 'grow', component:GrowComponent},
  {path: 'keep', component: KeepComponent},
  {path: 'your-money', component: YourMoneyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
