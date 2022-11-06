import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() cityOn = false;
  @Input() stateOn = false;

  city: FormControl;
  state: FormControl;


  constructor(public ctrlCon: ControlContainer) {
  }

  ngOnInit() {
    this.city = new FormControl('', []);
    this.state = new FormControl('', []);
  }
  get group(): FormGroup {
    return this.ctrlCon.control as FormGroup;
  }
}
