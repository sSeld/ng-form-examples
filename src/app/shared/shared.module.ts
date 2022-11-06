import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ControlPredicateDirective} from './control-predicate.directive';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [ControlPredicateDirective],
  imports: [
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    ControlPredicateDirective
  ]

})
export class SharedModule {
}
