import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  count = 0;

  constructor() {}

  start($event: MouseEvent) {
    this.count++;
  }

  ngOnInit(): void {}
}
