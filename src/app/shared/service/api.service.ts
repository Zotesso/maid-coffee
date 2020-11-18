import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Char } from '../model/char.model';
import { Task } from '../model/school-tasks.model';

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
   /*  this.charInfo.subscribe(res => {
      this.char.next(res);
    }); */
    this.getCharInfo();
  }

  private char: BehaviorSubject<Char> = new BehaviorSubject<Char>({
    name: 'teste',
    id: 1,
    energy: 1,
    knowledge: 1,
    level: 1,
    popularity: 1
  });

  getSchoolTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.configUrl}/tasks/school`);
  }

  getWorkTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.configUrl}/tasks/work`);
  }

  getClubTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.configUrl}/tasks/club`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.configUrl}/user`, user).pipe(take(1));
  }

  authUser(user: any): Observable<any> {
    return this.http.post(`${this.configUrl}/login`, user).pipe(take(1));
  }

  getCharInfo(): void {
    if (localStorage.getItem('charName') && localStorage.getItem('accessToken') && this.header.headers.get('Authorization') !== 'Bearer null') {
      const promise = new Promise((resolve, reject) => {
        this.http.get<Char>(`${this.configUrl}/char/${localStorage.getItem('charName')}`, this.header)
          .toPromise()
          .then(res => this.char.next(res));
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
