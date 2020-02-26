import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerstatComponent } from './playerstat/playerstat.component';
import { TeamstatComponent } from './teamstat/teamstat.component';
import { BiddingstatComponent } from './biddingstat/biddingstat.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'playerstat',
    component:PlayerstatComponent
  },
  {
    path:'teamstat',
    component:TeamstatComponent
  },
  {
    path:'biddingstat',
    component:BiddingstatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
