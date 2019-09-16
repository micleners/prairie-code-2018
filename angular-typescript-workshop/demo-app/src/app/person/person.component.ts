import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() test: string;
  name = 'George';
  lastAction: string;
  states = ['Iowa', 'Nebraska', 'South Dakota', 'Illinois'];

  constructor() {}

  ngOnInit() {}

  consoleLog(input) {
    console.log(input);
  }

  clickMe(event) {
    console.log('Clicked');
    console.log(event);
  }

  buttonClicked() {
    this.lastAction = 'Button Clicked';
  }

  selectedState = '';

  addState(state: string) {
    if (!state) {
      return;
    }

    if (this.states.indexOf(state) < 0) {
      this.states.push(state);
    }
  }

  deleteState(state: string) {
    if (this.states.indexOf(state) < 0) {
      return;
    }

    if (this.states.indexOf(state) > 0) {
      this.states.splice(this.states.indexOf(state), 1);
    }
  }
}
