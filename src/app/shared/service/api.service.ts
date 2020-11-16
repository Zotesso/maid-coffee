import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Char } from '../model/char.model';
import { SchoolTask } from '../model/school-tasks.model';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Ranking } from '../model/ranking.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl: string =  environment.maidUrl;

  constructor(private http: HttpClient) { }

  getSchoolTasks(): Observable<SchoolTask[]>{
    return this.http.get<SchoolTask[]>(`${this.configUrl}/tasks/school`);
  }

  createUser(user: any): Observable<any>{
    return this.http.post(`${this.configUrl}/user`, user).pipe(take(1));
  }

  authUser(user: any): Observable<any>{
    return this.http.post(`${this.configUrl}/login`, user).pipe(take(1));
  }

  getCharInfo(): Observable<Char>{
    return this.http.get<Char>(`${this.configUrl}/char/${localStorage.getItem('charName')}`);
  }

  doTask(taskId: number): Observable<any> {
    return this.http.put(`${this.configUrl}/char/doTask/${localStorage.getItem('charName')}/${taskId}`, {}).pipe(take(1));
  }

  getRanking(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this.configUrl}/ranking`).pipe(take(1));
  }
}
