import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-group-shell',
  templateUrl: './dynamic-form-group-shell.component.html',
  styleUrls: ['./dynamic-form-group-shell.component.css']
})
export class DynamicFormGroupShellComponent implements OnInit {
  public toggleName = false;
  public toggleAge = false;
  public toggleCity = false;
  public toggleState = false;
  public togglePhone = false;
  public toggleEmail = false;


  public formContainer: FormGroup = this.fb.group({
    identity: this.fb.group({}),
    location: this.fb.group({}),
    contact: this.fb.group({})
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  doSomething() {
    console.log(this.formContainer.value);
  }
}
