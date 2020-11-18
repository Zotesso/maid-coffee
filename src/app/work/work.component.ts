import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from '../shared/model/school-tasks.model';
import { Subscription } from 'rxjs';
import { ApiService } from '../shared/service/api.service';
import { AlertService } from '../shared/service/alert-modal.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, OnDestroy {

  workTasks: Task[];
  sub: Subscription;

  constructor(
    private service: ApiService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.sub = this.service.getWorkTasks()
     .subscribe(
       res => {
       this.workTasks = res;
      },
      error => {
        this.alertService.showAlertDanger('Erro ao carregar Tasks');
      }
     );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleDoTask(taskId: number): void{
    this.service.doTask(taskId).subscribe(
      (res) => {
        this.alertService.showAlertSuccess(res);
        this.service.getCharInfo();
      },
      (error) => {
        this.alertService.showAlertDanger('Erro ao realizar Task');
      }
    );
  }

}
