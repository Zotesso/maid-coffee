import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchoolTask } from 'src/app/shared/model/school-tasks.model';
import { ApiService } from 'src/app/shared/service/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  schoolTasks: SchoolTask[];
  sub: Subscription;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.sub = this.service.getSchoolTasks()
     .subscribe(res => {
       this.schoolTasks = res;
     });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
