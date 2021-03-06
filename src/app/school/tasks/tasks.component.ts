import { Component, OnInit, OnDestroy } from '@angular/core';

import { Task } from 'src/app/shared/model/school-tasks.model';
import { ApiService } from 'src/app/shared/service/api.service';
import { Subscription, empty } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/components/alert-modal/alert-modal.component';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/service/alert-modal.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  bsModalRef: BsModalRef;

  schoolTasks: Task[];
  sub: Subscription;

  constructor(
    private service: ApiService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.sub = this.service.getSchoolTasks()
     .subscribe(
       res => {
       this.schoolTasks = res;
      },
      error => {
        this.handleError();
      }
     );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleError(): void{
    this.alertService.showAlertDanger('Erro ao carregar tasks, tente novamente!');
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
