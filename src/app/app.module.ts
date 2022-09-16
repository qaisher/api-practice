import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiServiceService } from './api-service.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonInterceptor } from './common.interceptor';
import { AddUserErrorComponent } from './add-user-error/add-user-error.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ToastrModule } from 'ngx-toastr';
import {} from '@angular/material';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    FormComponent,
    AddUserErrorComponent,
    UpdateFormComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  ],
  providers: [ApiServiceService, {provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true}, DataTableComponent, UpdateFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
