import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent implements OnInit {
  test = 1;

  constructor() {
    setInterval(() => {
      this.test++;
    }, 1000);
  }

  ngOnInit(): void {}
}
