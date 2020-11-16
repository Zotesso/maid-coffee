import { Component, OnInit } from '@angular/core';
import { Char } from 'src/app/shared/model/char.model';
import { ApiService } from 'src/app/shared/service/api.service';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  profile$: Observable<Char>;
  error$ = new Subject<boolean>();

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.profile$ = this.service.getCharInfo()
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return empty();
        })
      );
  }

}
