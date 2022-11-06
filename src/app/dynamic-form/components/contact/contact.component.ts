import {
  AfterContentChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  NgZone, OnChanges,
  OnInit, SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  AsyncValidator, AsyncValidatorFn,
  ControlContainer, ControlValueAccessor,
  FormControl, FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective, NgControl,
  NgForm,
  Validator,
  ValidatorFn, Validators
} from '@angular/forms';
import {Platform} from '@angular/cdk/platform';
import {ErrorStateMatcher} from '@angular/material/core';
import {AutofillMonitor} from '@angular/cdk/text-field';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() phoneOn = false;
  @Input() emailOn = false;

  phone: FormControl;
  email: FormControl;

  constructor(public ctrlCon: ControlContainer) {
  }

  ngOnInit() {
    this.phone = new FormControl('', [Validators.required, Validators.pattern('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')]);
    this.email = new FormControl('', [Validators.required, Validators.pattern('\\S+@\\S+\\.\\S+')]);
  }

  get group(): FormGroup {
    return this.ctrlCon.control as FormGroup;
  }
}
