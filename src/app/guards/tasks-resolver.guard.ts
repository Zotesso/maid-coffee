import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolTask } from '../shared/model/school-tasks.model';
import { ApiService } from '../shared/service/api.service';

@Injectable({ providedIn: 'root' })
export class TasksResolver implements Resolve<SchoolTask> {
  constructor(private service: ApiService) {}

  schoolTasks: SchoolTask[];

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    this.service.getSchoolTasks()
    .subscribe(res => {
      this.schoolTasks = res;
    });

  }
}
