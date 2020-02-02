import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DynamicFormGroupShellComponent} from './containers/dynamic-form-group-shell/dynamic-form-group-shell.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactComponent} from './components/contact/contact.component';
import {LocationComponent} from './components/location/location.component';
import {IdentityComponent} from './components/identity/identity.component';


@NgModule({
  declarations: [DynamicFormGroupShellComponent,
    ContactComponent,
    LocationComponent,
    IdentityComponent
  ],
  exports: [
    DynamicFormGroupShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormModule {
}
