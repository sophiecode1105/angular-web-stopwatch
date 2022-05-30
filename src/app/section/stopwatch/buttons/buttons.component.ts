import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  exectueButton(command: string) {
    this.clickEvent.emit(command);
  }

  ngOnInit(): void {}
}
