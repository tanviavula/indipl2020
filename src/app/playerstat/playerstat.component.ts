import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { TeamLabelDTO } from '../models/teamlabels.model';
import { Player } from '../models/player.model';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-playerstat',
  templateUrl: './playerstat.component.html',
  styleUrls: ['./playerstat.component.css']
})
export class PlayerstatComponent implements OnInit {

  teamLabelDto: TeamLabelDTO;
  teamLabel: string;
  players: Player[] = [];
  public pieChart: GoogleChartInterface;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getTeamLabels().subscribe(res => {
      this.teamLabelDto = res;
    })
  }

  getPlayerData() {
    if (this.teamLabel && this.teamLabel.length > 0) {
      this.appService.getTeamInformation(this.teamLabel).subscribe(res => {
        this.players = res;
        // Server call we get data;
       let data= [
          ['Role', 'Count of Players'],
          ['Batsman', 11],
          ['Bowler', 8],
          ['Allrounder', 2]
          
        ]
        this.drawChart(data);
      })
    }
  }

  drawChart(data) {
    this.pieChart = {
      chartType: 'PieChart',
      dataTable:data,
      //firstRowIsData: true,
      options: { 'title': 'Role by players count' },
    };
  }

}

