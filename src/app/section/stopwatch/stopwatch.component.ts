import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent implements OnInit {
  present = 'welcome';

  constructor() {}

  startTime($event: any) {
    this.present = $event;
  }

  ngOnInit(): void {}
}
