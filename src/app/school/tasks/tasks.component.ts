import { Component, OnInit } from '@angular/core';
import { SchoolTask } from 'src/app/shared/model/school-tasks.model';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  schoolTasks: SchoolTask[];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getSchoolTasks()
     .subscribe(res => {
       this.schoolTasks = res;
     });
  }

}
