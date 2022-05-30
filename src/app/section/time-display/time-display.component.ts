import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData: string | undefined;

  timeText: string | undefined;

  constructor() {
    // setInterval(() => {
    //   this.test++;
    // }, 1000);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    for (let propName in changes) {
    }
  }

  ngOnInit(): void {}
}
