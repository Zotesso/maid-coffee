import { Component, OnInit } from '@angular/core';

import { faGift } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  faGift = faGift;

  giftNumber: number;

  constructor() { }

  ngOnInit(): void {
    this.giftNumber = Math.floor(Math.random() * (100 - 0) + 0);
  }

}
