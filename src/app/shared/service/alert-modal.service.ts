import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: string): void {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }
  showAlertDanger(message: string): void {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string): void {
    this.showAlert(message, AlertTypes.SUCCESS);
  }
}
