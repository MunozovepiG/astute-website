import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FounderUpdatesComponent } from './pages/founder-updates/founder-updates.component';
import { FundRaisingComponent } from './pages/fund-raising/fund-raising.component';
import { HomeComponent } from './pages/home/home.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: 'seed-rounds', component: FundRaisingComponent},
  {path: 'founder-updates', component: FounderUpdatesComponent},
  {path: 'legals', component: LegalsComponent},

  {path: 'roadmap', component: RoadmapComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
