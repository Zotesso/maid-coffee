import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { Ranking } from 'src/app/shared/model/ranking.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  ranking: Ranking[];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getRanking().subscribe(
      res => this.ranking = res
    );
  }

}
