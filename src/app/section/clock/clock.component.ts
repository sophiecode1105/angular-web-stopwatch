import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  timeString: any;

  constructor(private router: Router) {
    // setInterval(() => {}, 1000);
    interval(1000)
      .pipe(
        map(() => {
          return moment().format('YYYY-MM-DD HH:mm:ss');
        })
      )
      .subscribe((data) => {
        this.timeString = data;
      });
  }
  goStopwatch() {
    this.router.navigateByUrl('/stopwatch');
  }
  ngOnInit(): void {}
}
