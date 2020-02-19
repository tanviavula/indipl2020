import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = "https://indipl2020.herokuapp.com/ipl2020/team/";
  constructor(private http:HttpClient) {
  }

  teamLabels():Observable<any>{
    let url = `${this.baseUrl}labels`;
    return this.http.get(url);
  }
}
