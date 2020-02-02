import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  @Input() nameOn = false;
  @Input() ageOn = false;

  private name: FormControl;
  private age: FormControl;

  constructor(public ctrlCon: ControlContainer) {
  }

  ngOnInit() {
    this.name = new FormControl('', [Validators.required]);
    this.age = new FormControl('', [Validators.max(130)]);
  }

}
