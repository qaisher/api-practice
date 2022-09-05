import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NgForm } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { AddUserErrorComponent } from './add-user-error/add-user-error.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [

{path: '', component: DataTableComponent},
{path: 'form', component: FormComponent},
{path: 'data-table', component: DataTableComponent},
{path: 'add-error', component: AddUserErrorComponent},
{path: 'updateForm/:userId', component: UpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
