import { Component, OnInit, OnDestroy } from '@angular/core';
import { Char } from 'src/app/shared/model/char.model';
import { ApiService } from 'src/app/shared/service/api.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  profile: Char;
  error$ = new Subject<boolean>();

  sub: Subscription;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getCharInfo();

    this.sub = this.service.getAsObservable().subscribe(res => {
      this.profile = res;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
