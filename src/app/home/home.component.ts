import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { TeamLabelDTO } from '../models/teamlabels.model';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teamLable:TeamLabelDTO;
  players:Player[];
  constructor(private appService:AppService) { }

  ngOnInit() {

      this.appService.getTeamLabels().subscribe(res=>{
            this.teamLable = res;
      })

  }
  getTeamInformation(event){
    let teamLabel = event.target.value;
    if(teamLabel.length != 0){
    this.appService.getTeamInformation(teamLabel).subscribe(res=>{
        this.players = res;
    })
  }else{
    this.players = [];
  }
  }

}
