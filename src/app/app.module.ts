import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { TeamstatComponent } from './teamstat/teamstat.component';
import { PlayerstatComponent } from './playerstat/playerstat.component';
import { BiddingstatComponent } from './biddingstat/biddingstat.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeamstatComponent,
    PlayerstatComponent,
    BiddingstatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
