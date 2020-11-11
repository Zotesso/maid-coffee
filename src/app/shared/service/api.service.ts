import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SchoolTask } from '../model/school-tasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl: string =  environment.maidUrl;

  constructor(private http: HttpClient) { }

  getSchoolTasks(): Observable<SchoolTask[]>{
    return this.http.get<SchoolTask[]>(`${this.configUrl}/tasks/school`);
  }
}
