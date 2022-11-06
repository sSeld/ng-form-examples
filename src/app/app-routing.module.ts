import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => DynamicFormModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
