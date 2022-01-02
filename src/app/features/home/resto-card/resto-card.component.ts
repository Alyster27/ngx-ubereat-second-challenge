import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resto-card',
  templateUrl: './resto-card.component.html',
  styleUrls: ['./resto-card.component.scss']
})
export class RestoCardComponent implements OnInit {

  @Input() item!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
