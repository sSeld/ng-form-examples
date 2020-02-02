import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {ControlContainer, FormControl, FormGroup} from '@angular/forms';

interface ControlOptions {
  name: string;
  control: FormControl;
  container: ControlContainer;
}

@Directive({
  selector: '[controlPredicate]'
})
export class ControlPredicateDirective implements OnChanges {
  private _container;
  private _control;
  private _showControl = false;
  private _name: string;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

  @Input() set controlPredicateOptions(options: ControlOptions) {
    this._name = options.name;
    this._control = options.control;
    this._container = options.container;
  }

  @Input() set controlPredicate(cond: boolean) {
    this._showControl = cond;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const form: FormGroup = (this._container.control as FormGroup);

    if (this._showControl) {
      setTimeout(() => {
        form.addControl(this._name, this._control);
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
    } else {
      form.removeControl(this._name);
      this.viewContainer.clear();
    }
  }

}
