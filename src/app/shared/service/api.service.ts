import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Char } from '../model/char.model';
import { SchoolTask } from '../model/school-tasks.model';

import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Ranking } from '../model/ranking.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl: string = environment.maidUrl;

  private header = {
    headers: new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
  };

  constructor(private http: HttpClient) {
    this.charInfo.subscribe(res => {
      this.char.next(res);
    });
  }

  private char: BehaviorSubject<Char> = new BehaviorSubject<Char>({
    name: 'teste',
    id: 1,
    energy: 1,
    knowledge: 1,
    level: 1,
    popularity: 1
  });

  private charInfo = this.http.get<Char>(`${this.configUrl}/char/${localStorage.getItem('charName')}`, this.header);

  getSchoolTasks(): Observable<SchoolTask[]> {
    return this.http.get<SchoolTask[]>(`${this.configUrl}/tasks/school`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.configUrl}/user`, user).pipe(take(1));
  }

  authUser(user: any): Observable<any> {
    return this.http.post(`${this.configUrl}/login`, user).pipe(take(1));
  }

  getCharInfo(): void {
    if (localStorage.getItem('charName')) {
      this.charInfo.subscribe((res) => {
        this.char.next(res);
      });
    }
  }

  doTask(taskId: number): Observable<any> {
    return this.http.put(`${this.configUrl}/char/doTask/${localStorage.getItem('charName')}/${taskId}`, {}, this.header).pipe(take(1));
  }

  getRanking(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this.configUrl}/ranking`).pipe(take(1));
  }

  getAsObservable(): Observable<Char> {
    return this.char.asObservable();
  }
}
