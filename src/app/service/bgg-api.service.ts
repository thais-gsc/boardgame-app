import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH1, API_PATH2 } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BggApiService {

  constructor(private http: HttpClient) { }

  public getGameById(id: string) : any {
    return this.http.get(`${API_PATH1}/${id}`, {responseType: 'text'})
  }

  public getGameByName(name: string) : any {
    return this.http.get(`${API_PATH2}${name}`, {responseType: 'text'})
  }
}
