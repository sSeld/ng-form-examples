import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  @Input() nameOn = false;
  @Input() ageOn = false;

  name: FormControl;
  age: FormControl;

  constructor(public ctrlCon: ControlContainer) {
  }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.age = new FormControl('', [Validators.max(130)]);
  }
  get group(): FormGroup {
    return this.ctrlCon.control as FormGroup;
  }
}
