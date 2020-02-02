import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => DynamicFormModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
