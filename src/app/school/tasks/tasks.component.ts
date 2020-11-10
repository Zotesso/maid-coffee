import { Component, OnInit } from '@angular/core';
import { SchoolTask } from 'src/app/shared/school-task.model';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  schoolTasks: SchoolTask[];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolTasks = this.schoolService.getTasks();
  }

}
