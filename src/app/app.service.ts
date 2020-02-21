import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { TeamLabelDTO } from './models/teamlabels.model';
import { Player } from './models/player.model';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) {
  }

  getTeamLabels():Observable<TeamLabelDTO>{
    let url = `${this.baseUrl}labels`;
    return this.http.get<TeamLabelDTO>(url);
  }
  getTeamInformation(teamLabel: any):Observable<Player[]> {
    let url = `${this.baseUrl}${teamLabel}`;
    return this.http.get<Player[]>(url);
  }
}
