import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from 'src/app/shared/model/school-tasks.model';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { AlertService } from 'src/app/shared/service/alert-modal.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit, OnDestroy {

  clubTasks: Task[];
  sub: Subscription;

  constructor(
    private service: ApiService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.sub = this.service.getClubTasks()
     .subscribe(
       res => {
       this.clubTasks = res;
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
        this.alertService.showAlertSuccess('Task Completa');
        this.service.getCharInfo();
      },
      (error) => {
        this.alertService.showAlertDanger('Erro ao realizar Task');
      }
    );
  }
}
